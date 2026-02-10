package com.ufaranga.transaction.dto;

import com.ufaranga.transaction.model.TransactionStatus;
import com.ufaranga.transaction.model.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public class TransactionResponse {

    private UUID id;
    private UUID fromWalletId;
    private UUID toWalletId;
    private BigDecimal amount;
    private String currency;
    private TransactionType type;
    private TransactionStatus status;
    private String description;
    private String reference;
    private String externalReference;
    private BigDecimal fees;
    private BigDecimal exchangeRate;
    private String metadata;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime processedAt;
    private LocalDateTime failedAt;
    private String failureReason;

    // Constructeur par défaut
    public TransactionResponse() {}

    // Builder pattern
    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private TransactionResponse response = new TransactionResponse();

        public Builder id(UUID id) {
            response.id = id;
            return this;
        }

        public Builder fromWalletId(UUID fromWalletId) {
            response.fromWalletId = fromWalletId;
            return this;
        }

        public Builder toWalletId(UUID toWalletId) {
            response.toWalletId = toWalletId;
            return this;
        }

        public Builder amount(BigDecimal amount) {
            response.amount = amount;
            return this;
        }

        public Builder currency(String currency) {
            response.currency = currency;
            return this;
        }

        public Builder type(TransactionType type) {
            response.type = type;
            return this;
        }

        public Builder status(TransactionStatus status) {
            response.status = status;
            return this;
        }

        public Builder description(String description) {
            response.description = description;
            return this;
        }

        public Builder reference(String reference) {
            response.reference = reference;
            return this;
        }

        public Builder externalReference(String externalReference) {
            response.externalReference = externalReference;
            return this;
        }

        public Builder fees(BigDecimal fees) {
            response.fees = fees;
            return this;
        }

        public Builder exchangeRate(BigDecimal exchangeRate) {
            response.exchangeRate = exchangeRate;
            return this;
        }

        public Builder metadata(String metadata) {
            response.metadata = metadata;
            return this;
        }

        public Builder createdAt(LocalDateTime createdAt) {
            response.createdAt = createdAt;
            return this;
        }

        public Builder updatedAt(LocalDateTime updatedAt) {
            response.updatedAt = updatedAt;
            return this;
        }

        public Builder processedAt(LocalDateTime processedAt) {
            response.processedAt = processedAt;
            return this;
        }

        public Builder failedAt(LocalDateTime failedAt) {
            response.failedAt = failedAt;
            return this;
        }

        public Builder failureReason(String failureReason) {
            response.failureReason = failureReason;
            return this;
        }

        public TransactionResponse build() {
            return response;
        }
    }

    // Getters et Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getFromWalletId() { return fromWalletId; }
    public void setFromWalletId(UUID fromWalletId) { this.fromWalletId = fromWalletId; }

    public UUID getToWalletId() { return toWalletId; }
    public void setToWalletId(UUID toWalletId) { this.toWalletId = toWalletId; }

    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }

    public TransactionType getType() { return type; }
    public void setType(TransactionType type) { this.type = type; }

    public TransactionStatus getStatus() { return status; }
    public void setStatus(TransactionStatus status) { this.status = status; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getReference() { return reference; }
    public void setReference(String reference) { this.reference = reference; }

    public String getExternalReference() { return externalReference; }
    public void setExternalReference(String externalReference) { this.externalReference = externalReference; }

    public BigDecimal getFees() { return fees; }
    public void setFees(BigDecimal fees) { this.fees = fees; }

    public BigDecimal getExchangeRate() { return exchangeRate; }
    public void setExchangeRate(BigDecimal exchangeRate) { this.exchangeRate = exchangeRate; }

    public String getMetadata() { return metadata; }
    public void setMetadata(String metadata) { this.metadata = metadata; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public LocalDateTime getProcessedAt() { return processedAt; }
    public void setProcessedAt(LocalDateTime processedAt) { this.processedAt = processedAt; }

    public LocalDateTime getFailedAt() { return failedAt; }
    public void setFailedAt(LocalDateTime failedAt) { this.failedAt = failedAt; }

    public String getFailureReason() { return failureReason; }
    public void setFailureReason(String failureReason) { this.failureReason = failureReason; }

    // Méthodes utilitaires
    public boolean isCompleted() {
        return status == TransactionStatus.COMPLETED;
    }

    public boolean isFailed() {
        return status == TransactionStatus.FAILED;
    }

    public boolean isPending() {
        return status == TransactionStatus.PENDING;
    }

    public boolean isProcessing() {
        return status == TransactionStatus.PROCESSING;
    }

    @Override
    public String toString() {
        return "TransactionResponse{" +
                "id=" + id +
                ", reference='" + reference + '\'' +
                ", amount=" + amount +
                ", currency='" + currency + '\'' +
                ", type=" + type +
                ", status=" + status +
                ", createdAt=" + createdAt +
                '}';
    }
}