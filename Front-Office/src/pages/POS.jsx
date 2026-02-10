import React from 'react';
import { Store, CreditCard, BarChart3, Smartphone } from 'lucide-react';

const POS = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Store className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">POINT DE VENTE</h1>
            <p className="text-xl text-gray-300 mb-8">
              Terminal de paiement moderne pour votre commerce
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tous paiements</h3>
              <p className="text-gray-400">Cartes, QR, mobile</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">App mobile</h3>
              <p className="text-gray-400">Gérez vos ventes</p>
            </div>
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Statistiques</h3>
              <p className="text-gray-400">Analyses en temps réel</p>
            </div>
            <div className="text-center">
              <Store className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inventaire</h3>
              <p className="text-gray-400">Gestion de stock</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default POS;
