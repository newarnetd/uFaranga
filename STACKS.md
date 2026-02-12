# Stack Technique - uFaranga

## Palette de Couleurs

```javascript
{
  primary: "#007BFF",        // Bleu - Actions principales
  secondary: "#F58424",      // Orange - Commissions, succès
  text: "#F9F9F9",           // Blanc cassé - Texte principal
  lightGray: "#F8F9FA",      // Gris clair - Backgrounds légers
  background: "#00070F",     // Noir bleuté - Background principal
  card: "#181F27",           // Gris foncé - Cartes et conteneurs
  darkBlue: "#000C18",       // Bleu très foncé - Sections sombres
  darkGray: "#343A40",       // Gris foncé - Bordures
  danger: "#8B1538"          // Rouge - Erreurs, alertes
}
```

## Structure du Layout

### AppLayout (Layout Principal)

```jsx
<div className="flex h-screen w-screen overflow-hidden">
  <SideBar />
  <div className="flex-1 flex flex-col">
    <Header />
    <main className="flex-1 overflow-y-auto">
      {/* Contenu des pages */}
    </main>
  </div>
</div>
```

### SideBar (Barre Latérale Gauche)

#### Disposition
- **Position**: `fixed` à gauche
- **Largeur**:
  - Ouverte: `w-64` (256px)
  - Fermée: `w-20` (80px)
  - Mobile: `w-64` avec slide-in/out
- **Hauteur**: `h-full` (100vh)
- **Z-index**: `z-50`

#### Couleurs
```jsx
// Fond
bg-background = #00070F (noir bleuté)

// Bordure droite
border-r border-text/10 = #F9F9F9 avec 10% d'opacité

// Bouton toggle
bg-background = #00070F
border-darkGray = #343A40

// Hover
hover:bg-card = #181F27
```

#### Éléments
- Logo en haut (`mt-6`)
- Navigation items (`mt-10`)
  - Icônes + labels
  - Badges pour les compteurs
- Section séparée en bas (optionnelle)
  - Bordure top: `border-t border-text/10`

#### Mobile
```jsx
// Hamburger menu
bg-darkBlue = #000C18
border-darkGray = #343A40

// Overlay
bg-black bg-opacity-50 backdrop-blur-sm
```

### Header (Barre Supérieure)

#### Disposition
- **Position**: `sticky top-0`
- **Z-index**: `z-30`
- **Padding**: `px-6 py-3` (desktop: `px-10 py-4`)

#### Couleurs
```jsx
// Fond
bg-background = #00070F

// Bordure bas
border-b border-text/10 = #F9F9F9 avec 10% d'opacité
```

#### Éléments
**Gauche:**
- Date/Heure + Message de bienvenue

**Droite:**
- Notifications (icône cloche orange `#F59648`)
- Sélecteur de langue (icône `text-secondary = #F58424`)
- Avatar utilisateur (gradient purple-pink-red)

#### Modals/Dropdowns
```jsx
// Fond
bg-background = #00070F

// Bordure
border-card = #181F27

// Shadow
shadow-lg shadow-gray-50/5
```

### Couleurs des Bordures

```jsx
// Bordures principales
border-text/10        // #F9F9F9 à 10% d'opacité (gris très clair)
border-darkGray       // #343A40 (gris moyen)
border-card           // #181F27 (gris foncé)

// Bordures spécifiques
border-text/25        // #F9F9F9 à 25% d'opacité (pour avatar)
```

### Transitions et Animations

```jsx
// Sidebar
transition-all duration-300

// Header modals
transition-all duration-500 ease-in-out

// Hover effects
transition-colors duration-200
```

### Responsive

**Desktop:**
- Sidebar visible, largeur ajustable

**Tablet/Mobile (< 768px):**
- Sidebar en overlay avec slide-in
- Header compact
- Hamburger menu visible

## Typographie

### Polices
- **Open Sans**: Police par défaut pour le corps de texte
- **Josefin Sans**: Police pour les titres secondaires (h1-h6)
- **Anton**: Police pour les titres principaux et sections importantes (UPPERCASE)
- **Bangers**: Police décorative (optionnelle)
- **Cookie**: Police cursive (optionnelle)

### Utilisation
```jsx
// Titre principal
<h1 className="font-anton uppercase">Titre Principal</h1>

// Sous-titre
<h2 className="font-heading">Sous-titre</h2>

// Texte normal
<p className="font-body">Texte normal</p>
```

## Composants PrimeReact

