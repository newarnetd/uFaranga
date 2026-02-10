import React from 'react';
import { Button } from 'primereact/button';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Back Office - uFaranga</h1>
        <p className="text-gray-600 mb-4">Panneau d'administration</p>
        <Button label="Tableau de bord" icon="pi pi-home" className="p-button-primary" />
      </div>
    </div>
  );
}

export default App;
