import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, CreditCard, Calendar, BookOpen, Check, Shield, Smartphone } from 'lucide-react';

const Education = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Frais scolaires',
      description: 'Paiement en ligne des frais de scolarité'
    },
    {
      icon: Calendar,
      title: 'Paiements échelonnés',
      description: 'Plans de paiement flexibles pour parents'
    },
    {
      icon: Users,
      title: 'Gestion élèves',
      description: 'Suivi des paiements par élève'
    },
    {
      icon: BookOpen,
      title: 'Matériel scolaire',
      description: 'Vente de livres et uniformes'
    }
  ];

  const benefits = [
    'Réduction des impayés de 80%',
    'Gain de temps administratif',
    'Rapports automatiques',
    'Notifications aux parents',
    'Historique complet',
    'Reçus électroniques'
  ];

  const schools = [
    { name: 'École Primaire Saint-Joseph', students: 850, amount: '45M BIF/trimestre' },
    { name: 'Lycée Excellence', students: 1200, amount: '120M BIF/trimestre' },
    { name: 'Université Lumière', students: 3500, amount: '450M BIF/semestre' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  SOLUTIONS ÉDUCATION
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Simplifiez la gestion des paiements pour écoles, lycées et universités
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-3xl font-anton text-primary mb-1">200+</div>
                    <div className="text-sm text-gray-400">Établissements</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-3xl font-anton text-primary mb-1">50K+</div>
                    <div className="text-sm text-gray-400">Élèves</div>
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
          <h2 className="text-4xl font-anton uppercase text-center mb-12">ILS NOUS FONT CONFIANCE</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {schools.map((school, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6">
                <GraduationCap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-4">{school.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Élèves</span>
                    <span className="text-white font-semibold">{school.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Collecte</span>
                    <span className="text-white font-semibold">{school.amount}</span>
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

export default Education;
