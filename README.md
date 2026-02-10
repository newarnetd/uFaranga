# uFaranga - Plateforme de Paiement Mobile

## 🏗️ Architecture Microservices

uFaranga est une plateforme de paiement mobile construite avec une architecture microservices moderne, utilisant Node.js, Django, et Spring Boot.

### 📋 Services

#### 🟢 Frontend
- **Back-Office** (React + Vite) - Interface d'administration
- **Front-Office** (Next.js) - Application web client
- **Mobile** (Flutter) - Application mobile

#### 🔵 Backend Node.js
- **API Gateway** (Port 3000) - Point d'entrée unique, routage, authentification
- **Notification Service** (Port 3001) - Notifications push, SMS, email
- **WebSocket Service** (Port 3002) - Connexions temps réel

#### 🟡 Backend Django
- **User Service** (Port 8000) - Gestion utilisateurs, authentification
- **Wallet Service** (Port 8001) - Gestion portefeuilles, soldes
- **KYC Service** (Port 8002) - Vérification d'identité

#### 🟠 Backend Spring Boot
- **Transaction Service** (Port 9000) - Transactions critiques, ACID
- **Fraud Detection Service** (Port 9001) - Détection fraude ML

#### 🗄️ Infrastructure
- **PostgreSQL** (Port 5432) - Base de données principale
- **MongoDB** (Port 27017) - Documents et logs
- **Redis** (Port 6379) - Cache et sessions
- **Kafka** (Port 9092) - Message queue

## 🚀 Démarrage Rapide

### Prérequis
- Docker & Docker Compose
- Node.js 18+
- Python 3.11+
- Java 17+
- Flutter SDK (pour mobile)

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd ufaranga

# Installer toutes les dépendances
make install

# Construire les images Docker
make build

# Démarrer tous les services
make start
```

### Lancement Individuel

```bash
# Démarrer uniquement l'infrastructure
make start-infrastructure

# Démarrer les services Node.js
make start-node

# Démarrer les services Django
make start-django

# Démarrer les services Spring Boot
make start-spring

# Démarrer le frontend
make start-frontend
```

## 🛠️ Développement

### Commandes Utiles

```bash
# Voir l'aide complète
make help

# Voir les logs
make logs

# Voir le statut des services
make status

# Redémarrer tous les services
make restart

# Nettoyer l'environnement
make clean
```

### Lancement par Répertoire

Vous pouvez aussi naviguer dans n'importe quel répertoire de service et utiliser le lanceur automatique :

```bash
# Dans le répertoire racine
node Node/project-launcher.js

# Ou dans n'importe quel sous-répertoire
cd Back-Office
node ../Node/project-launcher.js

cd backend/django-services/user-service
python manage.py runserver
```

## 🏛️ Structure du Projet

```
ufaranga/
├── backend/
│   ├── node-services/
│   │   ├── api-gateway/
│   │   ├── notification-service/
│   │   └── websocket-service/
│   ├── django-services/
│   │   ├── user-service/
│   │   ├── wallet-service/
│   │   └── kyc-service/
│   └── spring-services/
│       ├── transaction-service/
│       └── fraud-detection-service/
├── frontend/
│   ├── Back-Office/          # React + Vite
│   ├── Front-Office/         # Next.js
│   └── mobile/               # Flutter
├── infrastructure/
│   ├── docker/
│   └── kubernetes/
├── scripts/
├── docs/
├── docker-compose.yml
├── Makefile
└── README.md
```

## 🔄 Communication entre Services

### REST API (Synchrone)
- API Gateway → Services Django/Spring Boot
- Frontend → API Gateway

### Message Queue (Asynchrone)
- Kafka Topics:
  - `transaction.initiated`
  - `transaction.completed`
  - `user.registered`
  - `notification.send`

### WebSocket (Temps Réel)
- Notifications instantanées
- Mises à jour de solde en temps réel

## 🗄️ Bases de Données

Chaque service a sa propre base de données :
- `ufaranga_users` - User Service
- `ufaranga_wallets` - Wallet Service
- `ufaranga_kyc` - KYC Service
- `ufaranga_transactions` - Transaction Service

## 🔐 Sécurité

- JWT pour l'authentification
- Rate limiting sur l'API Gateway
- Validation des données à tous les niveaux
- Chiffrement des données sensibles
- Audit trail complet

## 📊 Monitoring

- **Prometheus** - Métriques
- **Grafana** - Dashboards
- **Logs centralisés** - Winston/Django logging

Accès :
- Grafana: http://localhost:3001 (admin/admin123)
- Prometheus: http://localhost:9090

## 🧪 Tests

```bash
# Lancer tous les tests
make test

# Tests par service
cd backend/node-services/api-gateway
npm test

cd backend/django-services/user-service
python manage.py test
```

## 📚 Documentation API

- Swagger UI disponible sur chaque service
- User Service: http://localhost:8000/api/docs/
- Wallet Service: http://localhost:8001/api/docs/
- Transaction Service: http://localhost:9000/swagger-ui.html

## 🚀 Déploiement

### Développement
```bash
make dev-setup
```

### Production
```bash
make prod-build
make prod-start
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email: support@ufaranga.com
- Documentation: [docs.ufaranga.com](https://docs.ufaranga.com)
- Issues: [GitHub Issues](https://github.com/ufaranga/platform/issues)