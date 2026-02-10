import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Store, Smartphone, Landmark, Zap, Wifi, 
  ShoppingBag, GraduationCap, Heart, Hotel, Home, Bus,
  Search, Filter, MapPin, Phone, Mail, Globe, ExternalLink
} from 'lucide-react';

const PartnersList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: Building2 },
    { id: 'telecom', name: 'Télécommunications', icon: Smartphone },
    { id: 'finance', name: 'Finance', icon: Landmark },
    { id: 'utilities', name: 'Services publics', icon: Zap },
    { id: 'retail', name: 'Commerce', icon: Store },
    { id: 'education', name: 'Éducation', icon: GraduationCap },
    { id: 'health', name: 'Santé', icon: Heart },
    { id: 'hospitality', name: 'Hôtellerie', icon: Hotel },
    { id: 'realestate', name: 'Immobilier', icon: Home },
    { id: 'transport', name: 'Transport', icon: Bus }
  ];

  const regions = [
    { id: 'all', name: 'Toutes les régions' },
    { id: 'bujumbura', name: 'Bujumbura' },
    { id: 'gitega', name: 'Gitega' },
    { id: 'ngozi', name: 'Ngozi' },
    { id: 'muyinga', name: 'Muyinga' },
    { id: 'bururi', name: 'Bururi' },
    { id: 'cibitoke', name: 'Cibitoke' },
    { id: 'kayanza', name: 'Kayanza' }
  ];

  const partners = [
    {
      id: 1,
      name: 'Econet Leo',
      category: 'telecom',
      region: 'bujumbura',
      logo: 'EL',
      description: 'Opérateur de télécommunications leader au Burundi',
      services: ['Recharge mobile', 'Paiement factures', 'Transferts'],
      phone: '+257 79 000 001',
      email: 'contact@econetleo.bi',
      website: 'www.econetleo.bi',
      locations: 'Bujumbura, Gitega, Ngozi'
    },
    {
      id: 2,
      name: 'Lumitel',
      category: 'telecom',
      region: 'bujumbura',
      logo: 'LU',
      description: 'Opérateur mobile avec couverture nationale',
      services: ['Recharge mobile', 'Internet', 'Paiements'],
      phone: '+257 79 000 002',
      email: 'info@lumitel.bi',
      website: 'www.lumitel.bi',
      locations: 'Toutes les provinces'
    },
    {
      id: 3,
      name: 'REGIDESO',
      category: 'utilities',
      region: 'bujumbura',
      logo: 'RG',
      description: 'Régie de production et distribution d\'eau et électricité',
      services: ['Paiement factures eau', 'Paiement factures électricité'],
      phone: '+257 22 222 222',
      email: 'contact@regideso.bi',
      website: 'www.regideso.bi',
      locations: 'Toutes les provinces'
    },
    {
      id: 4,
      name: 'Canal+',
      category: 'utilities',
      region: 'bujumbura',
      logo: 'C+',
      description: 'Télévision par satellite',
      services: ['Abonnements TV', 'Renouvellement'],
      phone: '+257 22 333 333',
      email: 'service@canalplus.bi',
      website: 'www.canalplus.bi',
      locations: 'Bujumbura, Gitega'
    },
    {
      id: 5,
      name: 'StarTimes',
      category: 'utilities',
      region: 'bujumbura',
      logo: 'ST',
      description: 'Télévision numérique terrestre',
      services: ['Abonnements TV', 'Décodeurs'],
      phone: '+257 22 444 444',
      email: 'info@startimes.bi',
      website: 'www.startimes.bi',
      locations: 'Bujumbura, Gitega, Ngozi'
    },
    {
      id: 6,
      name: 'Banque BRB',
      category: 'finance',
      region: 'bujumbura',
      logo: 'BRB',
      description: 'Banque de la République du Burundi',
      services: ['Transferts bancaires', 'Paiements', 'Retraits'],
      phone: '+257 22 555 555',
      email: 'contact@brb.bi',
      website: 'www.brb.bi',
      locations: 'Bujumbura, Gitega'
    },
    {
      id: 7,
      name: 'Supermarché City',
      category: 'retail',
      region: 'bujumbura',
      logo: 'SC',
      description: 'Chaîne de supermarchés moderne',
      services: ['Paiements en magasin', 'Livraison'],
      phone: '+257 79 666 666',
      email: 'info@citysupermarket.bi',
      website: 'www.citysupermarket.bi',
      locations: 'Bujumbura'
    },
    {
      id: 8,
      name: 'Université du Burundi',
      category: 'education',
      region: 'bujumbura',
      logo: 'UB',
      description: 'Université publique du Burundi',
      services: ['Frais scolaires', 'Inscriptions'],
      phone: '+257 22 777 777',
      email: 'info@ub.edu.bi',
      website: 'www.ub.edu.bi',
      locations: 'Bujumbura'
    },
    {
      id: 9,
      name: 'Clinique Prince Régent',
      category: 'health',
      region: 'bujumbura',
      logo: 'CPR',
      description: 'Centre médical privé',
      services: ['Paiement consultations', 'Analyses'],
      phone: '+257 22 888 888',
      email: 'contact@princeregent.bi',
      website: 'www.princeregent.bi',
      locations: 'Bujumbura'
    },
    {
      id: 10,
      name: 'Hôtel Club du Lac',
      category: 'hospitality',
      region: 'bujumbura',
      logo: 'CL',
      description: 'Hôtel 4 étoiles au bord du lac',
      services: ['Réservations', 'Restaurant', 'Événements'],
      phone: '+257 22 999 999',
      email: 'reservation@clubdulac.bi',
      website: 'www.clubdulac.bi',
      locations: 'Bujumbura'
    },
    {
      id: 11,
      name: 'Agence Immobilière Burundi',
      category: 'realestate',
      region: 'bujumbura',
      logo: 'AIB',
      description: 'Vente et location de propriétés',
      services: ['Paiement loyers', 'Achats'],
      phone: '+257 79 111 111',
      email: 'info@immobilier.bi',
      website: 'www.immobilier.bi',
      locations: 'Bujumbura, Gitega'
    },
    {
      id: 12,
      name: 'Transport Express',
      category: 'transport',
      region: 'bujumbura',
      logo: 'TE',
      description: 'Service de transport interurbain',
      services: ['Billets de bus', 'Colis'],
      phone: '+257 79 222 222',
      email: 'contact@transportexpress.bi',
      website: 'www.transportexpress.bi',
      locations: 'Toutes les provinces'
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || partner.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesRegion;
  });

  const stats = [
    { value: '150+', label: 'Partenaires actifs' },
    { value: '10', label: 'Secteurs couverts' },
    { value: '18', label: 'Provinces' },
    { value: '500K+', label: 'Transactions/mois' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              NOS PARTENAIRES
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Un réseau de plus de 150 partenaires de confiance à travers le Burundi
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="border border-gray-800 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-anton text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/partenaires"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un partenaire..."
                  className="w-full px-6 py-4 pr-12 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-semibold text-gray-400">Catégorie</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-white'
                        : 'border border-gray-800 text-gray-300 hover:border-primary/50'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-semibold text-gray-400">Région</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedRegion === region.id
                        ? 'bg-primary text-white'
                        : 'border border-gray-800 text-gray-300 hover:border-primary/50'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 text-gray-400">
              {filteredPartners.length} partenaire{filteredPartners.length > 1 ? 's' : ''} trouvé{filteredPartners.length > 1 ? 's' : ''}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner) => (
                <div key={partner.id} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  {/* Logo */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {categories.find(c => c.id === partner.category)?.name}
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{partner.description}</p>

                  {/* Services */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 mb-2">Services</div>
                    <div className="flex flex-wrap gap-1">
                      {partner.services.map((service, idx) => (
                        <span key={idx} className="px-2 py-1 rounded bg-gray-900 text-gray-300 text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 text-sm border-t border-gray-800 pt-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs">{partner.locations}</span>
                    </div>
                    {partner.website && (
                      <a
                        href={`https://${partner.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Globe className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs">{partner.website}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredPartners.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aucun partenaire trouvé</h3>
                <p className="text-gray-400">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              REJOIGNEZ NOTRE RÉSEAU
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Devenez partenaire uFaranga et développez votre activité
            </p>
            <Link
              to="/partenaires"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersList;
