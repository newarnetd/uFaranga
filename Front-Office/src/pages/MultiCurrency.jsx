import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, DollarSign, TrendingUp, ArrowLeftRight } from 'lucide-react';

const MultiCurrency = () => {
  const currencies = [
    { code: 'BIF', name: 'Franc Burundais', flag: '🇧🇮' },
    { code: 'USD', name: 'Dollar Américain', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'Livre Sterling', flag: '🇬🇧' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-anton uppercase mb-6">MULTI-DEVISES</h1>
            <p className="text-xl text-gray-300 mb-8">
              Gérez plusieurs devises dans un seul compte
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">DEVISES DISPONIBLES</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {currencies.map((currency, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">{currency.flag}</div>
                <div className="text-2xl font-bold text-primary mb-1">{currency.code}</div>
                <div className="text-sm text-gray-400">{currency.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiCurrency;
