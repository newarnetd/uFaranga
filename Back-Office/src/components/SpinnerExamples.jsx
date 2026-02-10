import React, { useState } from 'react';
import Spinner, { RadialSpinner, DotSpinner, BarSpinner } from './common/Spinner';

/**
 * Exemples d'utilisation avancés du Spoke Spinner
 */
const SpinnerExamples = () => {
  const [loading, setLoading] = useState({
    button1: false,
    button2: false,
    button3: false,
    overlay: false
  });

  const simulateLoading = (key, duration = 2000) => {
    setLoading(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoading(prev => ({ ...prev, [key]: false }));
    }, duration);
  };

  return (
    <div className="p-8 space-y-8 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Exemples d'utilisation du Spoke Spinner
      </h1>

      {/* Exemple 1: Boutons avec spinners */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          1. Boutons avec Spinners
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => simulateLoading('button1')}
            disabled={loading.button1}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-3 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading.button1 && <Spinner size="small" color="white" />}
            <span>{loading.button1 ? 'En cours...' : 'Envoyer'}</span>
          </button>

          <button
            onClick={() => simulateLoading('button2')}
            disabled={loading.button2}
            className="px-6 py-3 bg-green-600 text-white rounded-lg flex items-center gap-3 hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            {loading.button2 && <RadialSpinner size="small" color="white" />}
            <span>{loading.button2 ? 'Traitement...' : 'Valider'}</span>
          </button>

          <button
            onClick={() => simulateLoading('button3')}
            disabled={loading.button3}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg flex items-center gap-3 hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading.button3 && <DotSpinner color="white" />}
            <span>{loading.button3 ? 'Envoi...' : 'Publier'}</span>
          </button>
        </div>
      </section>

      {/* Exemple 2: Cards avec état de chargement */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          2. Cards avec état de chargement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            <Spinner size="large" color="primary" />
            <p className="mt-4 text-muted">Chargement des données...</p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            <RadialSpinner size="large" color="success" />
            <p className="mt-4 text-muted">Synchronisation...</p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            <BarSpinner color="warning" />
            <p className="mt-4 text-muted">Traitement...</p>
          </div>
        </div>
      </section>

      {/* Exemple 3: Inline spinners */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          3. Spinners Inline
        </h2>
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-foreground">
            <Spinner size="small" color="primary" />
            <span>Chargement des utilisateurs...</span>
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <RadialSpinner size="small" color="success" />
            <span>Mise à jour réussie</span>
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <DotSpinner color="danger" />
            <span>Erreur de connexion</span>
          </p>
        </div>
      </section>

      {/* Exemple 4: Tailles comparées */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          4. Comparaison des tailles
        </h2>
        <div className="flex items-end gap-8 justify-center">
          <div className="text-center">
            <Spinner size="small" color="primary" />
            <p className="text-xs text-muted mt-2">Small (24px)</p>
          </div>
          <div className="text-center">
            <Spinner size="medium" color="primary" />
            <p className="text-xs text-muted mt-2">Medium (40px)</p>
          </div>
          <div className="text-center">
            <Spinner size="large" color="primary" />
            <p className="text-xs text-muted mt-2">Large (56px)</p>
          </div>
          <div className="text-center">
            <Spinner size="xlarge" color="primary" />
            <p className="text-xs text-muted mt-2">XLarge (72px)</p>
          </div>
        </div>
      </section>

      {/* Exemple 5: Palette de couleurs */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          5. Palette de couleurs complète
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="text-center">
            <Spinner size="large" color="primary" />
            <p className="text-xs text-muted mt-2">Primary</p>
          </div>
          <div className="text-center">
            <Spinner size="large" color="secondary" />
            <p className="text-xs text-muted mt-2">Secondary</p>
          </div>
          <div className="text-center">
            <Spinner size="large" color="success" />
            <p className="text-xs text-muted mt-2">Success</p>
          </div>
          <div className="text-center">
            <Spinner size="large" color="warning" />
            <p className="text-xs text-muted mt-2">Warning</p>
          </div>
          <div className="text-center">
            <Spinner size="large" color="danger" />
            <p className="text-xs text-muted mt-2">Danger</p>
          </div>
          <div className="text-center bg-gray-800 p-4 rounded">
            <Spinner size="large" color="white" />
            <p className="text-xs text-white mt-2">White</p>
          </div>
        </div>
      </section>

      {/* Exemple 6: Overlay */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          6. Spinner Overlay (Modal)
        </h2>
        <button
          onClick={() => simulateLoading('overlay', 3000)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Afficher Overlay
        </button>
        <p className="text-sm text-muted mt-2">
          Cliquez pour voir le spinner en mode overlay (3 secondes)
        </p>
      </section>

      {/* Exemple 7: Types de spinners */}
      <section className="bg-card p-6 rounded-lg border border-default">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          7. Différents types de spinners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Spinner size="large" color="primary" />
            <p className="text-sm font-medium mt-4 text-foreground">Spoke Spinner</p>
            <p className="text-xs text-muted mt-1">12 barrettes radiales</p>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <DotSpinner color="primary" />
            <p className="text-sm font-medium mt-4 text-foreground">Dot Spinner</p>
            <p className="text-xs text-muted mt-1">3 points rebondissants</p>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <BarSpinner color="primary" />
            <p className="text-sm font-medium mt-4 text-foreground">Bar Spinner</p>
            <p className="text-xs text-muted mt-1">5 barres verticales</p>
          </div>
        </div>
      </section>

      {/* Overlay actif */}
      {loading.overlay && (
        <Spinner
          size="xlarge"
          color="primary"
          text="En cours..."
          overlay={true}
        />
      )}
    </div>
  );
};

export default SpinnerExamples;
