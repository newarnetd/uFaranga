package com.ufaranga.transaction.service;

import com.ufaranga.transaction.dto.TransactionRequest;
import com.ufaranga.transaction.dto.TransactionResponse;
import com.ufaranga.transaction.model.Transaction;
import com.ufaranga.transaction.model.TransactionStatus;
import com.ufaranga.transaction.model.TransactionType;
import com.ufaranga.transaction.repository.TransactionRepository;
import com.ufaranga.transaction.exception.InsufficientBalanceException;
import com.ufaranga.transaction.exception.TransactionNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
@Transactional
public class TransactionService {

    private static final Logger logger = LoggerFactory.getLogger(TransactionService.class);

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private WalletService walletService;

    @Autowired
    private FraudDetectionService fraudDetectionService;

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    /**
     * Initier une nouvelle transaction
     */
    public TransactionResponse initiateTransaction(TransactionRequest request) {
        logger.info("Initiating transaction: {} -> {} Amount: {}", 
                   request.getFromWalletId(), request.getToWalletId(), request.getAmount());

        // Validation des données
        validateTransactionRequest(request);

        // Créer la transaction
        Transaction transaction = new Transaction(
            request.getFromWalletId(),
            request.getToWalletId(),
            request.getAmount(),
            request.getCurrency(),
            request.getType()
        );
        transaction.setDescription(request.getDescription());
        transaction.setMetadata(request.getMetadata());

        // Sauvegarder la transaction en statut PENDING
        transaction = transactionRepository.save(transaction);

        // Publier l'événement d'initiation
        publishTransactionEvent("transaction.initiated", transaction);

        // Traitement asynchrone de la transaction
        processTransactionAsync(transaction.getId());

        return mapToTransactionResponse(transaction);
    }

    /**
     * Traiter une transaction de manière asynchrone
     */
    @Transactional
    public void processTransactionAsync(UUID transactionId) {
        try {
            Optional<Transaction> optionalTransaction = transactionRepository.findById(transactionId);
            if (optionalTransaction.isEmpty()) {
                logger.error("Transaction not found: {}", transactionId);
                return;
            }

            Transaction transaction = optionalTransaction.get();
            
            if (transaction.getStatus() != TransactionStatus.PENDING) {
                logger.warn("Transaction {} is not in PENDING status: {}", transactionId, transaction.getStatus());
                return;
            }

            // Marquer comme en cours de traitement
            transaction.setStatus(TransactionStatus.PROCESSING);
            transactionRepository.save(transaction);

            // Vérification anti-fraude
            boolean isFraudulent = fraudDetectionService.checkTransaction(transaction);
            if (isFraudulent) {
                failTransaction(transaction, "Transaction flagged as fraudulent");
                return;
            }

            // Traitement selon le type de transaction
            switch (transaction.getType()) {
                case P2P_TRANSFER:
                    processP2PTransfer(transaction);
                    break;
                case DEPOSIT:
                    processDeposit(transaction);
                    break;
                case WITHDRAWAL:
                    processWithdrawal(transaction);
                    break;
                case PAYMENT:
                    processPayment(transaction);
                    break;
                default:
                    failTransaction(transaction, "Unsupported transaction type: " + transaction.getType());
            }

        } catch (Exception e) {
            logger.error("Error processing transaction {}: {}", transactionId, e.getMessage(), e);
            
            Optional<Transaction> optionalTransaction = transactionRepository.findById(transactionId);
            if (optionalTransaction.isPresent()) {
                failTransaction(optionalTransaction.get(), "Processing error: " + e.getMessage());
            }
        }
    }

