import { Link } from 'react-router-dom';
import { 
  DollarSign, TrendingUp, MapPin, Smartphone, 
  Check, Star, Award, Banknote, Phone, Receipt, 
  Send, GraduationCap
} from 'lucide-react';

const Agents = () => {

  const benefits = [
    {
      icon: DollarSign,
      title: 'Revenus attractifs',
      description: 'Jusqu\'à 500,000 BIF/mois',
      highlight: true
    },
    {
      icon: TrendingUp,
      title: 'Croissance assurée',
      description: 'Plus de clients chaque jour',
      highlight: true
    },
    {
      icon: Smartphone,
      title: 'Outils modernes',
      description: 'App agent professionnelle',
      highlight: false
    },
    {
      icon: GraduationCap,
      title: 'Formation gratuite',
      description: 'Accompagnement complet',
      highlight: false
    }
  ];

  const services = [
    {
      icon: Banknote,
      name: 'Dépôts & Retraits',
      commission: '1% par transaction',
      volume: 'Illimité'
    },
    {
      icon: Phone,
      name: 'Recharge mobile',
      commission: '3% par recharge',
      volume: 'Tous opérateurs'
    },
    {
      icon: Receipt,
      name: 'Paiement factures',
      commission: '2% par facture',
      volume: 'Eau, électricité, TV'
    },
    {
      icon: Send,
      name: 'Transferts d\'argent',
      commission: '1.5% par envoi',
      volume: 'National & international'
    }
  ];

  const requirements = [
    'Être majeur (18 ans minimum)',
    'Avoir une pièce d\'identité valide',
    'Disposer d\'un smartphone Android/iOS',
    'Avoir un local commercial ou kiosque',
    'Capital de départ: 500,000 BIF minimum',
    'Casier judiciaire vierge'
  ];

  const steps = [
    {
      number: '1',
      title: 'Inscription',
      description: 'Remplissez le formulaire en ligne',
      duration: '5 minutes'
    },
    {
      number: '2',
      title: 'Vérification',
      description: 'Validation de votre dossier',
      duration: '24-48h'
    },
    {
      number: '3',
      title: 'Formation',
      description: 'Formation gratuite en ligne',
      duration: '2 jours'
    },
    {
      number: '4',
      title: 'Activation',
      description: 'Recevez votre kit agent',
      duration: '1 jour'
    }
  ];

  const testimonials = [
    {
      name: 'Jean-Claude Niyonkuru',
      location: 'Bujumbura, Buyenzi',
      avatar: 'JC',
      rating: 5,
      revenue: '450,000 BIF/mois',
      quote: 'Devenir agent uFaranga a changé ma vie. Je gagne bien ma vie en aidant ma communauté.'
    },
    {
      name: 'Marie Uwimana',
      location: 'Gitega',
      avatar: 'MU',
      rating: 5,
      revenue: '380,000 BIF/mois',
      quote: 'Formation excellente, support réactif. Je recommande à 100%!'
    },
    {
      name: 'David Ndayisenga',
      location: 'Ngozi',
      avatar: 'DN',
      rating: 5,
      revenue: '520,000 BIF/mois',
      quote: 'Meilleur investissement de ma vie. Les clients affluent chaque jour.'
    }
  ];

  const regions = [
    { name: 'Bujumbura', agents: 850, demand: 'Très forte' },
    { name: 'Gitega', agents: 320, demand: 'Forte' },
    { name: 'Ngozi', agents: 180, demand: 'Moyenne' },
    { name: 'Muyinga', agents: 150, demand: 'Forte' },
    { name: 'Bururi', agents: 120, demand: 'Moyenne' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Programme Agent uFaranga</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  DEVENEZ AGENT ET GAGNEZ JUSQU'À 500K BIF/MOIS
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Rejoignez le plus grand réseau d'agents au Burundi. Aidez votre communauté tout en développant votre business.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="border border-gray-800 rounded-xl p-4 flex-1 min-w-[150px] hover:border-secondary/50 transition-colors">
                    <div className="text-3xl font-anton text-secondary mb-1">2,000+</div>
                    <div className="text-sm text-gray-400">Agents actifs</div>
                  </div>
                  <div className="border border-gray-800 rounded-xl p-4 flex-1 min-w-[150px] hover:border-secondary/50 transition-colors">
                    <div className="text-3xl font-anton text-secondary mb-1">500K</div>
                    <div className="text-sm text-gray-400">Revenus moyens/mois</div>
                  </div>
                </div>

                <Link 
                  to="#postuler"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Postuler maintenant
                </Link>
              </div>

              {/* Right - Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-6 ${
                      benefit.highlight 
                        ? 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/30' 
                        : 'border border-gray-800 hover:border-secondary/50 transition-colors'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${benefit.highlight ? 'bg-secondary/20' : 'bg-primary/10'} flex items-center justify-center mb-4`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.highlight ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Commissions */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">SERVICES & COMMISSIONS</h2>
          <p className="text-center text-gray-400 mb-12">Gagnez sur chaque transaction</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Commission</span>
                    <span className="text-secondary font-semibold">{service.commission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white font-semibold">{service.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become Agent */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">COMMENT DEVENIR AGENT</h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="border border-gray-800 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-3xl font-anton text-secondary mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                  <div className="inline-block bg-black border border-gray-700 px-3 py-1 rounded-full text-xs text-secondary">
                    {step.duration}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-secondary/30"></div>
                )}
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="max-w-3xl mx-auto border border-gray-800 rounded-2xl p-8 hover:border-secondary/50 transition-colors">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Check className="w-6 h-6 text-secondary" />
              Conditions requises
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">ILS ONT RÉUSSI</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-green-800 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.quote}"</p>
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-secondary font-semibold">{testimonial.revenue}</div>
                  <div className="text-xs text-gray-400">Revenus mensuels</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Demand */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">DEMANDE PAR RÉGION</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {regions.map((region, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 flex items-center justify-between hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-lg">{region.name}</h3>
                    <div className="text-sm text-gray-400">{region.agents} agents actifs</div>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  region.demand === 'Très forte' ? 'bg-red-500/20 text-red-400' :
                  region.demand === 'Forte' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  Demande: {region.demand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="postuler" className="py-20 bg-gradient-to-b from-secondary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">PRÊT À COMMENCER ?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez les 2,000+ agents qui font confiance à uFaranga
            </p>
            <Link 
              to="/telecharger"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Télécharger l'app et postuler
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Ou appelez-nous au <span className="text-white font-semibold">+257 79 000 000</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;
