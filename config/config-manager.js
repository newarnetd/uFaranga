#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ConfigManager {
  constructor() {
    this.configPath = path.join(__dirname, 'services.json');
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      const configData = fs.readFileSync(this.configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      console.error('Erreur lors du chargement de la configuration:', error.message);
      process.exit(1);
    }
  }

  getEnvironment() {
    return process.env.NODE_ENV || 'development';
  }

  getServiceUrl(category, serviceName, environment = null) {
    const env = environment || this.getEnvironment();
    
    try {
      const service = this.config.services[category][serviceName];
      return service.urls[env] || service.urls.development;
    } catch (error) {
      console.error(`Service non trouvé: ${category}.${serviceName}`);
      return null;
    }
  }

  getServicePort(category, serviceName) {
    try {
      return this.config.services[category][serviceName].port;
    } catch (error) {
      console.error(`Port non trouvé pour: ${category}.${serviceName}`);
      return null;
    }
  }

  getAllServices() {
    const services = [];
    
    Object.keys(this.config.services).forEach(category => {
      if (category === 'infrastructure') {
        // Traiter l'infrastructure séparément
        Object.keys(this.config.services.infrastructure).forEach(subCategory => {
          Object.keys(this.config.services.infrastructure[subCategory]).forEach(serviceName => {
            const service = this.config.services.infrastructure[subCategory][serviceName];
            services.push({
              category: `infrastructure.${subCategory}`,
              name: serviceName,
              displayName: service.name,
              port: service.port,
              url: service.urls ? service.urls[this.getEnvironment()] : null,
              description: service.description,
              technology: service.technology,
              internal: service.internal || false
            });
          });
        });
      } else {
        Object.keys(this.config.services[category]).forEach(subCategory => {
          if (typeof this.config.services[category][subCategory] === 'object' && 
              this.config.services[category][subCategory].name) {
            // Service direct
            const service = this.config.services[category][subCategory];
            services.push({
              category,
              name: subCategory,
              displayName: service.name,
              port: service.port,
              url: service.urls ? service.urls[this.getEnvironment()] : null,
              description: service.description,
              technology: service.technology,
              internal: service.internal || false
            });
          } else {
            // Sous-catégorie de services
            Object.keys(this.config.services[category][subCategory]).forEach(serviceName => {
              const service = this.config.services[category][subCategory][serviceName];
              services.push({
                category: `${category}.${subCategory}`,
                name: serviceName,
                displayName: service.name,
                port: service.port,
                url: service.urls ? service.urls[this.getEnvironment()] : null,
                description: service.description,
                technology: service.technology,
                internal: service.internal || false
              });
            });
          }
        });
      }
    });

    return services;
  }

  displayAllServices() {
    console.log(`\n🏗️  Configuration uFaranga - Environnement: ${this.getEnvironment().toUpperCase()}`);
    console.log('=' .repeat(80));

    const services = this.getAllServices();
    const categories = [...new Set(services.map(s => s.category))];

    categories.forEach(category => {
      const categoryServices = services.filter(s => s.category === category);
      
      console.log(`\n📁 ${category.toUpperCase()}`);
      console.log('-'.repeat(40));
      
      categoryServices.forEach(service => {
        const status = service.internal ? '🔒 Internal' : '🌐 Public';
        console.log(`${status} ${service.displayName}`);
        console.log(`   Port: ${service.port || 'N/A'}`);
        console.log(`   URL:  ${service.url || 'N/A'}`);
        console.log(`   Tech: ${service.technology}`);
        console.log(`   Desc: ${service.description}`);
        console.log('');
      });
    });
  }

  generateEnvFile(environment = 'development') {
    console.log(`# Configuration générée pour l'environnement: ${environment}`);
    console.log(`# Généré le: ${new Date().toISOString()}`);
    console.log('');

    const services = this.getAllServices();
    
    // URLs des services
    console.log('# URLs des services');
    services.forEach(service => {
      if (service.url) {
        const envName = `${service.name.toUpperCase().replace('-', '_')}_URL`;
        console.log(`${envName}=${service.url}`);
      }
    });

    console.log('');
    console.log('# Ports des services');
    services.forEach(service => {
      if (service.port) {
        const envName = `${service.name.toUpperCase().replace('-', '_')}_PORT`;
        console.log(`${envName}=${service.port}`);
      }
    });

    // Configuration spécifique par environnement
    const envConfig = this.config.environments[environment];
    if (envConfig) {
      console.log('');
      console.log('# Configuration environnement');
      console.log(`DOMAIN=${envConfig.domain}`);
      console.log(`PROTOCOL=${envConfig.protocol}`);
    }
  }

  checkPortConflicts() {
    const services = this.getAllServices();
    const portMap = new Map();
    const conflicts = [];

    services.forEach(service => {
      if (service.port) {
        if (portMap.has(service.port)) {
          conflicts.push({
            port: service.port,
            services: [portMap.get(service.port), service]
          });
        } else {
          portMap.set(service.port, service);
        }
      }
    });

    if (conflicts.length > 0) {
      console.log('⚠️  Conflits de ports détectés:');
      conflicts.forEach(conflict => {
        console.log(`Port ${conflict.port}:`);
        conflict.services.forEach(service => {
          console.log(`  - ${service.displayName} (${service.category})`);
        });
      });
      return false;
    } else {
      console.log('✅ Aucun conflit de port détecté');
      return true;
    }
  }

  updateServiceUrl(category, serviceName, environment, newUrl) {
    try {
      if (category.includes('.')) {
        const [mainCategory, subCategory] = category.split('.');
        this.config.services[mainCategory][subCategory][serviceName].urls[environment] = newUrl;
      } else {
        this.config.services[category][serviceName].urls[environment] = newUrl;
      }
      
      this.saveConfig();
      console.log(`✅ URL mise à jour: ${category}.${serviceName} [${environment}] = ${newUrl}`);
    } catch (error) {
      console.error(`❌ Erreur lors de la mise à jour: ${error.message}`);
    }
  }

  saveConfig() {
    try {
      fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error.message);
    }
  }
}

