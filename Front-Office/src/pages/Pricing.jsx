import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Des prix justes et transparents</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Pas de frais cachés. Pas de surprises. Juste de la clarté.</p>
          <div className="inline-block mt-4 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
            0% de frais pendant 3 mois pour les nouveaux utilisateurs
          </div>
        </div>

        {/* Tableau comparatif */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden mb-16">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Service</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">uFaranga</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">M-Pesa</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Orange Money</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Banque</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr>
                <td className="px-6 py-4 text-sm text-foreground">Transfert P2P</td>
                <td className="px-6 py-4 text-center text-sm font-bold text-green-600">0%</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">1.5%</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">2%</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">3%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-foreground">Paiement marchand</td>
                <td className="px-6 py-4 text-center text-sm font-bold text-green-600">0.3%</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">1%</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">1.5%</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">2.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Grille tarifaire */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Transferts entre utilisateurs</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-600 dark:text-gray-400">0 - 50,000 BIF</span>
                <span className="font-bold text-green-600">GRATUIT ✨</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-600 dark:text-gray-400">50,001 - 500,000</span>
                <span className="font-bold text-green-600">GRATUIT ✨</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 dark:text-gray-400">500,001+</span>
                <span className="font-bold text-green-600">GRATUIT ✨</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
              Oui, c'est vraiment gratuit. Pour toujours.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Retrait chez un agent</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-600 dark:text-gray-400">1,000 - 10,000</span>
                <span className="font-bold text-foreground">100 BIF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-600 dark:text-gray-400">10,001 - 50,000</span>
                <span className="font-bold text-foreground">300 BIF</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 dark:text-gray-400">50,001 - 100,000</span>
                <span className="font-bold text-foreground">500 BIF</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Prêt à économiser sur vos frais ?</h2>
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Commencer gratuitement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
