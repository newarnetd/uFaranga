import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { 
  MAPBOX_TOKEN, 
  BURUNDI_CENTER, 
  BURUNDI_PROVINCES,
  AGENTS_DATA,
  STATUS_COLORS
} from '../../config/mapbox';
import {
  MapPin, Users, Activity, Wallet, TrendingUp, Search,
  Download, Eye, EyeOff
} from 'lucide-react';

mapboxgl.accessToken = MAPBOX_TOKEN;

function CartographieAgents() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showProvinces, setShowProvinces] = useState(true);
  const [showAgents, setShowAgents] = useState(true);
  const markersRef = useRef([]);

  // Filtrer les agents
  const filteredAgents = AGENTS_DATA.filter(agent => {
    const matchesStatus = filterStatus === 'all' || agent.status === filterStatus;
    const matchesSearch = agent.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.province.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Statistiques
  const stats = {
    total: AGENTS_DATA.length,
    actifs: AGENTS_DATA.filter(a => a.status === 'actif').length,
    inactifs: AGENTS_DATA.filter(a => a.status === 'inactif').length,
    floatTotal: AGENTS_DATA.reduce((sum, a) => sum + a.float, 0),
    transactionsTotal: AGENTS_DATA.reduce((sum, a) => sum + a.transactions, 0)
  };

  // Initialiser la carte
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [BURUNDI_CENTER.longitude, BURUNDI_CENTER.latitude],
      zoom: BURUNDI_CENTER.zoom
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Ajouter la frontière du Burundi après le chargement
    map.current.on('load', () => {
      map.current.addSource('burundi-border', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [28.9933, -2.3096],
              [30.8498, -2.3096],
              [30.8498, -4.4693],
              [28.9933, -4.4693],
              [28.9933, -2.3096]
            ]]
          }
        }
      });

      map.current.addLayer({
        id: 'burundi-border-line',
        type: 'line',
        source: 'burundi-border',
        paint: {
          'line-color': '#F58424',
          'line-width': 3,
          'line-opacity': 0.8
        }
      });

      map.current.addLayer({
        id: 'burundi-fill',
        type: 'fill',
        source: 'burundi-border',
        paint: {
          'fill-color': '#007BFF',
          'fill-opacity': 0.05
        }
      });

      // Marquer la carte comme chargée
      setMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Mettre à jour les marqueurs
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Supprimer les anciens marqueurs
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Ajouter les marqueurs des provinces
    if (showProvinces) {
      BURUNDI_PROVINCES.forEach(province => {
        const el = document.createElement('div');
        el.className = 'province-marker';
        el.innerHTML = `
          <div style="height: 32px; width: 32px; border-radius: 50%; background: rgba(0, 123, 255, 0.2); border: 2px solid #007BFF; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; color: #007BFF; cursor: pointer;">
            ${province.agents}
          </div>
        `;

        const marker = new mapboxgl.Marker(el)
          .setLngLat([province.lng, province.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div style="padding: 12px;">
                  <h3 style="font-weight: bold; font-size: 18px; margin-bottom: 8px;">${province.name}</h3>
                  <p style="font-size: 14px; color: #666;">${province.agents} agents</p>
                </div>
              `)
          )
          .addTo(map.current);

        markersRef.current.push(marker);
      });
    }

    // Ajouter les marqueurs des agents
    if (showAgents) {
      filteredAgents.forEach(agent => {
        const el = document.createElement('div');
        el.innerHTML = `
          <svg width="32" height="32" viewBox="0 0 24 24" fill="${STATUS_COLORS[agent.status]}" stroke="${STATUS_COLORS[agent.status]}" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3" fill="white"></circle>
          </svg>
        `;
        el.style.cursor = 'pointer';

        const marker = new mapboxgl.Marker(el)
          .setLngLat([agent.lng, agent.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div style="padding: 12px; min-width: 250px;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <h3 style="font-weight: bold; font-size: 18px;">${agent.nom}</h3>
                    <span style="padding: 2px 8px; border-radius: 9999px; font-size: 12px; font-weight: 600; ${
                      agent.status === 'actif'
                        ? 'background: #dcfce7; color: #16a34a;'
                        : 'background: #fee2e2; color: #dc2626;'
                    }">
                      ${agent.status}
                    </span>
                  </div>
                  <p style="font-size: 14px; color: #666; margin-bottom: 12px;">${agent.id} • ${agent.province}</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; justify-content: space-between; font-size: 14px;">
                      <span style="color: #666;">Float:</span>
                      <span style="font-weight: 600;">${agent.float.toLocaleString()} BIF</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 14px;">
                      <span style="color: #666;">Transactions:</span>
                      <span style="font-weight: 600;">${agent.transactions}</span>
                    </div>
                  </div>
                  <button style="width: 100%; margin-top: 12px; padding: 8px 16px; background: #007BFF; color: white; border-radius: 8px; border: none; cursor: pointer; font-size: 14px; font-weight: 600;">
                    Voir Détails
                  </button>
                </div>
              `)
          )
          .addTo(map.current);

        markersRef.current.push(marker);
      });
    }
  }, [mapLoaded, showProvinces, showAgents, filteredAgents]);

  // Voler vers un agent
  const flyToAgent = (agent) => {
    if (map.current) {
      map.current.flyTo({
        center: [agent.lng, agent.lat],
        zoom: 12,
        duration: 2000
      });
      setSelectedAgent(agent);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header - Plus compact */}
      <div className="p-4 bg-background border-b border-text/10">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-anton uppercase text-text">Cartographie des Agents</h1>
            <p className="text-sm text-gray-400 mt-1">Réseau d'agents au Burundi</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
            <span>Exporter</span>
          </button>
        </div>

        {/* Stats rapides - Plus compact */}
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-card border border-darkGray rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-primary" />
              <p className="text-xs text-gray-400">Total</p>
            </div>
            <p className="text-xl font-bold text-text">{stats.total}</p>
          </div>
          <div className="bg-card border border-darkGray rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-secondary" />
              <p className="text-xs text-gray-400">Actifs</p>
            </div>
            <p className="text-xl font-bold text-secondary">{stats.actifs}</p>
          </div>
          <div className="bg-card border border-darkGray rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-danger" />
              <p className="text-xs text-gray-400">Inactifs</p>
            </div>
            <p className="text-xl font-bold text-danger">{stats.inactifs}</p>
          </div>
          <div className="bg-card border border-darkGray rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Wallet className="w-4 h-4 text-primary" />
              <p className="text-xs text-gray-400">Float</p>
            </div>
            <p className="text-lg font-bold text-text">{(stats.floatTotal / 1000000).toFixed(1)}M</p>
          </div>
          <div className="bg-card border border-darkGray rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-secondary" />
              <p className="text-xs text-gray-400">Txns</p>
            </div>
            <p className="text-lg font-bold text-text">{(stats.transactionsTotal / 1000).toFixed(1)}K</p>
          </div>
        </div>
      </div>

      {/* Contenu principal - Plus d'espace pour la carte */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar gauche - Plus étroite */}
        <div className="w-72 bg-card border-r border-text/10 overflow-y-auto flex-shrink-0">
          <div className="p-3 space-y-3">
            {/* Recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-darkGray rounded-lg text-text text-sm placeholder-gray-500 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Filtres */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterStatus === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-background border border-darkGray text-gray-400 hover:border-primary'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilterStatus('actif')}
                className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterStatus === 'actif'
                    ? 'bg-secondary text-white'
                    : 'bg-background border border-darkGray text-gray-400 hover:border-secondary'
                }`}
              >
                Actifs
              </button>
              <button
                onClick={() => setFilterStatus('inactif')}
                className={`flex-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filterStatus === 'inactif'
                    ? 'bg-danger text-white'
                    : 'bg-background border border-darkGray text-gray-400 hover:border-danger'
                }`}
              >
                Inactifs
              </button>
            </div>

            {/* Contrôles de couches */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowProvinces(!showProvinces)}
                className={`flex-1 flex items-center justify-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-colors ${
                  showProvinces
                    ? 'bg-primary/20 border border-primary text-primary'
                    : 'bg-background border border-darkGray text-gray-400'
                }`}
              >
                {showProvinces ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                <span>Provinces</span>
              </button>
              <button
                onClick={() => setShowAgents(!showAgents)}
                className={`flex-1 flex items-center justify-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-colors ${
                  showAgents
                    ? 'bg-secondary/20 border border-secondary text-secondary'
                    : 'bg-background border border-darkGray text-gray-400'
                }`}
              >
                {showAgents ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                <span>Agents</span>
              </button>
            </div>

            {/* Liste des agents */}
            <div className="space-y-2">
              <p className="text-xs text-gray-400 uppercase font-semibold">
                {filteredAgents.length} Agent(s)
              </p>
              {filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                  onClick={() => flyToAgent(agent)}
                  className={`p-2.5 rounded-lg cursor-pointer transition-all ${
                    selectedAgent?.id === agent.id
                      ? 'bg-primary text-white'
                      : 'bg-background hover:bg-darkGray'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm truncate">{agent.nom}</p>
                        <span
                          className={`h-2 w-2 rounded-full flex-shrink-0 ${
                            agent.status === 'actif' ? 'bg-secondary' : 'bg-danger'
                          }`}
                        />
                      </div>
                      <p className="text-xs opacity-70 mt-0.5 truncate">{agent.id} • {agent.province}</p>
                      <div className="flex items-center gap-2 mt-1.5 text-xs">
                        <span>{(agent.float / 1000).toFixed(0)}K</span>
                        <span>•</span>
                        <span>{agent.transactions} txns</span>
                      </div>
                    </div>
                    <MapPin className="w-4 h-4 flex-shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carte - Prend tout l'espace restant */}
        <div className="flex-1 relative">
          <div ref={mapContainer} className="w-full h-full" />

          {/* Légende - Plus compacte */}
          <div className="absolute bottom-4 right-4 bg-card border border-darkGray rounded-lg p-3 shadow-lg">
            <p className="text-xs font-semibold text-text mb-2">Légende</p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4" style={{ color: STATUS_COLORS.actif }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Agent Actif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4" style={{ color: STATUS_COLORS.inactif }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Agent Inactif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                  N
                </div>
                <span className="text-xs text-gray-400">Province</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartographieAgents;