// CLI Interface
if (require.main === module) {
  const configManager = new ConfigManager();
  const command = process.argv[2];

  switch (command) {
    case 'list':
    case 'ls':
      configManager.displayAllServices();
      break;
    
    case 'env':
      const environment = process.argv[3] || 'development';
      configManager.generateEnvFile(environment);
      break;
    
    case 'check':
      configManager.checkPortConflicts();
      break;
    
    case 'url':
      const [category, serviceName] = (process.argv[3] || '').split('.');
      if (category && serviceName) {
        const url = configManager.getServiceUrl(category, serviceName);
        console.log(url);
      } else {
        console.log('Usage: node config-manager.js url <category>.<service>');
      }
      break;
    
    case 'port':
      const [cat, svc] = (process.argv[3] || '').split('.');
      if (cat && svc) {
        const port = configManager.getServicePort(cat, svc);
        console.log(port);
      } else {
        console.log('Usage: node config-manager.js port <category>.<service>');
      }
      break;
    
    default:
      console.log('uFaranga Configuration Manager');
      console.log('');
      console.log('Commandes disponibles:');
      console.log('  list, ls           - Afficher tous les services');
      console.log('  env [environment]  - Générer un fichier .env');
      console.log('  check              - Vérifier les conflits de ports');
      console.log('  url <category>.<service> - Obtenir l\'URL d\'un service');
      console.log('  port <category>.<service> - Obtenir le port d\'un service');
      console.log('');
      console.log('Exemples:');
      console.log('  node config-manager.js list');
      console.log('  node config-manager.js env production');
      console.log('  node config-manager.js url backend.node-services.api-gateway');
      console.log('  node config-manager.js port backend.django-services.user-service');
  }
}

module.exports = ConfigManager;