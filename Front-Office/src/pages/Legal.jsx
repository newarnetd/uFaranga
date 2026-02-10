import React from 'react';
import { useLocation } from 'react-router-dom';

const Legal = () => {
  const location = useLocation();
  const hash = location.hash;

  const sections = [
    { id: 'terms', title: 'Conditions d\'utilisation', icon: '📜' },
    { id: 'privacy', title: 'Politique de confidentialité', icon: '🔒' },
    { id: 'cookies', title: 'Politique de cookies', icon: '🍪' },
    { id: 'mentions', title: 'Mentions légales', icon: '⚖️' },
    { id: 'aml', title: 'Lutte anti-blanchiment', icon: '🛡️' }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Informations légales</h1>
          <p className="text-xl">
            Transparence et conformité
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  hash === `#${section.id}`
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {section.icon} {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Terms */}
          <div id="terms" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              📜 Conditions d'utilisation
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dernière mise à jour : 10 février 2026
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">1. Acceptation des conditions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                En utilisant les services uFaranga, vous acceptez les présentes conditions d'utilisation.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">2. Description du service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                uFaranga est une plateforme de services financiers mobiles permettant d'effectuer des transactions, transferts et paiements.
              </p>
            </div>
          </div>

          {/* Privacy */}
          <div id="privacy" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              🔒 Politique de confidentialité
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dernière mise à jour : 10 février 2026
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Collecte des données</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous collectons uniquement les données nécessaires au fonctionnement de nos services.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Utilisation des données</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vos données sont utilisées pour fournir, améliorer et sécuriser nos services.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div id="cookies" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              🍪 Politique de cookies
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site.
              </p>
            </div>
          </div>

          {/* Mentions */}
          <div id="mentions" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              ⚖️ Mentions légales
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>uFaranga SARL</strong><br />
                Siège social : Bujumbura, Burundi<br />
                Email : legal@ufaranga.com<br />
                Régulé par la Banque de la République du Burundi (BRB)
              </p>
            </div>
          </div>

          {/* AML */}
          <div id="aml" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              🛡️ Lutte anti-blanchiment
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                uFaranga respecte strictement les réglementations en matière de lutte contre le blanchiment d'argent et le financement du terrorisme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
