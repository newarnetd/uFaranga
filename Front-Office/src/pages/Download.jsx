import React from 'react';
import { Smartphone, Download as DownloadIcon, Star, Users } from 'lucide-react';

const Download = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">TÉLÉCHARGER L'APP</h1>
            <p className="text-xl text-gray-300 mb-8">
              Disponible sur iOS et Android
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
                <DownloadIcon className="w-5 h-5" />
                App Store
              </a>
              <a href="#" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
                <DownloadIcon className="w-5 h-5" />
                Google Play
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                <div className="text-sm text-gray-400">Téléchargements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <div className="text-sm text-gray-400">Note moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
