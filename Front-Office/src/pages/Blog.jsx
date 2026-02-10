import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Calendar, Clock, ArrowRight, Tag,
  TrendingUp, Lightbulb, Users, Zap, Globe,
  Sparkles, Award, BookOpen, ChevronRight
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = [
    { name: 'Tous', icon: BookOpen, count: 15 },
    { name: 'Éducation financière', icon: Lightbulb, count: 5 },
    { name: 'Success Stories', icon: Award, count: 3 },
    { name: 'Actualités', icon: Globe, count: 4 },
    { name: 'Guides', icon: BookOpen, count: 3 },
  ];

  const articles = [
    {
      id: 1,
      title: 'Comment épargner 100,000 FBU en 6 mois avec la règle des 50/30/20',
      category: 'Éducation financière',
      date: '8 février 2026',
      readTime: '6 min',
      slug: 'epargner-100k-6-mois',
      excerpt: 'La méthode éprouvée pour gérer votre budget et épargner efficacement même avec un petit salaire.',
      featured: true,
      author: 'Sophie Niyomwungere',
      tags: ['Épargne', 'Budget', 'Conseils']
    },
    {
      id: 2,
      title: 'De vendeuse ambulante à propriétaire : Le parcours de Marie Uwimana',
      category: 'Success Stories',
      date: '5 février 2026',
      readTime: '8 min',
      slug: 'success-marie-uwimana',
      excerpt: 'Comment Marie a utilisé le micro-crédit uFaranga pour ouvrir sa boutique à Gitega et tripler ses revenus en 1 an.',
      featured: true,
      author: 'Jean-Paul Bizimana',
      tags: ['Micro-crédit', 'Entrepreneuriat', 'Inspiration']
    },
    {
      id: 3,
      title: 'uFaranga lance le paiement par QR code dans 500 commerces',
      category: 'Actualités',
      date: '3 février 2026',
      readTime: '4 min',
      slug: 'lancement-qr-code',
      excerpt: 'Une révolution pour les paiements sans contact au Burundi. Découvrez la liste des commerces participants.',
      featured: false,
      author: 'Équipe uFaranga',
      tags: ['QR Code', 'Innovation', 'Paiements']
    },
    {
      id: 4,
      title: '7 erreurs à éviter quand on débute avec uFaranga',
      category: 'Guides',
      date: '1er février 2026',
      readTime: '5 min',
      slug: 'erreurs-debutants',
      excerpt: 'Les pièges classiques des nouveaux utilisateurs et comment les éviter pour maximiser votre expérience.',
      featured: false,
      author: 'Support uFaranga',
      tags: ['Guide', 'Débutants', 'Tutoriel']
    },
    {
      id: 5,
      title: 'Comprendre les taux d\'intérêt : Le guide complet 2026',
      category: 'Éducation financière',
      date: '28 janvier 2026',
      readTime: '10 min',
      slug: 'guide-taux-interet',
      excerpt: 'Taux simple, taux composé, TAEG... On vous explique tout pour faire les bons choix financiers.',
      featured: false,
      author: 'Dr. Pascal Ndayishimiye',
      tags: ['Intérêts', 'Épargne', 'Crédit']
    },
    {
      id: 6,
      title: 'Record : 1 million de transactions en 24h pendant les fêtes',
      category: 'Actualités',
      date: '26 janvier 2026',
      readTime: '3 min',
      slug: 'record-transactions',
      excerpt: 'Un nouveau cap franchi pour uFaranga avec 1 million de transactions traitées le 1er janvier 2026.',
      featured: false,
      author: 'Équipe uFaranga',
      tags: ['Statistiques', 'Croissance', 'Record']
    },
    {
      id: 7,
      title: 'Les jeunes et l\'argent : Étude exclusive sur les 18-25 ans',
      category: 'Éducation financière',
      date: '22 janvier 2026',
      readTime: '7 min',
      slug: 'etude-jeunes-argent',
      excerpt: 'Résultats surprenants de notre enquête auprès de 2,000 jeunes Burundais sur leurs habitudes financières.',
      featured: false,
      author: 'Researche Team',
      tags: ['Jeunes', 'Étude', 'Comportement']
    },
    {
      id: 8,
      title: 'Comment Jean a remboursé 500,000 FBU de dettes en 10 mois',
      category: 'Success Stories',
      date: '18 janvier 2026',
      readTime: '9 min',
      slug: 'success-jean-dettes',
      excerpt: 'La stratégie boule de neige qui a permis à Jean de sortir de l\'endettement et reprendre le contrôle.',
      featured: false,
      author: 'Marie Kamikazi',
      tags: ['Dettes', 'Budget', 'Motivation']
    },
    {
      id: 9,
      title: 'Nouveau : Virements internationaux vers 15 pays d\'Afrique',
      category: 'Actualités',
      date: '15 janvier 2026',
      readTime: '4 min',
      slug: 'virements-internationaux',
      excerpt: 'Envoyez de l\'argent vers le Rwanda, la RDC, le Kenya et 12 autres pays directement depuis votre app.',
      featured: false,
      author: 'Équipe Produit',
      tags: ['International', 'Transferts', 'Nouveauté']
    },
    {
      id: 10,
      title: 'Tontines digitales : La tradition rencontre la technologie',
      category: 'Guides',
      date: '12 janvier 2026',
      readTime: '6 min',
      slug: 'tontines-digitales',
      excerpt: 'Comment créer et gérer votre tontine sur uFaranga : tutoriel pas à pas avec captures d\'écran.',
      featured: false,
      author: 'Claudine Nzeyimana',
      tags: ['Tontines', 'Épargne collective', 'Tutoriel']
    },
    {
      id: 11,
      title: 'Investir au Burundi : Les 5 opportunités méconnues de 2026',
      category: 'Éducation financière',
      date: '8 janvier 2026',
      readTime: '8 min',
      slug: 'investir-burundi-2026',
      excerpt: 'Agriculture, immobilier, tech... Où placer votre argent pour un rendement optimal cette année ?',
      featured: false,
      author: 'Économiste Invité',
      tags: ['Investissement', 'Opportunités', 'Business']
    },
    {
      id: 12,
      title: 'Sécurité : Reconnaître et éviter les arnaques par SMS',
      category: 'Guides',
      date: '5 janvier 2026',
      readTime: '5 min',
      slug: 'eviter-arnaques-sms',
      excerpt: 'Les techniques des fraudeurs et les réflexes à adopter pour protéger votre compte uFaranga.',
      featured: false,
      author: 'Équipe Sécurité',
      tags: ['Sécurité', 'Fraude', 'Prévention']
    },
    {
      id: 13,
      title: 'Success Story : De chauffeur à propriétaire de 3 taxis en 2 ans',
      category: 'Success Stories',
      date: '2 janvier 2026',
      readTime: '7 min',
      slug: 'success-chauffeur-taxis',
      excerpt: 'Dieudonné raconte comment il a financé son premier taxi grâce au micro-crédit et développé sa flotte.',
      featured: false,
      author: 'Reporters uFaranga',
      tags: ['Transport', 'Micro-crédit', 'Ambition']
    },
    {
      id: 14,
      title: 'Les chiffres de 2025 : uFaranga en 10 statistiques impressionnantes',
      category: 'Actualités',
      date: '29 décembre 2025',
      readTime: '4 min',
      slug: 'bilan-2025',
      excerpt: '500K utilisateurs, 15M de transactions, 2,400 entreprises... Retour sur une année record.',
      featured: false,
      author: 'Direction Générale',
      tags: ['Bilan', 'Statistiques', '2025']
    },
    {
      id: 15,
      title: 'Comment parler d\'argent avec ses enfants : Guide pour parents',
      category: 'Éducation financière',
      date: '26 décembre 2025',
      readTime: '9 min',
      slug: 'parler-argent-enfants',
      excerpt: 'Initiez vos enfants aux notions d\'épargne, budget et valeur de l\'argent selon leur âge.',
      featured: false,
      author: 'Psychologue Financier',
      tags: ['Famille', 'Enfants', 'Éducation']
    }
  ];

  const filteredArticles = activeCategory === 'Tous'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blog uFaranga</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">
            Actualités & <span className="text-primary">Conseils</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Éducation financière, success stories et nouveautés de la fintech burundaise
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-anton uppercase mb-8 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              À LA UNE
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map(article => (
                <GlassCard key={article.id} className="bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/20 p-0 overflow-hidden group cursor-pointer hover:border-primary/40 transition-all">
                  <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                    <Sparkles className="w-20 h-20 text-primary/30 relative z-10" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lire <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-10 max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${activeCategory === cat.name
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
                <span className="text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <GlassCard
                key={article.id}
                className="bg-black/40 border-white/10 p-0 overflow-hidden group cursor-pointer hover:bg-white/5 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-colors"></div>
                  <BookOpen className="w-16 h-16 text-white/20 relative z-10" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <span>{article.date}</span>
                  </div>
                  {article.tags && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {article.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs text-gray-600 bg-white/5 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <GlassCard className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 p-10 text-center max-w-4xl mx-auto mt-20">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-anton uppercase mb-4">Ne Manquez Rien !</h2>
          <p className="text-gray-300 mb-6">
            Recevez nos meilleurs articles et conseils financiers directement par email
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
            />
            <GradientButton className="px-6 py-3">
              S'abonner
            </GradientButton>
          </div>
          <p className="text-xs text-gray-500 mt-4">1 email par semaine • Désinscription en 1 clic</p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Blog;
