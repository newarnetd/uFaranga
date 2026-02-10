#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ConfigManager = require('../config/config-manager');

class EnvGenerator {
  constructor() {
    this.configManager = new ConfigManager();
    this.rootDir = path.join(__dirname, '..');
  }

  generateNodeServiceEnv(serviceName, environment = 'development') {
    const serviceDir = path.join(this.rootDir, 'backend', 'node-services', serviceName);
    const envFile = path.join(serviceDir, '.env');
    
    let envContent = `# Configuration générée pour ${serviceName}\n`;
    envContent += `# Environnement: ${environment}\n`;
    envContent += `# Généré le: ${new Date().toISOString()}\n\n`;

    // Configuration de base
    envContent += `NODE_ENV=${environment}\n`;
    
    // Port du service
    const port = this.configManager.getServicePort('backend.node-services', serviceName);
    if (port) {
      envContent += `PORT=${port}\n`;
    }

    // URLs des autres services
    envContent += `\n# URLs des services\n`;
    const services = this.configManager.getAllServices();
    services.forEach(service => {
      if (service.name !== serviceName && service.url) {
        const envName = `${service.name.toUpperCase().replace('-', '_')}_URL`;
        envContent += `${envName}=${service.url}\n`;
      }
    });

    // Configuration spécifique selon le service
    if (serviceName === 'api-gateway') {
      envContent += `\n# JWT Configuration\n`;
      envContent += `JWT_SECRET=your-super-secret-jwt-key-change-in-production\n`;
      envContent += `JWT_EXPIRES_IN=24h\n`;
      
      envContent += `\n# CORS Configuration\n`;
      envContent += `ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001\n`;
      
      envContent += `\n# Rate Limiting\n`;
      envContent += `RATE_LIMIT_WINDOW_MS=900000\n`;
      envContent += `RATE_LIMIT_MAX_REQUESTS=100\n`;
    }

    if (serviceName === 'notification-service') {
      envContent += `\n# Email Configuration\n`;
      envContent += `SMTP_HOST=smtp.gmail.com\n`;
      envContent += `SMTP_PORT=587\n`;
      envContent += `SMTP_USER=your-email@gmail.com\n`;
      envContent += `SMTP_PASS=your-app-password\n`;
      envContent += `FROM_EMAIL=noreply@ufaranga.com\n`;
      
      envContent += `\n# SMS Configuration (Twilio)\n`;
      envContent += `TWILIO_ACCOUNT_SID=your-twilio-sid\n`;
      envContent += `TWILIO_AUTH_TOKEN=your-twilio-token\n`;
      envContent += `TWILIO_PHONE_NUMBER=+1234567890\n`;
      
      envContent += `\n# Firebase Configuration\n`;
      envContent += `FIREBASE_PROJECT_ID=your-firebase-project\n`;
      envContent += `FIREBASE_PRIVATE_KEY_PATH=./firebase-service-account.json\n`;
    }

    if (serviceName === 'websocket-service') {
      envContent += `\n# WebSocket Configuration\n`;
      envContent += `JWT_SECRET=your-super-secret-jwt-key-change-in-production\n`;
      envContent += `ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001\n`;
    }

    // Configuration Redis et Kafka pour tous les services
    envContent += `\n# Infrastructure\n`;
    envContent += `REDIS_URL=redis://localhost:6379\n`;
    envContent += `KAFKA_BROKER=localhost:9092\n`;

    // Logging
    envContent += `\n# Logging\n`;
    envContent += `LOG_LEVEL=info\n`;

    return envContent;
  }

