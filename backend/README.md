# uFaranga Backend - Architecture Microservices

## Structure des Services

### Node.js Services (Port 3000-3999)
- **api-gateway** (3000) - Point d'entrée unique, routage, authentification
- **notification-service** (3001) - Notifications push, SMS, email
- **websocket-service** (3002) - Connexions temps réel
- **orchestration-service** (3003) - Orchestration des workflows

### Django Services (Port 8000-8999)
- **user-service** (8000) - Gestion utilisateurs, authentification
- **wallet-service** (8001) - Gestion portefeuilles, soldes
- **kyc-service** (8002) - Vérification d'identité
- **admin-service** (8003) - Back-office, rapports

### Spring Boot Services (Port 9000-9999)
- **transaction-service** (9000) - Transactions critiques, ACID
- **fraud-detection-service** (9001) - Détection fraude ML
- **banking-integration-service** (9002) - Connexion systèmes bancaires
- **settlement-service** (9003) - Réconciliation bancaire

## Infrastructure
- PostgreSQL: 5432
- MongoDB: 27017
- Redis: 6379
- Kafka: 9092

## Ordre de Développement
1. Phase 1 (MVP): API Gateway, User Service, Wallet Service, Transaction Service
2. Phase 2 (Core): KYC, Fraud Detection, WebSocket, Admin
3. Phase 3 (Intégrations): Banking Integration, Settlement