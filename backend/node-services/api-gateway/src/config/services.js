const path = require('path');
const ConfigManager = require('../../config/config-manager');

const configManager = new ConfigManager();

module.exports = {
  services: {
    USER_SERVICE: configManager.getServiceUrl('backend.django-services', 'user-service') || 'http://localhost:8000',
    WALLET_SERVICE: configManager.getServiceUrl('backend.django-services', 'wallet-service') || 'http://localhost:8001',
    TRANSACTION_SERVICE: configManager.getServiceUrl('backend.spring-services', 'transaction-service') || 'http://localhost:9000',
    KYC_SERVICE: configManager.getServiceUrl('backend.django-services', 'kyc-service') || 'http://localhost:8002',
    NOTIFICATION_SERVICE: configManager.getServiceUrl('backend.node-services', 'notification-service') || 'http://localhost:3001',
    FRAUD_DETECTION_SERVICE: configManager.getServiceUrl('backend.spring-services', 'fraud-detection-service') || 'http://localhost:9001'
  },
  
  timeouts: {
    DEFAULT: 5000,
    TRANSACTION: 10000,
    FRAUD_CHECK: 3000
  },

  // Ports pour référence
  ports: {
    API_GATEWAY: configManager.getServicePort('backend.node-services', 'api-gateway') || 3000,
    USER_SERVICE: configManager.getServicePort('backend.django-services', 'user-service') || 8000,
    WALLET_SERVICE: configManager.getServicePort('backend.django-services', 'wallet-service') || 8001,
    TRANSACTION_SERVICE: configManager.getServicePort('backend.spring-services', 'transaction-service') || 9000,
    KYC_SERVICE: configManager.getServicePort('backend.django-services', 'kyc-service') || 8002,
    NOTIFICATION_SERVICE: configManager.getServicePort('backend.node-services', 'notification-service') || 3001,
    FRAUD_DETECTION_SERVICE: configManager.getServicePort('backend.spring-services', 'fraud-detection-service') || 9001
  }
};