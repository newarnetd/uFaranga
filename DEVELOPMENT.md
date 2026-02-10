# Guide de Développement - uFaranga

## 🏗️ Architecture Technique

### Pile Technologique

#### Frontend
- **Back-Office**: React 18 + Vite + TailwindCSS
- **Front-Office**: Next.js 14 + TypeScript + TailwindCSS  
- **Mobile**: Flutter 3.16 + Dart

#### Backend
- **API Gateway**: Node.js + Express + JWT
- **Notification Service**: Node.js + Kafka + Firebase
- **WebSocket Service**: Node.js + Socket.io + Redis
- **User Service**: Django 5.0 + DRF + PostgreSQL
- **Wallet Service**: Django 5.0 + DRF + PostgreSQL
- **KYC Service**: Django 5.0 + DRF + PostgreSQL
- **Transaction Service**: Spring Boot 3.2 + PostgreSQL
- **Fraud Detection**: Spring Boot 3.2 + ML Models

#### Infrastructure
- **Base de données**: PostgreSQL 15
- **Cache**: Redis 7
- **Message Queue**: Apache Kafka
- **Conteneurisation**: Docker + Docker Compose
- **Monitoring**: Prometheus + Grafana

## 🚀 Configuration de l'Environnement

### 1. Prérequis

```bash
# Versions minimales requises
Node.js >= 18.0.0
Python >= 3.11.0
Java >= 17.0.0
Docker >= 24.0.0
Docker Compose >= 2.0.0
Flutter >= 3.16.0 (pour mobile)
```

### 2. Installation Initiale

```bash
# Cloner le repository
git clone <repository-url>
cd ufaranga

# Configuration automatique (Windows)
scripts\setup.bat

# Configuration automatique (Linux/Mac)
chmod +x scripts/setup.sh
./scripts/setup.sh

# Installation manuelle des dépendances
make install
```

### 3. Variables d'Environnement

Chaque service a son fichier `.env` :

#### API Gateway (.env)
```env
NODE_ENV=development
PORT=3000
JWT_SECRET=your-super-secret-jwt-key
REDIS_URL=redis://localhost:6379
USER_SERVICE_URL=http://localhost:8000
WALLET_SERVICE_URL=http://localhost:8001
TRANSACTION_SERVICE_URL=http://localhost:9000
```

#### Services Django (.env)
```env
DEBUG=True
SECRET_KEY=django-secret-key
DB_NAME=ufaranga_users
DB_USER=admin
DB_PASSWORD=secret123
DB_HOST=localhost
DB_PORT=5432
REDIS_URL=redis://localhost:6379/0
```

#### Services Spring Boot (application.yml)
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/ufaranga_transactions
    username: admin
    password: secret123
  kafka:
    bootstrap-servers: localhost:9092
```

## 🛠️ Développement Local

### Démarrage Complet

```bash
# Démarrer tous les services
make start

# Ou étape par étape
make start-infrastructure  # DB, Redis, Kafka
make start-node           # Services Node.js
make start-django         # Services Django
make start-spring         # Services Spring Boot
```

### Développement par Service

#### Node.js Services
```bash
cd backend/node-services/api-gateway
npm run dev

# Avec hot reload
nodemon src/app.js
```

#### Django Services
```bash
cd backend/django-services/user-service
python manage.py runserver

# Avec auto-reload
python manage.py runserver --settings=config.settings.development
```

#### Spring Boot Services
```bash
cd backend/spring-services/transaction-service
mvn spring-boot:run

# Avec profil de développement
mvn spring-boot:run -Dspring-boot.run.profiles=development
```

### Frontend

#### Back-Office (React)
```bash
cd Back-Office
npm run dev
# http://localhost:3000
```

#### Front-Office (Next.js)
```bash
cd Front-Office
npm run dev
# http://localhost:3001
```

#### Mobile (Flutter)
```bash
cd mobile
flutter run
# Ou pour web: flutter run -d chrome
```

## 🗄️ Base de Données

### Migrations Django

```bash
# Créer une migration
python manage.py makemigrations

# Appliquer les migrations
python manage.py migrate

# Migration pour tous les services
make db-migrate
```

### Données de Test

```bash
# Charger des données de test
make db-seed

# Ou manuellement
python manage.py loaddata fixtures/users.json
```

### Accès Direct

```bash
# PostgreSQL
docker exec -it ufaranga-postgres psql -U admin -d ufaranga_users

# MongoDB
docker exec -it ufaranga-mongodb mongosh

