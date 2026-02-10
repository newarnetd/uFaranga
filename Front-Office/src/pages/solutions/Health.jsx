import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, CreditCard, Calendar, Users, FileText, Check, Shield, Clock } from 'lucide-react';

const Health = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Paiements consultations',
      description: 'Encaissement rapide et sécurisé'
    },
    {
      icon: Calendar,
      title: 'Rendez-vous en ligne',
      description: 'Réservation avec paiement anticipé'
    },
    {
      icon: FileText,
      title: 'Facturation automatique',
      description: 'Génération de factures électroniques'
    },
    {
      icon: Users,
      title: 'Gestion patients',
      description: 'Historique des paiements par patient'
    }
  ];

  const benefits = [
    'Réduction du temps d\'attente',
    'Zéro manipulation d\'espèces',
    'Rapports financiers automatiques',
    'Conformité RGPD',
    'Paiements d\'assurance',
    'Support 24/7'
  ];

  const healthPartners = [
    { name: 'Clinique Espoir', patients: '500+/mois', amount: '25M BIF/mois' },
    { name: 'Hôpital Prince Régent', patients: '2000+/mois', amount: '150M BIF/mois' },
    { name: 'Centre Médical Lumière', patients: '800+/mois', amount: '45M BIF/mois' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  SOLUTIONS SANTÉ
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Modernisez les paiements dans votre hôpital, clinique ou cabinet médical
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-3xl font-anton text-primary mb-1">150+</div>
                    <div className="text-sm text-gray-400">Établissements</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-3xl font-anton text-primary mb-1">30K+</div>
                    <div className="text-sm text-gray-400">Patients/mois</div>
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

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">NOS PARTENAIRES SANTÉ</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {healthPartners.map((partner, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-4">{partner.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Patients</span>
                    <span className="text-white font-semibold">{partner.patients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white font-semibold">{partner.amount}</span>
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

      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">REJOIGNEZ-NOUS</h2>
            <p className="text-xl text-gray-300 mb-8">
              Améliorez l'expérience de vos patients avec des paiements modernes
            </p>
            <Link 
              to="/entreprises"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
