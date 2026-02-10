import React, { useState } from 'react';
import {
  Store, CreditCard, BarChart3, Smartphone, Package,
  Users, Zap, TrendingUp, ShoppingCart, Receipt,
  Wifi, Battery, Check, Clock, DollarSign,
  QrCode, NfcIcon, Calendar, FileText, Settings,
  AlertCircle, CheckCircle, X, Plus, Minus, Search
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const POS = () => {
  const [showSaleDemo, setShowSaleDemo] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Mock products for demo
  const products = [
    { id: 1, name: 'Primus (Bouteille)', price: 2000, category: 'Boissons', stock: 150 },
    { id: 2, name: 'Coca-Cola 500ml', price: 1500, category: 'Boissons', stock: 80 },
    { id: 3, name: 'Pain', price: 500, category: 'Boulangerie', stock: 45 },
    { id: 4, name: 'Lait Vital 1L', price: 3500, category: 'Laitier', stock: 30 },
    { id: 5, name: 'Savon Imperial', price: 2500, category: 'Hygiène', stock: 60 },
    { id: 6, name: 'Riz 1kg', price: 4000, category: 'Alimentation', stock: 100 },
  ];

  // Today's sales mock data
  const todaySales = [
    { time: '14:32', items: 3, amount: 8500, method: 'uFaranga', customer: 'Anonyme' },
    { time: '14:15', items: 1, amount: 2000, method: 'Carte', customer: 'Jean P.' },
    { time: '13:58', items: 5, amount: 12000, method: 'uFaranga', customer: 'Marie K.' },
    { time: '13:42', items: 2, amount: 5500, method: 'Espèces', customer: 'Anonyme' },
  ];

  // Hardware specs
  const hardwareSpecs = [
    { label: 'Écran tactile', value: '10.1" HD', icon: Smartphone },
    { label: 'Batterie', value: '8h autonomie', icon: Battery },
    { label: 'Connectivité', value: '4G + WiFi', icon: Wifi },
    { label: 'Imprimante', value: 'Thermique intégrée', icon: Receipt },
  ];

  // Payment methods
  const paymentMethods = [
    { name: 'uFaranga QR', icon: QrCode, fee: '0%', color: 'primary' },
    { name: 'Cartes bancaires', icon: CreditCard, fee: '2.5%', color: 'blue-500' },
    { name: 'NFC/Contactless', icon: NfcIcon, fee: '2.5%', color: 'purple-500' },
    { name: 'Espèces', icon: DollarSign, fee: '0%', color: 'green-500' },
  ];

  // Features
  const features = [
    {
      icon: Package,
      title: 'Gestion Stock Temps Réel',
      desc: 'Mise à jour automatique des stocks à chaque vente. Alertes de rupture.',
      benefits: ['Synchronisation cloud instantanée', 'Codes-barres EAN-13', 'Inventaire par catégorie']
    },
    {
      icon: BarChart3,
      title: 'Rapports Automatiques',
      desc: 'Statistiques de vente par jour, semaine, mois. Export Excel/PDF.',
      benefits: ['Chiffre d\'affaires en temps réel', 'Top produits vendus', 'Analyse par heure de pointe']
    },
    {
      icon: Users,
      title: 'Multi-Caissiers',
      desc: 'Comptes séparés pour chaque employé avec permissions personnalisées.',
      benefits: ['Suivi par caissier', 'Fermeture de caisse auto', 'Historique des actions']
    },
    {
      icon: Wifi,
      title: 'Mode Hors Ligne',
      desc: 'Continuez à vendre même sans connexion internet.',
      benefits: ['Synchronisation auto au retour', 'Données stockées localement', 'Aucune vente perdue']
    },
  ];

  // Success stories
  const successStories = [
    {
      business: 'Supermarché Kobero Market',
      location: 'Bujumbura, Rohero',
      challenge: 'Longues files d\'attente, erreurs de caisse fréquentes',
      result: 'Temps de paiement divisé par 3, 0 erreur en 6 mois',
      metric: '120 ventes/jour',
      icon: Store
    },
    {
      business: 'Pharmacie Santé Plus',
      location: 'Gitega Centre',
      challenge: 'Gestion stock complexe (péremption médicaments)',
      result: 'Plus aucune péremption, stock optimisé automatiquement',
      metric: '-15% coûts stock',
      icon: Package
    },
    {
      business: 'Café-Restaurant Le Jardin',
      location: 'Bujumbura, Kiriri',
      challenge: 'Perte de revenus (vols, erreurs)',
      result: 'Traçabilité totale, comptabilité en temps réel',
      metric: '+25% revenus',
      icon: ShoppingCart
    },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setCartTotal(cartTotal + product.price);
  };

  const clearCart = () => {
    setCart([]);
    setCartTotal(0);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Store className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Point de Vente</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-anton uppercase mb-6">
            Terminal <span className="text-secondary">POS</span> Moderne
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Transformez votre commerce avec notre terminal de paiement tout-en-un.
            Encaissez tous les moyens de paiement, gérez votre stock et suivez vos ventes en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="px-8 py-4 text-lg">
              Commander un terminal
            </GradientButton>
            <button
              onClick={() => setShowSaleDemo(!showSaleDemo)}
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" /> Essayer la démo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Terminal à partir de 250,000 FBU • Installation gratuite • Formation incluse</p>
        </div>

        {/* Hardware Specs */}
        <div className="max-w-6xl mx-auto mb-20">
          <GlassCard className="bg-gradient-to-br from-secondary/20 to-green-900/20 border-secondary/30 p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-anton uppercase mb-4">Terminal Professionnel</h2>
                <p className="text-gray-300 mb-6">
                  Hardware haute qualité conçu pour durer. Écran tactile HD, imprimante thermique intégrée, batterie longue durée.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {hardwareSpecs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <spec.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{spec.label}</div>
                        <div className="font-bold text-white text-sm">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <GradientButton variant="secondary" className="flex-1">Voir les specs</GradientButton>
                  <button className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors">
                    Vidéo démo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Store className="w-24 h-24 text-secondary/50 mx-auto mb-4" />
                    <div className="text-gray-500 text-sm">Image du terminal POS</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Payment Methods */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-anton uppercase mb-4">Tous Les Moyens de Paiement</h2>
            <p className="text-gray-400 text-lg">Un seul terminal pour toutes les méthodes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {paymentMethods.map((method, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-6 text-center hover:bg-white/5 transition-all">
                <div className={`w-16 h-16 rounded-2xl bg-${method.color}/20 flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-8 h-8 text-${method.color}`} />
                </div>
                <h3 className="font-bold text-white mb-2">{method.name}</h3>
                <div className="text-sm text-gray-400 mb-1">Frais</div>
                <div className={`text-xl font-bold text-${method.color}`}>{method.fee}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Bien Plus Qu'un Terminal</h2>
            <p className="text-gray-400 text-lg">Une solution complète de gestion commerciale</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-8">
                <div className="flex gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Ils Ont Transformé Leur Commerce</h2>
            <p className="text-gray-400 text-lg">Découvrez leurs résultats concrets</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <story.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{story.business}</div>
                    <div className="text-xs text-gray-500">{story.location}</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <div>
                    <div className="text-gray-500 mb-1">Défi:</div>
                    <div className="text-gray-300">{story.challenge}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Résultat:</div>
                    <div className="text-gray-300">{story.result}</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                  <div className="text-2xl font-bold text-green-400">{story.metric}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <GlassCard className="bg-gradient-to-r from-secondary/20 to-green/20 border-secondary/30 p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-anton uppercase mb-4">Commandez Votre Terminal</h2>
          <div className="mb-6">
            <div className="text-6xl font-bold text-white mb-2">250,000 <span className="text-3xl text-secondary">FBU</span></div>
            <div className="text-gray-400">Prix unique • Pas d'abonnement mensuel</div>
          </div>
          <ul className="max-w-md mx-auto mb-8 space-y-2 text-left">
            {['Terminal POS complet', 'Installation gratuite', 'Formation de votre équipe', 'Support technique 24/7', 'Mises à jour logicielles gratuites'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="secondary" className="px-8 py-4 text-lg">
              Commander maintenant
            </GradientButton>
            <button className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors">
              Demander une démo sur site
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">Livraison sous 48h à Bujumbura • Paiement en plusieurs fois disponible</p>
        </GlassCard>
      </div>

      {/* Sale Demo Modal */}
      {showSaleDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowSaleDemo(false)}></div>
          <div className="relative z-10 w-full max-w-6xl bg-[#121212] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/60">
              <div>
                <h3 className="text-2xl font-bold text-white">Démo Terminal POS</h3>
                <p className="text-sm text-gray-400">Simulez une vente réelle</p>
              </div>
              <button onClick={() => setShowSaleDemo(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 h-[600px]">
              {/* Products */}
              <div className="p-6 border-r border-white/10 overflow-y-auto">
                <h4 className="font-bold text-white mb-4">Produits</h4>
                <div className="grid grid-cols-2 gap-3">
                  {products.map(product => (
                    <button
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group"
                    >
                      <div className="font-bold text-white text-sm mb-1 group-hover:text-secondary transition-colors">{product.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                      <div className="flex items-center justify-between">
                        <div className="font-mono font-bold text-secondary">{product.price.toLocaleString()} FBU</div>
                        <div className="text-xs text-gray-600">Stock: {product.stock}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart */}
              <div className="p-6 bg-black/40 flex flex-col">
                <h4 className="font-bold text-white mb-4">Panier</h4>
                <div className="flex-1 overflow-y-auto mb-4 space-y-2">
                  {cart.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10">
                      <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Cliquez sur un produit pour l'ajouter</p>
                    </div>
                  ) : (
                    cart.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex-1">
                          <div className="font-bold text-white text-sm">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.price.toLocaleString()} FBU × {item.qty}</div>
                        </div>
                        <div className="font-mono font-bold text-white">{(item.price * item.qty).toLocaleString()} FBU</div>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total</span>
                    <span className="text-3xl font-bold text-white font-mono">{cartTotal.toLocaleString()} FBU</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2">
                      <QrCode className="w-5 h-5" /> uFaranga
                    </button>
                    <button className="py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2">
                      <CreditCard className="w-5 h-5" /> Carte
                    </button>
                  </div>

                  <button
                    onClick={clearCart}
                    className="w-full py-3 rounded-xl border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default POS;
