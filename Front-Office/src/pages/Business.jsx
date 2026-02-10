import React, { useState } from 'react';
import {
  Building, Store, ShoppingCart, FileText, Users,
  Wallet, TrendingUp, CreditCard, Zap, Globe,
  Code, Smartphone, CheckCircle, ArrowRight,
  DollarSign, Clock, Shield, BarChart3, Package,
  Receipt, UserPlus, Settings, ChevronRight, Play,
  Loader, Lock, Award, Target, Briefcase, PieChart
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const Business = () => {
  const [activeDemo, setActiveDemo] = useState('pos');

  // Solutions principales
  const mainSolutions = [
    {
      id: 'account',
      icon: Building,
      title: 'Compte Professionnel',
      desc: 'Séparez personnel et pro',
      color: 'primary',
      features: ['Multi-devises (BIF, USD, EUR)', 'Cartes virtuelles illimitées', 'Sous-comptes par projet', 'Connexion banque centrale']
    },
    {
      id: 'pos',
      icon: Store,
      title: 'Point de Vente',
      desc: 'Terminal moderne',
      color: 'secondary',
      features: ['Terminal physique + app mobile', 'Tous paiements (carte, QR, NFC)', 'Gestion stock en temps réel', 'Rapports de vente automatiques']
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-Commerce',
      desc: 'Vendez en ligne',
      color: 'blue-500',
      features: ['Bouton "Payer" clé en main', 'Plugins WooCommerce/Shopify', 'Page de paiement sécurisée', 'Gestion produits intégrée']
    },
    {
      id: 'invoicing',
      icon: FileText,
      title: 'Facturation',
      desc: 'Factures automatiques',
      color: 'purple-500',
      features: ['Génération automatique PDF', 'Envoi email + SMS', 'Rappels de paiement auto', 'Suivi paiements']
    },
    {
      id: 'treasury',
      icon: Wallet,
      title: 'Trésorerie',
      desc: 'Gérez vos flux',
      color: 'green-500',
      features: ['Tableau de bord temps réel', 'Prévisions de trésorerie', 'Alertes de seuil', 'Export comptable Excel']
    },
    {
      id: 'payroll',
      icon: Users,
      title: 'Paie Employés',
      desc: 'Salaires automatiques',
      color: 'orange-500',
      features: ['Virements salaires groupés', 'Bulletins de paie auto', 'Déclarations sociales', 'Historique complet']
    },
  ];

  // Stats entreprises clientes
  const stats = [
    { label: 'Entreprises clientes', value: '2,400+', icon: Building },
    { label: 'Transactions/mois', value: '1.5M', icon: TrendingUp },
    { label: 'Économie moyenne', value: '35%', icon: DollarSign },
    { label: 'Satisfaction', value: '98%', icon: Award },
  ];

  // Use cases réels
  const useCases = [
    {
      category: 'Retail',
      name: 'Supermarché City Plaza',
      challenge: 'Files d\'attente longues, gestion stock chaotique',
      solution: 'POS uFaranga + gestion stock intégrée',
      result: '40% de réduction du temps d\'attente, 0 ruptures de stock',
      icon: Store
    },
    {
      category: 'E-commerce',
      name: 'BurundiShop.bi',
      challenge: 'Abandon panier 75% (processus paiement complexe)',
      solution: 'Intégration API paiements + carte virtuelle',
      result: 'Conversion +60%, revenus x3 en 6 mois',
      icon: ShoppingCart
    },
    {
      category: 'Services',
      name: 'Cabinet Comptable SOFICO',
      challenge: 'Facturation manuelle, retards de paiement',
      solution: 'Facturation auto + rappels SMS',
      result: '85% de paiements à temps (vs 45% avant)',
      icon: FileText
    },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Starter',
      price: '0',
      period: 'Gratuit pour toujours',
      features: [
        'Compte professionnel',
        'Transferts illimités',
        '1 utilisateur',
        '10 factures/mois',
        'Support email'
      ],
      cta: 'Commencer gratuitement',
      popular: false
    },
    {
      name: 'Business',
      price: '50,000',
      period: 'FBU/mois',
      features: [
        'Tout de Starter +',
        'Terminal POS physique',
        '5 utilisateurs',
        'Factures illimitées',
        'API & Intégrations',
        'Support prioritaire 24/7'
      ],
      cta: 'Essai gratuit 30 jours',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: 'Contactez-nous',
      features: [
        'Tout de Business +',
        'Multi-boutiques',
        'Utilisateurs illimités',
        'Account manager dédié',
        'Formation sur site',
        'SLA 99.99%'
      ],
      cta: 'Contactez les ventes',
      popular: false
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Solutions Entreprise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-anton uppercase mb-6">
            uFaranga <span className="text-primary">Business</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            La plateforme financière complète pour les entreprises burundaises.
            Gérez vos paiements, factures, stock, paie et comptabilité depuis un seul endroit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="px-8 py-4 text-lg">
              Créer un compte Business
            </GradientButton>
            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> Voir la démo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Gratuit pour débuter • Sans engagement • Support en français</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="bg-black/40 border-white/10 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Main Solutions Grid */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Toutes Vos Opérations, Un Seul Outil</h2>
            <p className="text-gray-400 text-lg">Choisissez les modules dont vous avez besoin</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainSolutions.map((solution) => (
              <GlassCard
                key={solution.id}
                className="bg-black/40 border-white/10 p-6 hover:bg-white/5 transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${solution.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className={`w-7 h-7 text-${solution.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.desc}</p>
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  En savoir plus <ChevronRight className="w-4 h-4" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Integrations & API */}
        <div className="mb-20 max-w-6xl mx-auto">
          <GlassCard className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Code className="w-12 h-12 text-purple-400 mb-4" />
                <h2 className="text-3xl font-anton uppercase mb-4">Intégrations & API</h2>
                <p className="text-gray-300 mb-6">
                  Connectez uFaranga à vos outils existants ou développez votre propre intégration avec notre API REST.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Plugins E-commerce</div>
                      <div className="text-sm text-gray-400">WooCommerce, Shopify, PrestaShop</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Webhooks temps réel</div>
                      <div className="text-sm text-gray-400">Notifications instantanées de paiements</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">API REST complète</div>
                      <div className="text-sm text-gray-400">Documentation, SDK, sandbox de test</div>
                    </div>
                  </div>
                </div>

                <GradientButton variant="secondary" className="flex items-center gap-2">
                  <Code className="w-5 h-5" /> Voir la documentation
                </GradientButton>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">code_example.js</span>
                  <button className="text-xs text-gray-500 hover:text-white transition-colors">Copier</button>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto">
                  {`// Créer un paiement
const payment = await ufaranga.payments.create({
  amount: 50000,
  currency: 'BIF',
  customer: '+25779123456',
  description: 'Commande #12345'
});

// Webhook: paiement confirmé
app.post('/webhook', (req, res) => {
  const { event, payment } = req.body;
  if (event === 'payment.success') {
    console.log('Paiement reçu:', payment.id);
  }
});`}
                </pre>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Use Cases */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Ils Nous Font Confiance</h2>
            <p className="text-gray-400 text-lg">Découvrez comment nos clients transforment leur business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-bold uppercase">{useCase.category}</div>
                    <div className="font-bold text-white">{useCase.name}</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Défi:</div>
                    <div className="text-gray-300">{useCase.challenge}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Solution:</div>
                    <div className="text-gray-300">{useCase.solution}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="text-green-400 font-bold">{useCase.result}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Tarifs Simples et Transparents</h2>
            <p className="text-gray-400 text-lg">Commencez gratuitement, évoluez selon vos besoins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <GlassCard
                key={i}
                className={`p-8 relative ${tier.popular ? 'bg-gradient-to-br from-primary/20 to-blue-900/20 border-primary/50' : 'bg-black/40 border-white/10'}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="px-4 py-1 rounded-full bg-primary text-white text-xs font-bold">
                      LE PLUS POPULAIRE
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.price !== 'Sur mesure' && tier.price !== '0' && <span className="text-gray-400 text-sm ml-1">FBU</span>}
                  </div>
                  <div className="text-sm text-gray-400">{tier.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <GradientButton
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className="w-full py-3"
                >
                  {tier.cta}
                </GradientButton>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Tous les plans incluent : Infrastructure cloud AWS • Sécurité SSL/TLS • Support technique • Mises à jour gratuites
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <GlassCard className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-anton uppercase mb-4">Prêt à Transformer Votre Business ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez 2,400+ entreprises qui font confiance à uFaranga pour leurs finances
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="px-8 py-4 text-lg">
              Créer mon compte Business
            </GradientButton>
            <button className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors">
              Parler à un conseiller
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Essai gratuit 30 jours sur le plan Business • Aucune carte bancaire requise
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Business;
