@echo off
setlocal enabledelayedexpansion

echo 🧪 Test des services uFaranga
echo =============================

REM Attendre que les services démarrent
echo ⏳ Attente du démarrage des services (30s)...
timeout /t 30 /nobreak >nul

echo.
echo 🔍 Test des services...

set success_count=0
set total_count=0

REM Fonction pour tester un service
:test_service
set service_name=%1
set url=%2
set expected_status=%3
if "%expected_status%"=="" set expected_status=200

echo Testing %service_name%...

REM Utiliser curl pour tester le service
curl -s -o nul -w "%%{http_code}" "%url%" --connect-timeout 5 --max-time 10 > temp_response.txt 2>nul
set /p response=<temp_response.txt
del temp_response.txt 2>nul

if "%response%"=="%expected_status%" (
    echo ✅ %service_name% OK
    set /a success_count+=1
) else (
    echo ❌ %service_name% FAILED ^(HTTP %response%^)
)
set /a total_count+=1
goto :eof

echo.
echo 🟢 Services Node.js:
call :test_service "API Gateway" "http://localhost:3000/health"
call :test_service "WebSocket Service" "http://localhost:3002/health"

echo.
echo 🟡 Services Django:
call :test_service "User Service" "http://localhost:8000/health"
call :test_service "Wallet Service" "http://localhost:8001/health"
call :test_service "KYC Service" "http://localhost:8002/health"

echo.
echo 🟠 Services Spring Boot:
call :test_service "Transaction Service" "http://localhost:9000/actuator/health"
call :test_service "Fraud Detection Service" "http://localhost:9001/actuator/health"

echo.
echo 📊 Résumé des tests:
echo Services testés: %total_count%
echo Services OK: %success_count%
set /a failed_count=%total_count%-%success_count%
echo Services KO: %failed_count%

if %success_count%==%total_count% (
    echo 🎉 Tous les services sont opérationnels!
    exit /b 0
) else (
    echo ⚠️  Certains services ne répondent pas correctement
    exit /b 1
)

endlocal