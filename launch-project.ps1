# Script PowerShell pour lancer automatiquement le bon projet
param(
    [string]$ProjectPath = (Get-Location).Path
)

function Detect-ProjectType {
    param([string]$Path)
    
    $files = Get-ChildItem -Path $Path -Name
    
    # Vérifier le type de projet
    if ($files -contains "vite.config.js" -or $files -contains "vite.config.ts") {
        return "vite"
    }
    elseif ($files -contains "next.config.js" -or $files -contains "next.config.ts") {
        return "nextjs"
    }
    elseif ($files -contains "pubspec.yaml") {
        return "flutter"
    }
    elseif ($files -contains "manage.py") {
        return "django"
    }
    elseif ($files -contains "pom.xml") {
        return "springboot"
    }
    elseif ($files -contains "package.json") {
        $packageJson = Get-Content -Path (Join-Path $Path "package.json") | ConvertFrom-Json
        if ($packageJson.scripts.dev) {
            return "nodejs"
        }
    }
    
    return "unknown"
}

function Launch-Project {
    param(
        [string]$ProjectType,
        [string]$Path
    )
    
    Set-Location -Path $Path
    
    switch ($ProjectType) {
        "vite" {
            Write-Host "🚀 Lancement du projet React + Vite..." -ForegroundColor Green
            npm run dev
        }
        "nextjs" {
            Write-Host "🚀 Lancement du projet Next.js..." -ForegroundColor Green
            npm run dev
        }
        "nodejs" {
            Write-Host "🚀 Lancement du projet Node.js..." -ForegroundColor Green
            npm run dev
        }
        "flutter" {
            Write-Host "🚀 Lancement du projet Flutter..." -ForegroundColor Green
            flutter run
        }
        "django" {
            Write-Host "🚀 Lancement du projet Django..." -ForegroundColor Green
            python manage.py runserver
        }
        "springboot" {
            Write-Host "🚀 Lancement du projet Spring Boot..." -ForegroundColor Green
            mvn spring-boot:run
        }
        default {
            Write-Host "❌ Type de projet non reconnu" -ForegroundColor Red
            Write-Host ""
            Write-Host "Répertoires de projets disponibles:" -ForegroundColor Yellow
            Write-Host "- Back-Office (React + Vite)" -ForegroundColor Cyan
            Write-Host "- Front-Office (Next.js)" -ForegroundColor Cyan
            Write-Host "- Node (Node.js API)" -ForegroundColor Cyan
            Write-Host "- mobile (Flutter)" -ForegroundColor Cyan
            Write-Host "- Django (Django API)" -ForegroundColor Cyan
            Write-Host "- SpringBoot (Spring Boot API)" -ForegroundColor Cyan
        }
    }
}

# Script principal
$projectType = Detect-ProjectType -Path $ProjectPath
Launch-Project -ProjectType $projectType -Path $ProjectPath