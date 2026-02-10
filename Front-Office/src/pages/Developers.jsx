import React from 'react';
import { Link } from 'react-router-dom';

const Developers = () => {
  const features = [
    {
      icon: '🔌',
      title: 'API REST',
      description: 'API simple et puissante pour intégrer uFaranga dans vos applications'
    },
    {
      icon: '📚',
      title: 'Documentation complète',
      description: 'Guides détaillés, exemples de code et références API'
    },
    {
      icon: '🔐',
      title: 'Sécurité avancée',
      description: 'OAuth 2.0, webhooks sécurisés et chiffrement de bout en bout'
    },
    {
      icon: '🧪',
      title: 'Environnement de test',
      description: 'Sandbox complet pour tester vos intégrations sans risque'
    }
  ];

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/payments',
      description: 'Initier un paiement'
    },
    {
      method: 'GET',
      path: '/api/v1/transactions/:id',
      description: 'Récupérer les détails d\'une transaction'
    },
    {
      method: 'POST',
      path: '/api/v1/transfers',
      description: 'Effectuer un transfert'
    },
    {
      method: 'GET',
      path: '/api/v1/balance',
      description: 'Consulter le solde'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">API uFaranga</h1>
          <p className="text-xl mb-8">
            Intégrez les paiements mobiles dans vos applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#documentation"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Voir la documentation
            </a>
            <a
              href="#signup"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Obtenir une clé API
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Pourquoi choisir notre API ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Commencez en quelques lignes
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`// Initialiser le client uFaranga
const ufaranga = require('ufaranga-sdk');

const client = new ufaranga.Client({
  apiKey: 'votre_cle_api',
  environment: 'production'
});

// Effectuer un paiement
const payment = await client.payments.create({
  amount: 5000,
  currency: 'BIF',
  recipient: '+25779000000',
  description: 'Paiement pour commande #1234'
});

console.log('Paiement effectué:', payment.id);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Endpoints principaux
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded font-mono text-sm font-semibold ${
                    endpoint.method === 'GET' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-foreground font-mono">{endpoint.path}</code>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl mb-8">
            Créez votre compte développeur et obtenez vos clés API gratuitement
          </p>
          <a
            href="#signup"
            className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Créer un compte développeur
          </a>
        </div>
      </section>
    </div>
  );
};

export default Developers;
