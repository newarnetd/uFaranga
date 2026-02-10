#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Fonction pour détecter le type de projet
function detectProjectType(dir) {
  const files = fs.readdirSync(dir);
  
  // Vérifier si c'est un projet React (Vite)
  if (files.includes('vite.config.js') || files.includes('vite.config.ts')) {
    return 'vite';
  }
  
  // Vérifier si c'est un projet Next.js
  if (files.includes('next.config.js') || files.includes('next.config.ts')) {
    return 'nextjs';
  }
  
  // Vérifier si c'est un projet Flutter
  if (files.includes('pubspec.yaml')) {
    return 'flutter';
  }
  
  // Vérifier si c'est un projet Django
  if (files.includes('manage.py')) {
    return 'django';
  }
  
  // Vérifier si c'est un projet Spring Boot
  if (files.includes('pom.xml')) {
    return 'springboot';
  }
  
  // Vérifier si c'est un projet Node.js
  if (files.includes('package.json')) {
    const packageJson = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'));
    if (packageJson.scripts && packageJson.scripts.dev) {
      return 'nodejs';
    }
  }
  
  // Vérifier si c'est le répertoire racine avec docker-compose
  if (files.includes('docker-compose.yml')) {
    return 'microservices';
  }
  
  return 'unknown';
}

// Fonction pour lancer le projet approprié
function launchProject(projectType, dir) {
  let command, args;
  
  switch (projectType) {
    case 'vite':
      command = 'npm';
      args = ['run', 'dev'];
      break;
    case 'nextjs':
      command = 'npm';
      args = ['run', 'dev'];
      break;
    case 'nodejs':
      command = 'npm';
      args = ['run', 'dev'];
      break;
    case 'flutter':
      command = 'flutter';
      args = ['run'];
      break;
    case 'django':
      command = 'python';
      args = ['manage.py', 'runserver'];
      break;
    case 'springboot':
      command = 'mvn';
      args = ['spring-boot:run'];
      break;
    case 'microservices':
      console.log('🐳 Lancement de l\'architecture microservices complète...');
      console.log('Cela va démarrer tous les services backend avec Docker Compose');
      command = 'docker-compose';
      args = ['up', '--build'];
      break;
    default:
      console.log('Type de projet non reconnu dans:', dir);
      return;
  }
  
  console.log(`🚀 Lancement du projet ${projectType} dans ${dir}`);
  console.log(`Commande: ${command} ${args.join(' ')}`);
  
  const child = spawn(command, args, {
    cwd: dir,
    stdio: 'inherit',
    shell: true
  });
  
  child.on('error', (error) => {
    console.error(`Erreur lors du lancement: ${error.message}`);
  });
  
  child.on('close', (code) => {
    console.log(`Le processus s'est terminé avec le code ${code}`);
  });
}

// Fonction pour afficher les services disponibles
function showAvailableServices() {
  console.log('📋 Services disponibles dans l\'architecture uFaranga:');
  console.log('');
  console.log('🟢 Frontend:');
  console.log('  - Back-Office (React + Vite) - Port 3000');
  console.log('  - Front-Office (Next.js) - Port 3001');
  console.log('  - Mobile (Flutter)');
  console.log('');
  console.log('🔵 Backend Node.js:');
  console.log('  - API Gateway - Port 3000');
  console.log('  - Notification Service - Port 3001');
  console.log('  - WebSocket Service - Port 3002');
  console.log('');
  console.log('🟡 Backend Django:');
  console.log('  - User Service - Port 8000');
  console.log('  - Wallet Service - Port 8001');
  console.log('  - KYC Service - Port 8002');
  console.log('');
  console.log('🟠 Backend Spring Boot:');
  console.log('  - Transaction Service - Port 9000');
  console.log('  - Fraud Detection Service - Port 9001');
  console.log('');
  console.log('🗄️  Infrastructure:');
  console.log('  - PostgreSQL - Port 5432');
  console.log('  - MongoDB - Port 27017');
  console.log('  - Redis - Port 6379');
  console.log('  - Kafka - Port 9092');
  console.log('');
  console.log('💡 Pour lancer tous les services: placez-vous dans le répertoire racine et exécutez ce script');
}

// Script principal
function main() {
  const currentDir = process.cwd();
  const projectType = detectProjectType(currentDir);
  
  if (projectType === 'unknown') {
    console.log('❌ Type de projet non reconnu dans le répertoire courant');
    console.log('');
    showAvailableServices();
    return;
  }
  
  if (projectType === 'microservices') {
    console.log('🎯 Architecture microservices détectée!');
    console.log('');
    showAvailableServices();
    console.log('');
    console.log('Voulez-vous lancer tous les services? (Ctrl+C pour annuler)');
    setTimeout(() => {
      launchProject(projectType, currentDir);
    }, 3000);
    return;
  }
  
  launchProject(projectType, currentDir);
}

// Exporter pour utilisation en tant que module
if (require.main === module) {
  main();
}

module.exports = { detectProjectType, launchProject, showAvailableServices };