# Redis
docker exec -it ufaranga-redis redis-cli
```

## 🧪 Tests

### Tests Unitaires

#### Node.js (Jest)
```bash
cd backend/node-services/api-gateway
npm test
npm run test:watch
npm run test:coverage
```

#### Django
```bash
cd backend/django-services/user-service
python manage.py test
python manage.py test --coverage
```

#### Spring Boot (JUnit)
```bash
cd backend/spring-services/transaction-service
mvn test
mvn test -Dtest=TransactionServiceTest
```

### Tests d'Intégration

```bash
# Tous les tests
make test

# Tests API avec Postman/Newman
newman run tests/postman/ufaranga-api.json
```

## 📡 Communication entre Services

### REST API

#### Authentification
```javascript
// Headers requis
{
  "Authorization": "Bearer <jwt-token>",
  "Content-Type": "application/json"
}
```

#### Endpoints Principaux
```
POST /api/v1/auth/login
POST /api/v1/auth/register
GET  /api/v1/users/profile
POST /api/v1/transactions/transfer
GET  /api/v1/wallets/balance
```

### Kafka Events

#### Topics
```
user.registered
user.kyc.updated
transaction.initiated
transaction.completed
transaction.failed
notification.send
fraud.detected
```

#### Exemple de Message
```json
{
  "eventType": "transaction.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "transactionId": "uuid",
    "amount": 100.00,
    "currency": "USD",
    "fromWallet": "uuid",
    "toWallet": "uuid"
  }
}
```

### WebSocket Events

```javascript
// Client
socket.emit('join_room', { userId: 'uuid' });
socket.on('transaction_update', (data) => {
  console.log('Transaction update:', data);
});

// Server
io.to(userId).emit('balance_update', { 
  walletId: 'uuid', 
  newBalance: 150.00 
});
```

## 🔍 Debugging

### Logs

```bash
# Tous les services
make logs

# Service spécifique
make logs-api
make logs-user
make logs-transaction

# Logs en temps réel
docker-compose logs -f api-gateway
```

### Debug Node.js

```bash
# Avec debugger
node --inspect src/app.js

# Avec VS Code
# Ajouter dans launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Debug API Gateway",
  "program": "${workspaceFolder}/backend/node-services/api-gateway/src/app.js",
  "env": {
    "NODE_ENV": "development"
  }
}
```

### Debug Django

```python
# Dans le code
import pdb; pdb.set_trace()

# Ou avec Django Debug Toolbar
INSTALLED_APPS += ['debug_toolbar']
```

### Debug Spring Boot

```bash
# Démarrer avec debug
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
```

## 📊 Monitoring

### Métriques

#### Prometheus
- URL: http://localhost:9090
- Métriques custom dans chaque service

#### Grafana
- URL: http://localhost:3001
- Login: admin/admin123
- Dashboards pré-configurés

### Health Checks

```bash
# Vérifier tous les services
curl http://localhost:3000/health  # API Gateway
curl http://localhost:8000/health  # User Service
curl http://localhost:9000/actuator/health  # Transaction Service
```

## 🚀 Déploiement

### Environnements

#### Développement
```bash
make dev-setup
```

#### Staging
```bash
docker-compose -f docker-compose.staging.yml up -d
```

#### Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### CI/CD

#### GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: make test
```

## 🔐 Sécurité

### Authentification JWT

```javascript
// Génération du token
const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);
```

### Rate Limiting

```javascript
// API Gateway
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limite par IP
});
```

### Validation des Données

```python
# Django
from rest_framework import serializers

class TransactionSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=19, decimal_places=2, min_value=0.01)
    currency = serializers.CharField(max_length=3)
```

## 🤝 Conventions de Code

### Nommage
- **Variables**: camelCase (JS), snake_case (Python), camelCase (Java)
- **Fonctions**: camelCase (JS), snake_case (Python), camelCase (Java)
- **Classes**: PascalCase (tous langages)
- **Constantes**: UPPER_SNAKE_CASE (tous langages)

### Git Workflow
```bash
# Branches
main                    # Production
develop                 # Développement
feature/feature-name    # Nouvelles fonctionnalités
hotfix/fix-name        # Corrections urgentes

# Commits
feat: add user authentication
fix: resolve transaction timeout
docs: update API documentation
test: add unit tests for wallet service
```

### Code Review
- Minimum 2 reviewers
- Tests obligatoires
- Documentation mise à jour
- Performance vérifiée

## 📚 Ressources

### Documentation API
- Swagger UI: http://localhost:8000/api/docs/
- Postman Collection: `tests/postman/`

### Outils Recommandés
- **IDE**: VS Code, IntelliJ IDEA
- **API Testing**: Postman, Insomnia
- **Database**: pgAdmin, MongoDB Compass
- **Git**: GitKraken, SourceTree

### Formation
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Microservices Patterns](https://microservices.io/)