    /**
     * Traiter un transfert P2P
     */
    private void processP2PTransfer(Transaction transaction) {
        try {
            // Vérifier et débiter le wallet source
            boolean debitSuccess = walletService.debitWallet(
                transaction.getFromWalletId(),
                transaction.getAmount(),
                transaction.getReference()
            );

            if (!debitSuccess) {
                failTransaction(transaction, "Failed to debit source wallet");
                return;
            }

            // Créditer le wallet destination
            boolean creditSuccess = walletService.creditWallet(
                transaction.getToWalletId(),
                transaction.getAmount(),
                transaction.getReference()
            );

            if (!creditSuccess) {
                // Annuler le débit en cas d'échec du crédit
                walletService.creditWallet(
                    transaction.getFromWalletId(),
                    transaction.getAmount(),
                    "REVERSAL-" + transaction.getReference()
                );
                failTransaction(transaction, "Failed to credit destination wallet");
                return;
            }

            // Marquer la transaction comme complétée
            completeTransaction(transaction);

        } catch (InsufficientBalanceException e) {
            failTransaction(transaction, "Insufficient balance");
        } catch (Exception e) {
            logger.error("Error in P2P transfer: {}", e.getMessage(), e);
            failTransaction(transaction, "P2P transfer failed: " + e.getMessage());
        }
    }

    /**
     * Traiter un dépôt
     */
    private void processDeposit(Transaction transaction) {
        try {
            boolean success = walletService.creditWallet(
                transaction.getToWalletId(),
                transaction.getAmount(),
                transaction.getReference()
            );

            if (success) {
                completeTransaction(transaction);
            } else {
                failTransaction(transaction, "Failed to process deposit");
            }

        } catch (Exception e) {
            logger.error("Error in deposit: {}", e.getMessage(), e);
            failTransaction(transaction, "Deposit failed: " + e.getMessage());
        }
    }

    /**
     * Traiter un retrait
     */
    private void processWithdrawal(Transaction transaction) {
        try {
            boolean success = walletService.debitWallet(
                transaction.getFromWalletId(),
                transaction.getAmount(),
                transaction.getReference()
            );

            if (success) {
                completeTransaction(transaction);
            } else {
                failTransaction(transaction, "Failed to process withdrawal");
            }

        } catch (InsufficientBalanceException e) {
            failTransaction(transaction, "Insufficient balance for withdrawal");
        } catch (Exception e) {
            logger.error("Error in withdrawal: {}", e.getMessage(), e);
            failTransaction(transaction, "Withdrawal failed: " + e.getMessage());
        }
    }

    /**
     * Traiter un paiement
     */
    private void processPayment(Transaction transaction) {
        // Logique similaire au P2P mais avec des validations spécifiques aux paiements
        processP2PTransfer(transaction);
    }

    /**
     * Marquer une transaction comme complétée
     */
    private void completeTransaction(Transaction transaction) {
        transaction.markAsCompleted();
        transactionRepository.save(transaction);
        
        logger.info("Transaction completed: {}", transaction.getId());
        publishTransactionEvent("transaction.completed", transaction);
    }

    /**
     * Marquer une transaction comme échouée
     */
    private void failTransaction(Transaction transaction, String reason) {
        transaction.markAsFailed(reason);
        transactionRepository.save(transaction);
        
        logger.warn("Transaction failed: {} - Reason: {}", transaction.getId(), reason);
        publishTransactionEvent("transaction.failed", transaction);
    }

    /**
     * Récupérer une transaction par ID
     */
    @Transactional(readOnly = true)
    public TransactionResponse getTransaction(UUID transactionId) {
        Transaction transaction = transactionRepository.findById(transactionId)
            .orElseThrow(() -> new TransactionNotFoundException("Transaction not found: " + transactionId));
        
        return mapToTransactionResponse(transaction);
    }

    /**
     * Récupérer les transactions d'un wallet
     */
    @Transactional(readOnly = true)
    public Page<TransactionResponse> getWalletTransactions(UUID walletId, Pageable pageable) {
        Page<Transaction> transactions = transactionRepository.findByFromWalletIdOrToWalletIdOrderByCreatedAtDesc(
            walletId, walletId, pageable);
        
        return transactions.map(this::mapToTransactionResponse);
    }