  generateDjangoServiceEnv(serviceName, environment = 'development') {
    const serviceDir = path.join(this.rootDir, 'backend', 'django-services', serviceName);
    const envFile = path.join(serviceDir, '.env');
    
    let envContent = `# Configuration générée pour ${serviceName}\n`;
    envContent += `# Environnement: ${environment}\n`;
    envContent += `# Généré le: ${new Date().toISOString()}\n\n`;

    // Configuration Django de base
    envContent += `DJANGO_ENV=${environment}\n`;
    envContent += `DEBUG=${environment === 'development' ? 'True' : 'False'}\n`;
    envContent += `SECRET_KEY=django-insecure-change-me-in-production\n`;

    // Base de données
    const dbMapping = {
      'user-service': 'ufaranga_users',
      'wallet-service': 'ufaranga_wallets',
      'kyc-service': 'ufaranga_kyc',
      'admin-service': 'ufaranga_admin'
    };
    
    const dbName = dbMapping[serviceName] || 'ufaranga';
    envContent += `\n# Database Configuration\n`;
    envContent += `DB_NAME=${dbName}\n`;
    envContent += `DB_USER=admin\n`;
    envContent += `DB_PASSWORD=secret123\n`;
    envContent += `DB_HOST=localhost\n`;
    envContent += `DB_PORT=5432\n`;

    // Redis avec index différent par service
    const redisIndexMapping = {
      'user-service': 0,
      'wallet-service': 1,
      'kyc-service': 2,
      'admin-service': 3
    };
    
    const redisIndex = redisIndexMapping[serviceName] || 0;
    envContent += `\n# Redis Configuration\n`;
    envContent += `REDIS_URL=redis://localhost:6379/${redisIndex}\n`;

    // URLs des autres services
    envContent += `\n# Service URLs\n`;
    const services = this.configManager.getAllServices();
    services.forEach(service => {
      if (service.name !== serviceName && service.url) {
        const envName = `${service.name.toUpperCase().replace('-', '_')}_URL`;
        envContent += `${envName}=${service.url}\n`;
      }
    });

    // Configuration Kafka
    envContent += `\n# Kafka Configuration\n`;
    envContent += `KAFKA_BROKERS=localhost:9092\n`;

    // CORS
    envContent += `\n# CORS Configuration\n`;
    envContent += `CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001\n`;

    // Configuration spécifique selon le service
    if (serviceName === 'user-service') {
      envContent += `\n# JWT Configuration\n`;
      envContent += `JWT_SECRET_KEY=your-super-secret-jwt-key\n`;
      envContent += `JWT_ACCESS_TOKEN_LIFETIME=60\n`;
      envContent += `JWT_REFRESH_TOKEN_LIFETIME=10080\n`;
      
      envContent += `\n# Email Configuration\n`;
      envContent += `EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend\n`;
      envContent += `EMAIL_HOST=smtp.gmail.com\n`;
      envContent += `EMAIL_PORT=587\n`;
      envContent += `EMAIL_USE_TLS=True\n`;
      envContent += `EMAIL_HOST_USER=your-email@gmail.com\n`;
      envContent += `EMAIL_HOST_PASSWORD=your-app-password\n`;
    }

    if (serviceName === 'kyc-service') {
      envContent += `\n# File Upload Configuration\n`;
      envContent += `MAX_UPLOAD_SIZE=10485760\n`; // 10MB
      envContent += `ALLOWED_FILE_TYPES=jpg,jpeg,png,pdf\n`;
      
      envContent += `\n# OCR Configuration\n`;
      envContent += `TESSERACT_CMD=/usr/bin/tesseract\n`;
      envContent += `GOOGLE_CLOUD_VISION_CREDENTIALS=./gcp-credentials.json\n`;
    }

    if (serviceName === 'wallet-service') {
      envContent += `\n# Currency Configuration\n`;
      envContent += `DEFAULT_CURRENCY=USD\n`;
      envContent += `EXCHANGE_RATE_API_KEY=your-exchange-rate-api-key\n`;
    }

    // Superuser pour Docker
    if (environment === 'development') {
      envContent += `\n# Development Superuser\n`;
      envContent += `DJANGO_SUPERUSER_EMAIL=admin@ufaranga.com\n`;
      envContent += `DJANGO_SUPERUSER_PASSWORD=admin123\n`;
    }

    return envContent;
  }

