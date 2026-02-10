import React from 'react';

const Agents = () => {
  return (
    <div className="bg-background min-h-screen">
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Devenez Agent uFaranga</h1>
          <p className="text-xl mb-8">Gagnez de l'argent en aidant votre communauté</p>
          <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Postuler maintenant
          </button>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Un business rentable et utile
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💰', title: 'Revenus attractifs', desc: 'Jusqu\'à 500,000 BIF/mois' },
              { icon: '📈', title: 'Croissance assurée', desc: 'Plus de clients chaque jour' },
              { icon: '🎯', title: 'Simple à gérer', desc: 'Business clé en main' },
              { icon: '🏆', title: 'Reconnaissance', desc: 'Statut valorisant' },
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

export default Agents;
