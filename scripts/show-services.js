#!/usr/bin/env node

const ConfigManager = require('../config/config-manager');

class ServiceDisplay {
  constructor() {
    this.configManager = new ConfigManager();
  }

  displayServicesTable() {
    const services = this.configManager.getAllServices();
    const environment = this.configManager.getEnvironment();
    
    console.log(`\n  uFaranga - Services Configuration`);
    console.log(` Environnement: ${environment.toUpperCase()}`);
    console.log('=' .repeat(100));

    // Grouper par catégorie
    const categories = {};
    services.forEach(service => {
      if (!categories[service.category]) {
        categories[service.category] = [];
      }
      categories[service.category].push(service);
    });

    // Afficher chaque catégorie
    Object.keys(categories).sort().forEach(category => {
      this.displayCategory(category, categories[category]);
    });

    // Résumé des ports utilisés
    this.displayPortSummary(services);
  }

  displayCategory(categoryName, services) {
    const categoryIcons = {
      'frontend': '',
      'backend.node-services': '',
      'backend.django-services': '',
      'backend.spring-services': '',
      'infrastructure.databases': '',
      'infrastructure.messaging': '',
      'infrastructure.monitoring': ''
    };

    const icon = categoryIcons[categoryName] || '';
    console.log(`\n${icon} ${categoryName.toUpperCase().replace('.', ' → ')}`);
    console.log('-'.repeat(100));
    
    // En-tête du tableau
    console.log('│ Service                    │ Port │ URL                                    │ Status │ Tech        │');
    console.log('├────────────────────────────┼──────┼────────────────────────────────────────┼────────┼─────────────┤');
    
    services.forEach(service => {
      const name = service.displayName.padEnd(26);
      const port = (service.port || 'N/A').toString().padEnd(4);
      const url = (service.url || 'N/A').padEnd(38);
      const status = service.internal ? '🔒 Int' : '🌐 Pub';
      const tech = (service.technology || 'N/A').padEnd(11);
      
      console.log(`│ ${name} │ ${port} │ ${url} │ ${status} │ ${tech} │`);
    });
    
    console.log('└────────────────────────────┴──────┴────────────────────────────────────────┴────────┴─────────────┘');
  }

  displayPortSummary(services) {
    console.log('\n📊 RÉSUMÉ DES PORTS');
    console.log('=' .repeat(50));
    
    const portRanges = this.configManager.config.port_ranges;
    const usedPorts = services
      .filter(s => s.port)
      .map(s => ({ port: s.port, name: s.displayName, category: s.category }))
      .sort((a, b) => a.port - b.port);

    console.log('\n🎯 Ports utilisés:');
    usedPorts.forEach(({ port, name, category }) => {
      console.log(`  ${port.toString().padStart(4)} - ${name} (${category})`);
    });

    console.log('\n📋 Plages de ports définies:');
    Object.entries(portRanges).forEach(([range, ports]) => {
      console.log(`  ${range.padEnd(20)} : ${ports}`);
    });

    // Vérifier les conflits
    const portCounts = {};
    usedPorts.forEach(({ port }) => {
      portCounts[port] = (portCounts[port] || 0) + 1;
    });

    const conflicts = Object.entries(portCounts).filter(([port, count]) => count > 1);
    if (conflicts.length > 0) {
      console.log('\n⚠️  CONFLITS DÉTECTÉS:');
      conflicts.forEach(([port, count]) => {
        console.log(`  Port ${port} utilisé ${count} fois`);
      });
    } else {
      console.log('\n✅ Aucun conflit de port détecté');
    }
  }

  displayHealthChecks() {
    const services = this.configManager.getAllServices();
    
    console.log('\n🏥 HEALTH CHECKS');
    console.log('=' .repeat(80));
    
    services.forEach(service => {
      if (service.url && !service.internal) {
        let healthEndpoint = '/health';
        
        if (service.category.includes('spring-services')) {
          healthEndpoint = '/actuator/health';
        } else if (service.category.includes('django-services')) {
          healthEndpoint = '/health';
        }
        
        const healthUrl = service.url + healthEndpoint;
        console.log(`${service.displayName.padEnd(30)} : ${healthUrl}`);
      }
    });
  }

