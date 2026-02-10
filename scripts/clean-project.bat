@echo off
setlocal

echo 🧹 Nettoyage du projet uFaranga
echo ================================

REM Supprimer les dossiers de build
echo 📁 Suppression des dossiers de build...
if exist "Back-Office\build" rmdir /s /q "Back-Office\build"
if exist "Back-Office\dist" rmdir /s /q "Back-Office\dist"
if exist "Front-Office\.next" rmdir /s /q "Front-Office\.next"
if exist "Front-Office\build" rmdir /s /q "Front-Office\build"
if exist "Front-Office\dist" rmdir /s /q "Front-Office\dist"
if exist "Front-Office\out" rmdir /s /q "Front-Office\out"

REM Supprimer les dossiers de cache
echo 💾 Suppression des caches...
if exist "Back-Office\.cache" rmdir /s /q "Back-Office\.cache"
if exist "Back-Office\.parcel-cache" rmdir /s /q "Back-Office\.parcel-cache"
if exist "Front-Office\.cache" rmdir /s /q "Front-Office\.cache"
if exist "Front-Office\.parcel-cache" rmdir /s /q "Front-Office\.parcel-cache"

REM Supprimer les fichiers de logs
echo 📄 Suppression des logs...
for /r . %%f in (*.log) do (
    if not "%%~pf"=="node_modules" (
        del /q "%%f" 2>nul
        echo Supprimé: %%f
    )
)

REM Supprimer les fichiers temporaires
echo 🗑️  Suppression des fichiers temporaires...
for /r . %%f in (*~) do (
    if not "%%~pf"=="node_modules" (
        del /q "%%f" 2>nul
        echo Supprimé: %%f
    )
)

for /r . %%f in (~$*) do (
    if not "%%~pf"=="node_modules" (
        del /q "%%f" 2>nul
        echo Supprimé: %%f
    )
)

REM Supprimer les fichiers système
del /q /s ".DS_Store" 2>nul
del /q /s "Thumbs.db" 2>nul

echo.
echo ✅ Nettoyage terminé!
echo.
echo 💡 Pour un nettoyage plus approfondi, utilisez:
echo    node scripts/clean-project.js

pause