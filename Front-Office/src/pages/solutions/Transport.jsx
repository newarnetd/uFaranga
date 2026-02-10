import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, QrCode, Smartphone, MapPin, CreditCard, Check, Users, BarChart3 } from 'lucide-react';

const Transport = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Billets QR Code',
      description: 'Achat et validation sans contact'
    },
    {
      icon: Smartphone,
      title: 'App passagers',
      description: 'Réservation et paiement mobile'
    },
    {
      icon: MapPin,
      title: 'Suivi en temps réel',
      description: 'Localisation des véhicules'
    },
    {
      icon: BarChart3,
      title: 'Gestion de flotte',
      description: 'Tableau de bord complet'
    }
  ];

  const benefits = [
    'Fin des faux billets',
    'Réduction de la fraude',
    'Statistiques en temps réel',
    'Paiements instantanés',
    'Gestion des chauffeurs',
    'Rapports automatiques'
  ];

  const transportTypes = [
    { type: 'Taxis', icon: '🚕', users: '5,000+ chauffeurs' },
    { type: 'Bus urbains', icon: '🚌', users: '200+ véhicules' },
    { type: 'Motos-taxis', icon: '🏍️', users: '10,000+ conducteurs' },
    { type: 'Transport inter-villes', icon: '🚐', users: '50+ compagnies' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  SOLUTIONS TRANSPORT
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Digitalisez les paiements pour taxis, bus et transport en commun
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Paiements sans espèces</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Sécurité maximale</span>
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
                  Digitaliser mon transport
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
          <h2 className="text-4xl font-anton uppercase text-center mb-12">TYPES DE TRANSPORT</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {transportTypes.map((transport, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6 text-center">
                <div className="text-5xl mb-3">{transport.icon}</div>
                <h3 className="font-semibold mb-2">{transport.type}</h3>
                <div className="text-sm text-gray-400">{transport.users}</div>
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

export default Transport;
