import React from 'react';
import Spinner, { RadialSpinner, DotSpinner, BarSpinner } from './common/Spinner';
import { Card } from './common';

const SpinnerShowcase = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-foreground rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            ← Retour
          </button>
          <h1 className="text-4xl font-bold text-foreground">
            Magnifique Spoke Spinner
          </h1>
        </div>
        <p className="text-muted mb-8">
          Spinner radial avec barrettes tournantes - Design propre et élégant
        </p>

        {/* Spoke Spinner Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card title="Spoke Spinner - Tailles">
            <div className="flex items-center justify-around py-8">
              <div className="text-center">
                <Spinner size="small" color="primary" />
                <p className="text-xs text-muted mt-2">Small</p>
              </div>
              <div className="text-center">
                <Spinner size="medium" color="primary" />
                <p className="text-xs text-muted mt-2">Medium</p>
              </div>
              <div className="text-center">
                <Spinner size="large" color="primary" />
                <p className="text-xs text-muted mt-2">Large</p>
              </div>
              <div className="text-center">
                <Spinner size="xlarge" color="primary" />
                <p className="text-xs text-muted mt-2">XLarge</p>
              </div>
            </div>
          </Card>

          <Card title="Spoke Spinner - Couleurs">
            <div className="flex items-center justify-around py-8">
              <div className="text-center">
                <Spinner size="large" color="primary" />
                <p className="text-xs text-muted mt-2">Primary</p>
              </div>
              <div className="text-center">
                <Spinner size="large" color="success" />
                <p className="text-xs text-muted mt-2">Success</p>
              </div>
              <div className="text-center">
                <Spinner size="large" color="danger" />
                <p className="text-xs text-muted mt-2">Danger</p>
              </div>
            </div>
          </Card>

          <Card title="Spoke Spinner - Plus de couleurs">
            <div className="flex items-center justify-around py-8">
              <div className="text-center">
                <Spinner size="large" color="warning" />
                <p className="text-xs text-muted mt-2">Warning</p>
              </div>
              <div className="text-center">
                <Spinner size="large" color="secondary" />
                <p className="text-xs text-muted mt-2">Secondary</p>
              </div>
              <div className="text-center bg-gray-800 p-4 rounded">
                <Spinner size="large" color="white" />
                <p className="text-xs text-white mt-2">White</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Spoke Spinner avec texte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="Avec texte de chargement">
            <div className="py-8">
              <Spinner 
                size="large" 
                color="primary" 
                text="En cours..." 
              />
            </div>
          </Card>

          <Card title="Radial Spinner Direct">
            <div className="flex items-center justify-around py-8">
              <RadialSpinner size="small" color="success" />
              <RadialSpinner size="medium" color="primary" />
              <RadialSpinner size="large" color="danger" />
              <RadialSpinner size="xlarge" color="warning" />
            </div>
          </Card>
        </div>

        {/* Autres types de spinners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="Dot Spinner">
            <div className="flex items-center justify-around py-8">
              <DotSpinner color="primary" />
              <DotSpinner color="success" />
              <DotSpinner color="danger" />
              <DotSpinner color="warning" />
            </div>
          </Card>

          <Card title="Bar Spinner">
            <div className="flex items-center justify-around py-8">
              <BarSpinner color="primary" />
              <BarSpinner color="success" />
              <BarSpinner color="danger" />
              <BarSpinner color="warning" />
            </div>
          </Card>
        </div>

        {/* Démonstration en contexte */}
        <Card title="En contexte - Boutons de chargement">
          <div className="flex flex-wrap gap-4 py-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-3 hover:bg-blue-700 transition-colors">
              <Spinner size="small" color="white" />
              <span>En cours...</span>
            </button>
            
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg flex items-center gap-3 hover:bg-green-700 transition-colors">
              <DotSpinner color="white" />
              <span>Traitement...</span>
            </button>
            
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg flex items-center gap-3 hover:bg-purple-700 transition-colors">
              <BarSpinner color="white" />
              <span>Envoi...</span>
            </button>
          </div>
        </Card>

        {/* Overlay Demo */}
        <Card title="Spinner Overlay (Commenté pour démo)">
          <div className="py-4">
            <p className="text-muted mb-4">
              Pour tester l'overlay, décommentez le code ci-dessous :
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`<Spinner 
  size="large" 
  color="primary" 
  text="Chargement..." 
  overlay={true} 
/>`}
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SpinnerShowcase;
