import React from 'react';
import { Receipt, Zap, Tv, Wifi, DollarSign, CheckCircle } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import Section from '../../components/ui/Section';

const Factures = () => {
  const services = [
    { name: 'Électricité (REGIDESO)', icon: Zap, commission: '2%', color: 'text-yellow-400' },
    { name: 'Eau (REGIDESO)', icon: Zap, commission: '2%', color: 'text-blue-400' },
    { name: 'TV (Canal+, StarTimes)', icon: Tv, commission: '2.5%', color: 'text-purple-400' },
    { name: 'Internet', icon: Wifi, commission: '2%', color: 'text-green-400' },
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
            <Receipt className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">Agent Paiement Factures</h1>
          <p className="text-xl text-gray-300 mb-8">
            Aidez vos clients à payer leurs factures et gagnez 2% sur chaque transaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, i) => (
            <GlassCard key={i} className="bg-black/40 border-white/10 p-8">
              <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <div className="text-2xl font-anton text-primary">{service.commission}</div>
              <div className="text-sm text-gray-400">Commission par paiement</div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="bg-black/40 border-white/10 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Avantages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Paiement instantané',
              'Reçu automatique',
              'Tous les fournisseurs',
              'Commission attractive',
              'Service 24/7',
              'Support dédié'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Devenez agent paiement factures</h3>
          <p className="text-gray-300 mb-6">Service très demandé avec revenus réguliers</p>
          <GradientButton>Postuler maintenant</GradientButton>
        </GlassCard>
      </Section>
    </div>
  );
};

export default Factures;
