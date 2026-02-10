import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Une app, toutes vos finances
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Découvrez comment uFaranga révolutionne la gestion d'argent en Afrique
          </p>
        </div>
      </section>

      {/* Paiements & Transferts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Payez et transférez en toute simplicité
          </h2>
          
          <div className="space-y-16">
            {/* Transferts P2P */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Transferts P2P</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Envoyez de l'argent instantanément à n'importe qui</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Juste un numéro de téléphone suffit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Gratuit entre utilisateurs uFaranga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Confirmé en moins de 2 secondes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
            </div>

            {/* Paiement marchand */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                <span className="text-6xl">📷</span>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Paiement marchand par QR Code</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Payez chez 10,000+ commerçants partenaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Scannez le QR code, confirmez, c'est payé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Cashback jusqu'à 5% chez certains marchands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à simplifier votre vie financière ?
          </h2>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Télécharger l'app maintenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;
