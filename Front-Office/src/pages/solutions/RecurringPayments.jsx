import React from 'react';
import { Link } from 'react-router-dom';
import { Repeat, Calendar, CreditCard, Check, Zap } from 'lucide-react';

const RecurringPayments = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Repeat className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">PAIEMENTS RÉCURRENTS</h1>
            <p className="text-xl text-gray-300 mb-8">
              Automatisez vos abonnements et paiements mensuels
            </p>
            <Link to="/api" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Intégrer les abonnements
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Calendar, title: 'Planification flexible', desc: 'Quotidien, hebdomadaire, mensuel' },
              { icon: Zap, title: 'Automatique', desc: 'Aucune intervention manuelle' },
              { icon: CreditCard, title: 'Multi-méthodes', desc: 'Carte, wallet, mobile money' }
            ].map((f, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-6 text-center">
                <f.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecurringPayments;