  displayDocumentationUrls() {
    const services = this.configManager.getAllServices();
    
    console.log('\n📚 DOCUMENTATION APIs');
    console.log('=' .repeat(80));
    
    services.forEach(service => {
      if (service.url && !service.internal) {
        let docsEndpoint = '';
        
        if (service.category.includes('spring-services')) {
          docsEndpoint = '/swagger-ui.html';
        } else if (service.category.includes('django-services')) {
          docsEndpoint = '/api/docs/';
        } else if (service.category.includes('node-services')) {
          docsEndpoint = '/api/docs';
        }
        
        if (docsEndpoint) {
          const docsUrl = service.url + docsEndpoint;
          console.log(`${service.displayName.padEnd(30)} : ${docsUrl}`);
        }
      }
    });
  }

  displayQuickAccess() {
    const environment = this.configManager.getEnvironment();
    
    console.log('\n🚀 ACCÈS RAPIDE');
    console.log('=' .repeat(50));
    
    if (environment === 'development') {
      console.log('Frontend:');
      console.log('  📱 Back Office    : http://localhost:3000');
      console.log('  🌐 Front Office   : http://localhost:3001');
      console.log('  📱 Mobile (Web)   : http://localhost:3002');
      
      console.log('\nAPIs principales:');
      console.log('  🚪 API Gateway    : http://localhost:3000');
      console.log('  👤 Users          : http://localhost:8000');
      console.log('  💰 Wallets        : http://localhost:8001');
      console.log('  🔍 KYC            : http://localhost:8002');
      console.log('  💳 Transactions   : http://localhost:9000');
      
      console.log('\nMonitoring:');
      console.log('  📊 Grafana        : http://localhost:3000 (admin/admin123)');
      console.log('  📈 Prometheus     : http://localhost:9090');
      
      console.log('\nBases de données:');
      console.log('  🐘 PostgreSQL     : localhost:5432');
      console.log('  🍃 MongoDB        : localhost:27017');
      console.log('  🔴 Redis          : localhost:6379');
      console.log('  📨 Kafka          : localhost:9092');
    }
  }

  generateMarkdownTable() {
    const services = this.configManager.getAllServices();
    const environment = this.configManager.getEnvironment();
    
    console.log(`# uFaranga Services - ${environment.toUpperCase()}\n`);
    console.log('| Service | Category | Port | URL | Technology | Status |');
    console.log('|---------|----------|------|-----|------------|--------|');
    
    services.forEach(service => {
      const status = service.internal ? '🔒 Internal' : '🌐 Public';
      console.log(`| ${service.displayName} | ${service.category} | ${service.port || 'N/A'} | ${service.url || 'N/A'} | ${service.technology || 'N/A'} | ${status} |`);
    });
  }

  exportToJson() {
    const services = this.configManager.getAllServices();
    const environment = this.configManager.getEnvironment();
    
    const exportData = {
      environment,
      generated_at: new Date().toISOString(),
      services: services.map(service => ({
        name: service.name,
        display_name: service.displayName,
        category: service.category,
        port: service.port,
        url: service.url,
        technology: service.technology,
        description: service.description,
        internal: service.internal || false
      }))
    };
    
    console.log(JSON.stringify(exportData, null, 2));
  }
}

// CLI Interface
if (require.main === module) {
  const display = new ServiceDisplay();
  const command = process.argv[2];
  
  switch (command) {
    case 'table':
    case 'list':
    default:
      display.displayServicesTable();
      display.displayQuickAccess();
      break;
    
    case 'health':
      display.displayHealthChecks();
      break;
    
    case 'docs':
      display.displayDocumentationUrls();
      break;
    
    case 'markdown':
    case 'md':
      display.generateMarkdownTable();
      break;
    
    case 'json':
      display.exportToJson();
      break;
    
    case 'help':
      console.log('uFaranga Services Display');
      console.log('');
      console.log('Commandes disponibles:');
      console.log('  table, list (défaut) - Afficher le tableau des services');
      console.log('  health               - Afficher les URLs de health check');
      console.log('  docs                 - Afficher les URLs de documentation');
      console.log('  markdown, md         - Générer un tableau Markdown');
      console.log('  json                 - Exporter en JSON');
      console.log('  help                 - Afficher cette aide');
      break;
  }
}

module.exports = ServiceDisplay;