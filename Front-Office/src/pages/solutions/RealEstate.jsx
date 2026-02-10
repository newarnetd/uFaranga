import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Calendar, FileText, Users, Check, Shield, DollarSign } from 'lucide-react';

const RealEstate = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Loyers automatiques',
      description: 'Prélèvement mensuel automatisé'
    },
    {
      icon: FileText,
      title: 'Contrats digitaux',
      description: 'Signature et paiement en ligne'
    },
    {
      icon: Users,
      title: 'Gestion locataires',
      description: 'Suivi des paiements et retards'
    },
    {
      icon: Shield,
      title: 'Cautions sécurisées',
      description: 'Dépôts de garantie protégés'
    }
  ];

  const benefits = [
    'Fin des retards de paiement',
    'Rappels automatiques',
    'Quittances électroniques',
    'Historique complet',
    'Déclarations fiscales simplifiées',
    'Support dédié'
  ];

  const useCases = [
    { type: 'Appartements', properties: '500+ biens', revenue: '200M BIF/mois' },
    { type: 'Bureaux', properties: '150+ locaux', revenue: '180M BIF/mois' },
    { type: 'Commerces', properties: '300+ boutiques', revenue: '250M BIF/mois' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  SOLUTIONS IMMOBILIER
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Automatisez la gestion des loyers et des ventes immobilières
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-3xl font-anton text-primary mb-1">1,000+</div>
                    <div className="text-sm text-gray-400">Propriétés</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-3xl font-anton text-primary mb-1">98%</div>
                    <div className="text-sm text-gray-400">Taux collecte</div>
                  </div>
                </div>

                <Link 
                  to="/entreprises"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Gérer mes propriétés
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

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">CAS D'UTILISATION</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-4">{useCase.type}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Biens gérés</span>
                    <span className="text-white font-semibold">{useCase.properties}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenus</span>
                    <span className="text-white font-semibold">{useCase.revenue}</span>
                  </div>
                </div>
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
    </div>
  );
};

export default RealEstate;
