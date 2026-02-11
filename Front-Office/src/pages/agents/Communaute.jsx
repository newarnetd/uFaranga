import React from 'react';
import { Users, MessageCircle, Award, TrendingUp, Star, Heart, Zap } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import Section from '../../components/ui/Section';

const Communaute = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Réseau d\'agents',
      description: '2,000+ agents actifs à travers le pays',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: MessageCircle,
      title: 'Forum d\'entraide',
      description: 'Partagez vos expériences et bonnes pratiques',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Award,
      title: 'Programme de reconnaissance',
      description: 'Récompenses pour les meilleurs agents',
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  const topAgents = [
    { name: 'Jean-Claude N.', location: 'Bujumbura', transactions: '15,000+', badge: '🏆' },
    { name: 'Marie U.', location: 'Gitega', transactions: '12,500+', badge: '🥈' },
    { name: 'David N.', location: 'Ngozi', transactions: '10,000+', badge: '🥉' }
  ];

  const events = [
    { title: 'Webinaire mensuel', date: '15 Mars', topic: 'Optimiser vos revenus' },
    { title: 'Rencontre régionale', date: '22 Mars', topic: 'Networking Bujumbura' },
    { title: 'Formation avancée', date: '30 Mars', topic: 'Nouveaux services' }
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
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">Communauté Agent</h1>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez une communauté dynamique de 2,000+ agents à travers le Burundi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, i) => (
            <GlassCard key={i} className={`bg-gradient-to-br ${benefit.color} border-white/10 p-8 text-center`}>
              <benefit.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-anton uppercase text-center mb-8">TOP AGENTS DU MOIS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topAgents.map((agent, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-8 text-center">
                <div className="text-5xl mb-4">{agent.badge}</div>
                <h4 className="font-bold text-lg mb-1">{agent.name}</h4>
                <p className="text-sm text-gray-400 mb-3">{agent.location}</p>
                <div className="text-2xl font-anton text-primary">{agent.transactions}</div>
                <div className="text-xs text-gray-500">Transactions</div>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="bg-black/40 border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Événements à venir</h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-400">{event.topic}</p>
                </div>
                <div className="text-right">
                  <div className="text-primary font-bold">{event.date}</div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Rejoignez la communauté</h3>
          <p className="text-gray-300 mb-6">Connectez-vous avec d'autres agents et partagez vos succès</p>
          <GradientButton>Accéder au forum</GradientButton>
        </GlassCard>
      </Section>
    </div>
  );
};

export default Communaute;
