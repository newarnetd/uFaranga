# 📊 Structure du Dashboard Agent - uFaranga

## 🎯 Objectif
Dashboard opérationnel niveau M-Pesa pour agents. L'agent doit comprendre en 5 secondes :
- 💰 Son float disponible
- 💵 Son cash physique
- 📊 Son activité du jour
- 💼 Ses commissions gagnées
- ⚠️ Les problèmes éventuels

---

## 🏗️ Architecture de la Page

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
│ - Titre: "Dashboard Agent"                                  │
│ - Date et heure en temps réel                               │
│ - Bouton rafraîchir                                         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BLOC 1: KPIs PRINCIPAUX (6 cartes en grid 3x2)             │
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│ │ Float    │ │ Cash     │ │ Commiss. │                     │
│ │ Balance  │ │ Physique │ │ du Jour  │                     │
│ └──────────┘ └──────────┘ └──────────┘                     │
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│ │ Trans.   │ │ Volume   │ │ Taux de  │                     │
│ │ du Jour  │ │ Total    │ │ Succès   │                     │
│ └──────────┘ └──────────┘ └──────────┘                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BLOC 2: STATISTIQUES DU JOUR (4 KPIs détaillés)            │
│                                                              │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│ │Dépôts│ │Retr. │ │Transf│ │Paiem.│                       │
│ │856K  │ │623K  │ │295K  │ │187K  │                       │
│ └──────┘ └──────┘ └──────┘ └──────┘                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BLOC 3: GRAPHIQUES (4 graphiques en grid 2x2)              │
│                                                              │
│ ┌─────────────────────┐ ┌─────────────────────┐           │
│ │ Activité par Heure  │ │ Trans. Hebdo        │           │
│ │ (AreaChart)         │ │ (BarChart)          │           │
│ └─────────────────────┘ └─────────────────────┘           │
│                                                              │
│ ┌─────────────────────┐ ┌─────────────────────┐           │
│ │ Évolution Commiss.  │ │ Volume Hebdo        │           │
│ │ (LineChart)         │ │ (AreaChart)         │           │
│ └─────────────────────┘ └─────────────────────┘           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BLOC 4: TRANSACTIONS + RÉPARTITION (grid 1:2)              │
│                                                              │
│ ┌──────────┐ ┌────────────────────────────────┐           │
│ │          │ │ DERNIÈRES TRANSACTIONS         │           │
│ │ Réparti- │ │                                │           │
│ │ tion     │ │ ┌────────────────────────┐    │           │
│ │ (Pie)    │ │ │ Transaction 1          │    │           │
│ │          │ │ │ Transaction 2          │    │           │
│ │          │ │ │ Transaction 3          │    │           │
│ │          │ │ └────────────────────────┘    │           │
│ │          │ │                                │           │
│ │          │ │ ┌────────────────────────┐    │           │
│ │          │ │ │ Transaction 4          │    │           │
│ │          │ │ │ Transaction 5          │    │           │
│ │          │ │ │ Transaction 6          │    │           │
│ │          │ │ └────────────────────────┘    │           │
│ │          │ │                                │           │
│ │          │ │ ┌────────────────────────┐    │           │
│ │          │ │ │ Transaction 7          │    │           │
│ │          │ │ │ Transaction 8          │    │           │
│ │          │ │ │ Transaction 9          │    │           │
│ └──────────┘ │ └────────────────────────┘    │           │
│              │                                │           │
│              │ [Voir tout →]                  │           │
│              └────────────────────────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Détail des Composants

### 1️⃣ BLOC KPIs PRINCIPAUX (6 cartes)

#### Carte 1: Float Balance 💰
```javascript
{
  titre: "Float Balance",
  valeur: "2.50M BIF",
  indicateur: "Barre de progression (50% du max)",
  statut: "🟢 Normal / 🟡 Faible / 🔴 Critique",
  couleur_bordure: "Dynamique selon statut"
}
```

#### Carte 2: Cash Physique 💵
```javascript
{
  titre: "Cash Physique",
  valeur: "1.80M BIF",
  info: "Différence Float/Cash: 700K BIF",
  icone: DollarSign (primary)
}
```

#### Carte 3: Commissions du Jour 💼
```javascript
{
  titre: "Commissions Jour",
  valeur: "45.6K BIF",
  evolution: "+8.1% vs hier",
  icone: TrendingUp (secondary)
}
```

#### Carte 4: Transactions 📊
```javascript
{
  titre: "Transactions",
  valeur: "47",
  details: "45 succès, 2 échecs",
  icone: Activity (primary)
}
```

#### Carte 5: Volume Total 💸
```javascript
{
  titre: "Volume Total",
  valeur: "1.96M BIF",
  info: "38 clients servis",
  icone: DollarSign (text)
}
```

