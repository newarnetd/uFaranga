import React from 'react';
import { PiggyBank, TrendingUp, Target, Lock } from 'lucide-react';

const Savings = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <PiggyBank className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">ÉPARGNE AUTOMATIQUE</h1>
            <p className="text-xl text-gray-300 mb-8">
              Atteignez vos objectifs d'épargne facilement
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Objectifs personnalisés</h3>
              <p className="text-gray-400">Définissez vos propres buts</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Épargne automatique</h3>
              <p className="text-gray-400">Virements programmés</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisé</h3>
              <p className="text-gray-400">Votre argent protégé</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Savings;
