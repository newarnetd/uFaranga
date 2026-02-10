# uFaranga - Makefile pour le développement
.PHONY: help install build start stop clean logs test

# Variables
DOCKER_COMPOSE = docker-compose
NODE_SERVICES = api-gateway notification-service websocket-service
DJANGO_SERVICES = user-service wallet-service kyc-service
SPRING_SERVICES = transaction-service fraud-detection-service

help: ## Afficher l'aide
	@echo "uFaranga - Commandes disponibles:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Installer toutes les dépendances
	@echo "📦 Installation des dépendances..."
	@echo "Node.js services..."
	@for service in $(NODE_SERVICES); do \
		echo "Installing $$service..."; \
		cd backend/node-services/$$service && npm install && cd ../../..; \
	done
	@echo "Django services..."
	@for service in $(DJANGO_SERVICES); do \
		echo "Installing $$service..."; \
		cd backend/django-services/$$service && pip install -r requirements.txt && cd ../../..; \
	done
	@echo "Frontend services..."
	@cd Back-Office && npm install && cd ..
	@cd Front-Office && npm install && cd ..
	@echo "✅ Installation terminée!"

build: ## Construire tous les services Docker
	@echo "🔨 Construction des images Docker..."
	$(DOCKER_COMPOSE) build
	@echo "✅ Construction terminée!"

start: ## Démarrer tous les services
	@echo "🚀 Démarrage de l'architecture microservices uFaranga..."
	$(DOCKER_COMPOSE) up -d
	@echo "✅ Services démarrés!"
	@echo ""
	@echo "📋 Services disponibles:"
	@echo "  - API Gateway: http://localhost:3000"
	@echo "  - User Service: http://localhost:8000"
	@echo "  - Wallet Service: http://localhost:8001"
	@echo "  - KYC Service: http://localhost:8002"
	@echo "  - Transaction Service: http://localhost:9000"
	@echo "  - Fraud Detection: http://localhost:9001"
	@echo "  - PostgreSQL: localhost:5432"
	@echo "  - MongoDB: localhost:27017"
	@echo "  - Redis: localhost:6379"
	@echo "  - Kafka: localhost:9092"

start-dev: ## Démarrer en mode développement avec logs
	@echo "🚀 Démarrage en mode développement..."
	$(DOCKER_COMPOSE) up --build

stop: ## Arrêter tous les services
	@echo "🛑 Arrêt des services..."
	$(DOCKER_COMPOSE) down
	@echo "✅ Services arrêtés!"

restart: stop start ## Redémarrer tous les services

clean: ## Nettoyer les containers et volumes
	@echo "🧹 Nettoyage..."
	$(DOCKER_COMPOSE) down -v --remove-orphans
	docker system prune -f
	@echo "✅ Nettoyage terminé!"

logs: ## Voir les logs de tous les services
	$(DOCKER_COMPOSE) logs -f

logs-api: ## Voir les logs de l'API Gateway
	$(DOCKER_COMPOSE) logs -f api-gateway

logs-user: ## Voir les logs du User Service
	$(DOCKER_COMPOSE) logs -f user-service

logs-transaction: ## Voir les logs du Transaction Service
	$(DOCKER_COMPOSE) logs -f transaction-service

status: ## Voir le statut des services
	$(DOCKER_COMPOSE) ps

test: ## Lancer les tests
	@echo "🧪 Lancement des tests..."
	@for service in $(NODE_SERVICES); do \
		echo "Testing $$service..."; \
		cd backend/node-services/$$service && npm test && cd ../../..; \
	done

# Services individuels
start-infrastructure: ## Démarrer uniquement l'infrastructure (DB, Redis, Kafka)
	$(DOCKER_COMPOSE) up -d postgres mongodb redis zookeeper kafka

start-node: ## Démarrer les services Node.js
	$(DOCKER_COMPOSE) up -d api-gateway notification-service websocket-service

start-django: ## Démarrer les services Django
	$(DOCKER_COMPOSE) up -d user-service wallet-service kyc-service

start-spring: ## Démarrer les services Spring Boot
	$(DOCKER_COMPOSE) up -d transaction-service fraud-detection-service

# Frontend
start-frontend: ## Démarrer les applications frontend
	@echo "🎨 Démarrage des applications frontend..."
	@echo "Back-Office (React): http://localhost:3000"
	@echo "Front-Office (Next.js): http://localhost:3001"
	@cd Back-Office && npm run dev &
	@cd Front-Office && npm run dev &

# Base de données
db-migrate: ## Appliquer les migrations Django
	@for service in $(DJANGO_SERVICES); do \
		echo "Migrating $$service..."; \
		$(DOCKER_COMPOSE) exec $$service python manage.py migrate; \
	done

db-seed: ## Insérer des données de test
	@echo "🌱 Insertion des données de test..."
	$(DOCKER_COMPOSE) exec user-service python manage.py loaddata fixtures/users.json
	$(DOCKER_COMPOSE) exec wallet-service python manage.py loaddata fixtures/wallets.json

# Monitoring
monitor: ## Ouvrir les outils de monitoring
	@echo "📊 Outils de monitoring:"
	@echo "  - Grafana: http://localhost:3001 (admin/admin123)"
	@echo "  - Prometheus: http://localhost:9090"

# Développement
dev-setup: install build start-infrastructure db-migrate ## Configuration complète pour le développement
	@echo "🎯 Environnement de développement prêt!"

# Production
prod-build: ## Construire pour la production
	$(DOCKER_COMPOSE) -f docker-compose.prod.yml build

prod-start: ## Démarrer en production
	$(DOCKER_COMPOSE) -f docker-compose.prod.yml up -d