#### Carte 6: Taux de Succès ✅
```javascript
{
  titre: "Taux de Succès",
  valeur: "95.7%",
  info: "Temps moyen: 45s",
  icone: CheckCircle (secondary)
}
```

---

### 2️⃣ BLOC STATISTIQUES DU JOUR

4 mini-cartes centrées avec icônes :

```javascript
[
  { type: "Dépôts", montant: "856K", icone: ArrowDownToLine, couleur: "secondary" },
  { type: "Retraits", montant: "623K", icone: ArrowUpFromLine, couleur: "primary" },
  { type: "Transferts", montant: "295K", icone: ArrowLeftRight, couleur: "gray" },
  { type: "Paiements", montant: "187K", icone: CreditCard, couleur: "gray" }
]
```

---

### 3️⃣ BLOC GRAPHIQUES (4 graphiques)

#### Graphique 1: Activité par Heure ⏰
```javascript
{
  type: "AreaChart",
  donnees: "Transactions par heure (08h → Maintenant)",
  couleur: "#007BFF (primary)",
  gradient: true,
  axeX: "Heures",
  axeY: "Nombre de transactions"
}
```

#### Graphique 2: Transactions Hebdomadaires 📊
```javascript
{
  type: "BarChart",
  donnees: "Dépôts, Retraits, Transferts par jour (Lun-Dim)",
  couleurs: {
    depots: "#F58424 (secondary)",
    retraits: "#007BFF (primary)",
    transferts: "#6b7280 (gray)"
  },
  axeX: "Jours de la semaine",
  axeY: "Montant (BIF)"
}
```

#### Graphique 3: Évolution Commissions 💰
```javascript
{
  type: "LineChart",
  donnees: "Commissions sur 7 jours (J-6 → Aujourd'hui)",
  couleur: "#F58424 (secondary)",
  strokeWidth: 3,
  dots: true,
  axeX: "Jours",
  axeY: "Commissions (BIF)"
}
```

#### Graphique 4: Volume Hebdomadaire 📈
```javascript
{
  type: "AreaChart",
  donnees: "Volume total par jour (Lun-Dim)",
  couleur: "#F58424 (secondary)",
  gradient: true,
  axeX: "Jours",
  axeY: "Volume (BIF)"
}
```

---

### 4️⃣ BLOC TRANSACTIONS + RÉPARTITION

#### Répartition (PieChart) 🎯
```javascript
{
  type: "PieChart",
  donnees: [
    { name: "Dépôts", value: 856000, color: "#F58424" },
    { name: "Retraits", value: 623000, color: "#007BFF" },
    { name: "Transferts", value: 295000, color: "#6b7280" },
    { name: "Paiements", value: 187000, color: "#9ca3af" }
  ],
  labels: "Nom + Pourcentage",
  legende: "Liste avec couleurs et montants"
}
```

#### Dernières Transactions 🧾
```javascript
{
  affichage: "Groupes de 3 transactions",
  nombre_total: 9,
  structure_transaction: {
    icone: "Type (depot/retrait/transfert/paiement)",
    client: "Nom complet",
    telephone: "+257 79 XXX XXX",
    id: "TXN001",
    montant: "50,000 BIF",
    commission: "+500 BIF",
    heure: "14:35",
    statut: "Succès / En cours / Échec"
  },
  groupement: [
    "Groupe 1: Transactions 1-3",
    "Groupe 2: Transactions 4-6",
    "Groupe 3: Transactions 7-9"
  ],
  bouton: "Voir tout →"
}
```

---

## 🎨 Palette de Couleurs

```javascript
const colors = {
  // Couleurs principales
  primary: "#007BFF",        // Bleu - Actions, retraits
  secondary: "#F58424",      // Orange - Commissions, dépôts, succès
  text: "#F9F9F9",           // Blanc cassé - Texte principal
  
  // Backgrounds
  background: "#00070F",     // Noir bleuté - Background principal
  card: "#181F27",           // Gris foncé - Cartes
  darkBlue: "#000C18",       // Bleu très foncé - Sections
  darkGray: "#343A40",       // Gris foncé - Bordures
  
  // Statuts
  success: "#F58424",        // Orange (secondary)
  warning: "#EAB308",        // Jaune
  danger: "#EF4444",         // Rouge
  
  // Graphiques
  chart1: "#007BFF",         // Primary
  chart2: "#F58424",         // Secondary
  chart3: "#6b7280",         // Gray
  chart4: "#9ca3af"          // Light gray
};
```

---

## 📊 Données Mock (Exemple)

