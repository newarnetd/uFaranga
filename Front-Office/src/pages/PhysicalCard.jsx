import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, Shield, Smartphone } from 'lucide-react';

const PhysicalCard = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CreditCard className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">CARTE PHYSIQUE</h1>
            <p className="text-xl text-gray-300 mb-8">
              Carte bancaire internationale Visa/Mastercard livrée chez vous
            </p>
            <Link to="/telecharger" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Commander ma carte
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sans contact</h3>
              <p className="text-gray-400">Paiements NFC rapides</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Livraison</h3>
              <p className="text-gray-400">Reçue en 5-7 jours</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisée</h3>
              <p className="text-gray-400">Puce EMV et code PIN</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contrôle total</h3>
              <p className="text-gray-400">Gérez depuis l'app</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicalCard;
