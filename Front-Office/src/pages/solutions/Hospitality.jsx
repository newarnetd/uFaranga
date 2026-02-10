import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CreditCard, Smartphone, Users, Calendar, Check, Star, Utensils, Hotel, Coffee, Cake } from 'lucide-react';

const Hospitality = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Paiements en ligne',
      description: 'Réservations avec paiement anticipé'
    },
    {
      icon: Smartphone,
      title: 'Check-in mobile',
      description: 'Enregistrement sans contact'
    },
    {
      icon: Utensils,
      title: 'Commandes restaurant',
      description: 'Paiement à table par QR code'
    },
    {
      icon: Users,
      title: 'Programme fidélité',
      description: 'Récompensez vos clients réguliers'
    }
  ];

  const benefits = [
    'Réduction du temps d\'attente',
    'Expérience client améliorée',
    'Gestion des réservations',
    'Paiements sécurisés',
    'Rapports en temps réel',
    'Support multilingue'
  ];

  const establishments = [
    { type: 'Hôtels', iconComponent: Hotel, count: '50+ établissements' },
    { type: 'Restaurants', iconComponent: Utensils, count: '200+ restaurants' },
    { type: 'Bars & Cafés', iconComponent: Coffee, count: '150+ établissements' },
    { type: 'Traiteurs', iconComponent: Cake, count: '80+ services' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  SOLUTIONS HÔTELLERIE
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Modernisez les paiements dans votre hôtel, restaurant ou café
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Paiements sans contact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Réservations en ligne</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Gestion simplifiée</span>
                  </div>
                </div>

                <Link
                  to="/entreprises"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Équiper mon établissement
                </Link>
              </div>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">SECTEURS COUVERTS</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {establishments.map((establishment, idx) => (
              <div key={idx} className="bg-gray-900/40 border border-white/10 rounded-xl p-6 text-center hover:bg-gray-900/60 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <establishment.iconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{establishment.type}</h3>
                <div className="text-sm text-gray-400">{establishment.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


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

      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">REJOIGNEZ-NOUS</h2>
            <p className="text-xl text-gray-300 mb-8">
              Plus de 500 établissements nous font confiance
            </p>
            <Link
              to="/entreprises"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;
