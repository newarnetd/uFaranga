import React, { useState } from 'react';
import {
  Code, Zap, Shield, Lock, Globe, Terminal,
  Book, CheckCircle, Copy, ExternalLink, Play,
  Webhook, Package, FileCode, Key, ArrowRight,
  Cloud, Database, Server, Smartphone, ChevronRight
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const Developers = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('payment');
  const [copiedCode, setCopiedCode] = useState(false);

  // API Endpoints
  const endpoints = [
    {
      id: 'payment',
      method: 'POST',
      path: '/api/v1/payments',
      description: 'Initier un paiement',
      params: ['amount', 'currency', 'recipient', 'description'],
      example: `{
  "amount": 50000,
  "currency": "BIF",
  "recipient": "+25779123456",
  "description": "Commande #12345"
}`
    },
    {
      id: 'transfer',
      method: 'POST',
      path: '/api/v1/transfers',
      description: 'Effectuer un transfert',
      params: ['amount', 'currency', 'from', 'to'],
      example: `{
  "amount": 100000,
  "currency": "BIF",
  "from": "account_id",
  "to": "+25769987654"
}`
    },
    {
      id: 'balance',
      method: 'GET',
      path: '/api/v1/balance',
      description: 'Consulter le solde du compte',
      params: ['account_id'],
      example: `// GET request - no body`
    },
    {
      id: 'transaction',
      method: 'GET',
      path: '/api/v1/transactions/:id',
      description: 'Récupérer les détails d\'une transaction',
      params: ['transaction_id'],
      example: `// GET /api/v1/transactions/txn_abc123`
    },
  ];

  // SDKs
  const sdks = [
    { lang: 'JavaScript', icon: FileCode, command: 'npm install ufaranga-js', color: 'yellow-500' },
    { lang: 'Python', icon: Code, command: 'pip install ufaranga', color: 'blue-500' },
    { lang: 'PHP', icon: Server, command: 'composer require ufaranga/sdk', color: 'purple-500' },
    { lang: 'Java', icon: Terminal, command: 'maven add ufaranga-sdk', color: 'red-500' },
  ];

  // Plugins
  const plugins = [
    { name: 'WooCommerce', desc: 'Plugin WordPress pour boutiques en ligne', downloads: '500+', icon: Globe },
    { name: 'Shopify', desc: 'App Shopify pour paiements uFaranga', downloads: '200+', icon: ShoppingCart },
    { name: 'PrestaShop', desc: 'Module PrestaShop e-commerce', downloads: '150+', icon: Store },
  ];

  // Webhooks events
  const webhookEvents = [
    { event: 'payment.success', desc: 'Paiement réussi et confirmé' },
    { event: 'payment.failed', desc: 'Paiement échoué ou refusé' },
    { event: 'transfer.completed', desc: 'Transfert terminé avec succès' },
    { event: 'balance.updated', desc: 'Solde du compte mis à jour' },
  ];

  // Code examples
  const codeExamples = {
    init: `// Initialiser le SDK
const Ufaranga = require('ufaranga-js');

const client = new Ufaranga({
  apiKey: process.env.UFARANGA_API_KEY,
  environment: 'production' // ou 'sandbox'
});`,
    payment: `// Créer un paiement
const payment = await client.payments.create({
  amount: 50000,
  currency: 'BIF',
  recipient: '+25779123456',
  description: 'Abonnement Premium - Mars 2026',
  metadata: {
    order_id: '12345',
    customer_email: 'jean@example.com'
  }
});

console.log('Paiement créé:', payment.id);
// Retourne: { id, status, amount, ... }`,
    webhook: `// Configuration Webhook (Express.js)
app.post('/webhooks/ufaranga', (req, res) => {
  const signature = req.headers['x-ufaranga-signature'];
  
  // Vérifier la signature
  const isValid = client.webhooks.verify(
    req.body,
    signature,
    process.env.WEBHOOK_SECRET
  );
  
  if (!isValid) {
    return res.status(401).send('Invalid signature');
  }
  
  const { event, data } = req.body;
  
  switch (event) {
    case 'payment.success':
      console.log('Paiement reçu:', data.payment_id);
      // Débloquer la commande, envoyer email, etc.
      break;
      
    case 'payment.failed':
      console.log('Paiement échoué:', data.reason);
      // Notifier le client
      break;
  }
  
  res.status(200).send('OK');
});`
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Code className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">API & Intégrations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-anton uppercase mb-6">
            API <span className="text-purple-400">uFaranga</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Intégrez les paiements mobiles dans vos applications en quelques minutes.
            API REST simple, SDK pour tous les langages, webhooks temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="px-8 py-4 text-lg flex items-center gap-2">
              <Key className="w-5 h-5" /> Obtenir une clé API
            </GradientButton>
            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2">
              <Book className="w-5 h-5" /> Documentation complète
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Gratuit jusqu'à 1,000 transactions/mois • Sandbox illimité</p>
        </div>

        {/* Quick Start */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Démarrage Rapide</h2>
            <p className="text-gray-400 text-lg">Votre premier paiement en 5 minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <GlassCard className="bg-black/40 border-white/10 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="font-bold text-white mb-2">Créez un compte développeur</h3>
              <p className="text-sm text-gray-400">Obtenez vos clés API en 30 secondes</p>
            </GlassCard>

            <GlassCard className="bg-black/40 border-white/10 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="font-bold text-white mb-2">Installez le SDK</h3>
              <p className="text-sm text-gray-400">npm, pip, composer ou maven</p>
            </GlassCard>

            <GlassCard className="bg-black/40 border-white/10 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-400">3</span>
              </div>
              <h3 className="font-bold text-white mb-2">Premier paiement</h3>
              <p className="text-sm text-gray-400">5 lignes de code suffisent</p>
            </GlassCard>
          </div>

          {/* Code Example */}
          <GlassCard className="bg-gradient-to-br from-gray-900 to-black border-white/10 p-0 overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40">
              <span className="text-sm text-gray-400 font-mono">quick_start.js</span>
              <button
                onClick={() => copyCode(codeExamples.init + '\n\n' + codeExamples.payment)}
                className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
              >
                <Copy className="w-4 h-4" /> {copiedCode ? 'Copié !' : 'Copier'}
              </button>
            </div>
            <pre className="p-6 text-sm text-green-400 overflow-x-auto">
              <code>{codeExamples.init}\n\n{codeExamples.payment}</code>
            </pre>
          </GlassCard>
        </div>

        {/* API Endpoints */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Endpoints Principaux</h2>
            <p className="text-gray-400 text-lg">API REST complète avec tous les endpoints financiers</p>
          </div>

          <div className="grid gap-4">
            {endpoints.map((endpoint) => (
              <GlassCard
                key={endpoint.id}
                className="bg-black/40 border-white/10 p-6 hover:bg-white/5 transition-all cursor-pointer"
                onClick={() => setActiveEndpoint(endpoint.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-lg font-mono text-sm font-bold ${endpoint.method === 'GET'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                      }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-white font-mono">{endpoint.path}</code>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeEndpoint === endpoint.id ? 'rotate-90' : ''}`} />
                </div>
                <p className="text-gray-400 text-sm mb-2">{endpoint.description}</p>

                {activeEndpoint === endpoint.id && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 mb-2">Paramètres:</div>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param, i) => (
                          <span key={i} className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-mono">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">Exemple:</div>
                      <pre className="p-3 rounded-lg bg-black/60 text-green-400 text-xs overflow-x-auto">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">SDKs Officiels</h2>
            <p className="text-gray-400 text-lg">Bibliothèques pour tous les langages populaires</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {sdks.map((sdk, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-6 hover:bg-white/5 transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-${sdk.color}/20 flex items-center justify-center mb-4`}>
                  <sdk.icon className={`w-7 h-7 text-${sdk.color}`} />
                </div>
                <h3 className="font-bold text-white mb-2">{sdk.lang}</h3>
                <code className="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded block mb-4">{sdk.command}</code>
                <button className="text-purple-400 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Docs <ArrowRight className="w-4 h-4" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Webhooks */}
        <div className="max-w-6xl mx-auto mb-20">
          <GlassCard className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border-orange-500/30 p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <Webhook className="w-12 h-12 text-orange-400 mb-4" />
                <h2 className="text-3xl font-anton uppercase mb-4">Webhooks Temps Réel</h2>
                <p className="text-gray-300 mb-6">
                  Recevez des notifications instantanées pour tous les événements importants : paiements, transferts, mises à jour de solde.
                </p>

                <div className="space-y-3 mb-6">
                  <h3 className="font-bold text-white text-sm mb-2">Événements disponibles:</h3>
                  {webhookEvents.map((event, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <code className="text-orange-400 text-sm font-mono">{event.event}</code>
                        <div className="text-xs text-gray-400">{event.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <GradientButton variant="primary" className="flex items-center gap-2">
                  <Webhook className="w-5 h-5" /> Configurer les webhooks
                </GradientButton>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400 font-mono">webhook_handler.js</span>
                  <button
                    onClick={() => copyCode(codeExamples.webhook)}
                    className="text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    {copiedCode ? 'Copié !' : 'Copier'}
                  </button>
                </div>
                <pre className="text-xs text-green-400 overflow-x-auto">
                  <code>{codeExamples.webhook}</code>
                </pre>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Plugins E-commerce */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-anton uppercase mb-4">Plugins E-commerce</h2>
            <p className="text-gray-400 text-lg">Intégration clé en main pour les plateformes populaires</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plugins.map((plugin, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <plugin.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{plugin.name}</h3>
                    <div className="text-xs text-gray-500">{plugin.downloads} téléchargements</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">{plugin.desc}</p>
                <button className="text-purple-400 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Télécharger <ExternalLink className="w-4 h-4" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <GlassCard className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-anton uppercase mb-4">Prêt à Intégrer uFaranga ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Créez votre compte développeur et obtenez vos clés API gratuitement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="px-8 py-4 text-lg flex items-center gap-2">
              <Key className="w-5 h-5" /> Créer un compte développeur
            </GradientButton>
            <button className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2">
              <Book className="w-5 h-5" /> Lire la documentation
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Support technique 24/7 • Documentation en français • Sandbox de test illimité
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Developers;
