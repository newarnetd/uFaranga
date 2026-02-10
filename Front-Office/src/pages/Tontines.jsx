import React from 'react';
import { Users, TrendingUp, Shield, Calendar } from 'lucide-react';

const Tontines = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">TONTINES DIGITALES</h1>
            <p className="text-xl text-gray-300 mb-8">
              Épargnez en groupe de manière moderne et sécurisée
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Épargne collective</h3>
              <p className="text-gray-400">Créez ou rejoignez un groupe</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contributions régulières</h3>
              <p className="text-gray-400">Versements automatiques</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent</h3>
              <p className="text-gray-400">Suivi en temps réel</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rentable</h3>
              <p className="text-gray-400">Atteignez vos objectifs plus vite</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tontines;
