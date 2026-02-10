import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, Send,
  Building2, Headphones, Globe, Facebook, Twitter,
  Instagram, Linkedin, CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+257 79 000 000',
      description: 'Lun-Ven: 8h-17h, Sam: 9h-13h',
      action: 'tel:+25779000000',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@ufaranga.bi',
      description: 'Réponse sous 24h',
      action: 'mailto:contact@ufaranga.bi',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: MessageCircle,
      title: 'Chat en direct',
      value: 'Support instantané',
      description: 'Disponible 24/7',
      action: '#',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Avenue de la Liberté',
      description: 'Bujumbura, Burundi',
      action: '#',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const offices = [
    {
      city: 'Bujumbura',
      address: 'Avenue de la Liberté, Rohero',
      phone: '+257 79 000 000',
      email: 'bujumbura@ufaranga.bi',
      hours: 'Lun-Ven: 8h-17h, Sam: 9h-13h'
    },
    {
      city: 'Gitega',
      address: 'Centre-ville, près du marché',
      phone: '+257 79 000 001',
      email: 'gitega@ufaranga.bi',
      hours: 'Lun-Ven: 8h-17h, Sam: 9h-13h'
    },
    {
      city: 'Ngozi',
      address: 'Avenue Patrice Lumumba',
      phone: '+257 79 000 002',
      email: 'ngozi@ufaranga.bi',
      hours: 'Lun-Ven: 8h-17h'
    }
  ];

  const departments = [
    {
      name: 'Support Client',
      email: 'support@ufaranga.bi',
      description: 'Aide sur votre compte et transactions'
    },
    {
      name: 'Partenariats',
      email: 'partners@ufaranga.bi',
      description: 'Collaborations et intégrations'
    },
    {
      name: 'Presse & Médias',
      email: 'press@ufaranga.bi',
      description: 'Relations presse et communication'
    },
    {
      name: 'Carrières',
      email: 'careers@ufaranga.bi',
      description: 'Opportunités d\'emploi'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Headphones className="w-5 h-5" />
              <span className="font-semibold">Contactez-nous</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
              NOUS SOMMES LÀ POUR VOUS AIDER
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Notre équipe est disponible 24/7 pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.action}
                className="border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-xl ${method.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-7 h-7 ${method.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className={`${method.color} font-semibold mb-2`}>{method.value}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-anton uppercase mb-4">
                ENVOYEZ-NOUS UN MESSAGE
              </h2>
              <p className="text-gray-400 mb-8">
                Remplissez le formulaire et nous vous répondrons sous 24h
              </p>

              {submitted ? (
                <div className="border border-secondary bg-secondary/5 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">
                    Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nom complet <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jean Mukiza"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jean@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+257 79 123 456"
                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Sujet <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="support">Support technique</option>
                        <option value="partnership">Partenariat</option>
                        <option value="business">Compte business</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      placeholder="Décrivez votre demande..."
                      className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Departments */}
              <div className="border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Départements</h3>
                <div className="space-y-4">
                  {departments.map((dept, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                      <h4 className="font-semibold mb-1">{dept.name}</h4>
                      <a href={`mailto:${dept.email}`} className="text-primary text-sm hover:underline block mb-1">
                        {dept.email}
                      </a>
                      <p className="text-gray-400 text-xs">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl border border-gray-800 flex items-center justify-center transition-colors ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lundi - Vendredi</span>
                    <span className="font-semibold">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Samedi</span>
                    <span className="font-semibold">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dimanche</span>
                    <span className="text-gray-400">Fermé</span>
                  </div>
                  <div className="pt-3 border-t border-gray-800">
                    <div className="flex items-center gap-2 text-secondary">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">Chat en ligne: 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">
            NOS BUREAUX
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, idx) => (
              <div key={idx} className="border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 pt-3 border-t border-gray-800">
                    <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">
              BESOIN D'AIDE IMMÉDIATE ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Notre chat en ligne est disponible 24/7
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Démarrer le chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
