import React from 'react';

const Security = () => {
  const securityFeatures = [
    {
      icon: '🔐',
      title: 'Chiffrement de bout en bout',
      description: 'Toutes vos données sont chiffrées avec les standards les plus élevés (AES-256)'
    },
    {
      icon: '🛡️',
      title: 'Authentification à deux facteurs',
      description: 'Protection supplémentaire avec 2FA pour sécuriser votre compte'
    },
    {
      icon: '👁️',
      title: 'Surveillance 24/7',
      description: 'Notre équipe surveille les activités suspectes en temps réel'
    },
    {
      icon: '🔔',
      title: 'Alertes instantanées',
      description: 'Notifications immédiates pour chaque transaction'
    },
    {
      icon: '🏦',
      title: 'Régulation bancaire',
      description: 'Régulé par la Banque de la République du Burundi (BRB)'
    },
    {
      icon: '💳',
      title: 'Protection des paiements',
      description: 'Vos transactions sont protégées contre la fraude'
    }
  ];

  const certifications = [
    'PCI DSS Level 1',
    'ISO 27001',
    'SOC 2 Type II',
    'GDPR Compliant'
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Votre sécurité, notre priorité</h1>
          <p className="text-xl mb-8">
            Nous utilisons les technologies les plus avancées pour protéger votre argent
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Comment nous protégeons votre argent
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Certifications et conformité
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 px-8 py-6 rounded-lg shadow-md"
              >
                <p className="text-xl font-bold text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Conseils de sécurité
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-foreground">✅ À faire</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Utilisez un code PIN fort et unique</li>
                <li>• Activez l'authentification à deux facteurs</li>
                <li>• Vérifiez régulièrement vos transactions</li>
                <li>• Mettez à jour l'application régulièrement</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-foreground">❌ À ne pas faire</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Ne partagez jamais votre code PIN</li>
                <li>• N'utilisez pas de réseaux WiFi publics non sécurisés</li>
                <li>• Ne cliquez pas sur des liens suspects</li>
                <li>• Ne donnez jamais vos identifiants par téléphone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Une question sur la sécurité ?</h2>
          <p className="text-xl mb-8">
            Notre équipe de sécurité est là pour vous répondre
          </p>
          <a
            href="/support"
            className="inline-block px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Security;
