package com.ufaranga.transaction.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.HashMap;
import java.util.Map;

/**
 * Configuration centralisée des services pour Spring Boot
 * Utilise les propriétés définies dans application.yml
 */
@Configuration
@PropertySource("classpath:application.yml")
public class ServiceConfig {

    // URLs des services
    @Value("${app.services.user-service.url:http://localhost:8000}")
    private String userServiceUrl;

    @Value("${app.services.wallet-service.url:http://localhost:8001}")
    private String walletServiceUrl;

    @Value("${app.services.kyc-service.url:http://localhost:8002}")
    private String kycServiceUrl;

    @Value("${app.services.notification-service.url:http://localhost:3001}")
    private String notificationServiceUrl;

    @Value("${app.services.fraud-detection-service.url:http://localhost:9001}")
    private String fraudDetectionServiceUrl;

    @Value("${app.services.api-gateway.url:http://localhost:3000}")
    private String apiGatewayUrl;

    @Value("${app.services.websocket-service.url:http://localhost:3002}")
    private String websocketServiceUrl;

    // Timeouts
    @Value("${app.timeouts.default:5000}")
    private int defaultTimeout;

    @Value("${app.timeouts.transaction:10000}")
    private int transactionTimeout;

    @Value("${app.timeouts.fraud-check:3000}")
    private int fraudCheckTimeout;

    // Limites
    @Value("${app.limits.max-transaction-amount:1000000}")
    private double maxTransactionAmount;

    @Value("${app.limits.max-daily-amount:10000}")
    private double maxDailyAmount;

    @Value("${app.limits.max-monthly-transactions:1000}")
    private int maxMonthlyTransactions;

    // Getters pour les URLs
    public String getUserServiceUrl() {
        return userServiceUrl;
    }

    public String getWalletServiceUrl() {
        return walletServiceUrl;
    }

    public String getKycServiceUrl() {
        return kycServiceUrl;
    }

    public String getNotificationServiceUrl() {
        return notificationServiceUrl;
    }

    public String getFraudDetectionServiceUrl() {
        return fraudDetectionServiceUrl;
    }

    public String getApiGatewayUrl() {
        return apiGatewayUrl;
    }

    public String getWebsocketServiceUrl() {
        return websocketServiceUrl;
    }

    // Getters pour les timeouts
    public int getDefaultTimeout() {
        return defaultTimeout;
    }

    public int getTransactionTimeout() {
        return transactionTimeout;
    }

    public int getFraudCheckTimeout() {
        return fraudCheckTimeout;
    }

    // Getters pour les limites
    public double getMaxTransactionAmount() {
        return maxTransactionAmount;
    }

    public double getMaxDailyAmount() {
        return maxDailyAmount;
    }

    public int getMaxMonthlyTransactions() {
        return maxMonthlyTransactions;
    }

    /**
     * Obtenir toutes les URLs de services sous forme de Map
     */
    public Map<String, String> getAllServiceUrls() {
        Map<String, String> urls = new HashMap<>();
        urls.put("user-service", userServiceUrl);
        urls.put("wallet-service", walletServiceUrl);
        urls.put("kyc-service", kycServiceUrl);
        urls.put("notification-service", notificationServiceUrl);
        urls.put("fraud-detection-service", fraudDetectionServiceUrl);
        urls.put("api-gateway", apiGatewayUrl);
        urls.put("websocket-service", websocketServiceUrl);
        return urls;
    }

    /**
     * Obtenir tous les timeouts sous forme de Map
     */
    public Map<String, Integer> getAllTimeouts() {
        Map<String, Integer> timeouts = new HashMap<>();
        timeouts.put("default", defaultTimeout);
        timeouts.put("transaction", transactionTimeout);
        timeouts.put("fraud-check", fraudCheckTimeout);
        return timeouts;
    }

    /**
     * Vérifier si un service est disponible (URL configurée)
     */
    public boolean isServiceAvailable(String serviceName) {
        return getAllServiceUrls().containsKey(serviceName) && 
               !getAllServiceUrls().get(serviceName).isEmpty();
    }

    /**
     * Obtenir l'URL complète d'un endpoint de service
     */
    public String getServiceEndpoint(String serviceName, String endpoint) {
        String baseUrl = getAllServiceUrls().get(serviceName);
        if (baseUrl == null) {
            throw new IllegalArgumentException("Service non configuré: " + serviceName);
        }
        
        // S'assurer que l'endpoint commence par /
        if (!endpoint.startsWith("/")) {
            endpoint = "/" + endpoint;
        }
        
        // Supprimer le / final de l'URL de base si présent
        if (baseUrl.endsWith("/")) {
            baseUrl = baseUrl.substring(0, baseUrl.length() - 1);
        }
        
        return baseUrl + endpoint;
    }

    /**
     * Configuration des topics Kafka
     */
    public static class KafkaTopics {
        public static final String TRANSACTION_INITIATED = "transaction.initiated";
        public static final String TRANSACTION_COMPLETED = "transaction.completed";
        public static final String TRANSACTION_FAILED = "transaction.failed";
        public static final String USER_REGISTERED = "user.registered";
        public static final String USER_KYC_UPDATED = "user.kyc.updated";
        public static final String NOTIFICATION_SEND = "notification.send";
        public static final String FRAUD_DETECTED = "fraud.detected";
    }

    /**
     * Configuration des endpoints de santé
     */
    public static class HealthEndpoints {
        public static final String DJANGO_HEALTH = "/health";
        public static final String SPRING_HEALTH = "/actuator/health";
        public static final String NODE_HEALTH = "/health";
    }

    /**
     * Configuration des endpoints de documentation
     */
    public static class DocsEndpoints {
        public static final String DJANGO_DOCS = "/api/docs/";
        public static final String SPRING_DOCS = "/swagger-ui.html";
        public static final String NODE_DOCS = "/api/docs";
    }
}