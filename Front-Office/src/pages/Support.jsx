import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, Send, Shield, Smartphone, PiggyBank, 
  Building2, Search, Phone, Mail, MessageCircle,
  ChevronDown
} from 'lucide-react';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: CreditCard,
      title: 'Compte et Carte',
      description: 'Gérer votre compte et votre carte',
      articles: 12
    },
    {
      icon: Send,
      title: 'Transferts',
      description: 'Envoyer et recevoir de l\'argent',
      articles: 8
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Protéger votre compte',
      articles: 15
    },
    {
      icon: Smartphone,
      title: 'Application Mobile',
      description: 'Utiliser l\'app uFaranga',
      articles: 10
    },
    {
      icon: PiggyBank,
      title: 'Épargne',
      description: 'Gérer votre épargne',
      articles: 6
    },
    {
      icon: Building2,
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
            COMMENT POUVONS-NOUS VOUS AIDER ?
          </h1>
          <p className="text-xl text-gray-300 mb-8">Trouvez rapidement des réponses à vos questions</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Recherchez dans notre base de connaissances..."
                className="w-full px-6 py-4 pr-12 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            PARCOURIR PAR CATÉGORIE
          </h2>
          <p className="text-center text-gray-400 mb-12">Trouvez l'aide dont vous avez besoin</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/support/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="border border-gray-800 p-6 rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <span className="text-sm text-primary font-semibold">
                  {category.articles} articles →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="text-center text-gray-400 mb-12">Les réponses aux questions les plus posées</p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold flex items-center justify-between hover:bg-gray-900/50 transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-400 border-t border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">
              VOUS NE TROUVEZ PAS CE QUE VOUS CHERCHEZ ?
            </h2>
            <p className="text-xl text-gray-400">
              Notre équipe est là pour vous aider 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <a
              href="tel:+25779000000"
              className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Appelez-nous</h3>
              <p className="text-gray-400 text-sm mb-3">Disponible 24/7</p>
              <p className="text-primary font-semibold">+257 79 000 000</p>
            </a>

            <a
              href="mailto:support@ufaranga.bi"
              className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Envoyez un email</h3>
              <p className="text-gray-400 text-sm mb-3">Réponse sous 24h</p>
              <p className="text-primary font-semibold">support@ufaranga.bi</p>
            </a>

            <Link
              to="/support/chat"
              className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Chat en direct</h3>
              <p className="text-gray-400 text-sm mb-3">Réponse immédiate</p>
              <p className="text-primary font-semibold">Démarrer le chat →</p>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/support/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Formulaire de contact complet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
