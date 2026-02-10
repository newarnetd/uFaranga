import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Download, BookOpen, Terminal, Zap, Shield, 
  CheckCircle, Copy, ExternalLink, Github, Package,
  Smartphone, Globe, Server, Database, Lock, Clock,
  ArrowRight, FileCode, Layers, Box
} from 'lucide-react';

const SDKs = () => {
  const [selectedSDK, setSelectedSDK] = useState('javascript');
  const [copiedCode, setCopiedCode] = useState(null);

  const sdks = [
    {
      id: 'javascript',
      name: 'JavaScript / Node.js',
      icon: FileCode,
      version: 'v2.1.0',
      downloads: '50K+',
      description: 'SDK officiel pour JavaScript et Node.js',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      install: 'npm install ufaranga-sdk',
      github: 'https://github.com/ufaranga/javascript-sdk',
      docs: '/docs/javascript'
    },
    {
      id: 'python',
      name: 'Python',
      icon: Code,
      version: 'v1.8.0',
      downloads: '35K+',
      description: 'SDK pour applications Python',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      install: 'pip install ufaranga',
      github: 'https://github.com/ufaranga/python-sdk',
      docs: '/docs/python'
    },
    {
      id: 'php',
      name: 'PHP',
      icon: Server,
      version: 'v1.5.0',
      downloads: '28K+',
      description: 'SDK pour applications PHP',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      install: 'composer require ufaranga/sdk',
      github: 'https://github.com/ufaranga/php-sdk',
      docs: '/docs/php'
    },
    {
      id: 'java',
      name: 'Java',
      icon: Box,
      version: 'v2.0.0',
      downloads: '22K+',
      description: 'SDK pour applications Java',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      install: 'maven: com.ufaranga:sdk:2.0.0',
      github: 'https://github.com/ufaranga/java-sdk',
      docs: '/docs/java'
    },
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      version: 'v1.9.0',
      downloads: '18K+',
      description: 'SDK natif pour Android',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      install: 'implementation "com.ufaranga:android-sdk:1.9.0"',
      github: 'https://github.com/ufaranga/android-sdk',
      docs: '/docs/android'
    },
    {
      id: 'ios',
      name: 'iOS / Swift',
      icon: Smartphone,
      version: 'v1.7.0',
      downloads: '15K+',
      description: 'SDK natif pour iOS',
      color: 'text-gray-400',
      bgColor: 'bg-gray-400/10',
      install: 'pod "UfarangaSDK", "~> 1.7.0"',
      github: 'https://github.com/ufaranga/ios-sdk',
      docs: '/docs/ios'
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: Layers,
      version: 'v1.4.0',
      downloads: '12K+',
      description: 'SDK pour applications Flutter',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      install: 'flutter pub add ufaranga_sdk',
      github: 'https://github.com/ufaranga/flutter-sdk',
      docs: '/docs/flutter'
    },
    {
      id: 'react',
      name: 'React',
      icon: Globe,
      version: 'v2.2.0',
      downloads: '45K+',
      description: 'SDK pour applications React',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      install: 'npm install @ufaranga/react-sdk',
      github: 'https://github.com/ufaranga/react-sdk',
      docs: '/docs/react'
    }
  ];

  const codeExamples = {
    javascript: {
      installation: `npm install ufaranga-sdk`,
      initialization: `const Ufaranga = require('ufaranga-sdk');

const client = new Ufaranga({
  apiKey: 'your_api_key',
  secretKey: 'your_secret_key',
  environment: 'production' // or 'sandbox'
});`,
      payment: `// Initier un paiement
const payment = await client.payments.create({
  amount: 10000,
  currency: 'BIF',
  customer: {
    phone: '+25779123456',
    email: 'client@example.com'
  },
  description: 'Achat produit #123',
  callbackUrl: 'https://yoursite.com/callback'
});

console.log(payment.id);
console.log(payment.status);`,
      transfer: `// Effectuer un transfert
const transfer = await client.transfers.create({
  amount: 5000,
  currency: 'BIF',
  recipient: '+25779654321',
  description: 'Remboursement'
});`,
      webhook: `// Vérifier un webhook
const express = require('express');
const app = express();

app.post('/webhook', express.json(), (req, res) => {
  const signature = req.headers['x-ufaranga-signature'];
  
  if (client.webhooks.verify(req.body, signature)) {
    const event = req.body;
    
    switch(event.type) {
      case 'payment.success':
        // Traiter le paiement réussi
        break;
      case 'payment.failed':
        // Traiter l'échec
        break;
    }
    
    res.status(200).send('OK');
  } else {
    res.status(400).send('Invalid signature');
  }
});`
    },
    python: {
      installation: `pip install ufaranga`,
      initialization: `import ufaranga

client = ufaranga.Client(
    api_key='your_api_key',
    secret_key='your_secret_key',
    environment='production'  # or 'sandbox'
)`,
      payment: `# Initier un paiement
payment = client.payments.create(
    amount=10000,
    currency='BIF',
    customer={
        'phone': '+25779123456',
        'email': 'client@example.com'
    },
    description='Achat produit #123',
    callback_url='https://yoursite.com/callback'
)

print(payment.id)
print(payment.status)`,
      transfer: `# Effectuer un transfert
transfer = client.transfers.create(
    amount=5000,
    currency='BIF',
    recipient='+25779654321',
    description='Remboursement'
)`,
      webhook: `# Vérifier un webhook (Flask)
from flask import Flask, request
app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    signature = request.headers.get('X-Ufaranga-Signature')
    
    if client.webhooks.verify(request.data, signature):
        event = request.json
        
        if event['type'] == 'payment.success':
            # Traiter le paiement réussi
            pass
        elif event['type'] == 'payment.failed':
            # Traiter l'échec
            pass
        
        return 'OK', 200
    else:
        return 'Invalid signature', 400`
    },
    php: {
      installation: `composer require ufaranga/sdk`,
      initialization: `<?php
require 'vendor/autoload.php';

use Ufaranga\\Client;

$client = new Client([
    'api_key' => 'your_api_key',
    'secret_key' => 'your_secret_key',
    'environment' => 'production' // or 'sandbox'
]);`,
      payment: `// Initier un paiement
$payment = $client->payments->create([
    'amount' => 10000,
    'currency' => 'BIF',
    'customer' => [
        'phone' => '+25779123456',
        'email' => 'client@example.com'
    ],
    'description' => 'Achat produit #123',
    'callback_url' => 'https://yoursite.com/callback'
]);

echo $payment->id;
echo $payment->status;`,
      transfer: `// Effectuer un transfert
$transfer = $client->transfers->create([
    'amount' => 5000,
    'currency' => 'BIF',
    'recipient' => '+25779654321',
    'description' => 'Remboursement'
]);`,
      webhook: `// Vérifier un webhook
$signature = $_SERVER['HTTP_X_UFARANGA_SIGNATURE'];
$payload = file_get_contents('php://input');

if ($client->webhooks->verify($payload, $signature)) {
    $event = json_decode($payload);
    
    switch($event->type) {
        case 'payment.success':
            // Traiter le paiement réussi
            break;
        case 'payment.failed':
            // Traiter l'échec
            break;
    }
    
    http_response_code(200);
} else {
    http_response_code(400);
}`
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Installation rapide',
      description: 'Intégrez uFaranga en quelques minutes avec nos SDKs optimisés'
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Chiffrement de bout en bout et authentification robuste'
    },
    {
      icon: BookOpen,
      title: 'Documentation complète',
      description: 'Guides détaillés, exemples de code et références API'
    },
    {
      icon: Clock,
      title: 'Support réactif',
      description: 'Équipe technique disponible pour vous accompagner'
    }
  ];

  const quickStart = [
    {
      step: '1',
      title: 'Créer un compte développeur',
      description: 'Inscrivez-vous gratuitement sur notre portail développeur'
    },
    {
      step: '2',
      title: 'Obtenir vos clés API',
      description: 'Générez vos clés API et secret depuis votre dashboard'
    },
    {
      step: '3',
      title: 'Installer le SDK',
      description: 'Choisissez votre langage et installez le SDK correspondant'
    },
    {
      step: '4',
      title: 'Commencer à coder',
      description: 'Suivez nos exemples et intégrez les paiements'
    }
  ];

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentSDK = sdks.find(sdk => sdk.id === selectedSDK);
  const currentExamples = codeExamples[selectedSDK] || codeExamples.javascript;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Code className="w-5 h-5" />
              <span className="font-semibold">SDKs & Bibliothèques</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              INTÉGREZ UFARANGA EN QUELQUES MINUTES
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              SDKs officiels pour tous les langages et plateformes populaires
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/developpeurs"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Documentation complète
              </Link>
              <a
                href="https://github.com/ufaranga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary/50 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            CHOISISSEZ VOTRE SDK
          </h2>
          <p className="text-center text-gray-400 mb-12">8 SDKs officiels maintenus et mis à jour régulièrement</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sdks.map((sdk) => (
              <button
                key={sdk.id}
                onClick={() => setSelectedSDK(sdk.id)}
                className={`border rounded-xl p-6 text-left transition-all ${
                  selectedSDK === sdk.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-800 hover:border-primary/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${sdk.bgColor} flex items-center justify-center mb-4`}>
                  <sdk.icon className={`w-6 h-6 ${sdk.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{sdk.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span>{sdk.version}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {sdk.downloads}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{sdk.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-anton uppercase mb-2">
                  EXEMPLES DE CODE - {currentSDK?.name}
                </h2>
                <p className="text-gray-400">Commencez rapidement avec ces exemples</p>
              </div>
              <div className="flex gap-3">
                <a
                  href={currentSDK?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-lg text-sm hover:border-primary/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <Link
                  to={currentSDK?.docs}
                  className="inline-flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-lg text-sm hover:border-primary/50 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  Docs
                </Link>
              </div>
            </div>

            {/* Installation */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Installation
              </h3>
              <div className="relative border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Terminal</span>
                  <button
                    onClick={() => copyToClipboard(currentExamples.installation, 'install')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'install' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{currentExamples.installation}</code>
                </pre>
              </div>
            </div>

            {/* Initialization */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Initialisation
              </h3>
              <div className="relative border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Code</span>
                  <button
                    onClick={() => copyToClipboard(currentExamples.initialization, 'init')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'init' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{currentExamples.initialization}</code>
                </pre>
              </div>
            </div>

            {/* Payment Example */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Créer un paiement
              </h3>
              <div className="relative border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Code</span>
                  <button
                    onClick={() => copyToClipboard(currentExamples.payment, 'payment')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'payment' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{currentExamples.payment}</code>
                </pre>
              </div>
            </div>

            {/* Transfer Example */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                Effectuer un transfert
              </h3>
              <div className="relative border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Code</span>
                  <button
                    onClick={() => copyToClipboard(currentExamples.transfer, 'transfer')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'transfer' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{currentExamples.transfer}</code>
                </pre>
              </div>
            </div>

            {/* Webhook Example */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Gérer les webhooks
              </h3>
              <div className="relative border border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Code</span>
                  <button
                    onClick={() => copyToClipboard(currentExamples.webhook, 'webhook')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'webhook' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">{currentExamples.webhook}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            DÉMARRAGE RAPIDE
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {quickStart.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-anton text-primary mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {idx < quickStart.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
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
              PRÊT À COMMENCER ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Créez votre compte développeur et obtenez vos clés API gratuitement
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/developpeurs"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Créer un compte développeur
              </Link>
              <Link
                to="/api"
                className="inline-flex items-center gap-2 border border-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary/50 transition-colors"
              >
                Voir la documentation API
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDKs;
