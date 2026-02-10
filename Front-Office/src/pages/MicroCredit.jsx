import React from 'react';
import { DollarSign, Zap, Calculator, CheckCircle } from 'lucide-react';

const MicroCredit = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <DollarSign className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">MICRO-CRÉDIT</h1>
            <p className="text-xl text-gray-300 mb-8">
              Obtenez un prêt jusqu'à 500,000 BIF en quelques minutes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Approbation rapide</h3>
              <p className="text-gray-400">Réponse en 5 minutes</p>
            </div>
            <div className="text-center">
              <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Taux compétitifs</h3>
              <p className="text-gray-400">À partir de 2% par mois</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sans garantie</h3>
              <p className="text-gray-400">Basé sur votre historique</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroCredit;
