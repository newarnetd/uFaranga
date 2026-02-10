#!/usr/bin/env python3

import json
import os
import sys
from pathlib import Path
from typing import Dict, Any, Optional, List

class ConfigManager:
    def __init__(self):
        self.config_path = Path(__file__).parent / 'services.json'
        self.config = self.load_config()
    
    def load_config(self) -> Dict[str, Any]:
        """Charger la configuration depuis le fichier JSON"""
        try:
            with open(self.config_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"Erreur lors du chargement de la configuration: {e}")
            sys.exit(1)
    
    def get_environment(self) -> str:
        """Obtenir l'environnement actuel"""
        return os.getenv('DJANGO_ENV', os.getenv('NODE_ENV', 'development'))
    
    def get_service_url(self, category: str, service_name: str, environment: Optional[str] = None) -> Optional[str]:
        """Obtenir l'URL d'un service"""
        env = environment or self.get_environment()
        
        try:
            if '.' in category:
                main_category, sub_category = category.split('.', 1)
                service = self.config['services'][main_category][sub_category][service_name]
            else:
                service = self.config['services'][category][service_name]
            
            return service['urls'].get(env, service['urls'].get('development'))
        except KeyError:
            print(f"Service non trouvé: {category}.{service_name}")
            return None
    
    def get_service_port(self, category: str, service_name: str) -> Optional[int]:
        """Obtenir le port d'un service"""
        try:
            if '.' in category:
                main_category, sub_category = category.split('.', 1)
                service = self.config['services'][main_category][sub_category][service_name]
            else:
                service = self.config['services'][category][service_name]
            
            return service.get('port')
        except KeyError:
            print(f"Port non trouvé pour: {category}.{service_name}")
            return None
    
    def get_database_url(self, db_name: str, environment: Optional[str] = None) -> Optional[str]:
        """Obtenir l'URL de base de données"""
        env = environment or self.get_environment()
        
        try:
            db_config = self.config['services']['infrastructure']['databases']['postgresql']
            base_url = db_config['urls'][env]
            
            # Remplacer le nom de la base de données
            if db_name in db_config['databases']:
                return base_url.replace('postgresql://', f'postgresql://').replace(':5432', f':5432/{db_name}')
            
            return None
        except KeyError:
            return None
    
    def get_redis_url(self, db_index: int = 0, environment: Optional[str] = None) -> Optional[str]:
        """Obtenir l'URL Redis avec index de base"""
        env = environment or self.get_environment()
        
        try:
            redis_config = self.config['services']['infrastructure']['databases']['redis']
            base_url = redis_config['urls'][env]
            return f"{base_url}/{db_index}"
        except KeyError:
            return None
    
    def get_kafka_brokers(self, environment: Optional[str] = None) -> Optional[str]:
        """Obtenir les brokers Kafka"""
        env = environment or self.get_environment()
        
        try:
            kafka_config = self.config['services']['infrastructure']['messaging']['kafka']
            return kafka_config['urls'][env]
        except KeyError:
            return None
    
    def generate_django_settings(self, service_name: str, environment: str = 'development') -> Dict[str, Any]:
        """Générer les paramètres Django pour un service"""
        settings = {}
        
        # Base de données
        if service_name == 'user-service':
            db_name = 'ufaranga_users'
        elif service_name == 'wallet-service':
            db_name = 'ufaranga_wallets'
        elif service_name == 'kyc-service':
            db_name = 'ufaranga_kyc'
        elif service_name == 'admin-service':
            db_name = 'ufaranga_admin'
        else:
            db_name = 'ufaranga'
        
        db_url = self.get_database_url(db_name, environment)
        if db_url:
            # Parser l'URL PostgreSQL
            import urllib.parse as urlparse
            parsed = urlparse.urlparse(db_url)
            
            settings['DATABASES'] = {
                'default': {
                    'ENGINE': 'django.db.backends.postgresql',
                    'NAME': parsed.path[1:] if parsed.path else db_name,
                    'USER': parsed.username,
                    'PASSWORD': parsed.password,
                    'HOST': parsed.hostname,
                    'PORT': parsed.port or 5432,
                }
            }
        
        # Redis
        redis_url = self.get_redis_url(0, environment)
        if redis_url:
            settings['REDIS_URL'] = redis_url
            settings['CACHES'] = {
                'default': {
                    'BACKEND': 'django_redis.cache.RedisCache',
                    'LOCATION': redis_url,
                    'OPTIONS': {
                        'CLIENT_CLASS': 'django_redis.client.DefaultClient',
                    }
                }
            }
        
        # URLs des autres services
        settings['SERVICE_URLS'] = {}
        for category in ['node-services', 'django-services', 'spring-services']:
            if category in self.config['services']['backend']:
                for svc_name, svc_config in self.config['services']['backend'][category].items():
                    if svc_name != service_name:
                        url = svc_config['urls'].get(environment, svc_config['urls'].get('development'))
                        settings['SERVICE_URLS'][svc_name.upper().replace('-', '_')] = url
        
        # Kafka
        kafka_brokers = self.get_kafka_brokers(environment)
        if kafka_brokers:
            settings['KAFKA_BROKERS'] = kafka_brokers
        
        return settings
    
    def display_service_info(self, category: str, service_name: str):
        """Afficher les informations d'un service"""
        try:
            if '.' in category:
                main_category, sub_category = category.split('.', 1)
                service = self.config['services'][main_category][sub_category][service_name]
            else:
                service = self.config['services'][category][service_name]
            
            print(f"\n📋 {service['name']}")
            print("=" * 50)
            print(f"Description: {service['description']}")
            print(f"Technologie: {service['technology']}")
            print(f"Port: {service.get('port', 'N/A')}")
            
            if 'urls' in service:
                print("\nURLs par environnement:")
                for env, url in service['urls'].items():
                    print(f"  {env}: {url}")
            
            if 'health_check' in service:
                print(f"Health Check: {service['health_check']}")
            
            if 'docs' in service:
                print(f"Documentation: {service['docs']}")
            
            if service.get('internal'):
                print("🔒 Service interne")
            
        except KeyError:
            print(f"Service non trouvé: {category}.{service_name}")

