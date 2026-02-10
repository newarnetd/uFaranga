import React from 'react';

const Careers = () => {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Nous repoussons les limites de la fintech africaine'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Ensemble, nous construisons l\'avenir'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Nous changeons des vies à travers l\'Afrique'
    },
    {
      icon: '📈',
      title: 'Croissance',
      description: 'Développez vos compétences avec nous'
    }
  ];

  const jobs = [
    {
      title: 'Développeur Full Stack',
      department: 'Engineering',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      description: 'Rejoignez notre équipe technique pour construire la prochaine génération de services financiers.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      description: 'Définissez la vision produit et guidez le développement de nouvelles fonctionnalités.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'CDI',
      description: 'Créez des expériences utilisateur exceptionnelles pour nos millions d\'utilisateurs.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      description: 'Assurez la satisfaction de nos clients entreprises et agents.'
    },
    {
      title: 'Data Analyst',
      department: 'Data',
      location: 'Bujumbura / Remote',
      type: 'CDI',
      description: 'Analysez les données pour optimiser nos services et prendre des décisions éclairées.'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      description: 'Développez notre marque et notre présence sur le marché africain.'
    }
  ];

  const benefits = [
    '💰 Salaire compétitif',
    '🏥 Assurance santé',
    '🌴 Congés payés généreux',
    '📚 Formation continue',
    '💻 Équipement moderne',
    '🏠 Télétravail flexible',
    '🎯 Stock options',
    '🍕 Repas d\'équipe'
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Rejoignez l'aventure uFaranga</h1>
          <p className="text-xl mb-8">
            Construisons ensemble l'avenir de la finance en Afrique
          </p>
          <a
            href="#jobs"
            className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Voir les postes ouverts
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Avantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
              >
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Postes ouverts ({jobs.length})
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        📍 {job.location}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Postuler
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas le poste idéal ?</h2>
          <p className="text-xl mb-8">
            Envoyez-nous votre candidature spontanée
          </p>
          <a
            href="mailto:careers@ufaranga.com"
            className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Candidature spontanée
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
