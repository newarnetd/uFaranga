import React from 'react';
import { QrCode, Zap, Store, Smartphone } from 'lucide-react';

const QRPayments = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <QrCode className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">PAIEMENTS QR</h1>
            <p className="text-xl text-gray-300 mb-8">
              Payez en scannant simplement un code QR
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ultra rapide</h3>
              <p className="text-gray-400">Paiement en 2 secondes</p>
            </div>
            <div className="text-center">
              <Store className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">10,000+ marchands</h3>
              <p className="text-gray-400">Accepté partout</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sans contact</h3>
              <p className="text-gray-400">Hygiénique et pratique</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRPayments;
