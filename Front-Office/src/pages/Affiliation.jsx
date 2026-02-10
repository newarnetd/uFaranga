import { useState } from 'react';
import { 
  DollarSign, Users, TrendingUp, Gift, Link as LinkIcon,
  Share2, Award, Target, CheckCircle, Copy, BarChart3,
  Percent, Zap, Clock, Shield, ArrowRight, ExternalLink
} from 'lucide-react';

const Affiliation = () => {
  const [affiliateLink, setAffiliateLink] = useState('https://ufaranga.bi/ref/VOTRECODE');
  const [copiedLink, setCopiedLink] = useState(false);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Commissions attractives',
      description: 'Jusqu\'à 30% de commission sur chaque référence',
      highlight: '30%'
    },
    {
      icon: Users,
      title: 'Revenus récurrents',
      description: 'Gagnez à chaque transaction de vos filleuls',
      highlight: 'À vie'
    },
    {
      icon: Zap,
      title: 'Paiements instantanés',
      description: 'Recevez vos commissions immédiatement',
      highlight: 'Instant'
    },
    {
      icon: Shield,
      title: 'Gratuit à rejoindre',
      description: 'Aucun frais d\'inscription ou d\'abonnement',
      highlight: '0 BIF'
    }
  ];

  const commissionTiers = [
    {
      level: 'Bronze',
      referrals: '1-10 filleuls',
      commission: '10%',
      bonus: '0 BIF',
      color: 'from-orange-600 to-orange-800'
    },
    {
      level: 'Argent',
      referrals: '11-50 filleuls',
      commission: '15%',
      bonus: '50,000 BIF',
      color: 'from-gray-400 to-gray-600',
      popular: true
    },
    {
      level: 'Or',
      referrals: '51-100 filleuls',
      commission: '20%',
      bonus: '150,000 BIF',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      level: 'Platine',
      referrals: '100+ filleuls',
      commission: '30%',
      bonus: '500,000 BIF',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Inscrivez-vous',
      description: 'Créez votre compte affilié gratuitement',
      icon: Users
    },
    {
      step: '2',
      title: 'Obtenez votre lien',
      description: 'Recevez votre lien de parrainage unique',
      icon: LinkIcon
    },
    {
      step: '3',
      title: 'Partagez',
      description: 'Partagez avec vos amis et votre réseau',
      icon: Share2
    },
    {
      step: '4',
      title: 'Gagnez',
      description: 'Recevez vos commissions instantanément',
      icon: DollarSign
    }
  ];

  const earnings = [
    {
      action: 'Inscription d\'un filleul',
      commission: '5,000 BIF',
      frequency: 'Une fois'
    },
    {
      action: 'Première transaction',
      commission: '2,000 BIF',
      frequency: 'Une fois'
    },
    {
      action: 'Transactions mensuelles',
      commission: '1% du volume',
      frequency: 'Récurrent'
    },
    {
      action: 'Abonnement Premium',
      commission: '20% du prix',
      frequency: 'Mensuel'
    }
  ];

  const tools = [
    {
      icon: LinkIcon,
      title: 'Lien de parrainage',
      description: 'Lien unique pour tracker vos références'
    },
    {
      icon: BarChart3,
      title: 'Dashboard analytics',
      description: 'Suivez vos performances en temps réel'
    },
    {
      icon: Share2,
      title: 'Matériel marketing',
      description: 'Bannières, images et contenus prêts'
    },
    {
      icon: Award,
      title: 'Support dédié',
      description: 'Équipe pour vous accompagner'
    }
  ];

  const faqs = [
    {
      question: 'Comment devenir affilié ?',
      answer: 'Créez simplement un compte uFaranga et activez votre programme d\'affiliation depuis votre dashboard. C\'est gratuit et instantané.'
    },
    {
      question: 'Quand suis-je payé ?',
      answer: 'Les commissions sont créditées instantanément sur votre compte uFaranga dès que votre filleul effectue une action éligible.'
    },
    {
      question: 'Y a-t-il une limite de gains ?',
      answer: 'Non, il n\'y a aucune limite. Plus vous parrainez, plus vous gagnez. Certains affiliés gagnent plus de 1M BIF par mois.'
    },
    {
      question: 'Puis-je parrainer des entreprises ?',
      answer: 'Oui ! Les commissions sur les comptes business sont même plus élevées (jusqu\'à 50% sur certains services).'
    }
  ];

  const topAffiliates = [
    { name: 'Jean M.', earnings: '2.5M BIF', referrals: 250 },
    { name: 'Marie U.', earnings: '1.8M BIF', referrals: 180 },
    { name: 'David N.', earnings: '1.2M BIF', referrals: 120 }
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Programme d'Affiliation</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              GAGNEZ JUSQU'À 30% DE COMMISSION
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Parrainez vos amis et gagnez des revenus récurrents à vie
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-anton text-secondary mb-1">30%</div>
                <div className="text-xs text-gray-400">Commission max</div>
              </div>
              <div className="border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-anton text-secondary mb-1">À vie</div>
                <div className="text-xs text-gray-400">Revenus récurrents</div>
              </div>
              <div className="border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-anton text-secondary mb-1">0 BIF</div>
                <div className="text-xs text-gray-400">Frais d'inscription</div>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              Devenir affilié
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            POURQUOI DEVENIR AFFILIÉ ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-2xl font-anton text-secondary mb-2">{benefit.highlight}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            NIVEAUX DE COMMISSION
          </h2>
          <p className="text-center text-gray-400 mb-12">Plus vous parrainez, plus vous gagnez</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {commissionTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl p-6 transition-all ${
                  tier.popular 
                    ? 'border-secondary bg-secondary/5 scale-105' 
                    : 'border-gray-800 hover:border-secondary/50'
                }`}
              >
                {tier.popular && (
                  <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    POPULAIRE
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{tier.level}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.referrals}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between py-2 border-t border-gray-800">
                    <span className="text-sm text-gray-400">Commission</span>
                    <span className="text-lg font-bold text-secondary">{tier.commission}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-800">
                    <span className="text-sm text-gray-400">Bonus</span>
                    <span className="text-sm font-semibold">{tier.bonus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            COMMENT ÇA MARCHE ?
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="border border-gray-800 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl font-anton text-secondary mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-secondary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            GRILLE DE COMMISSIONS
          </h2>
          
          <div className="max-w-3xl mx-auto border border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800 grid grid-cols-3 gap-4">
              <div className="font-semibold text-sm">Action</div>
              <div className="font-semibold text-sm text-center">Commission</div>
              <div className="font-semibold text-sm text-right">Fréquence</div>
            </div>
            {earnings.map((earning, idx) => (
              <div key={idx} className="px-6 py-4 border-b border-gray-800 last:border-0 grid grid-cols-3 gap-4 items-center hover:bg-gray-900/30 transition-colors">
                <div className="text-sm">{earning.action}</div>
                <div className="text-center">
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-lg text-sm font-semibold">
                    {earning.commission}
                  </span>
                </div>
                <div className="text-sm text-gray-400 text-right">{earning.frequency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            OUTILS À VOTRE DISPOSITION
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Affiliates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            TOP AFFILIÉS DU MOIS
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {topAffiliates.map((affiliate, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 flex items-center justify-between hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    idx === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-700' :
                    idx === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                    'bg-gradient-to-br from-orange-600 to-orange-800'
                  }`}>
                    #{idx + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{affiliate.name}</div>
                    <div className="text-sm text-gray-400">{affiliate.referrals} filleuls</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-anton text-secondary">{affiliate.earnings}</div>
                  <div className="text-xs text-gray-400">Ce mois</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            QUESTIONS FRÉQUENTES
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-800 rounded-xl overflow-hidden hover:border-secondary/50 transition-colors group">
                <summary className="px-6 py-4 cursor-pointer font-semibold flex items-center justify-between">
                  <span>{faq.question}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-400 border-t border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              PRÊT À GAGNER DE L'ARGENT ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez 1,000+ affiliés qui gagnent avec uFaranga
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Gratuit • Sans engagement • Paiements instantanés
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliation;
