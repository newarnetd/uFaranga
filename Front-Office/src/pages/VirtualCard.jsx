import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Shield, Zap, Globe, Lock, Eye } from 'lucide-react';

const VirtualCard = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CreditCard className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">CARTE VIRTUELLE</h1>
            <p className="text-xl text-gray-300 mb-8">
              Visa/Mastercard virtuelle pour vos achats en ligne en toute sécurité
            </p>
            <Link to="/telecharger" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Obtenir ma carte virtuelle
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instantanée</h3>
              <p className="text-gray-400">Créez votre carte en quelques secondes</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisée</h3>
              <p className="text-gray-400">Protection 3D Secure et notifications</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Internationale</h3>
              <p className="text-gray-400">Acceptée partout dans le monde</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualCard;
