import React, { useState } from 'react';
import { Send, Lightbulb } from 'lucide-react';

interface Suggestion {
  id: number;
  municipality: string;
  description: string;
  tags: string[];
}

const BoiteAIdees = () => {
  const [municipality, setMunicipality] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    'Environnement',
    'Transport',
    'Culture',
    'Sport',
    'Éducation',
    'Sécurité',
    'Urbanisme',
    'Social'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour soumettre la suggestion
    console.log({ municipality, description, selectedTags });
    // Réinitialiser le formulaire
    setMunicipality('');
    setDescription('');
    setSelectedTags([]);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Boîte à Idées</h1>
        <p className="text-xl text-gray-600">
          Partagez vos idées pour améliorer votre commune
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label htmlFor="municipality" className="block text-sm font-medium text-gray-700 mb-2">
            Quelle municipalité ?
          </label>
          <input
            type="text"
            id="municipality"
            value={municipality}
            onChange={(e) => setMunicipality(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Entrez le nom de votre municipalité"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Votre suggestion
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Décrivez votre idée en détail..."
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégories
          </label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                  ${selectedTags.includes(tag)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Send className="h-5 w-5 mr-2" />
            Soumettre
          </button>
        </div>
      </form>

      {/* Section des suggestions récentes */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Suggestions récentes</h2>
        <div className="grid gap-6">
          {/* Placeholder pour les suggestions */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-indigo-600" />
              <span className="font-medium">Aucune suggestion pour le moment</span>
            </div>
            <p className="text-gray-600">
              Soyez le premier à partager votre idée pour améliorer votre commune !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoiteAIdees; 