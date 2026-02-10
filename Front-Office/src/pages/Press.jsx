import React from 'react';

const Press = () => {
  const pressReleases = [
    {
      date: '15 janvier 2026',
      title: 'uFaranga lève 10 millions de dollars en série A',
      excerpt: 'La fintech burundaise annonce une levée de fonds majeure pour accélérer son expansion en Afrique de l\'Est.'
    },
    {
      date: '3 décembre 2025',
      title: 'uFaranga atteint 1 million d\'utilisateurs',
      excerpt: 'Seulement 18 mois après son lancement, la plateforme franchit le cap du million d\'utilisateurs actifs.'
    },
    {
      date: '20 octobre 2025',
      title: 'Partenariat stratégique avec MTN',
      excerpt: 'uFaranga et MTN s\'associent pour faciliter les paiements mobiles dans toute la région.'
    }
  ];

  const mediaKit = [
    { name: 'Logo uFaranga (PNG)', size: '2.4 MB' },
    { name: 'Logo uFaranga (SVG)', size: '156 KB' },
    { name: 'Screenshots App', size: '8.7 MB' },
    { name: 'Photos équipe', size: '12.3 MB' },
    { name: 'Charte graphique', size: '3.1 MB' }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Espace Presse</h1>
          <p className="text-xl mb-8">
            Ressources et actualités pour les médias
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Communiqués de presse
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{release.date}</p>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{release.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{release.excerpt}</p>
                <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Lire la suite →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Kit média
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {mediaKit.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.size}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Contact presse
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Pour toute demande média, contactez notre équipe communication
          </p>
          <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg">
            <p className="text-foreground mb-2">
              <strong>Email:</strong> presse@ufaranga.com
            </p>
            <p className="text-foreground mb-2">
              <strong>Téléphone:</strong> +257 79 000 000
            </p>
            <p className="text-foreground">
              <strong>Disponibilité:</strong> Lun-Ven, 9h-17h EAT
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
