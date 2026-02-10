import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, Shield, Zap, Globe, Lock, Eye, EyeOff, 
  Copy, Check, Smartphone, ShoppingCart, Wifi, AlertCircle,
  Plus, Trash2, Pause, Play, Settings, ChevronLeft, ChevronRight,
  User, Phone, Mail, Key, MapPin, MessageSquare, Camera, 
  FileText, Building, Scale, Bell
} from 'lucide-react';

const VirtualCard = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Ma carte principale',
      number: '4532 1234 5678 9010',
      expiry: '12/26',
      cvv: '123',
      balance: 150000,
      currency: 'BIF',
      status: 'active',
      type: 'uFaranga Card',
      color: 'from-blue-600 to-blue-800'
    }
  ]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCardName, setNewCardName] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [modalStep, setModalStep] = useState(0);
  
  // Form data for account creation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: 'Burundi',
    language: 'Français',
    cardName: '',
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextModalStep = () => {
    setModalStep((prev) => Math.min(prev + 1, 3));
  };

  const prevModalStep = () => {
    setModalStep((prev) => Math.max(prev - 1, 0));
  };

  const canProceedStep = () => {
    switch(modalStep) {
      case 0:
        return formData.firstName && formData.lastName && formData.phone;
      case 1:
        return formData.password && formData.password === formData.confirmPassword;
      case 2:
        return formData.cardName && formData.acceptTerms;
      default:
        return true;
    }
  };

  const accountCreationSteps = [
    {
      step: 1,
      title: 'Informations de base',
      subtitle: 'Les données essentielles pour démarrer',
      icon: User,
      color: 'from-blue-600 to-blue-800',
      fields: [
        { icon: User, label: 'Nom et prénom', required: true },
        { icon: Phone, label: 'Numéro de téléphone', required: true, highlight: true },
        { icon: Mail, label: 'Email', required: false },
        { icon: Key, label: 'Mot de passe / PIN', required: true },
        { icon: Globe, label: 'Pays / Langue', required: true }
      ],
      examples: 'M-Pesa, PayPal, Orange Money, Wave'
    },
    {
      step: 2,
      title: 'Vérification du compte',
      subtitle: 'Confirmation de votre identité',
      icon: MessageSquare,
      color: 'from-green-600 to-green-800',
      fields: [
        { icon: MessageSquare, label: 'Code SMS (OTP)', required: true },
        { icon: Mail, label: 'Code Email', required: false }
      ],
      description: 'Confirme que le numéro ou l\'email vous appartient'
    },
    {
      step: 3,
      title: 'Identification KYC',
      subtitle: 'Know Your Customer - Niveau de compte',
      icon: FileText,
      color: 'from-purple-600 to-purple-800',
      levels: [
        {
          name: 'Compte basique',
          icon: User,
          fields: ['Nom', 'Numéro de téléphone', 'PIN'],
          limits: 'Plafonds limités'
        },
        {
          name: 'Compte complet',
          icon: Shield,
          fields: ['Carte d\'identité / Passeport', 'Photo ou selfie', 'Adresse'],
          limits: 'Limites élevées, toutes fonctionnalités'
        }
      ]
    },
    {
      step: 4,
      title: 'Création du compte virtuel',
      subtitle: 'Génération automatique par la plateforme',
      icon: CreditCard,
      color: 'from-orange-600 to-orange-800',
      generated: [
        { icon: Building, label: 'Numéro de compte / wallet', auto: true },
        { icon: CreditCard, label: 'Solde virtuel', auto: true },
        { icon: Key, label: 'Identifiant interne (ID utilisateur)', auto: true }
      ],
      note: 'L\'utilisateur ne choisit pas ce numéro'
    },
    {
      step: 5,
      title: 'Sécurité',
      subtitle: 'Protection de votre compte',
      icon: Shield,
      color: 'from-red-600 to-red-800',
      features: [
        { icon: Key, label: 'PIN ou mot de passe', description: 'Accès sécurisé' },
        { icon: Lock, label: 'Authentification 2FA', description: 'Double vérification' },
        { icon: Bell, label: 'Alertes SMS / Notifications', description: 'Suivi en temps réel' }
      ]
    },
    {
      step: 6,
      title: 'Aspects légaux',
      subtitle: 'Pour créer une grande plateforme',
      icon: Scale,
      color: 'from-gray-600 to-gray-800',
      requirements: [
        { icon: FileText, label: 'Enregistrement légal', description: 'Entreprise / Startup' },
        { icon: Building, label: 'Partenariat bancaire', description: 'Agrément fintech' },
        { icon: Scale, label: 'Respect des lois', description: 'AML, KYC' },
        { icon: Lock, label: 'Protection des données', description: 'Sécurité utilisateurs' }
      ]
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % accountCreationSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + accountCreationSteps.length) % accountCreationSteps.length);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCreateCard = () => {
    if (newCardName.trim()) {
      const newCard = {
        id: cards.length + 1,
        name: newCardName,
        number: `4532 ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`,
        expiry: '12/28',
        cvv: Math.floor(100 + Math.random() * 900).toString(),
        balance: 0,
        currency: 'BIF',
        status: 'active',
        type: 'visa',
        color: ['from-purple-600 to-purple-800', 'from-green-600 to-green-800', 'from-red-600 to-red-800'][Math.floor(Math.random() * 3)]
      };
      setCards([...cards, newCard]);
      setNewCardName('');
      setShowCreateModal(false);
    }
  };

  const toggleCardStatus = (cardId) => {
    setCards(cards.map(card => 
      card.id === cardId 
        ? { ...card, status: card.status === 'active' ? 'paused' : 'active' }
        : card
    ));
  };

  const deleteCard = (cardId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette carte ?')) {
      setCards(cards.filter(card => card.id !== cardId));
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  CARTE VIRTUELLE INSTANTANÉE
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Créez une carte Visa/Mastercard virtuelle en 10 secondes. 
                  Achetez en ligne partout dans le monde en toute sécurité.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Création instantanée</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Gratuite à vie</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-secondary" />
                    <span>Acceptée mondialement</span>
                  </div>
                </div>

                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Créer ma carte virtuelle
                </button>
              </div>

              {/* Right - Card Preview */}
              <div className="relative">
                <div className="relative z-10">
                  {cards.length > 0 && (
                    <div className={`bg-gradient-to-br ${cards[0].color} rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform`}>
                      <div className="flex justify-between items-start mb-12">
                        <Wifi className="w-12 h-12 text-white/80 rotate-90" />
                        <div className="text-white/80 text-sm font-semibold uppercase">
                          {cards[0].type}
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <div className="text-white text-2xl font-mono tracking-wider mb-2">
                          {showCardDetails ? cards[0].number : '•••• •••• •••• ' + cards[0].number.slice(-4)}
                        </div>
                        <div className="text-white/60 text-xs uppercase">{cards[0].name}</div>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-white/60 text-xs mb-1">Expire</div>
                          <div className="text-white font-mono">{cards[0].expiry}</div>
                        </div>
                        <div>
                          <div className="text-white/60 text-xs mb-1">CVV</div>
                          <div className="text-white font-mono">
                            {showCardDetails ? cards[0].cvv : '•••'}
                          </div>
                        </div>
                        <button
                          onClick={() => setShowCardDetails(!showCardDetails)}
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          {showCardDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Creation Process Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-anton uppercase text-center mb-4">COMMENT CRÉER VOTRE COMPTE VIRTUEL</h2>
            <p className="text-center text-gray-400 mb-12">Processus complet de création de compte sur les grandes plateformes</p>
            
            {/* Carousel */}
            <div className="relative">
              {/* Current Step Card */}
              <div className={`bg-gradient-to-br ${accountCreationSteps[currentStep].color} rounded-2xl p-8 md:p-12 min-h-[500px] relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      {React.createElement(accountCreationSteps[currentStep].icon, { className: "w-10 h-10 text-white" })}
                    </div>
                    <div className="flex-1">
                      <div className="text-white/80 text-sm font-semibold mb-2">ÉTAPE {accountCreationSteps[currentStep].step}/6</div>
                      <h3 className="text-3xl font-anton uppercase text-white mb-2">{accountCreationSteps[currentStep].title}</h3>
                      <p className="text-white/80">{accountCreationSteps[currentStep].subtitle}</p>
                    </div>
                  </div>

                  {/* Content based on step */}
                  <div className="space-y-6">
                    {/* Step 1: Basic Info - REAL FORM */}
                    {currentStep === 0 && (
                      <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* First Name */}
                          <div>
                            <label className="block text-white/80 text-sm mb-2">
                              <User className="w-4 h-4 inline mr-2" />
                              Prénom <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Jean"
                              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                              required
                            />
                          </div>

                          {/* Last Name */}
                          <div>
                            <label className="block text-white/80 text-sm mb-2">
                              <User className="w-4 h-4 inline mr-2" />
                              Nom <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Mukiza"
                              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                              required
                            />
                          </div>
                        </div>

                        {/* Phone - Highlighted */}
                        <div className="bg-white/5 border-2 border-white/30 rounded-xl p-4">
                          <label className="block text-white/80 text-sm mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Numéro de téléphone <span className="text-red-400">*</span>
                            <span className="ml-2 text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Le plus important</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+257 79 123 456"
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                            required
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-white/80 text-sm mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email <span className="text-white/40 text-xs">(Optionnel)</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jean.mukiza@example.com"
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Password */}
                          <div>
                            <label className="block text-white/80 text-sm mb-2">
                              <Key className="w-4 h-4 inline mr-2" />
                              Mot de passe / PIN <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              placeholder="••••••••"
                              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                              required
                            />
                          </div>

                          {/* Confirm Password */}
                          <div>
                            <label className="block text-white/80 text-sm mb-2">
                              <Key className="w-4 h-4 inline mr-2" />
                              Confirmer <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              placeholder="••••••••"
                              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Country */}
                          <div>
                            <label className="block text-white/80 text-sm mb-2">
                              <Globe className="w-4 h-4 inline mr-2" />
                              Pays <span className="text-red-400">*</span>
                            </label>
                            <select
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50"
                              required
                            >
                              <option value="Burundi">🇧🇮 Burundi</option>
                              <option value="Rwanda">🇷🇼 Rwanda</option>
                              <option value="Kenya">🇰🇪 Kenya</option>
                              <option value="Tanzania">🇹🇿 Tanzania</option>
                              <option value="Uganda">🇺🇬 Uganda</option>
                            </select>
                          </div>

                          {/* Language */}
                          <div>
                            <label className="block text-white/80 text-sm mb-2">
                              <Globe className="w-4 h-4 inline mr-2" />
                              Langue <span className="text-red-400">*</span>
                            </label>
                            <select
                              name="language"
                              value={formData.language}
                              onChange={handleInputChange}
                              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50"
                              required
                            >
                              <option value="Français">Français</option>
                              <option value="English">English</option>
                              <option value="Kirundi">Kirundi</option>
                              <option value="Swahili">Swahili</option>
                            </select>
                          </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                          <label className="text-white/80 text-sm">
                            J'accepte les <Link to="/legal" className="text-primary hover:underline">conditions d'utilisation</Link> et la <Link to="/legal#privacy" className="text-primary hover:underline">politique de confidentialité</Link>
                          </label>
                        </div>

                        {/* Info */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-white/80 text-sm">
                            <span className="font-semibold">Exemples de plateformes:</span> M-Pesa, PayPal, Orange Money, Wave
                          </div>
                        </div>
                      </form>
                    )}

                    {/* Step 2: Verification */}
                    {currentStep === 1 && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          {accountCreationSteps[1].fields.map((field, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                              <div className="flex items-center gap-3 mb-3">
                                {React.createElement(field.icon, { className: "w-6 h-6 text-white" })}
                                <div className="text-white font-semibold text-lg">{field.label}</div>
                              </div>
                              <div className="text-white/60">{field.required ? 'Obligatoire' : 'Optionnel'}</div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                            <div className="text-white">{accountCreationSteps[1].description}</div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 3: KYC */}
                    {currentStep === 2 && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {accountCreationSteps[2].levels.map((level, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              {React.createElement(level.icon, { className: "w-6 h-6 text-white" })}
                              <h4 className="text-xl font-semibold text-white">{level.name}</h4>
                            </div>
                            <div className="space-y-2 mb-4">
                              {level.fields.map((field, fieldIdx) => (
                                <div key={fieldIdx} className="flex items-center gap-2 text-white/80">
                                  <Check className="w-4 h-4 text-secondary" />
                                  <span>{field}</span>
                                </div>
                              ))}
                            </div>
                            <div className="text-white/60 text-sm bg-white/5 rounded-lg p-3">
                              ➡️ {level.limits}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 4: Account Creation */}
                    {currentStep === 3 && (
                      <>
                        <div className="space-y-4">
                          {accountCreationSteps[3].generated.map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                                  <div className="text-white font-semibold">{item.label}</div>
                                </div>
                                <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                                  Automatique
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                            <div className="text-white">⚠️ {accountCreationSteps[3].note}</div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 5: Security */}
                    {currentStep === 4 && (
                      <div className="space-y-4">
                        {accountCreationSteps[4].features.map((feature, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-lg mb-1">{feature.label}</h4>
                                <p className="text-white/70">{feature.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 6: Legal */}
                    {currentStep === 5 && (
                      <div className="space-y-4">
                        {accountCreationSteps[5].requirements.map((req, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                {React.createElement(req.icon, { className: "w-6 h-6 text-white" })}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-lg mb-1">{req.label}</h4>
                                <p className="text-white/70">{req.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Précédent
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {accountCreationSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentStep ? 'bg-primary w-8' : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Suivant
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">POURQUOI CHOISIR NOTRE CARTE VIRTUELLE</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instantanée</h3>
              <p className="text-gray-400">Créez votre carte en 10 secondes chrono</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ultra sécurisée</h3>
              <p className="text-gray-400">3D Secure, notifications instantanées</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Internationale</h3>
              <p className="text-gray-400">Acceptée sur tous les sites du monde</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contrôle total</h3>
              <p className="text-gray-400">Gérez tout depuis votre smartphone</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-anton uppercase">MES CARTES VIRTUELLES</h2>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Nouvelle carte
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div key={card.id} className="bg-gray-900 rounded-xl overflow-hidden">
                  {/* Card Visual */}
                  <div className={`bg-gradient-to-br ${card.color} p-6 relative`}>
                    <div className="flex justify-between items-start mb-8">
                      <Wifi className="w-10 h-10 text-white/60 rotate-90" />
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        card.status === 'active' ? 'bg-secondary text-white' : 'bg-gray-500 text-white'
                      }`}>
                        {card.status === 'active' ? 'Active' : 'Pausée'}
                      </span>
                    </div>
                    
                    <div className="text-white text-lg font-mono tracking-wider mb-4">
                      •••• •••• •••• {card.number.slice(-4)}
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/60 text-xs mb-1">Solde</div>
                        <div className="text-white font-semibold">
                          {card.balance.toLocaleString()} {card.currency}
                        </div>
                      </div>
                      <div className="text-white/80 text-sm uppercase font-semibold">
                        {card.type}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4">
                    <div className="text-sm font-semibold mb-3">{card.name}</div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => toggleCardStatus(card.id)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        {card.status === 'active' ? (
                          <Pause className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Play className="w-4 h-4 text-gray-400" />
                        )}
                        <span className="text-xs text-gray-400">
                          {card.status === 'active' ? 'Pause' : 'Activer'}
                        </span>
                      </button>

                      <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                        <Settings className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-400">Gérer</span>
                      </button>

                      <button
                        onClick={() => deleteCard(card.id)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                        <span className="text-xs text-red-400">Suppr.</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">OÙ UTILISER VOTRE CARTE</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black rounded-xl p-6">
              <ShoppingCart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-gray-400">Amazon, AliExpress, eBay, et tous les sites marchands</p>
            </div>

            <div className="bg-black rounded-xl p-6">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Abonnements</h3>
              <p className="text-gray-400">Netflix, Spotify, Apple Music, Google Play</p>
            </div>

            <div className="bg-black rounded-xl p-6">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Services en ligne</h3>
              <p className="text-gray-400">Hébergement, domaines, logiciels, formations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-anton uppercase mb-4">SÉCURITÉ MAXIMALE</h2>
              <p className="text-xl text-gray-300">Vos transactions sont protégées par les technologies les plus avancées</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cryptage AES-256</h3>
                  <p className="text-gray-400">Toutes vos données sont cryptées avec le même niveau de sécurité que les banques</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3D Secure</h3>
                  <p className="text-gray-400">Authentification renforcée pour chaque transaction en ligne</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Notifications instantanées</h3>
                  <p className="text-gray-400">Recevez une alerte pour chaque transaction effectuée</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contrôle total</h3>
                  <p className="text-gray-400">Bloquez ou débloquez votre carte en un clic depuis l'app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">PRÊT À COMMENCER ?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Téléchargez l'app uFaranga et créez votre première carte virtuelle en 10 secondes
            </p>
            <Link 
              to="/telecharger"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Télécharger l'application
            </Link>
          </div>
        </div>
      </section>

      {/* Create Card Modal - FULL ACCOUNT CREATION FORM */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full p-8 my-8">
            <h3 className="text-2xl font-anton uppercase mb-2">CRÉER UNE NOUVELLE CARTE</h3>
            <p className="text-gray-400 mb-6">Remplissez vos informations pour créer votre compte bancaire virtuel</p>
            
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Prénom <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jean"
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nom <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Mukiza"
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Phone - Highlighted as most important */}
              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-4">
                <label className="block text-sm font-medium text-white mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Numéro de téléphone <span className="text-red-400">*</span>
                  <span className="ml-2 text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Le plus important</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+257 79 123 456"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email <span className="text-gray-500 text-xs">(Optionnel)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jean.mukiza@example.com"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
              </div>

              {/* Password Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <Key className="w-4 h-4 inline mr-2" />
                    Mot de passe / PIN <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <Key className="w-4 h-4 inline mr-2" />
                    Confirmer <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Country and Language */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Pays <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    required
                  >
                    <option value="Burundi">🇧🇮 Burundi</option>
                    <option value="Rwanda">🇷🇼 Rwanda</option>
                    <option value="Kenya">🇰🇪 Kenya</option>
                    <option value="Tanzania">🇹🇿 Tanzania</option>
                    <option value="Uganda">🇺🇬 Uganda</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Langue <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    required
                  >
                    <option value="Français">Français</option>
                    <option value="English">English</option>
                    <option value="Kirundi">Kirundi</option>
                    <option value="Swahili">Swahili</option>
                  </select>
                </div>
              </div>

              {/* Card Name */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Nom de la carte <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={newCardName}
                  onChange={(e) => setNewCardName(e.target.value)}
                  placeholder="Ex: Carte Netflix, Carte Shopping..."
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 bg-black rounded-lg p-4">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
                <label className="text-sm text-gray-400">
                  J'accepte les <Link to="/legal" className="text-primary hover:underline">conditions d'utilisation</Link> et la <Link to="/legal#privacy" className="text-primary hover:underline">politique de confidentialité</Link>
                </label>
              </div>

              {/* Info Banner */}
              <div className="bg-black rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-400">
                    Votre carte sera créée instantanément et prête à l'emploi. 
                    Vous pourrez la recharger depuis votre compte principal.
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      phone: '',
                      email: '',
                      password: '',
                      confirmPassword: '',
                      country: 'Burundi',
                      language: 'Français',
                      acceptTerms: false
                    });
                    setNewCardName('');
                  }}
                  className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    if (formData.acceptTerms && newCardName.trim() && formData.firstName && formData.lastName && formData.phone && formData.password) {
                      handleCreateCard();
                      setShowCreateModal(false);
                    }
                  }}
                  disabled={!formData.acceptTerms || !newCardName.trim() || !formData.firstName || !formData.lastName || !formData.phone || !formData.password}
                  className="flex-1 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Créer la carte
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualCard;
