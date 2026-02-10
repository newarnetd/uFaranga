import React from 'react';

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Notre mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Rendre l'argent accessible à tous les Africains
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            uFaranga en chiffres
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500,000+', label: 'Utilisateurs actifs' },
              { value: '50M+', label: 'Transactions traitées' },
              { value: '5', label: 'Pays africains' },
              { value: '99.99%', label: 'Taux de disponibilité' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Simplicité', desc: 'Accessible à tous' },
              { title: 'Transparence', desc: 'Pas de frais cachés' },
              { title: 'Confiance', desc: 'Votre argent est sacré' },
              { title: 'Innovation', desc: 'Toujours à la pointe' },
              { title: 'Africanité', desc: 'Fiers d\'être africains' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
