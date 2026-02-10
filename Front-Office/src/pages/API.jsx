import React from 'react';
import { Code, Zap, Shield, BookOpen } from 'lucide-react';

const API = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">API PAIEMENTS</h1>
            <p className="text-xl text-gray-300 mb-8">
              Intégrez les paiements uFaranga dans votre application
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">RESTful API</h3>
              <p className="text-gray-400">Simple et moderne</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sécurisée</h3>
              <p className="text-gray-400">OAuth 2.0 et HTTPS</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-400">Guides complets</p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Exemple de code</h3>
            <pre className="bg-black p-6 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">{`curl -X POST https://api.ufaranga.com/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "BIF",
    "recipient": "+25779123456"
  }'`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;
