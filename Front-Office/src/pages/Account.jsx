import React from 'react';
import { Link } from 'react-router-dom';
import { User, Shield, Globe, Smartphone, CreditCard, Zap, Check } from 'lucide-react';

const Account = () => {
  const features = [
    { icon: Zap, title: 'Ouverture instantanée', description: 'Créez votre compte en 2 minutes' },
    { icon: Shield, title: '100% sécurisé', description: 'Cryptage AES-256 et authentification 2FA' },
    { icon: Globe, title: 'Multi-devises', description: 'BIF, USD, EUR et plus' },
    { icon: Smartphone, title: 'Mobile-first', description: 'Gérez tout depuis votre téléphone' }
  ];

  const benefits = [
    'Aucun frais d\'ouverture',
    'Aucun frais de tenue de compte',
    'Transferts P2P gratuits et instantanés',
    'Notifications en temps réel',
    'Support client 24/7',
    'Historique complet des transactions'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">COMPTE PERSONNEL</h1>
            <p className="text-xl text-gray-300 mb-8">
              Un compte mobile gratuit pour gérer votre argent en toute simplicité
            </p>
            <Link to="/telecharger" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Ouvrir un compte gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">AVANTAGES</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
