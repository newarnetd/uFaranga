module.exports = {
  services: {
    USER_SERVICE: process.env.USER_SERVICE_URL || 'http://localhost:8000',
    WALLET_SERVICE: process.env.WALLET_SERVICE_URL || 'http://localhost:8001',
    TRANSACTION_SERVICE: process.env.TRANSACTION_SERVICE_URL || 'http://localhost:9000',
    KYC_SERVICE: process.env.KYC_SERVICE_URL || 'http://localhost:8002',
    NOTIFICATION_SERVICE: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3001',
    FRAUD_DETECTION_SERVICE: process.env.FRAUD_DETECTION_SERVICE_URL || 'http://localhost:9001'
  },
  
  timeouts: {
    DEFAULT: 5000,
    TRANSACTION: 10000,
    FRAUD_CHECK: 3000
  }
};