import React from 'react';

const Partners = () => {
  const benefits = [
    {
      icon: '🤝',
      title: 'Partenariat gagnant-gagnant',
      description: 'Développez votre activité tout en offrant plus de valeur à vos clients'
    },
    {
      icon: '💼',
      title: 'Support dédié',
      description: 'Une équipe dédiée pour vous accompagner dans l\'intégration'
    },
    {
      icon: '📈',
      title: 'Croissance mutuelle',
      description: 'Bénéficiez de notre croissance rapide et de notre base d\'utilisateurs'
    },
    {
      icon: '🔧',
      title: 'Intégration facile',
      description: 'API simple et documentation complète pour une intégration rapide'
    }
  ];

  const partnerTypes = [
    {
      title: 'Commerçants',
      description: 'Acceptez les paiements uFaranga dans votre boutique',
      features: ['Paiements instantanés', 'Frais réduits', 'Dashboard de gestion']
    },
    {
      title: 'Entreprises',
      description: 'Intégrez uFaranga pour vos paiements B2B',
      features: ['API complète', 'Facturation automatique', 'Reporting avancé']
    },
    {
      title: 'Développeurs',
      description: 'Créez des applications avec notre API',
      features: ['Documentation complète', 'Sandbox gratuit', 'Support technique']
    },
    {
      title: 'Institutions',
      description: 'Partenariats stratégiques avec banques et opérateurs',
      features: ['Solutions sur mesure', 'Intégration profonde', 'Co-branding']
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Devenez partenaire uFaranga</h1>
          <p className="text-xl mb-8">
            Ensemble, construisons l'avenir des paiements en Afrique
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Devenir partenaire
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Pourquoi devenir partenaire ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Types de partenariats
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Contactez-nous
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground"
                />
                <input
                  type="text"
                  placeholder="Entreprise"
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground">
                <option>Type de partenariat</option>
                <option>Commerçant</option>
                <option>Entreprise</option>
                <option>Développeur</option>
                <option>Institution</option>
              </select>
              <textarea
                rows="4"
                placeholder="Décrivez votre projet..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
