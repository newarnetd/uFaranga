import { 
  Check, X, Zap, TrendingDown, Shield, Award,
  Send, CreditCard, Smartphone, Building2, Users,
  ArrowRight, DollarSign, Percent, Gift
} from 'lucide-react';

const Pricing = () => {
  const comparison = [
    {
      service: 'Transfert P2P',
      ufaranga: '0%',
      mpesa: '1.5%',
      lumicash: '2%',
      airtel: '1.8%',
      highlight: true
    },
    {
      service: 'Paiement marchand',
      ufaranga: '0.3%',
      mpesa: '1%',
      lumicash: '1.5%',
      airtel: '1.2%',
      highlight: true
    },
    {
      service: 'Retrait agent (10K)',
      ufaranga: '100 BIF',
      mpesa: '300 BIF',
      lumicash: '400 BIF',
      airtel: '350 BIF',
      highlight: false
    },
    {
      service: 'Carte virtuelle',
      ufaranga: 'Gratuit',
      mpesa: '5,000 BIF',
      lumicash: '3,000 BIF',
      airtel: '4,000 BIF',
      highlight: true
    },
    {
      service: 'Frais mensuels',
      ufaranga: '0 BIF',
      mpesa: '1,000 BIF',
      lumicash: '500 BIF',
      airtel: '800 BIF',
      highlight: true
    },
    {
      service: 'Recharge mobile',
      ufaranga: '0%',
      mpesa: '2%',
      lumicash: '2.5%',
      airtel: '2%',
      highlight: false
    },
    {
      service: 'Paiement factures',
      ufaranga: '0%',
      mpesa: '1.5%',
      lumicash: '2%',
      airtel: '1.8%',
      highlight: false
    }
  ];

  const transferFees = [
    { range: '0 - 50,000 BIF', fee: 'GRATUIT', highlight: true },
    { range: '50,001 - 500,000 BIF', fee: 'GRATUIT', highlight: true },
    { range: '500,001 - 1,000,000 BIF', fee: 'GRATUIT', highlight: true },
    { range: '1,000,001+ BIF', fee: 'GRATUIT', highlight: true }
  ];

  const withdrawalFees = [
    { range: '1,000 - 10,000 BIF', fee: '100 BIF' },
    { range: '10,001 - 50,000 BIF', fee: '300 BIF' },
    { range: '50,001 - 100,000 BIF', fee: '500 BIF' },
    { range: '100,001 - 500,000 BIF', fee: '1,000 BIF' },
    { range: '500,001+ BIF', fee: '2,000 BIF' }
  ];

  const merchantFees = [
    { type: 'Paiements en ligne', fee: '0.3%', min: '50 BIF' },
    { type: 'Paiements QR Code', fee: '0.2%', min: '30 BIF' },
    { type: 'Paiements POS', fee: '0.5%', min: '100 BIF' },
    { type: 'Abonnements récurrents', fee: '0.1%', min: '20 BIF' }
  ];

  const benefits = [
    {
      icon: Gift,
      title: 'Offre de lancement',
      description: '0% de frais pendant 3 mois pour les nouveaux utilisateurs',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: TrendingDown,
      title: 'Frais les plus bas',
      description: 'Jusqu\'à 90% moins cher que la concurrence',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: 'Transparence totale',
      description: 'Pas de frais cachés, tout est clair',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Award,
      title: 'Programme fidélité',
      description: 'Gagnez des points à chaque transaction',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const plans = [
    {
      name: 'Personnel',
      icon: Smartphone,
      price: '0',
      description: 'Pour les particuliers',
      features: [
        'Transferts P2P gratuits',
        'Carte virtuelle gratuite',
        'Paiements QR Code',
        'Épargne automatique',
        'Support 24/7'
      ],
      cta: 'Créer un compte',
      popular: false
    },
    {
      name: 'Business',
      icon: Building2,
      price: '0',
      description: 'Pour les entreprises',
      features: [
        'Tout du plan Personnel',
        'Terminal POS gratuit',
        'API complète',
        'Dashboard analytics',
        'Support prioritaire',
        'Facturation automatique'
      ],
      cta: 'Commencer',
      popular: true
    },
    {
      name: 'Entreprise',
      icon: Users,
      price: 'Sur mesure',
      description: 'Solutions personnalisées',
      features: [
        'Tout du plan Business',
        'Intégration sur mesure',
        'Account manager dédié',
        'SLA garantis',
        'Formation équipe',
        'Tarifs négociés'
      ],
      cta: 'Nous contacter',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">0% de frais pendant 3 mois</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              DES PRIX JUSTES ET TRANSPARENTS
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Pas de frais cachés. Pas de surprises. Juste de la clarté.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <div className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            COMPARAISON DES TARIFS
          </h2>
          <p className="text-center text-gray-400 mb-12">uFaranga vs la concurrence</p>
          
          <div className="max-w-6xl mx-auto">
            {/* Mobile View - Cards */}
            <div className="lg:hidden space-y-4">
              {comparison.map((row, idx) => (
                <div key={idx} className="border border-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold mb-4">{row.service}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">uFaranga</div>
                      <div className="text-lg font-bold text-secondary">{row.ufaranga}</div>
                    </div>
                    <div className="border border-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">M-Pesa</div>
                      <div className="text-sm text-gray-300">{row.mpesa}</div>
                    </div>
                    <div className="border border-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Lumicash</div>
                      <div className="text-sm text-gray-300">{row.lumicash}</div>
                    </div>
                    <div className="border border-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Airtel Money</div>
                      <div className="text-sm text-gray-300">{row.airtel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Modern Table */}
            <div className="hidden lg:block border border-gray-800 rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-900/50 border-b border-gray-800">
                <div className="grid grid-cols-5 gap-4 p-6">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-400">SERVICE</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-primary">uFaranga</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-2">
                      <Smartphone className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400">M-Pesa</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-2">
                      <Smartphone className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400">Lumicash</span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-2">
                      <Smartphone className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400">Airtel Money</span>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-800">
                {comparison.map((row, idx) => (
                  <div 
                    key={idx} 
                    className={`grid grid-cols-5 gap-4 p-6 transition-colors ${
                      row.highlight ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-gray-900/30'
                    }`}
                  >
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-white mb-1">{row.service}</div>
                        {row.highlight && (
                          <div className="inline-flex items-center gap-1 text-xs text-secondary">
                            <TrendingDown className="w-3 h-3" />
                            <span>Meilleur prix</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* uFaranga */}
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-2">
                          <Check className="w-5 h-5 text-secondary" />
                          <span className="text-lg font-bold text-secondary">{row.ufaranga}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* M-Pesa */}
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 border border-gray-800 rounded-lg px-4 py-2">
                          <X className="w-4 h-4 text-gray-600" />
                          <span className="text-base text-gray-400">{row.mpesa}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lumicash */}
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 border border-gray-800 rounded-lg px-4 py-2">
                          <X className="w-4 h-4 text-gray-600" />
                          <span className="text-base text-gray-400">{row.lumicash}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Airtel Money */}
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 border border-gray-800 rounded-lg px-4 py-2">
                          <X className="w-4 h-4 text-gray-600" />
                          <span className="text-base text-gray-400">{row.airtel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="bg-gradient-to-r from-secondary/5 to-transparent border-t border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-secondary" />
                    <div>
                      <div className="font-semibold text-white">Économisez jusqu'à 90%</div>
                      <div className="text-sm text-gray-400">Par rapport à la concurrence</div>
                    </div>
                  </div>
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                    Commencer gratuitement
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-gray-400">Meilleur tarif du marché</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-gray-400">Service uFaranga</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            GRILLE TARIFAIRE DÉTAILLÉE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Transfers */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Transferts P2P</h3>
              </div>
              <div className="space-y-3">
                {transferFees.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
                    <span className="text-gray-400 text-sm">{item.range}</span>
                    <span className={`font-bold ${item.highlight ? 'text-secondary' : 'text-white'}`}>
                      {item.fee}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400 italic">
                Oui, c'est vraiment gratuit. Pour toujours. ✨
              </p>
            </div>

            {/* Withdrawals */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Retrait agent</h3>
              </div>
              <div className="space-y-3">
                {withdrawalFees.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
                    <span className="text-gray-400 text-sm">{item.range}</span>
                    <span className="font-bold text-white">{item.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Merchant */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Marchands</h3>
              </div>
              <div className="space-y-3">
                {merchantFees.map((item, idx) => (
                  <div key={idx} className="py-3 border-b border-gray-800 last:border-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">{item.type}</span>
                      <span className="font-bold text-white">{item.fee}</span>
                    </div>
                    <div className="text-xs text-gray-500">Min: {item.min}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            CHOISISSEZ VOTRE PLAN
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl p-8 transition-all ${
                  plan.popular 
                    ? 'border-primary bg-primary/5 scale-105' 
                    : 'border-gray-800 hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    POPULAIRE
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-anton">{plan.price}</span>
                  {plan.price === '0' && <span className="text-gray-400"> BIF/mois</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-gray-700 hover:border-primary/50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              PRÊT À ÉCONOMISER SUR VOS FRAIS ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez 500,000+ utilisateurs qui économisent chaque jour
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              Commencer gratuitement
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Aucune carte bancaire requise • Configuration en 2 minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
