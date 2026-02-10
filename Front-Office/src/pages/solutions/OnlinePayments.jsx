import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Code, Shield, Zap, Check, CreditCard, Smartphone } from 'lucide-react';

const OnlinePayments = () => {
  const features = [
    {
      icon: Code,
      title: 'API Simple',
      description: 'Intégration en quelques lignes de code'
    },
    {
      icon: Shield,
      title: '3D Secure',
      description: 'Protection maximale contre la fraude'
    },
    {
      icon: Zap,
      title: 'Instantané',
      description: 'Confirmation en temps réel'
    },
    {
      icon: Globe,
      title: 'Multi-devises',
      description: 'Acceptez BIF, USD, EUR'
    }
  ];

  const platforms = [
    { name: 'WooCommerce', logo: '🛒', integration: '5 min' },
    { name: 'Shopify', logo: '🛍️', integration: '3 min' },
    { name: 'PrestaShop', logo: '🏪', integration: '5 min' },
    { name: 'Custom', logo: '⚙️', integration: '10 min' }
  ];

  const pricing = [
    { range: '0 - 1M BIF/mois', fee: '2.5%' },
    { range: '1M - 10M BIF/mois', fee: '2%' },
    { range: '10M+ BIF/mois', fee: '1.5%' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  PAIEMENTS EN LIGNE
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Acceptez les paiements sur votre site e-commerce en toute simplicité
                </p>
                
                <div className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-primary" />
                      <span className="text-gray-300">{feature.title}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/developpeurs"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Voir la documentation
                </Link>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Intégration rapide</h3>
                <div className="bg-black rounded-xl p-6 mb-6">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`// Installation
npm install ufaranga-sdk

// Initialisation
const ufaranga = new Ufaranga({
  apiKey: 'YOUR_API_KEY'
});

// Créer un paiement
const payment = await ufaranga
  .createPayment({
    amount: 50000,
    currency: 'BIF',
    description: 'Achat produit'
  });`}</code>
                  </pre>
                </div>
                <div className="text-sm text-gray-400">
                  Intégration complète en moins de 10 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">PLATEFORMES SUPPORTÉES</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6 text-center">
                <div className="text-5xl mb-3">{platform.logo}</div>
                <h3 className="font-semibold mb-2">{platform.name}</h3>
                <div className="text-sm text-gray-400">Intégration: {platform.integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">TARIFICATION</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricing.map((tier, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-6 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-lg">{tier.range}</div>
                  <div className="text-sm text-gray-400">Volume mensuel</div>
                </div>
                <div className="text-3xl font-anton text-primary">{tier.fee}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlinePayments;
