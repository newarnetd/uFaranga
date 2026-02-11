import React, { useState } from 'react';
import { MapPin, Search, Navigation, Phone, Clock, Star, Filter } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import Section from '../components/ui/Section';

const TrouverAgent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const agents = [
    {
      name: 'Agent Jean-Claude',
      address: 'Avenue de la Liberté, Buyenzi',
      city: 'Bujumbura',
      distance: '0.5 km',
      rating: 4.9,
      reviews: 245,
      services: ['Dépôt/Retrait', 'Transferts', 'Factures', 'Recharge'],
      hours: 'Ouvert • Ferme à 20h',
      phone: '+257 79 123 456'
    },
    {
      name: 'Agent Marie',
      address: 'Quartier Rohero, près du marché',
      city: 'Bujumbura',
      distance: '1.2 km',
      rating: 4.8,
      reviews: 189,
      services: ['Dépôt/Retrait', 'Transferts', 'Recharge'],
      hours: 'Ouvert • Ferme à 19h',
      phone: '+257 79 234 567'
    },
    {
      name: 'Agent David',
      address: 'Centre-ville, face à la poste',
      city: 'Gitega',
      distance: '2.5 km',
      rating: 4.7,
      reviews: 156,
      services: ['Dépôt/Retrait', 'Factures', 'Recharge'],
      hours: 'Ouvert • Ferme à 18h',
      phone: '+257 79 345 678'
    }
  ];

  const cities = ['Bujumbura', 'Gitega', 'Ngozi', 'Muyinga', 'Bururi'];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <Section className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-anton uppercase mb-6">Trouver un Agent</h1>
          <p className="text-xl text-gray-300 mb-8">
            Localisez l'agent uFaranga le plus proche de vous
          </p>
        </div>

        {/* Search Bar */}
        <GlassCard className="bg-black/40 border-white/10 p-6 mb-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par ville, quartier..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <GradientButton className="flex items-center gap-2">
              <Navigation className="w-5 h-5" />
              Ma position
            </GradientButton>
          </div>

          <div className="flex gap-2 mt-4">
            {cities.map((city) => (
              <button
                key={city}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-primary/20 hover:border-primary/30 transition-colors text-sm"
              >
                {city}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Agents List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {agents.map((agent, i) => (
            <GlassCard key={i} className="bg-black/40 border-white/10 p-6 hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <MapPin className="w-4 h-4" />
                        {agent.address}, {agent.city}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-bold">{agent.rating}</span>
                          <span className="text-gray-500">({agent.reviews})</span>
                        </div>
                        <div className="text-primary font-semibold">{agent.distance}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {agent.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-400">
                      <Clock className="w-4 h-4" />
                      {agent.hours}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:w-48">
                  <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Appeler
                  </button>
                  <button className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-xl hover:bg-primary/30 transition-colors flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Itinéraire
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-gray-400 hover:text-white transition-colors">
            Charger plus d'agents →
          </button>
        </div>
      </Section>
    </div>
  );
};

export default TrouverAgent;
