import { 
  Briefcase, Users, TrendingUp, Heart, Zap, Globe,
  Code, Palette, BarChart3, Headphones, MapPin, Clock,
  CheckCircle, ArrowRight, Award, Target, Rocket
} from 'lucide-react';

const Careers = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Nous repoussons les limites de la fintech africaine'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Ensemble, nous construisons l\'avenir'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Nous changeons des vies à travers l\'Afrique'
    },
    {
      icon: TrendingUp,
      title: 'Croissance',
      description: 'Développez vos compétences avec nous'
    }
  ];

  const jobs = [
    {
      title: 'Développeur Full Stack Senior',
      department: 'Engineering',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      icon: Code,
      description: 'Rejoignez notre équipe technique pour construire la prochaine génération de services financiers.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      icon: Target,
      description: 'Définissez la vision produit et guidez le développement de nouvelles fonctionnalités.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'CDI',
      icon: Palette,
      description: 'Créez des expériences utilisateur exceptionnelles pour nos millions d\'utilisateurs.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      icon: Headphones,
      description: 'Assurez la satisfaction de nos clients entreprises et agents.'
    },
    {
      title: 'Data Analyst',
      department: 'Data',
      location: 'Bujumbura / Remote',
      type: 'CDI',
      icon: BarChart3,
      description: 'Analysez les données pour optimiser nos services et prendre des décisions éclairées.'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Bujumbura, Burundi',
      type: 'CDI',
      icon: Globe,
      description: 'Développez notre marque et notre présence sur le marché africain.'
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Salaire compétitif', description: 'Rémunération au-dessus du marché' },
    { icon: '🏥', title: 'Assurance santé', description: 'Couverture complète pour vous et votre famille' },
    { icon: '🌴', title: 'Congés généreux', description: '25 jours de congés payés par an' },
    { icon: '📚', title: 'Formation continue', description: 'Budget formation et conférences' },
    { icon: '💻', title: 'Équipement moderne', description: 'MacBook Pro et setup ergonomique' },
    { icon: '🏠', title: 'Télétravail flexible', description: 'Travaillez d\'où vous voulez' },
    { icon: '🎯', title: 'Stock options', description: 'Participez à notre succès' },
    { icon: '🍕', title: 'Team building', description: 'Événements et repas d\'équipe réguliers' }
  ];

  const stats = [
    { value: '50+', label: 'Employés' },
    { value: '15', label: 'Nationalités' },
    { value: '40%', label: 'Femmes' },
    { value: '28', label: 'Âge moyen' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">Carrières</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              REJOIGNEZ L'AVENTURE UFARANGA
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Construisons ensemble l'avenir de la finance en Afrique
            </p>
            <a
              href="#jobs"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Voir les postes ouverts
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors">
                <div className="text-3xl font-anton text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            NOS VALEURS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="border border-gray-800 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            AVANTAGES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            POSTES OUVERTS
          </h2>
          <p className="text-center text-gray-400 mb-12">{jobs.length} opportunités disponibles</p>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl p-6 hover:border-secondary/50 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <job.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 border border-gray-800 rounded-full text-xs font-semibold flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </div>
                        <p className="text-gray-400">{job.description}</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap inline-flex items-center gap-2">
                    Postuler
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              VOUS NE TROUVEZ PAS LE POSTE IDÉAL ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Envoyez-nous votre candidature spontanée
            </p>
            <a
              href="mailto:careers@ufaranga.bi"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Candidature spontanée
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
