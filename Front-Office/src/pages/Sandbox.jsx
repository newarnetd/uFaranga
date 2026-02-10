import { useState } from 'react';
import { 
  Play, Code, Terminal, Key, CheckCircle, Copy,
  Zap, Shield, Clock, RefreshCw, Database, Settings
} from 'lucide-react';

const Sandbox = () => {
  const [apiKey, setApiKey] = useState('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
  const [copiedKey, setCopiedKey] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const testAccounts = [
    {
      type: 'Compte test standard',
      phone: '+257 79 999 0001',
      balance: '1,000,000 BIF',
      pin: '1234'
    },
    {
      type: 'Compte test premium',
      phone: '+257 79 999 0002',
      balance: '5,000,000 BIF',
      pin: '5678'
    },
    {
      type: 'Compte test business',
      phone: '+257 79 999 0003',
      balance: '10,000,000 BIF',
      pin: '9012'
    }
  ];

  const testCards = [
    {
      number: '4242 4242 4242 4242',
      type: 'Visa',
      result: 'Succès',
      cvv: '123',
      expiry: '12/28'
    },
    {
      number: '4000 0000 0000 0002',
      type: 'Visa',
      result: 'Échec - Fonds insuffisants',
      cvv: '123',
      expiry: '12/28'
    },
    {
      number: '4000 0000 0000 9995',
      type: 'Visa',
      result: 'Échec - Carte refusée',
      cvv: '123',
      expiry: '12/28'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Tests illimités',
      description: 'Testez autant que vous voulez, gratuitement'
    },
    {
      icon: Shield,
      title: 'Environnement isolé',
      description: 'Aucun impact sur les données de production'
    },
    {
      icon: Clock,
      title: 'Disponible 24/7',
      description: 'Accès permanent à l\'environnement de test'
    },
    {
      icon: RefreshCw,
      title: 'Reset instantané',
      description: 'Réinitialisez vos données de test en un clic'
    }
  ];

  const quickTests = [
    {
      title: 'Paiement simple',
      code: `curl -X POST https://sandbox.ufaranga.bi/v1/payments \\
  -H "Authorization: Bearer sk_test_..." \\
  -d amount=10000 \\
  -d currency=BIF \\
  -d recipient="+25779999000 1"`
    },
    {
      title: 'Transfert',
      code: `curl -X POST https://sandbox.ufaranga.bi/v1/transfers \\
  -H "Authorization: Bearer sk_test_..." \\
  -d amount=50000 \\
  -d from="account_test_123" \\
  -d to="+257799990002"`
    },
    {
      title: 'Consulter solde',
      code: `curl -X GET https://sandbox.ufaranga.bi/v1/balance \\
  -H "Authorization: Bearer sk_test_..." \\
  -d account_id="account_test_123"`
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const runTest = (testName) => {
    setTestResult({ name: testName, status: 'success', message: 'Test exécuté avec succès!' });
    setTimeout(() => setTestResult(null), 3000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Terminal className="w-5 h-5" />
              <span className="font-semibold">Environnement Sandbox</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              TESTEZ SANS RISQUE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Environnement de test complet pour développer et tester vos intégrations
            </p>
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

      {/* API Key */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-anton uppercase text-center mb-12">
              VOS CLÉS DE TEST
            </h2>
            
            <div className="border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Clé API Sandbox</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Utilisez cette clé pour tous vos tests. Elle ne fonctionnera qu'en environnement sandbox.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 font-mono text-sm">
                  {apiKey}
                </div>
                <button
                  onClick={() => copyToClipboard(apiKey)}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors flex items-center gap-2"
                >
                  {copiedKey ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copiedKey ? 'Copié!' : 'Copier'}
                </button>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-500 text-sm flex items-start gap-2">
                  <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Ne partagez jamais vos clés API, même de test. Régénérez-les régulièrement.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Accounts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-anton uppercase text-center mb-4">
              COMPTES DE TEST
            </h2>
            <p className="text-center text-gray-400 mb-12">Utilisez ces comptes pour simuler des transactions</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testAccounts.map((account, idx) => (
                <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4">{account.type}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Téléphone</span>
                      <span className="font-mono">{account.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Solde</span>
                      <span className="text-secondary font-semibold">{account.balance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">PIN</span>
                      <span className="font-mono">{account.pin}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Test Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-anton uppercase text-center mb-12">
              CARTES DE TEST
            </h2>
            
            <div className="border border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800 grid grid-cols-4 gap-4 text-sm font-semibold">
                <div>Numéro de carte</div>
                <div>Type</div>
                <div>CVV / Expiry</div>
                <div>Résultat</div>
              </div>
              {testCards.map((card, idx) => (
                <div key={idx} className="px-6 py-4 border-b border-gray-800 last:border-0 grid grid-cols-4 gap-4 items-center hover:bg-gray-900/30 transition-colors">
                  <div className="font-mono text-sm">{card.number}</div>
                  <div className="text-sm text-gray-400">{card.type}</div>
                  <div className="text-sm text-gray-400">{card.cvv} / {card.expiry}</div>
                  <div className={`text-sm font-semibold ${card.result.includes('Succès') ? 'text-secondary' : 'text-red-400'}`}>
                    {card.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tests */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-anton uppercase text-center mb-12">
              TESTS RAPIDES
            </h2>
            
            <div className="space-y-6">
              {quickTests.map((test, idx) => (
                <div key={idx} className="border border-gray-800 rounded-xl overflow-hidden">
                  <div className="bg-gray-900/50 px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                    <h3 className="font-semibold">{test.title}</h3>
                    <button
                      onClick={() => runTest(test.title)}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors flex items-center gap-2 text-sm"
                    >
                      <Play className="w-4 h-4" />
                      Exécuter
                    </button>
                  </div>
                  <pre className="p-6 overflow-x-auto bg-black">
                    <code className="text-sm text-green-400">{test.code}</code>
                  </pre>
                </div>
              ))}
            </div>

            {testResult && (
              <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-secondary" />
                <div>
                  <div className="font-semibold text-secondary">{testResult.name}</div>
                  <div className="text-sm text-gray-400">{testResult.message}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              PRÊT POUR LA PRODUCTION ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Passez en mode production et commencez à accepter de vrais paiements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Activer le mode production
              </button>
              <button className="border border-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary/50 transition-colors">
                Documentation complète
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sandbox;
