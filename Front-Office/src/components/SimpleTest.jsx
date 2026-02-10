import React from 'react';

const SimpleTest = () => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-bold text-blue-800 mb-2">Test Tailwind CSS</h2>
      <p className="text-blue-600">Si vous voyez cette boîte avec un fond bleu clair et du texte bleu, Tailwind fonctionne !</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Bouton Test
      </button>
    </div>
  );
};

export default SimpleTest;