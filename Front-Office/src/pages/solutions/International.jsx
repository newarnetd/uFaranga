import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftRight, Globe, DollarSign, Check } from 'lucide-react';

const International = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <ArrowLeftRight className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">ENVOIS INTERNATIONAUX</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transférez de l'argent partout dans le monde en quelques clics
            </p>
            <Link to="/transferts" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Envoyer de l'argent
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {[
              { flag: '🇧🇮', country: 'Burundi', time: 'Instantané' },
              { flag: '🇷🇼', country: 'Rwanda', time: '< 1h' },
              { flag: '🇰🇪', country: 'Kenya', time: '< 2h' },
              { flag: '🇺🇬', country: 'Uganda', time: '< 2h' }
            ].map((c, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-6">
                <div className="text-5xl mb-3">{c.flag}</div>
                <h3 className="font-semibold mb-1">{c.country}</h3>
                <div className="text-sm text-gray-400">{c.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default International;