    /**
     * Récupérer les transactions par statut
     */
    @Transactional(readOnly = true)
    public Page<TransactionResponse> getTransactionsByStatus(TransactionStatus status, Pageable pageable) {
        Page<Transaction> transactions = transactionRepository.findByStatusOrderByCreatedAtDesc(status, pageable);
        return transactions.map(this::mapToTransactionResponse);
    }

    /**
     * Valider une demande de transaction
     */
    private void validateTransactionRequest(TransactionRequest request) {
        if (request.getAmount() == null || request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }

        if (request.getFromWalletId() == null && request.getType() != TransactionType.DEPOSIT) {
            throw new IllegalArgumentException("From wallet ID is required for this transaction type");
        }

        if (request.getToWalletId() == null && request.getType() != TransactionType.WITHDRAWAL) {
            throw new IllegalArgumentException("To wallet ID is required for this transaction type");
        }

        if (request.getFromWalletId() != null && request.getFromWalletId().equals(request.getToWalletId())) {
            throw new IllegalArgumentException("Source and destination wallets cannot be the same");
        }

        if (request.getCurrency() == null || request.getCurrency().trim().isEmpty()) {
            throw new IllegalArgumentException("Currency is required");
        }
    }

    /**
     * Publier un événement Kafka
     */
    private void publishTransactionEvent(String eventType, Transaction transaction) {
        try {
            TransactionEvent event = new TransactionEvent(eventType, transaction);
            kafkaTemplate.send("transaction-events", transaction.getId().toString(), event);
            logger.debug("Published event: {} for transaction: {}", eventType, transaction.getId());
        } catch (Exception e) {
            logger.error("Failed to publish event: {} for transaction: {}", eventType, transaction.getId(), e);
        }
    }

    /**
     * Mapper Transaction vers TransactionResponse
     */
    private TransactionResponse mapToTransactionResponse(Transaction transaction) {
        return TransactionResponse.builder()
            .id(transaction.getId())
            .fromWalletId(transaction.getFromWalletId())
            .toWalletId(transaction.getToWalletId())
            .amount(transaction.getAmount())
            .currency(transaction.getCurrency())
            .type(transaction.getType())
            .status(transaction.getStatus())
            .description(transaction.getDescription())
            .reference(transaction.getReference())
            .externalReference(transaction.getExternalReference())
            .fees(transaction.getFees())
            .exchangeRate(transaction.getExchangeRate())
            .metadata(transaction.getMetadata())
            .createdAt(transaction.getCreatedAt())
            .updatedAt(transaction.getUpdatedAt())
            .processedAt(transaction.getProcessedAt())
            .failedAt(transaction.getFailedAt())
            .failureReason(transaction.getFailureReason())
            .build();
    }

    /**
     * Classe interne pour les événements de transaction
     */
    public static class TransactionEvent {
        private String eventType;
        private UUID transactionId;
        private String reference;
        private BigDecimal amount;
        private String currency;
        private TransactionStatus status;
        private LocalDateTime timestamp;

        public TransactionEvent(String eventType, Transaction transaction) {
            this.eventType = eventType;
            this.transactionId = transaction.getId();
            this.reference = transaction.getReference();
            this.amount = transaction.getAmount();
            this.currency = transaction.getCurrency();
            this.status = transaction.getStatus();
            this.timestamp = LocalDateTime.now();
        }

        // Getters et setters
        public String getEventType() { return eventType; }
        public void setEventType(String eventType) { this.eventType = eventType; }
        
        public UUID getTransactionId() { return transactionId; }
        public void setTransactionId(UUID transactionId) { this.transactionId = transactionId; }
        
        public String getReference() { return reference; }
        public void setReference(String reference) { this.reference = reference; }
        
        public BigDecimal getAmount() { return amount; }
        public void setAmount(BigDecimal amount) { this.amount = amount; }
        
        public String getCurrency() { return currency; }
        public void setCurrency(String currency) { this.currency = currency; }
        
        public TransactionStatus getStatus() { return status; }
        public void setStatus(TransactionStatus status) { this.status = status; }
        
        public LocalDateTime getTimestamp() { return timestamp; }
        public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
    }
}