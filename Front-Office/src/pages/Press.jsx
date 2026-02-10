import { 
  Newspaper, Download, Mail, Phone, Calendar, FileText,
  Award, TrendingUp, Users, Globe, ExternalLink, Image as ImageIcon
} from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      date: '15 janvier 2026',
      title: 'uFaranga lève 10 millions de dollars en série A',
      excerpt: 'La fintech burundaise annonce une levée de fonds majeure pour accélérer son expansion en Afrique de l\'Est.',
      category: 'Financement',
      slug: 'levee-fonds-serie-a'
    },
    {
      date: '3 décembre 2025',
      title: 'uFaranga atteint 500,000 utilisateurs',
      excerpt: 'Seulement 18 mois après son lancement, la plateforme franchit le cap du demi-million d\'utilisateurs actifs.',
      category: 'Croissance',
      slug: 'milestone-500k-users'
    },
    {
      date: '20 octobre 2025',
      title: 'Partenariat stratégique avec REGIDESO',
      excerpt: 'uFaranga et REGIDESO s\'associent pour faciliter le paiement des factures d\'eau et d\'électricité.',
      category: 'Partenariat',
      slug: 'partenariat-regideso'
    },
    {
      date: '15 septembre 2025',
      title: 'Prix de la meilleure fintech africaine 2025',
      excerpt: 'uFaranga remporte le prestigieux African Fintech Award lors du sommet de Kigali.',
      category: 'Récompense',
      slug: 'prix-fintech-2025'
    }
  ];

  const mediaKit = [
    { name: 'Logo uFaranga (PNG)', size: '2.4 MB', icon: ImageIcon },
    { name: 'Logo uFaranga (SVG)', size: '156 KB', icon: ImageIcon },
    { name: 'Screenshots App', size: '8.7 MB', icon: ImageIcon },
    { name: 'Photos équipe', size: '12.3 MB', icon: ImageIcon },
    { name: 'Charte graphique', size: '3.1 MB', icon: FileText },
    { name: 'Fact Sheet 2026', size: '890 KB', icon: FileText }
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Utilisateurs actifs' },
    { icon: TrendingUp, value: '50M+', label: 'Transactions/mois' },
    { icon: Globe, value: '18', label: 'Provinces couvertes' },
    { icon: Award, value: '#1', label: 'Fintech Burundi' }
  ];

  const mediaContacts = [
    {
      name: 'Relations Presse',
      email: 'presse@ufaranga.bi',
      phone: '+257 79 000 000',
      description: 'Pour toute demande média générale'
    },
    {
      name: 'Partenariats',
      email: 'partners@ufaranga.bi',
      phone: '+257 79 000 001',
      description: 'Collaborations et sponsoring'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Newspaper className="w-5 h-5" />
              <span className="font-semibold">Espace Presse</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              RESSOURCES MÉDIAS
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Communiqués, kit média et contacts pour les journalistes
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-anton text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            COMMUNIQUÉS DE PRESSE
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{release.excerpt}</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Lire le communiqué complet
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            KIT MÉDIA
          </h2>
          <p className="text-center text-gray-400 mb-12">Téléchargez nos ressources officielles</p>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {mediaKit.map((item, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl p-6 flex items-center justify-between hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.size}</p>
                  </div>
                </div>
                <button className="p-3 rounded-lg border border-gray-800 hover:border-primary hover:bg-primary/10 transition-colors">
                  <Download className="w-5 h-5 text-primary" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            CONTACTS PRESSE
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {mediaContacts.map((contact, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-semibold mb-4">{contact.name}</h3>
                <p className="text-gray-400 mb-6">{contact.description}</p>
                <div className="space-y-3">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-primary hover:underline">
                    <Mail className="w-5 h-5" />
                    {contact.email}
                  </a>
                  <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-primary hover:underline">
                    <Phone className="w-5 h-5" />
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 border border-gray-800 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Disponibilité</h3>
            <p className="text-gray-400">
              Notre équipe communication est disponible du lundi au vendredi, de 9h à 17h (EAT)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              BESOIN D'INFORMATIONS ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Notre équipe presse est à votre disposition
            </p>
            <a
              href="mailto:presse@ufaranga.bi"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
