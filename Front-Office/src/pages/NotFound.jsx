import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4 text-foreground">
          Page non trouvée
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/support"
            className="px-8 py-4 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contactez le support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
