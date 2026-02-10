#!/bin/bash

# Script de test des services uFaranga
echo "🧪 Test des services uFaranga"
echo "============================="

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour tester un service
test_service() {
    local service_name=$1
    local url=$2
    local expected_status=${3:-200}
    
    echo -n "Testing $service_name... "
    
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url" --connect-timeout 5 --max-time 10)
    
    if [ "$response" = "$expected_status" ]; then
        echo -e "${GREEN}✅ OK${NC}"
        return 0
    else
        echo -e "${RED}❌ FAILED (HTTP $response)${NC}"
        return 1
    fi
}

# Attendre que les services démarrent
echo "⏳ Attente du démarrage des services (30s)..."
sleep 30

echo ""
echo "🔍 Test des services..."

# Compteur de succès
success_count=0
total_count=0

# Test des services Node.js
echo ""
echo "🟢 Services Node.js:"
test_service "API Gateway" "http://localhost:3000/health" && ((success_count++))
((total_count++))

test_service "WebSocket Service" "http://localhost:3002/health" && ((success_count++))
((total_count++))

# Test des services Django
echo ""
echo "🟡 Services Django:"
test_service "User Service" "http://localhost:8000/health" && ((success_count++))
((total_count++))

test_service "Wallet Service" "http://localhost:8001/health" && ((success_count++))
((total_count++))

test_service "KYC Service" "http://localhost:8002/health" && ((success_count++))
((total_count++))

# Test des services Spring Boot
echo ""
echo "🟠 Services Spring Boot:"
test_service "Transaction Service" "http://localhost:9000/actuator/health" && ((success_count++))
((total_count++))

test_service "Fraud Detection Service" "http://localhost:9001/actuator/health" && ((success_count++))
((total_count++))

# Test de l'infrastructure
echo ""
echo "🗄️  Infrastructure:"
test_service "PostgreSQL" "http://localhost:5432" 000 # PostgreSQL ne répond pas en HTTP
test_service "Redis" "http://localhost:6379" 000 # Redis ne répond pas en HTTP

# Résumé
echo ""
echo "📊 Résumé des tests:"
echo "Services testés: $total_count"
echo "Services OK: $success_count"
echo "Services KO: $((total_count - success_count))"

if [ $success_count -eq $total_count ]; then
    echo -e "${GREEN}🎉 Tous les services sont opérationnels!${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠️  Certains services ne répondent pas correctement${NC}"
    exit 1
fi