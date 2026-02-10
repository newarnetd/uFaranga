import { 
  Heart, Users, TrendingUp, Globe, Sprout, GraduationCap,
  Building2, Briefcase, Award, Target, CheckCircle, ArrowRight,
  DollarSign, Percent, PiggyBank, Smartphone, MapPin, Calendar
} from 'lucide-react';

const Impact = () => {
  const stats = [
    { icon: Users, value: '500K+', label: 'Vies impactées', color: 'text-primary' },
    { icon: DollarSign, value: '50M+', label: 'BIF économisés', color: 'text-secondary' },
    { icon: Building2, value: '10K+', label: 'PME soutenues', color: 'text-primary' },
    { icon: GraduationCap, value: '5K+', label: 'Étudiants aidés', color: 'text-secondary' }
  ];

  const pillars = [
    {
      icon: Users,
      title: 'Inclusion financière',
      description: 'Donner accès aux services financiers à tous les Burundais',
      stats: '85% de nos utilisateurs n\'avaient pas de compte bancaire',
      color: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: GraduationCap,
      title: 'Éducation financière',
      description: 'Former les utilisateurs à la gestion de leur argent',
      stats: '50,000+ personnes formées gratuitement',
      color: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneuriat',
      description: 'Soutenir les petites entreprises et créateurs',
      stats: '10,000+ PME utilisent nos services',
      color: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Sprout,
      title: 'Développement durable',
      description: 'Réduire l\'empreinte carbone avec le digital',
      stats: '90% de réduction de papier vs banques traditionnelles',
      color: 'bg-secondary/10',
      iconColor: 'text-secondary'
    }
  ];

  const stories = [
    {
      name: 'Marie Uwimana',
      role: 'Commerçante, Bujumbura',
      avatar: 'MU',
      story: 'Grâce à uFaranga, j\'ai pu développer mon commerce. Les paiements instantanés m\'ont permis d\'augmenter mes ventes de 200%.',
      impact: '+200% de ventes',
      image: Building2
    },
    {
      name: 'Jean-Claude Niyonkuru',
      role: 'Étudiant, Gitega',
      avatar: 'JC',
      story: 'Mes parents m\'envoient l\'argent instantanément sans frais. Je peux me concentrer sur mes études sans stress financier.',
      impact: '0 BIF de frais',
      image: GraduationCap
    },
    {
      name: 'David Ndayisenga',
      role: 'Agent uFaranga, Ngozi',
      avatar: 'DN',
      story: 'Devenir agent m\'a permis de créer mon propre emploi. Je gagne maintenant 500,000 BIF par mois en aidant ma communauté.',
      impact: '500K BIF/mois',
      image: Users
    }
  ];

  const initiatives = [
    {
      title: 'Programme Jeunesse',
      description: 'Formation gratuite en éducation financière pour 10,000 jeunes',
      status: 'En cours',
      progress: 65,
      beneficiaries: '6,500 jeunes formés',
      icon: GraduationCap
    },
    {
      title: 'Femmes Entrepreneures',
      description: 'Accompagnement de 5,000 femmes dans leur business',
      status: 'En cours',
      progress: 80,
      beneficiaries: '4,000 femmes accompagnées',
      icon: Briefcase
    },
    {
      title: 'Villages Connectés',
      description: 'Déploiement d\'agents dans 100 villages ruraux',
      status: 'En cours',
      progress: 45,
      beneficiaries: '45 villages connectés',
      icon: MapPin
    },
    {
      title: 'Zéro Papier 2026',
      description: 'Transition 100% digitale de tous nos services',
      status: 'En cours',
      progress: 90,
      beneficiaries: '90% de services digitalisés',
      icon: Sprout
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Lancement',
      description: '50,000 premiers utilisateurs',
      icon: Target
    },
    {
      year: '2024',
      title: 'Expansion',
      description: '250,000 utilisateurs, 18 provinces',
      icon: TrendingUp
    },
    {
      year: '2025',
      title: 'Croissance',
      description: '500,000 utilisateurs, 10,000 agents',
      icon: Users
    },
    {
      year: '2026',
      title: 'Vision',
      description: '1M utilisateurs, leader régional',
      icon: Award
    }
  ];

  const commitments = [
    'Transparence totale sur nos frais et services',
    'Protection des données personnelles',
    'Support client 24/7 en français et kirundi',
    'Investissement dans l\'éducation financière',
    'Création d\'emplois locaux (2,000+ agents)',
    'Réduction de l\'empreinte carbone'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Notre Impact Social</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              TRANSFORMER LE BURUNDI PAR LA FINANCE DIGITALE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Notre mission : rendre les services financiers accessibles à tous les Burundais
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-anton text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            NOS PILIERS D'IMPACT
          </h2>
          <p className="text-center text-gray-400 mb-12">4 axes stratégiques pour transformer le Burundi</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors">
                <div className={`w-16 h-16 rounded-xl ${pillar.color} flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-gray-400 mb-4">{pillar.description}</p>
                <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
                  <CheckCircle className={`w-4 h-4 ${pillar.iconColor}`} />
                  <span className="text-sm text-gray-300">{pillar.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            HISTOIRES DE RÉUSSITE
          </h2>
          <p className="text-center text-gray-400 mb-12">Des vies transformées par uFaranga</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center text-white font-bold text-xl">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <div className="text-sm text-gray-400">{story.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{story.story}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <story.image className="w-5 h-5 text-secondary" />
                    <span className="text-sm text-gray-400">Impact</span>
                  </div>
                  <span className="text-secondary font-semibold">{story.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            NOS INITIATIVES EN COURS
          </h2>
          <p className="text-center text-gray-400 mb-12">Projets pour un impact durable</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {initiatives.map((initiative, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{initiative.title}</h3>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                        {initiative.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{initiative.description}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Progression</span>
                    <span className="text-primary font-semibold">{initiative.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-secondary inline mr-2" />
                  {initiative.beneficiaries}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            NOTRE PARCOURS
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 relative z-10">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                      <div className="text-2xl font-anton text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            NOS ENGAGEMENTS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {commitments.map((commitment, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-4 hover:border-primary/50 transition-colors flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{commitment}</span>
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
              REJOIGNEZ LE MOUVEMENT
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ensemble, construisons un Burundi financièrement inclusif
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              Créer un compte gratuit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
