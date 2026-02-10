#!/bin/bash

# Script de configuration initiale pour uFaranga
echo "🚀 Configuration initiale de uFaranga"
echo "======================================"

# Vérifier les prérequis
echo "📋 Vérification des prérequis..."

# Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé"
    exit 1
fi

# Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé"
    exit 1
fi

# Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    exit 1
fi

# Python
if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
    echo "❌ Python n'est pas installé"
    exit 1
fi

# Java
if ! command -v java &> /dev/null; then
    echo "❌ Java n'est pas installé"
    exit 1
fi

echo "✅ Tous les prérequis sont installés"

# Créer les répertoires nécessaires
echo "📁 Création des répertoires..."
mkdir -p logs
mkdir -p data/postgres
mkdir -p data/mongodb
mkdir -p data/redis

# Copier les fichiers de configuration
echo "⚙️  Configuration des services..."

# Copier les fichiers .env.example vers .env
for service in backend/node-services/*; do
    if [ -f "$service/.env.example" ]; then
        cp "$service/.env.example" "$service/.env"
        echo "✅ Configuration copiée pour $(basename $service)"
    fi
done

# Créer les Dockerfiles manquants
echo "🐳 Création des Dockerfiles..."

# API Gateway Dockerfile
cat > backend/node-services/api-gateway/Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
EOF

# Notification Service Dockerfile
cat > backend/node-services/notification-service/Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
EOF

# User Service Dockerfile
cat > backend/django-services/user-service/Dockerfile << 'EOF'
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
EOF

# Transaction Service Dockerfile
cat > backend/spring-services/transaction-service/Dockerfile << 'EOF'
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN apt-get update && apt-get install -y maven
RUN mvn clean package -DskipTests

EXPOSE 9000

CMD ["java", "-jar", "target/transaction-service-1.0.0.jar"]
EOF

echo "✅ Dockerfiles créés"

# Installer les dépendances Node.js
echo "📦 Installation des dépendances Node.js..."
cd backend/node-services/api-gateway && npm install && cd ../../..
cd backend/node-services/notification-service && npm install && cd ../../..

# Créer les fichiers manage.py pour Django
echo "🐍 Configuration des services Django..."

cat > backend/django-services/user-service/manage.py << 'EOF'
#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.development')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
EOF

chmod +x backend/django-services/user-service/manage.py

echo "🎯 Configuration terminée!"
echo ""
echo "Prochaines étapes:"
echo "1. make build    # Construire les images Docker"
echo "2. make start    # Démarrer tous les services"
echo "3. make logs     # Voir les logs"
echo ""
echo "Services disponibles après démarrage:"
echo "- API Gateway: http://localhost:3000"
echo "- User Service: http://localhost:8000"
echo "- Transaction Service: http://localhost:9000"