  generateSpringServiceEnv(serviceName, environment = 'development') {
    const serviceDir = path.join(this.rootDir, 'backend', 'spring-services', serviceName);
    const envFile = path.join(serviceDir, '.env');
    
    let envContent = `# Configuration générée pour ${serviceName}\n`;
    envContent += `# Environnement: ${environment}\n`;
    envContent += `# Généré le: ${new Date().toISOString()}\n\n`;

    // Configuration Spring Boot
    envContent += `SPRING_PROFILES_ACTIVE=${environment}\n`;

    // Base de données
    const dbMapping = {
      'transaction-service': 'ufaranga_transactions',
      'fraud-detection-service': 'ufaranga_fraud',
      'banking-integration-service': 'ufaranga_banking',
      'settlement-service': 'ufaranga_settlement'
    };
    
    const dbName = dbMapping[serviceName] || 'ufaranga';
    envContent += `\n# Database Configuration\n`;
    envContent += `SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/${dbName}\n`;
    envContent += `SPRING_DATASOURCE_USERNAME=admin\n`;
    envContent += `SPRING_DATASOURCE_PASSWORD=secret123\n`;

    // Kafka
    envContent += `\n# Kafka Configuration\n`;
    envContent += `SPRING_KAFKA_BOOTSTRAP_SERVERS=localhost:9092\n`;

    // Redis
    envContent += `\n# Redis Configuration\n`;
    envContent += `SPRING_REDIS_HOST=localhost\n`;
    envContent += `SPRING_REDIS_PORT=6379\n`;

    // URLs des autres services
    envContent += `\n# Service URLs\n`;
    const services = this.configManager.getAllServices();
    services.forEach(service => {
      if (service.name !== serviceName && service.url) {
        const envName = `${service.name.toUpperCase().replace('-', '_')}_URL`;
        envContent += `${envName}=${service.url}\n`;
      }
    });

    // Configuration JVM
    envContent += `\n# JVM Configuration\n`;
    envContent += `JAVA_OPTS=-Xmx512m -Xms256m\n`;

    // Configuration spécifique selon le service
    if (serviceName === 'transaction-service') {
      envContent += `\n# Transaction Limits\n`;
      envContent += `MAX_TRANSACTION_AMOUNT=1000000\n`;
      envContent += `MAX_DAILY_AMOUNT=10000\n`;
      envContent += `MAX_MONTHLY_TRANSACTIONS=1000\n`;
    }

    if (serviceName === 'fraud-detection-service') {
      envContent += `\n# Fraud Detection Configuration\n`;
      envContent += `FRAUD_DETECTION_ENABLED=true\n`;
      envContent += `ML_MODEL_PATH=./models/fraud-model.pkl\n`;
      envContent += `RISK_THRESHOLD=0.7\n`;
    }

    return envContent;
  }

  generateAllEnvFiles(environment = 'development') {
    console.log(`🔧 Génération des fichiers .env pour l'environnement: ${environment}`);
    console.log('=' .repeat(60));

    // Services Node.js
    const nodeServices = ['api-gateway', 'notification-service', 'websocket-service'];
    nodeServices.forEach(service => {
      const envContent = this.generateNodeServiceEnv(service, environment);
      const serviceDir = path.join(this.rootDir, 'backend', 'node-services', service);
      const envFile = path.join(serviceDir, '.env');
      
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }
      
      fs.writeFileSync(envFile, envContent);
      console.log(`✅ ${service} - .env généré`);
    });

    // Services Django
    const djangoServices = ['user-service', 'wallet-service', 'kyc-service', 'admin-service'];
    djangoServices.forEach(service => {
      const envContent = this.generateDjangoServiceEnv(service, environment);
      const serviceDir = path.join(this.rootDir, 'backend', 'django-services', service);
      const envFile = path.join(serviceDir, '.env');
      
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }
      
      fs.writeFileSync(envFile, envContent);
      console.log(`✅ ${service} - .env généré`);
    });

    // Services Spring Boot
    const springServices = ['transaction-service', 'fraud-detection-service'];
    springServices.forEach(service => {
      const envContent = this.generateSpringServiceEnv(service, environment);
      const serviceDir = path.join(this.rootDir, 'backend', 'spring-services', service);
      const envFile = path.join(serviceDir, '.env');
      
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }
      
      fs.writeFileSync(envFile, envContent);
      console.log(`✅ ${service} - .env généré`);
    });

    console.log('');
    console.log('🎉 Tous les fichiers .env ont été générés avec succès!');
    console.log('');
    console.log('📝 N\'oubliez pas de:');
    console.log('  1. Modifier les clés secrètes en production');
    console.log('  2. Configurer les services externes (SMTP, Twilio, etc.)');
    console.log('  3. Vérifier les URLs selon votre environnement');
  }
}

// CLI Interface
if (require.main === module) {
  const generator = new EnvGenerator();
  const environment = process.argv[2] || 'development';
  
  generator.generateAllEnvFiles(environment);
}

module.exports = EnvGenerator;