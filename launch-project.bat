@echo off
setlocal

REM Script pour lancer automatiquement le bon projet selon le répertoire courant

REM Vérifier si on est dans un sous-dossier du projet
if exist "vite.config.js" (
    echo 🚀 Lancement du projet React + Vite...
    npm run dev
    goto :end
)

if exist "vite.config.ts" (
    echo 🚀 Lancement du projet React + Vite...
    npm run dev
    goto :end
)

if exist "next.config.js" (
    echo 🚀 Lancement du projet Next.js...
    npm run dev
    goto :end
)

if exist "next.config.ts" (
    echo 🚀 Lancement du projet Next.js...
    npm run dev
    goto :end
)

if exist "pubspec.yaml" (
    echo 🚀 Lancement du projet Flutter...
    flutter run
    goto :end
)

if exist "manage.py" (
    echo 🚀 Lancement du projet Django...
    python manage.py runserver
    goto :end
)

if exist "pom.xml" (
    echo 🚀 Lancement du projet Spring Boot...
    mvn spring-boot:run
    goto :end
)

if exist "package.json" (
    echo 🚀 Lancement du projet Node.js...
    npm run dev
    goto :end
)

REM Si aucun projet détecté, afficher les options
echo ❌ Aucun projet détecté dans le répertoire courant
echo.
echo Répertoires de projets disponibles:
echo - Back-Office (React + Vite)
echo - Front-Office (Next.js)  
echo - Node (Node.js API)
echo - mobile (Flutter)
echo - Django (Django API)
echo - SpringBoot (Spring Boot API)
echo.
echo Naviguez vers un de ces répertoires et relancez la commande.

:end
endlocal