### Composants Utilisés
- **DataTable** - `primereact/datatable` - Tableaux de données
- **Column** - `primereact/column` - Colonnes de tableaux
- **Skeleton** - `primereact/skeleton` - Chargement
- **Dropdown** - `primereact/dropdown` - Sélecteurs
- **Dialog** - `primereact/dialog` - Modales
- **Tag** - `primereact/tag` - Badges de statut
- **Button** - `primereact/button` - Boutons
- **InputText** - `primereact/inputtext` - Champs de texte

### Exemple DataTable
```jsx
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

<DataTable value={data} paginator rows={10} stripedRows rowHover>
  <Column field="name" header="Nom" />
  <Column field="status" header="Statut" body={statusTemplate} />
</DataTable>
```

## Icônes Lucide React

### Règle Importante
**❌ NE PAS utiliser d'emojis**
**✅ TOUJOURS utiliser des icônes lucide-react**

### Icônes Courantes
```jsx
import {
  ArrowDownToLine,      // Dépôt
  ArrowUpFromLine,      // Retrait
  ArrowLeftRight,       // Transfert
  CreditCard,           // Paiement
  DollarSign,           // Argent
  TrendingUp,           // Croissance
  TrendingDown,         // Baisse
  Activity,             // Activité
  Users,                // Utilisateurs
  AlertCircle,          // Alerte
  Bell,                 // Notification
  Settings,             // Paramètres
  LogOut                // Déconnexion
} from 'lucide-react';
```

### Utilisation
```jsx
// Icône simple
<ArrowDownToLine className="w-5 h-5 text-primary" />

// Icône avec background
<div className="p-2 bg-primary/10 rounded-lg">
  <ArrowDownToLine className="w-5 h-5 text-primary" />
</div>
```

## Graphiques Recharts

### Types de Graphiques
- **BarChart** - Graphiques en barres
- **LineChart** - Graphiques en ligne
- **PieChart** - Graphiques circulaires

### Composants
```jsx
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
```

### Exemple
```jsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#343A40" />
    <XAxis dataKey="name" stroke="#9ca3af" />
    <YAxis stroke="#9ca3af" />
    <Tooltip 
      contentStyle={{ 
        backgroundColor: '#181F27', 
        border: '1px solid #343A40' 
      }}
    />
    <Legend />
    <Bar dataKey="value" fill="#007BFF" />
  </BarChart>
</ResponsiveContainer>
```

## Structure des Pages Agent

### Layout
```
AgentLayout
├── Header (sticky)
│   ├── Logo
│   ├── Quick Stats (Float, Cash, Commissions)
│   ├── Notifications
│   └── User Profile
├── Sidebar
│   ├── Principal (Dashboard, Transactions, Soldes)
│   ├── Gestion (Rapports, Commissions)
│   └── Compte (Notifications, Paramètres)
└── Main Content
```

### Pages
1. **Dashboard** (`/agent`)
   - KPIs (Float, Cash, Commissions, Transactions)
   - Graphiques (BarChart, LineChart, PieChart)
   - Transactions récentes
   - Actions rapides

2. **Transactions** (`/agent/transactions`)
   - DataTable avec filtres
   - Recherche
   - Export
   - Pagination

3. **Soldes** (`/agent/soldes`)
   - Gestion Float
   - Gestion Cash
   - Historique

4. **Rapports** (`/agent/rapports`)
   - Rapports journaliers
   - Rapports hebdomadaires
   - Rapports mensuels

5. **Commissions** (`/agent/commissions`)
   - Historique des commissions
   - Statistiques

## Conventions de Code

### Nommage
- **Composants**: PascalCase (`AgentDashboard.jsx`)
- **Fichiers**: kebab-case (`agent-dashboard.jsx`)
- **Variables**: camelCase (`floatBalance`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_FLOAT`)

### Classes Tailwind
```jsx
// Structure recommandée
<div className="
  border border-darkGray     // Bordure
  bg-card                    // Background
  rounded-lg                 // Coins arrondis
  p-6                        // Padding
  hover:bg-darkGray          // Hover
  transition-colors          // Animation
">
```

### Composants Réutilisables
- Toujours extraire la logique répétée
- Utiliser les props pour la personnalisation
- Documenter les props avec PropTypes ou TypeScript

## Best Practices

### Performance
- Utiliser `ResponsiveContainer` pour les graphiques
- Paginer les grandes listes avec DataTable
- Lazy loading pour les images

### Accessibilité
- Toujours ajouter des labels aux inputs
- Utiliser des icônes avec du texte
- Contraste de couleurs suffisant

### Sécurité
- Valider toutes les entrées utilisateur
- Sanitizer les données avant affichage
- Utiliser HTTPS pour toutes les requêtes

## Ressources

- [PrimeReact Documentation](https://primereact.org/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
