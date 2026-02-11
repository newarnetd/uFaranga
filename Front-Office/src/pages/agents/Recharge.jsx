import React from 'react';
import { Smartphone, Zap, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import Section from '../../components/ui/Section';

const Recharge = () => {
  const operators = [
    { name: 'Econet Leo', logo: '🦁', commission: '3%', color: 'from-orange-500/20 to-red-500/20' },
    { name: 'Lumitel', logo: '📱', commission: '3%', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Smart', logo: '⚡', commission: '3%', color: 'from-green-500/20 to-emerald-500/20' },
  ];

  const stats = [
    { value: '3%', label: 'Commission', icon: DollarSign },
    { value: '50-100', label: 'Recharges/jour', icon: TrendingUp },
    { value: '100K-200K', label: 'Revenus/mois', icon: Zap }
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
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">Agent Recharge Mobile</h1>
          <p className="text-xl text-gray-300 mb-8">
            Service le plus demandé - Gagnez 3% sur chaque recharge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="bg-gradient-to-br from-primary/20 to-blue-900/20 border-primary/30 p-8 text-center">
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-anton text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {operators.map((operator, i) => (
            <GlassCard key={i} className={`bg-gradient-to-br ${operator.color} border-white/10 p-8 text-center`}>
              <div className="text-5xl mb-4">{operator.logo}</div>
              <h3 className="text-xl font-bold mb-2">{operator.name}</h3>
              <div className="text-3xl font-anton text-white">{operator.commission}</div>
              <div className="text-sm text-gray-300">Commission</div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="bg-black/40 border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Pourquoi c'est rentable ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Service très demandé quotidiennement',
              'Commission de 3% sur chaque recharge',
              'Tous les opérateurs disponibles',
              'Recharge instantanée',
              'Pas de stock à gérer',
              'Revenus réguliers garantis'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Devenez agent recharge mobile</h3>
          <p className="text-gray-300 mb-6">Le service le plus rentable et le plus demandé</p>
          <GradientButton>Postuler maintenant</GradientButton>
        </GlassCard>
      </Section>
    </div>
  );
};

export default Recharge;
