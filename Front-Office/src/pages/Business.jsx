import React from 'react';

const Business = () => {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">uFaranga Business</h1>
          <p className="text-xl">Tout pour gérer les finances de votre entreprise</p>
          <button className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Créer un compte business
          </button>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Plus qu'un simple compte professionnel
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💼', title: 'Gestion simplifiée', desc: 'Séparez personnel et professionnel' },
              { icon: '💸', title: 'Encaissement facilité', desc: 'QR codes et terminaux POS' },
              { icon: '📊', title: 'Comptabilité intégrée', desc: 'Rapports automatiques' },
              { icon: '🚀', title: 'API & Intégrations', desc: 'Connectez vos outils' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
