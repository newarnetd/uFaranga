import React from 'react';
import { Link } from 'react-router-dom';
import { Store, QrCode, BarChart3, Users, CreditCard, Smartphone, Check, TrendingUp, Shield, Zap } from 'lucide-react';

const Commerce = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Paiements QR Code',
      description: 'Clients paient en scannant votre QR unique'
    },
    {
      icon: CreditCard,
      title: 'Terminal POS',
      description: 'Acceptez cartes et paiements mobiles'
    },
    {
      icon: BarChart3,
      title: 'Tableau de bord',
      description: 'Suivez vos ventes en temps réel'
    },
    {
      icon: Users,
      title: 'Gestion clients',
      description: 'Programme de fidélité intégré'
    }
  ];

  const benefits = [
    'Aucun frais d\'installation',
    'Commission à partir de 1%',
    'Paiement instantané',
    'Rapports détaillés',
    'Support dédié 24/7',
    'Formation gratuite'
  ];

  const useCases = [
    {
      type: 'Boutique de vêtements',
      revenue: '2M BIF/mois',
      transactions: '150+ transactions/jour',
      savings: 'Économie de 30% sur frais bancaires'
    },
    {
      type: 'Supermarché',
      revenue: '15M BIF/mois',
      transactions: '800+ transactions/jour',
      savings: 'Réduction de 50% du temps de caisse'
    },
    {
      type: 'Pharmacie',
      revenue: '5M BIF/mois',
      transactions: '300+ transactions/jour',
      savings: 'Zéro erreur de caisse'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  SOLUTIONS COMMERCE
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transformez votre boutique ou magasin avec des paiements digitaux modernes
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Installation en 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Commissions les plus basses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Support dédié</span>
                  </div>
                </div>

                <Link 
                  to="/telecharger"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Devenir marchand
                </Link>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Pourquoi choisir uFaranga?</h3>
                <div className="space-y-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-black rounded-xl p-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">CAS D'UTILISATION</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6">
                <Store className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{useCase.type}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Chiffre d'affaires</span>
                    <span className="text-white font-semibold">{useCase.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Transactions</span>
                    <span className="text-white font-semibold">{useCase.transactions}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-800">
                    <div className="text-secondary text-sm font-semibold">{useCase.savings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">AVANTAGES</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900 rounded-lg p-4">
                <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">REJOIGNEZ-NOUS</h2>
            <p className="text-xl text-gray-300 mb-8">
              Plus de 5,000 commerces nous font déjà confiance
            </p>
            <Link 
              to="/entreprises"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Devenir marchand partenaire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commerce;
