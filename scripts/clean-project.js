#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ProjectCleaner {
  constructor() {
    this.rootDir = process.cwd();
    this.deletedFiles = [];
    this.deletedDirs = [];
    this.errors = [];
  }

  // Patterns de fichiers à supprimer
  getFilesToDelete() {
    return [
      // Fichiers de test
      '**/*.test.js',
      '**/*.test.jsx',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/setupTests.js',
      '**/widget_test.dart',
      
      // Fichiers temporaires
      '**/*~',
      '**/~$*',
      '**/.DS_Store',
      '**/Thumbs.db',
      
      // Fichiers de logs
      '**/*.log',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      
      // Fichiers de configuration inutiles
      '**/reportWebVitals.js',
      
      // Fichiers par défaut React/Next.js
      '**/logo.svg',
      '**/favicon.ico' // dans src seulement
    ];
  }

  // Dossiers à supprimer
  getDirsToDelete() {
    return [
      // Dossiers de build
      '**/build',
      '**/dist',
      '**/.next',
      '**/out',
      
      // Dossiers de cache
      '**/.cache',
      '**/.parcel-cache',
      '**/.vite',
      
      // Dossiers de test vides
      '**/test' // seulement si vide
    ];
  }

  deleteFile(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        this.deletedFiles.push(filePath);
        console.log(`✅ Supprimé: ${filePath}`);
        return true;
      }
    } catch (error) {
      this.errors.push(`Erreur lors de la suppression de ${filePath}: ${error.message}`);
      console.log(`❌ Erreur: ${filePath} - ${error.message}`);
      return false;
    }
    return false;
  }

  deleteDirectory(dirPath) {
    try {
      if (fs.existsSync(dirPath)) {
        const stats = fs.statSync(dirPath);
        if (stats.isDirectory()) {
          // Vérifier si le dossier est vide
          const files = fs.readdirSync(dirPath);
          if (files.length === 0) {
            fs.rmdirSync(dirPath);
            this.deletedDirs.push(dirPath);
            console.log(`✅ Dossier supprimé: ${dirPath}`);
            return true;
          } else {
            console.log(`⚠️  Dossier non vide ignoré: ${dirPath}`);
          }
        }
      }
    } catch (error) {
      this.errors.push(`Erreur lors de la suppression du dossier ${dirPath}: ${error.message}`);
      console.log(`❌ Erreur dossier: ${dirPath} - ${error.message}`);
      return false;
    }
    return false;
  }

  findFiles(pattern, baseDir = this.rootDir) {
    const files = [];
    
    const searchDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stats = fs.statSync(fullPath);
          
          // Ignorer node_modules et .git
          if (item === 'node_modules' || item === '.git') {
            continue;
          }
          
          if (stats.isDirectory()) {
            searchDir(fullPath);
          } else if (stats.isFile()) {
            // Vérifier si le fichier correspond au pattern
            if (this.matchesPattern(fullPath, pattern)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Ignorer les erreurs d'accès aux dossiers
      }
    };
    
    searchDir(baseDir);
    return files;
  }

  matchesPattern(filePath, pattern) {
    // Conversion simple de pattern glob vers regex
    const regexPattern = pattern
      .replace(/\*\*/g, '.*')
      .replace(/\*/g, '[^/\\\\]*')
      .replace(/\./g, '\\.');
    
    const regex = new RegExp(regexPattern + '$');
    return regex.test(filePath.replace(/\\/g, '/'));
  }

  cleanTestFiles() {
    console.log('\n🧹 Nettoyage des fichiers de test...');
    
    const testPatterns = [
      '**/*.test.js',
      '**/*.test.jsx',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.js',
      '**/*.spec.jsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      '**/setupTests.js',
      '**/widget_test.dart',
      '**/reportWebVitals.js'
    ];

    let totalDeleted = 0;
    testPatterns.forEach(pattern => {
      const files = this.findFiles(pattern);
      files.forEach(file => {
        if (this.deleteFile(file)) {
          totalDeleted++;
        }
      });
    });

    console.log(`📊 ${totalDeleted} fichiers de test supprimés`);
  }

  cleanTempFiles() {
    console.log('\n🧹 Nettoyage des fichiers temporaires...');
    
    const tempPatterns = [
      '**/*~',
      '**/~$*',
      '**/.DS_Store',
      '**/Thumbs.db',
      '**/*.log'
    ];

    let totalDeleted = 0;
    tempPatterns.forEach(pattern => {
      const files = this.findFiles(pattern);
      files.forEach(file => {
        if (this.deleteFile(file)) {
          totalDeleted++;
        }
      });
    });

    console.log(`📊 ${totalDeleted} fichiers temporaires supprimés`);
  }

  cleanBuildDirs() {
    console.log('\n🧹 Nettoyage des dossiers de build...');
    
    const buildDirs = [
      'build',
      'dist',
      '.next',
      'out',
      '.cache',
      '.parcel-cache'
    ];

    let totalDeleted = 0;
    const searchBuildDirs = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          if (item === 'node_modules' || item === '.git') {
            continue;
          }
          
          const fullPath = path.join(dir, item);
          const stats = fs.statSync(fullPath);
          
          if (stats.isDirectory()) {
            if (buildDirs.includes(item)) {
              try {
                fs.rmSync(fullPath, { recursive: true, force: true });
                this.deletedDirs.push(fullPath);
                console.log(`✅ Dossier de build supprimé: ${fullPath}`);
                totalDeleted++;
              } catch (error) {
                console.log(`❌ Erreur: ${fullPath} - ${error.message}`);
              }
            } else {
              searchBuildDirs(fullPath);
            }
          }
        }
      } catch (error) {
        // Ignorer les erreurs d'accès
      }
    };

    searchBuildDirs(this.rootDir);
    console.log(`📊 ${totalDeleted} dossiers de build supprimés`);
  }

  cleanEmptyDirs() {
    console.log('\n🧹 Nettoyage des dossiers vides...');
    
    let totalDeleted = 0;
    const cleanEmptyDirsRecursive = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        // Nettoyer d'abord les sous-dossiers
        for (const item of items) {
          if (item === 'node_modules' || item === '.git') {
            continue;
          }
          
          const fullPath = path.join(dir, item);
          const stats = fs.statSync(fullPath);
          
          if (stats.isDirectory()) {
            cleanEmptyDirsRecursive(fullPath);
          }
        }
        
        // Vérifier si le dossier est maintenant vide
        const remainingItems = fs.readdirSync(dir);
        if (remainingItems.length === 0 && dir !== this.rootDir) {
          fs.rmdirSync(dir);
          this.deletedDirs.push(dir);
          console.log(`✅ Dossier vide supprimé: ${dir}`);
          totalDeleted++;
        }
      } catch (error) {
        // Ignorer les erreurs
      }
    };

    cleanEmptyDirsRecursive(this.rootDir);
    console.log(`📊 ${totalDeleted} dossiers vides supprimés`);
  }

  generateReport() {
    console.log('\n📋 RAPPORT DE NETTOYAGE');
    console.log('=' .repeat(50));
    console.log(`✅ Fichiers supprimés: ${this.deletedFiles.length}`);
    console.log(`✅ Dossiers supprimés: ${this.deletedDirs.length}`);
    console.log(`❌ Erreurs: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      console.log('\n⚠️  Erreurs rencontrées:');
      this.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    console.log('\n🎉 Nettoyage terminé!');
  }

  clean() {
    console.log('🧹 Démarrage du nettoyage du projet uFaranga...');
    console.log('=' .repeat(60));
    
    this.cleanTestFiles();
    this.cleanTempFiles();
    this.cleanBuildDirs();
    this.cleanEmptyDirs();
    
    this.generateReport();
  }
}

// CLI Interface
if (require.main === module) {
  const cleaner = new ProjectCleaner();
  const command = process.argv[2];
  
  switch (command) {
    case 'test':
      cleaner.cleanTestFiles();
      break;
    case 'temp':
      cleaner.cleanTempFiles();
      break;
    case 'build':
      cleaner.cleanBuildDirs();
      break;
    case 'empty':
      cleaner.cleanEmptyDirs();
      break;
    case 'all':
    default:
      cleaner.clean();
      break;
  }
}

module.exports = ProjectCleaner;