def main():
    config_manager = ConfigManager()
    
    if len(sys.argv) < 2:
        print("uFaranga Configuration Manager (Python)")
        print("\nCommandes disponibles:")
        print("  info <category>.<service>  - Informations sur un service")
        print("  url <category>.<service>   - URL d'un service")
        print("  port <category>.<service>  - Port d'un service")
        print("  db <service-name>          - URL de base de données")
        print("  redis [db-index]           - URL Redis")
        print("  kafka                      - Brokers Kafka")
        print("  django-settings <service>  - Paramètres Django")
        return
    
    command = sys.argv[1]
    
    if command == 'info':
        if len(sys.argv) < 3:
            print("Usage: python config_manager.py info <category>.<service>")
            return
        
        parts = sys.argv[2].split('.')
        if len(parts) >= 2:
            category = '.'.join(parts[:-1])
            service_name = parts[-1]
            config_manager.display_service_info(category, service_name)
        else:
            print("Format: <category>.<service>")
    
    elif command == 'url':
        if len(sys.argv) < 3:
            print("Usage: python config_manager.py url <category>.<service>")
            return
        
        parts = sys.argv[2].split('.')
        if len(parts) >= 2:
            category = '.'.join(parts[:-1])
            service_name = parts[-1]
            url = config_manager.get_service_url(category, service_name)
            if url:
                print(url)
        else:
            print("Format: <category>.<service>")
    
    elif command == 'port':
        if len(sys.argv) < 3:
            print("Usage: python config_manager.py port <category>.<service>")
            return
        
        parts = sys.argv[2].split('.')
        if len(parts) >= 2:
            category = '.'.join(parts[:-1])
            service_name = parts[-1]
            port = config_manager.get_service_port(category, service_name)
            if port:
                print(port)
        else:
            print("Format: <category>.<service>")
    
    elif command == 'db':
        if len(sys.argv) < 3:
            print("Usage: python config_manager.py db <service-name>")
            return
        
        service_name = sys.argv[2]
        db_url = config_manager.get_database_url(f"ufaranga_{service_name.replace('-service', '').replace('-', '_')}")
        if db_url:
            print(db_url)
    
    elif command == 'redis':
        db_index = int(sys.argv[2]) if len(sys.argv) > 2 else 0
        redis_url = config_manager.get_redis_url(db_index)
        if redis_url:
            print(redis_url)
    
    elif command == 'kafka':
        kafka_brokers = config_manager.get_kafka_brokers()
        if kafka_brokers:
            print(kafka_brokers)
    
    elif command == 'django-settings':
        if len(sys.argv) < 3:
            print("Usage: python config_manager.py django-settings <service-name>")
            return
        
        service_name = sys.argv[2]
        environment = sys.argv[3] if len(sys.argv) > 3 else 'development'
        settings = config_manager.generate_django_settings(service_name, environment)
        print(json.dumps(settings, indent=2))

if __name__ == '__main__':
    main()