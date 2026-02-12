export const MAPBOX_TOKEN = "pk.eyJ1Ijoid2FiZW5nYSIsImEiOiJjbHYyZDZycWMwODZzMmtudWVvdXFxY2xyIn0.cysmLEbhoPU_7w9YZP7b6w";

// Centre du Burundi avec un zoom plus large pour voir tout le pays
export const BURUNDI_CENTER = {
  longitude: 29.9189,
  latitude: -3.3731,
  zoom: 7.5  // Zoom réduit pour voir tout le pays
};

// Limites du Burundi (bounding box)
export const BURUNDI_BOUNDS = {
  minLng: 28.9933,
  minLat: -4.4693,
  maxLng: 30.8498,
  maxLat: -2.3096
};

// Provinces du Burundi avec coordonnées
export const BURUNDI_PROVINCES = [
  { name: 'Bujumbura Mairie', lat: -3.3614, lng: 29.3599, agents: 456 },
  { name: 'Bujumbura Rural', lat: -3.5500, lng: 29.4500, agents: 123 },
  { name: 'Bubanza', lat: -3.0833, lng: 29.3833, agents: 89 },
  { name: 'Bururi', lat: -3.9500, lng: 29.6167, agents: 67 },
  { name: 'Cankuzo', lat: -3.2167, lng: 30.6000, agents: 45 },
  { name: 'Cibitoke', lat: -2.8833, lng: 29.1167, agents: 78 },
  { name: 'Gitega', lat: -3.4271, lng: 29.9246, agents: 234 },
  { name: 'Karuzi', lat: -3.1000, lng: 30.1667, agents: 56 },
  { name: 'Kayanza', lat: -2.9167, lng: 29.6333, agents: 98 },
  { name: 'Kirundo', lat: -2.5833, lng: 30.1000, agents: 87 },
  { name: 'Makamba', lat: -4.1333, lng: 29.8000, agents: 54 },
  { name: 'Muramvya', lat: -3.2667, lng: 29.6167, agents: 43 },
  { name: 'Muyinga', lat: -2.8500, lng: 30.3333, agents: 156 },
  { name: 'Mwaro', lat: -3.5167, lng: 29.7000, agents: 38 },
  { name: 'Ngozi', lat: -2.9083, lng: 29.8306, agents: 189 },
  { name: 'Rumonge', lat: -3.9733, lng: 29.4386, agents: 72 },
  { name: 'Rutana', lat: -3.9333, lng: 30.0167, agents: 51 },
  { name: 'Ruyigi', lat: -3.4833, lng: 30.2500, agents: 64 }
];

// Données d'agents fictifs avec géolocalisation
export const AGENTS_DATA = [
  // Bujumbura Mairie
  { id: 'AG001', nom: 'Jean Mukiza', lat: -3.3614, lng: 29.3599, province: 'Bujumbura Mairie', status: 'actif', float: 2500000, transactions: 1234 },
  { id: 'AG002', nom: 'Marie Ndayisenga', lat: -3.3700, lng: 29.3650, province: 'Bujumbura Mairie', status: 'actif', float: 1800000, transactions: 987 },
  { id: 'AG003', nom: 'Pierre Nkurunziza', lat: -3.3550, lng: 29.3700, province: 'Bujumbura Mairie', status: 'actif', float: 3200000, transactions: 1456 },
  
  // Gitega
  { id: 'AG004', nom: 'Grace Irakoze', lat: -3.4271, lng: 29.9246, province: 'Gitega', status: 'actif', float: 1500000, transactions: 876 },
  { id: 'AG005', nom: 'David Niyonzima', lat: -3.4350, lng: 29.9300, province: 'Gitega', status: 'actif', float: 2100000, transactions: 1023 },
  
  // Ngozi
  { id: 'AG006', nom: 'Sarah Nshimirimana', lat: -2.9083, lng: 29.8306, province: 'Ngozi', status: 'actif', float: 1900000, transactions: 945 },
  { id: 'AG007', nom: 'Emmanuel Ndikumana', lat: -2.9150, lng: 29.8400, province: 'Ngozi', status: 'inactif', float: 500000, transactions: 234 },
  
  // Muyinga
  { id: 'AG008', nom: 'Claudine Bizimana', lat: -2.8500, lng: 30.3333, province: 'Muyinga', status: 'actif', float: 1700000, transactions: 789 },
  { id: 'AG009', nom: 'Joseph Hakizimana', lat: -2.8600, lng: 30.3400, province: 'Muyinga', status: 'actif', float: 2300000, transactions: 1156 },
  
  // Kayanza
  { id: 'AG010', nom: 'Beatrice Niyonkuru', lat: -2.9167, lng: 29.6333, province: 'Kayanza', status: 'actif', float: 1600000, transactions: 678 },
  
  // Bururi
  { id: 'AG011', nom: 'Patrick Nzeyimana', lat: -3.9500, lng: 29.6167, province: 'Bururi', status: 'actif', float: 1400000, transactions: 567 },
  
  // Cibitoke
  { id: 'AG012', nom: 'Christine Ntahonkiriye', lat: -2.8833, lng: 29.1167, province: 'Cibitoke', status: 'actif', float: 1800000, transactions: 834 },
  
  // Makamba
  { id: 'AG013', nom: 'Eric Niyongabo', lat: -4.1333, lng: 29.8000, province: 'Makamba', status: 'actif', float: 1300000, transactions: 456 },
  
  // Ruyigi
  { id: 'AG014', nom: 'Francine Ndayishimiye', lat: -3.4833, lng: 30.2500, province: 'Ruyigi', status: 'actif', float: 1500000, transactions: 623 },
  
  // Rumonge
  { id: 'AG015', nom: 'Alain Ntirandekura', lat: -3.9733, lng: 29.4386, province: 'Rumonge', status: 'actif', float: 1700000, transactions: 745 }
];

// Style de la carte (dark mode)
export const MAP_STYLE = 'mapbox://styles/mapbox/dark-v11';

// Couleurs pour les statuts
export const STATUS_COLORS = {
  actif: '#42b72a',
  inactif: '#8B1538',
  alerte: '#F58424'
};
