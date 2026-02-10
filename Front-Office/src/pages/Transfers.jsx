import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Zap, Shield, Users, DollarSign } from 'lucide-react';

const Transfers = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Send className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">TRANSFERTS P2P</h1>
            <p className="text-xl text-gray-300 mb-8">
              Envoyez de l'argent gratuitement et instantanément à vos proches
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instantané</h3>
              <p className="text-gray-400">Reçu en quelques secondes</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gratuit</h3>
              <p className="text-gray-400">0 frais entre utilisateurs</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisé</h3>
              <p className="text-gray-400">Cryptage de bout en bout</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Simple</h3>
              <p className="text-gray-400">Juste un numéro de téléphone</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfers;
