import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="bg-background min-h-screen py-16">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <span className="mr-2">←</span> Retour au blog
        </Link>
        
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Éducation financière
          </span>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            5 astuces pour épargner efficacement avec uFaranga
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>5 février 2025</span>
            <span>·</span>
            <span>4 min de lecture</span>
          </div>
        </div>

        <div className="h-96 bg-primary-200 dark:bg-primary-800 rounded-xl mb-8"></div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            L'épargne est un pilier essentiel de la santé financière. Avec uFaranga, 
            épargner devient simple et automatique. Découvrez nos 5 astuces pour 
            maximiser votre épargne.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Définissez des objectifs clairs</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Créez des objectifs d'épargne spécifiques dans l'app uFaranga : mariage, 
            voiture, études, etc. Visualiser vos objectifs vous motive à épargner régulièrement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. Automatisez vos transferts</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Configurez des transferts automatiques chaque mois vers votre compte d'épargne. 
            L'argent que vous ne voyez pas, vous ne le dépensez pas !
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. Utilisez la fonction Round-up</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Activez l'arrondi automatique : chaque achat est arrondi au millier supérieur 
            et la différence est épargnée. Vous épargnez sans y penser !
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Rejoignez une tontine digitale</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Les tontines digitales uFaranga vous permettent d'épargner en groupe avec 
            transparence et sécurité. L'effet de groupe vous motive à tenir vos engagements.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">5. Suivez vos progrès</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Consultez régulièrement vos statistiques d'épargne dans l'app. Voir votre 
            argent grandir est la meilleure motivation pour continuer !
          </p>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-foreground">Prêt à commencer ?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Téléchargez uFaranga et commencez à épargner dès aujourd'hui
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Télécharger l'app
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
