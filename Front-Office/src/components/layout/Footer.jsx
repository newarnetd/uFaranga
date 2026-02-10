import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produits: [
      { name: 'Particuliers', href: '/' },
      { name: 'Entreprises', href: '/entreprises' },
      { name: 'Agents', href: '/agents' },
      { name: 'API Développeurs', href: '/developpeurs' },
      { name: 'Tarifs', href: '/tarifs' },
    ],
    entreprise: [
      { name: 'À propos', href: '/a-propos' },
      { name: 'Carrières', href: '/carrieres' },
      { name: 'Blog', href: '/blog' },
      { name: 'Presse', href: '/presse' },
      { name: 'Devenir partenaire', href: '/partenaires' },
    ],
    support: [
      { name: "Centre d'aide", href: '/support' },
      { name: 'FAQ', href: '/support#faq' },
      { name: 'Contactez-nous', href: '/support#contact' },
      { name: 'Statut des services', href: '/support#status' },
      { name: 'Signaler un problème', href: '/support#report' },
    ],
    legal: [
      { name: "Conditions d'utilisation", href: '/legal#terms' },
      { name: 'Politique de confidentialité', href: '/legal#privacy' },
      { name: 'Politique de cookies', href: '/legal#cookies' },
      { name: 'Mentions légales', href: '/legal#mentions' },
      { name: 'Lutte anti-blanchiment', href: '/legal#aml' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'pi pi-facebook', href: '#' },
    { name: 'Twitter', icon: 'pi pi-twitter', href: '#' },
    { name: 'Instagram', icon: 'pi pi-instagram', href: '#' },
    { name: 'LinkedIn', icon: 'pi pi-linkedin', href: '#' },
    { name: 'YouTube', icon: 'pi pi-youtube', href: '#' },
  ];

  return (
    <footer className="dark: border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Colonne 1 : uFaranga */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">uF</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                uFaranga
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              L'argent simple et accessible
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Produits */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Produits
            </h3>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 5 : Légal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {currentYear} uFaranga. Tous droits réservés. | uFaranga est une marque déposée.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
              Régulé par la Banque de la République du Burundi (BRB)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
