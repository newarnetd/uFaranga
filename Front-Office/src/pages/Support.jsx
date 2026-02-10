import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: '💳',
      title: 'Compte et Carte',
      description: 'Gérer votre compte et votre carte',
      articles: 12
    },
    {
      icon: '💸',
      title: 'Transferts',
      description: 'Envoyer et recevoir de l\'argent',
      articles: 8
    },
    {
      icon: '🔒',
      title: 'Sécurité',
      description: 'Protéger votre compte',
      articles: 15
    },
    {
      icon: '📱',
      title: 'Application Mobile',
      description: 'Utiliser l\'app uFaranga',
      articles: 10
    },
    {
      icon: '💰',
      title: 'Épargne',
      description: 'Gérer votre épargne',
      articles: 6
    },
    {
      icon: '🏢',
      title: 'Business',
      description: 'Solutions pour entreprises',
      articles: 9
    }
  ];

  const faqs = [
    {
      question: 'Comment créer un compte uFaranga ?',
      answer: 'Téléchargez l\'application, entrez votre numéro de téléphone, vérifiez-le avec le code SMS, et complétez votre profil. C\'est tout !'
    },
    {
      question: 'Quels sont les frais de transfert ?',
      answer: 'Les transferts entre utilisateurs uFaranga sont gratuits. Pour les retraits en espèces, des frais minimes s\'appliquent selon le montant.'
    },
    {
      question: 'Comment sécuriser mon compte ?',
      answer: 'Activez l\'authentification à deux facteurs, utilisez un code PIN fort, et ne partagez jamais vos identifiants.'
    },
    {
      question: 'Puis-je utiliser uFaranga sans connexion internet ?',
      answer: 'Oui ! Utilisez le code USSD *123# pour effectuer des transactions même sans internet.'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Comment pouvons-nous vous aider ?</h1>
          <p className="text-xl mb-8">Trouvez rapidement des réponses à vos questions</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Recherchez dans notre base de connaissances..."
                className="w-full px-6 py-4 pr-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Parcourir par catégorie
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/support/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {category.articles} articles
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-foreground hover:bg-gray-50 dark:hover:bg-gray-800">
                  {faq.question}
                </summary>
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Notre équipe est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/contact"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contactez-nous
            </Link>
            <a
              href="tel:+25779000000"
              className="px-8 py-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Appelez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
