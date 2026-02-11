import React from 'react';
import { Headphones, MessageCircle, Phone, Mail, Clock, Users, BookOpen, Video } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import GradientButton from '../../components/ui/GradientButton';
import Section from '../../components/ui/Section';

const Support = () => {
  const channels = [
    {
      icon: Phone,
      title: 'Hotline Agent',
      description: 'Ligne dédiée aux agents disponible 24/7',
      contact: '+257 79 000 000',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: MessageCircle,
      title: 'Chat en direct',
      description: 'Support instantané via l\'app agent',
      contact: 'Dans l\'application',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Réponse sous 2h pendant les heures ouvrables',
      contact: 'agents@ufaranga.com',
      color: 'from-purple-500/20 to-pink-500/20'
    }
  ];

  const resources = [
    { icon: BookOpen, title: 'Base de connaissances', desc: 'Guides et tutoriels' },
    { icon: Video, title: 'Vidéos de formation', desc: 'Bibliothèque complète' },
    { icon: Users, title: 'Communauté agents', desc: 'Forum d\'entraide' }
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
            <Headphones className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">Support Agent</h1>
          <p className="text-xl text-gray-300 mb-8">
            Une équipe dédiée disponible 24/7 pour vous accompagner
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {channels.map((channel, i) => (
            <GlassCard key={i} className={`bg-gradient-to-br ${channel.color} border-white/10 p-8 text-center`}>
              <channel.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
              <div className="font-mono text-primary font-bold">{channel.contact}</div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="bg-black/40 border-white/10 p-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-secondary" />
            <div>
              <h3 className="font-bold text-xl">Disponibilité</h3>
              <p className="text-gray-400">Support disponible 24h/24, 7j/7</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="font-bold mb-1">Urgences</div>
              <div className="text-sm text-gray-400">Réponse immédiate 24/7</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="font-bold mb-1">Questions générales</div>
              <div className="text-sm text-gray-400">Réponse sous 2h</div>
            </div>
          </div>
        </GlassCard>

        <div className="mb-16">
          <h2 className="text-3xl font-anton uppercase text-center mb-8">RESSOURCES DISPONIBLES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, i) => (
              <GlassCard key={i} className="bg-black/40 border-white/10 p-6 text-center hover:border-primary/30 transition-all cursor-pointer">
                <resource.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-400">{resource.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Besoin d'aide ?</h3>
          <p className="text-gray-300 mb-6">Notre équipe est là pour vous</p>
          <GradientButton>Contacter le support</GradientButton>
        </GlassCard>
      </Section>
    </div>
  );
};

export default Support;
