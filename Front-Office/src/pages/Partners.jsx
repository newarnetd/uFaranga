import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, Building2, Code, Landmark, Store, TrendingUp, 
  Users, Shield, Zap, Check, Mail, Phone, MapPin, 
  Globe, DollarSign, BarChart3, Briefcase, Award, Target
} from 'lucide-react';

const Partners = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnerType: '',
    message: ''
  });

  const benefits = [
    {
      icon: Handshake,
      title: 'Partenariat gagnant-gagnant',
      description: 'Développez votre activité tout en offrant plus de valeur à vos clients'
    },
    {
      icon: Users,
      title: 'Support dédié',
      description: 'Une équipe dédiée pour vous accompagner dans l\'intégration'
    },
    {
      icon: TrendingUp,
      title: 'Croissance mutuelle',
      description: 'Bénéficiez de notre croissance rapide et de notre base d\'utilisateurs'
    },
    {
      icon: Zap,
      title: 'Intégration facile',
      description: 'API simple et documentation complète pour une intégration rapide'
    }
  ];

  const partnerTypes = [
    {
      icon: Store,
      title: 'Commerçants',
      description: 'Acceptez les paiements uFaranga dans votre boutique',
      features: ['Paiements instantanés', 'Frais réduits', 'Dashboard de gestion', 'Terminal POS gratuit']
    },
    {
      icon: Building2,
      title: 'Entreprises',
      description: 'Intégrez uFaranga pour vos paiements B2B',
      features: ['API complète', 'Facturation automatique', 'Reporting avancé', 'Multi-utilisateurs']
    },
    {
      icon: Code,
      title: 'Développeurs',
      description: 'Créez des applications avec notre API',
      features: ['Documentation complète', 'Sandbox gratuit', 'Support technique', 'SDKs multiples']
    },
    {
      icon: Landmark,
      title: 'Institutions',
      description: 'Partenariats stratégiques avec banques et opérateurs',
      features: ['Solutions sur mesure', 'Intégration profonde', 'Co-branding', 'SLA garantis']
    }
  ];

  const currentPartners = [
    { name: 'REGIDESO', sector: 'Services publics', icon: Landmark },
    { name: 'Econet Leo', sector: 'Télécommunications', icon: Phone },
    { name: 'Lumitel', sector: 'Télécommunications', icon: Phone },
    { name: 'Canal+', sector: 'Médias', icon: Globe },
    { name: 'StarTimes', sector: 'Médias', icon: Globe },
    { name: 'Banque BRB', sector: 'Finance', icon: Building2 }
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Utilisateurs actifs' },
    { icon: Store, value: '10,000+', label: 'Marchands partenaires' },
    { icon: DollarSign, value: '50M+', label: 'Transactions/mois' },
    { icon: TrendingUp, value: '150%', label: 'Croissance annuelle' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Handshake className="w-5 h-5" />
                <span className="font-semibold">Programme Partenaires</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                DEVENEZ PARTENAIRE UFARANGA
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ensemble, construisons l'avenir des paiements digitaux en Afrique
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsContactModalOpen(true);
                }}
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Devenir partenaire
              </a>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-anton text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            POURQUOI DEVENIR PARTENAIRE ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            TYPES DE PARTENARIATS
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partnerTypes.map((type, idx) => (
              <div key={idx} className="border border-gray-800 rounded-2xl p-8 bg-secondary/5 hover:border-secondary/50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            ILS NOUS FONT CONFIANCE
          </h2>
          <p className="text-center text-gray-400 mb-12">Plus de 100 partenaires à travers le pays</p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {currentPartners.map((partner, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <partner.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{partner.name}</h3>
                <div className="text-xs text-gray-400">{partner.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            HISTOIRES DE SUCCÈS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: 'Supermarché City',
                sector: 'Commerce',
                icon: Store,
                result: '+250% de transactions',
                quote: 'uFaranga a transformé notre façon d\'accepter les paiements'
              },
              {
                company: 'Hôtel Panorama',
                sector: 'Hôtellerie',
                icon: Building2,
                result: '+180% de réservations',
                quote: 'Les paiements en ligne ont boosté nos réservations'
              },
              {
                company: 'École Excellence',
                sector: 'Éducation',
                icon: Briefcase,
                result: '98% de collecte',
                quote: 'Fini les retards de paiement des frais scolaires'
              }
            ].map((story, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <story.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{story.company}</h3>
                <div className="text-sm text-gray-400 mb-4">{story.sector}</div>
                <div className="border border-gray-800 rounded-lg p-4 mb-4">
                  <div className="text-2xl font-anton text-secondary mb-1">{story.result}</div>
                </div>
                <p className="text-gray-300 text-sm italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-4">PRÊT À COLLABORER ?</h2>
            <p className="text-gray-400 mb-8">Contactez-nous pour discuter de votre projet de partenariat</p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Contactez-nous
            </button>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="border border-gray-800 rounded-xl p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold mb-1">Email</div>
                <div className="text-gray-400 text-sm">partners@ufaranga.com</div>
              </div>
              <div className="border border-gray-800 rounded-xl p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold mb-1">Téléphone</div>
                <div className="text-gray-400 text-sm">+257 79 000 000</div>
              </div>
              <div className="border border-gray-800 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold mb-1">Adresse</div>
                <div className="text-gray-400 text-sm">Bujumbura, Burundi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black border-b border-gray-800 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-anton uppercase">CONTACTEZ-NOUS</h3>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-gray-800 flex items-center justify-center transition-colors"
              >
                <span className="text-2xl text-gray-400">×</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-gray-400 text-sm mb-6">
                Remplissez le formulaire et notre équipe vous contactera sous 24h
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nom complet <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jean Mukiza"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Entreprise <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Mon Entreprise"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Téléphone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+257 79 123 456"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Type de partenariat <span className="text-red-400">*</span>
                </label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">Sélectionnez...</option>
                  <option value="merchant">Commerçant</option>
                  <option value="business">Entreprise</option>
                  <option value="developer">Développeur</option>
                  <option value="institution">Institution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:bg-gray-900 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
