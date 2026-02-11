import React from 'react';
import { DollarSign, TrendingUp, Percent, Calculator, Award, Target } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import Section from '../../components/ui/Section';

const Commissions = () => {
  const services = [
    { name: 'Dépôts & Retraits', commission: '1%', volume: 'Illimité', example: '10,000 FBU sur 1M' },
    { name: 'Transferts nationaux', commission: '1.5%', volume: 'Illimité', example: '15,000 FBU sur 1M' },
    { name: 'Transferts internationaux', commission: '2%', volume: 'Illimité', example: '20,000 FBU sur 1M' },
    { name: 'Recharge mobile', commission: '3%', volume: 'Tous opérateurs', example: '3,000 FBU sur 100K' },
    { name: 'Paiement factures', commission: '2%', volume: 'Tous services', example: '2,000 FBU sur 100K' },
  ];

  const bonuses = [
    { tier: 'Bronze', volume: '0 - 5M FBU/mois', bonus: '+0%', color: 'from-orange-700/20 to-orange-500/20' },
    { tier: 'Silver', volume: '5M - 10M FBU/mois', bonus: '+10%', color: 'from-gray-400/20 to-gray-300/20' },
    { tier: 'Gold', volume: '10M - 20M FBU/mois', bonus: '+20%', color: 'from-yellow-500/20 to-yellow-400/20' },
    { tier: 'Platinum', volume: '20M+ FBU/mois', bonus: '+30%', color: 'from-purple-500/20 to-pink-500/20' },
  ];

  const examples = [
    {
      profile: 'Agent débutant',
      transactions: '30/jour',
      volume: '3M FBU/mois',
      commissions: '45,000 FBU',
      bonus: '0 FBU',
      total: '45,000 FBU'
    },
    {
      profile: 'Agent actif',
      transactions: '60/jour',
      volume: '8M FBU/mois',
      commissions: '120,000 FBU',
      bonus: '12,000 FBU',
      total: '132,000 FBU'
    },
    {
      profile: 'Agent expert',
      transactions: '100/jour',
      volume: '15M FBU/mois',
      commissions: '225,000 FBU',
      bonus: '45,000 FBU',
      total: '270,000 FBU'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <Section className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <DollarSign className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">Commissions Agent</h1>
          <p className="text-xl text-gray-300 mb-8">
            Structure de commissions transparente et attractive pour maximiser vos revenus
          </p>
        </div>

        <GlassCard className="bg-black/40 border-white/10 p-8 mb-16">
          <h2 className="text-3xl font-anton uppercase mb-6 text-center">COMMISSIONS PAR SERVICE</h2>
          <div className="space-y-4">
            {services.map((service, i) => (
              <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.volume}</p>
                </div>
                <div className="text-center mx-8">
                  <div className="text-3xl font-anton text-primary">{service.commission}</div>
                  <div className="text-xs text-gray-500">Commission</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Exemple</div>
                  <div className="font-bold text-secondary">{service.example}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="mb-16">
          <h2 className="text-3xl font-anton uppercase mb-6 text-center">BONUS DE VOLUME</h2>
          <p className="text-center text-gray-400 mb-8">Plus vous faites de transactions, plus vous gagnez</p>
          <div className="grid md:grid-cols-4 gap-6">
            {bonuses.map((bonus, i) => (
              <GlassCard key={i} className={`bg-gradient-to-br ${bonus.color} border-white/10 p-6 text-center`}>
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{bonus.tier}</h3>
                <p className="text-sm text-gray-300 mb-3">{bonus.volume}</p>
                <div className="text-3xl font-anton text-white">{bonus.bonus}</div>
                <div className="text-xs text-gray-400">Bonus sur commissions</div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-anton uppercase mb-6 text-center">EXEMPLES DE REVENUS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                    {example.profile}
                  </div>
                  <div className="text-sm text-gray-400">{example.transactions}</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Volume mensuel</span>
                    <span className="font-semibold">{example.volume}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Commissions</span>
                    <span className="font-semibold">{example.commissions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Bonus</span>
                    <span className="font-semibold text-secondary">{example.bonus}</span>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary text-xl">{example.total}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 text-center">
          <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Calculez vos revenus potentiels</h3>
          <p className="text-gray-300 mb-6">Utilisez notre simulateur pour estimer vos gains mensuels</p>
          <GradientButton>Simulateur de revenus</GradientButton>
        </GlassCard>
      </Section>
    </div>
  );
};

export default Commissions;
