import { 
  Smartphone, Download as DownloadIcon, Star, Users, 
  Apple, Play, Shield, Zap, Globe, CheckCircle,
  QrCode, CreditCard, Send, PiggyBank, Wallet,
  TrendingUp, Award, Lock, Clock
} from 'lucide-react';

const Download = () => {
  const features = [
    {
      icon: Send,
      title: 'Transferts instantanés',
      description: 'Envoyez de l\'argent en quelques secondes'
    },
    {
      icon: CreditCard,
      title: 'Carte virtuelle gratuite',
      description: 'Créez votre carte en 2 minutes'
    },
    {
      icon: QrCode,
      title: 'Paiements QR',
      description: 'Payez en scannant un code QR'
    },
    {
      icon: PiggyBank,
      title: 'Épargne automatique',
      description: 'Économisez sans effort'
    },
    {
      icon: Shield,
      title: '100% sécurisé',
      description: 'Vos données sont protégées'
    },
    {
      icon: Clock,
      title: 'Support 24/7',
      description: 'Assistance disponible toujours'
    }
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Utilisateurs actifs' },
    { icon: Star, value: '4.8/5', label: 'Note moyenne' },
    { icon: DownloadIcon, value: '1M+', label: 'Téléchargements' },
    { icon: Award, value: '#1', label: 'App Finance Burundi' }
  ];

  const reviews = [
    {
      name: 'Jean Mukiza',
      rating: 5,
      comment: 'Meilleure app de paiement au Burundi. Simple et rapide!',
      date: 'Il y a 2 jours'
    },
    {
      name: 'Marie Uwimana',
      rating: 5,
      comment: 'J\'adore les transferts gratuits. Plus besoin de payer des frais!',
      date: 'Il y a 1 semaine'
    },
    {
      name: 'David Niyonkuru',
      rating: 5,
      comment: 'Interface moderne et intuitive. Je recommande à 100%',
      date: 'Il y a 2 semaines'
    }
  ];

  const requirements = {
    android: {
      version: 'Android 6.0+',
      size: '45 MB',
      updated: '15 janvier 2026'
    },
    ios: {
      version: 'iOS 12.0+',
      size: '52 MB',
      updated: '15 janvier 2026'
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                  <Smartphone className="w-5 h-5" />
                  <span className="font-semibold">Application Mobile</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  TÉLÉCHARGEZ L'APP UFARANGA
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Gérez votre argent facilement depuis votre smartphone. Disponible sur iOS et Android.
                </p>
                
                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="#" 
                    className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-3"
                  >
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs text-gray-600">Télécharger sur</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-3"
                  >
                    <Play className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs text-gray-600">Disponible sur</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="border border-gray-800 rounded-xl p-4 hover:border-primary/50 transition-colors">
                      <stat.icon className="w-8 h-8 text-primary mb-2" />
                      <div className="text-2xl font-anton text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Phone Mockup */}
              <div className="relative">
                <div className="border border-gray-800 rounded-3xl p-8 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary to-blue-800 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-32 h-32 text-white/20" />
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -right-4 top-1/4 border border-gray-800 bg-black rounded-xl p-4 shadow-xl">
                  <TrendingUp className="w-6 h-6 text-secondary mb-2" />
                  <div className="text-sm font-semibold">+250%</div>
                  <div className="text-xs text-gray-400">Croissance</div>
                </div>
                <div className="absolute -left-4 bottom-1/4 border border-gray-800 bg-black rounded-xl p-4 shadow-xl">
                  <Lock className="w-6 h-6 text-primary mb-2" />
                  <div className="text-sm font-semibold">100%</div>
                  <div className="text-xs text-gray-400">Sécurisé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-anton text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            FONCTIONNALITÉS
          </h2>
          <p className="text-center text-gray-400 mb-12">Tout ce dont vous avez besoin dans une seule app</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-4">
            CE QUE DISENT NOS UTILISATEURS
          </h2>
          <p className="text-center text-gray-400 mb-12">Plus de 10,000 avis 5 étoiles</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.comment}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-gray-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            CONFIGURATION REQUISE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Android */}
            <div className="border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Play className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Android</h3>
                  <p className="text-gray-400">Google Play Store</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Version: {requirements.android.version}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Taille: {requirements.android.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Mis à jour: {requirements.android.updated}</span>
                </div>
              </div>
              <a 
                href="#" 
                className="block w-full bg-white text-black text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Télécharger sur Google Play
              </a>
            </div>

            {/* iOS */}
            <div className="border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gray-400/10 flex items-center justify-center">
                  <Apple className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">iOS</h3>
                  <p className="text-gray-400">Apple App Store</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Version: {requirements.ios.version}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Taille: {requirements.ios.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Mis à jour: {requirements.ios.updated}</span>
                </div>
              </div>
              <a 
                href="#" 
                className="block w-full bg-white text-black text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Télécharger sur App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              COMMENCEZ DÈS AUJOURD'HUI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez 500,000+ utilisateurs qui font confiance à uFaranga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Apple className="w-5 h-5" />
                App Store
              </a>
              <a 
                href="#" 
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5" />
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
