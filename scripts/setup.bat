@echo off
setlocal

echo 🚀 Configuration initiale de uFaranga
echo ======================================

REM Vérifier les prérequis
echo 📋 Vérification des prérequis...

REM Docker
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker n'est pas installé
    exit /b 1
)

REM Docker Compose
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Compose n'est pas installé
    exit /b 1
)

REM Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js n'est pas installé
    exit /b 1
)

REM Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python n'est pas installé
    exit /b 1
)

REM Java
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Java n'est pas installé
    exit /b 1
)

echo ✅ Tous les prérequis sont installés

REM Créer les répertoires nécessaires
echo 📁 Création des répertoires...
if not exist "logs" mkdir logs
if not exist "data\postgres" mkdir data\postgres
if not exist "data\mongodb" mkdir data\mongodb
if not exist "data\redis" mkdir data\redis

echo ⚙️  Configuration des services...

REM Copier les fichiers .env.example vers .env
for /d %%i in (backend\node-services\*) do (
    if exist "%%i\.env.example" (
        copy "%%i\.env.example" "%%i\.env" >nul
        echo ✅ Configuration copiée pour %%~ni
    )
)

echo 🎯 Configuration terminée!
echo.
echo Prochaines étapes:
echo 1. make build    # Construire les images Docker
echo 2. make start    # Démarrer tous les services
echo 3. make logs     # Voir les logs
echo.
echo Services disponibles après démarrage:
echo - API Gateway: http://localhost:3000
echo - User Service: http://localhost:8000
echo - Transaction Service: http://localhost:9000

pause