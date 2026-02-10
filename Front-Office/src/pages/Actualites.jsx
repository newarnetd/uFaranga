import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowRight, TrendingUp, Award,
  Users, Zap, Globe, Search, Filter, Tag
} from 'lucide-react';

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Toutes', icon: Globe },
    { id: 'product', name: 'Produits', icon: Zap },
    { id: 'company', name: 'Entreprise', icon: Users },
    { id: 'partnership', name: 'Partenariats', icon: Award },
    { id: 'community', name: 'Communauté', icon: TrendingUp }
  ];

  const featuredNews = {
    title: 'uFaranga atteint 500,000 utilisateurs au Burundi',
    excerpt: 'Une étape majeure dans notre mission d\'inclusion financière. Découvrez comment nous transformons le paysage des paiements digitaux.',
    category: 'Entreprise',
    date: '15 janvier 2026',
    readTime: '5 min',
    image: TrendingUp,
    slug: 'ufaranga-500k-utilisateurs'
  };

  const news = [
    {
      id: 1,
      title: 'Lancement de la carte physique uFaranga',
      excerpt: 'Commandez votre carte Mastercard et payez partout dans le monde.',
      category: 'product',
      categoryName: 'Produits',
      date: '12 janvier 2026',
      readTime: '3 min',
      image: Zap,
      slug: 'lancement-carte-physique'
    },
    {
      id: 2,
      title: 'Partenariat avec REGIDESO pour le paiement des factures',
      excerpt: 'Payez vos factures d\'eau et d\'électricité directement depuis l\'app.',
      category: 'partnership',
      categoryName: 'Partenariats',
      date: '10 janvier 2026',
      readTime: '4 min',
      image: Award,
      slug: 'partenariat-regideso'
    },
    {
      id: 3,
      title: '2,000 nouveaux agents rejoignent le réseau',
      excerpt: 'Expansion massive dans toutes les provinces du Burundi.',
      category: 'community',
      categoryName: 'Communauté',
      date: '8 janvier 2026',
      readTime: '3 min',
      image: Users,
      slug: 'expansion-agents'
    },
    {
      id: 4,
      title: 'Nouvelle fonctionnalité: Épargne automatique',
      excerpt: 'Économisez sans effort avec notre système d\'épargne intelligent.',
      category: 'product',
      categoryName: 'Produits',
      date: '5 janvier 2026',
      readTime: '4 min',
      image: Zap,
      slug: 'epargne-automatique'
    },
    {
      id: 5,
      title: 'uFaranga remporte le prix de la meilleure fintech 2025',
      excerpt: 'Reconnaissance de notre impact sur l\'inclusion financière.',
      category: 'company',
      categoryName: 'Entreprise',
      date: '2 janvier 2026',
      readTime: '2 min',
      image: Award,
      slug: 'prix-fintech-2025'
    },
    {
      id: 6,
      title: 'Intégration avec Lumitel pour les recharges mobiles',
      excerpt: 'Rechargez votre crédit Lumitel instantanément.',
      category: 'partnership',
      categoryName: 'Partenariats',
      date: '28 décembre 2025',
      readTime: '3 min',
      image: Award,
      slug: 'integration-lumitel'
    },
    {
      id: 7,
      title: 'Programme de formation: 10,000 jeunes formés',
      excerpt: 'Notre initiative d\'éducation financière porte ses fruits.',
      category: 'community',
      categoryName: 'Communauté',
      date: '25 décembre 2025',
      readTime: '5 min',
      image: Users,
      slug: 'formation-jeunes'
    },
    {
      id: 8,
      title: 'API v2: Plus rapide et plus puissante',
      excerpt: 'Nouvelle version de notre API avec de nombreuses améliorations.',
      category: 'product',
      categoryName: 'Produits',
      date: '20 décembre 2025',
      readTime: '6 min',
      image: Zap,
      slug: 'api-v2'
    },
    {
      id: 9,
      title: 'Expansion à Gitega: Nouveau bureau régional',
      excerpt: 'Renforcement de notre présence dans la capitale politique.',
      category: 'company',
      categoryName: 'Entreprise',
      date: '15 décembre 2025',
      readTime: '3 min',
      image: Users,
      slug: 'bureau-gitega'
    }
  ];

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Actualités</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              RESTEZ INFORMÉ
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Toutes les nouveautés, annonces et actualités uFaranga
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher une actualité..."
                  className="w-full px-6 py-4 pr-12 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-semibold text-gray-400">Catégories</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'border border-gray-800 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to={`/actualites/${featuredNews.slug}`}
              className="block border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-12">
                  <featuredNews.image className="w-32 h-32 text-primary" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                    <Tag className="w-3 h-3" />
                    À LA UNE
                  </div>
                  <h2 className="text-3xl font-anton uppercase mb-4 group-hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{featuredNews.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredNews.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredNews.readTime}
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Lire l'article
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 text-gray-400">
              {filteredNews.length} article{filteredNews.length > 1 ? 's' : ''} trouvé{filteredNews.length > 1 ? 's' : ''}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/actualites/${item.slug}`}
                  className="border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-colors group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <item.image className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {item.categoryName}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.readTime}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      Lire plus
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aucune actualité trouvée</h3>
                <p className="text-gray-400">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              RESTEZ INFORMÉ
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Recevez les dernières actualités directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-4 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