```javascript
const mockData = {
  kpis: {
    floatBalance: 2500000,      // 2.5M BIF
    floatMax: 5000000,          // 5M BIF
    floatMin: 1000000,          // 1M BIF
    cashBalance: 1800000,       // 1.8M BIF
    depositsToday: 856000,      // 856K BIF
    withdrawalsToday: 623000,   // 623K BIF
    transfersToday: 295000,     // 295K BIF
    paymentsToday: 187000,      // 187K BIF
    commissionsToday: 45600,    // 45.6K BIF
    commissionsYesterday: 42200,// 42.2K BIF
    commissionsMonth: 1234500,  // 1.23M BIF
    transactionsToday: 47,
    transactionsSuccess: 45,
    transactionsFailed: 2,
    avgTransactionTime: 45,     // secondes
    peakHour: "14:00",
    clientsServed: 38
  },
  
  activityByHour: [
    { heure: "08h", transactions: 2 },
    { heure: "09h", transactions: 5 },
    { heure: "10h", transactions: 8 },
    // ... jusqu'à maintenant
  ],
  
  transactionsByType: [
    { name: "Lun", depots: 450000, retraits: 320000, transferts: 180000 },
    // ... pour chaque jour
  ],
  
  commissionsData: [
    { jour: "J-6", commissions: 38000 },
    // ... 7 jours
  ],
  
  volumeByDay: [
    { jour: "Lun", volume: 950000 },
    // ... 7 jours
  ],
  
  recentTransactions: [
    {
      id: "TXN001",
      type: "depot",
      client: "Jean Ndayisenga",
      phone: "+257 79 123 456",
      amount: 50000,
      commission: 500,
      time: "14:35",
      status: "success"
    },
    // ... 9 transactions
  ]
};
```

---

## 🔄 Fonctionnalités Temps Réel

### Rafraîchissement Automatique
```javascript
// Horloge mise à jour chaque minute
useEffect(() => {
  const timer = setInterval(() => setCurrentTime(new Date()), 60000);
  return () => clearInterval(timer);
}, []);
```

### Indicateurs Dynamiques
```javascript
// Float status
const floatPercentage = (floatBalance / floatMax) * 100;
const isFloatLow = floatBalance < floatMin * 1.5;
const isFloatCritical = floatBalance < floatMin;

// Bordure dynamique
className={`border ${
  isFloatCritical ? 'border-red-500' : 
  isFloatLow ? 'border-yellow-500' : 
  'border-darkGray'
}`}
```

---

## 📱 Responsive Design

### Desktop (lg: 1024px+)
- KPIs: Grid 3 colonnes
- Statistiques: 4 colonnes
- Graphiques: Grid 2x2
- Transactions: Grid 1:2 (Pie + Liste)

### Tablet (md: 768px+)
- KPIs: Grid 2 colonnes
- Statistiques: 4 colonnes
- Graphiques: Grid 2x2
- Transactions: Grid 1:2

### Mobile (< 768px)
- KPIs: 1 colonne
- Statistiques: 2 colonnes
- Graphiques: 1 colonne (stacked)
- Transactions: 1 colonne (stacked)

---

## 🚀 Prochaines Étapes (Backend)

### APIs à créer
```javascript
// GET /api/v1/agent/dashboard
{
  float: { balance, max, min, percentage },
  cash: { balance, difference },
  commissions: { today, yesterday, month, growth },
  transactions: { today, success, failed, pending, avgTime },
  volume: { today, deposits, withdrawals, transfers, payments },
  activity: { byHour: [], byDay: [], byType: [] },
  recent: [ /* 10 dernières transactions */ ]
}
```

### WebSocket pour Temps Réel
```javascript
// ws://localhost:3002/agent/dashboard
socket.on('transaction:new', (data) => {
  // Mise à jour des KPIs
  // Ajout dans liste transactions récentes
});

socket.on('float:update', (data) => {
  // Mise à jour float balance
});
```

---

## ✅ Checklist Complétude

- [x] Header avec date/heure temps réel
- [x] 6 KPIs principaux
- [x] Statistiques du jour (4 types)
- [x] 4 graphiques (Area, Bar, Line, Area)
- [x] Répartition (PieChart)
- [x] Dernières transactions (groupées par 3)
- [x] Indicateurs dynamiques (Float status)
- [x] Responsive design
- [x] Mock data complet
- [ ] Connexion API backend
- [ ] WebSocket temps réel
- [ ] Gestion erreurs
- [ ] Loading states
- [ ] Animations

---

## 📝 Notes Importantes

1. **Pas d'alertes** : Supprimées pour garder le dashboard propre
2. **Pas d'actions rapides** : Supprimées (seront dans une page dédiée)
3. **Transactions groupées par 3** : Meilleure lisibilité
4. **4 graphiques** : Couverture complète de l'activité
5. **Couleurs cohérentes** : Respect de la charte graphique uFaranga

---

**Dernière mise à jour** : 12 février 2026
**Version** : 1.0
**Auteur** : Kiro AI Assistant
