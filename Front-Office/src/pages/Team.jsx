import { 
  Users, Linkedin, Twitter, Mail, Award, Target,
  Code, Palette, BarChart3, Briefcase, Globe, Heart
} from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Jean-Pierre Nkurunziza',
      role: 'CEO & Co-fondateur',
      avatar: 'JPN',
      bio: '15 ans d\'expérience dans la fintech africaine. Ancien VP chez M-Pesa.',
      linkedin: '#',
      twitter: '#',
      email: 'jp@ufaranga.bi'
    },
    {
      name: 'Marie Uwimana',
      role: 'CTO & Co-fondatrice',
      avatar: 'MU',
      bio: 'Ingénieure logiciel passionnée. Ex-Google, spécialiste en systèmes distribués.',
      linkedin: '#',
      twitter: '#',
      email: 'marie@ufaranga.bi'
    },
    {
      name: 'David Ndayisenga',
      role: 'CFO',
      avatar: 'DN',
      bio: 'Expert en finance avec 12 ans d\'expérience. Ancien directeur financier chez Ecobank.',
      linkedin: '#',
      twitter: '#',
      email: 'david@ufaranga.bi'
    },
    {
      name: 'Sarah Mukeshimana',
      role: 'CPO',
      avatar: 'SM',
      bio: 'Product leader avec une vision centrée utilisateur. Ex-Jumia, passionnée par l\'UX.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@ufaranga.bi'
    }
  ];

  const departments = [
    {
      name: 'Engineering',
      icon: Code,
      count: 15,
      description: 'Développement produit et infrastructure'
    },
    {
      name: 'Product & Design',
      icon: Palette,
      count: 8,
      description: 'Expérience utilisateur et design'
    },
    {
      name: 'Business',
      icon: Briefcase,
      count: 12,
      description: 'Ventes, partenariats et opérations'
    },
    {
      name: 'Data & Analytics',
      icon: BarChart3,
      count: 6,
      description: 'Analyse et intelligence business'
    },
    {
      name: 'Marketing',
      icon: Globe,
      count: 5,
      description: 'Communication et croissance'
    },
    {
      name: 'Support',
      icon: Heart,
      count: 10,
      description: 'Service client et satisfaction'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-driven',
      description: 'Nous sommes guidés par notre mission d\'inclusion financière'
    },
    {
      icon: Users,
      title: 'Diversité',
      description: '15 nationalités, 40% de femmes, toutes les générations'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous faisons'
    }
  ];

  const stats = [
    { value: '50+', label: 'Membres de l\'équipe' },
    { value: '15', label: 'Nationalités' },
    { value: '40%', label: 'Femmes' },
    { value: '28', label: 'Âge moyen' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Notre Équipe</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              LES VISAGES DERRIÈRE UFARANGA
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Une équipe passionnée qui transforme la finance en Afrique
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <div className="text-3xl font-anton text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            DIRECTION
          </h2>
          <p className="text-center text-gray-400 mb-12">Les leaders qui guident notre vision</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadership.map((member, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors group">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6">{member.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={member.linkedin} className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </a>
                  <a href={member.twitter} className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors">
                    <Twitter className="w-4 h-4 text-primary" />
                  </a>
                  <a href={`mailto:${member.email}`} className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            NOS ÉQUIPES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <dept.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{dept.name}</h3>
                      <span className="text-2xl font-anton text-primary">{dept.count}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{dept.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            CE QUI NOUS UNIT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
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
              REJOIGNEZ NOTRE ÉQUIPE
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nous recherchons des talents passionnés pour nous rejoindre
            </p>
            <a
              href="/carrieres"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Voir les postes ouverts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
