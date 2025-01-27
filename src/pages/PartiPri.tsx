import React, { useState } from 'react';
import { RotateCcw, X, Star, Heart, Zap } from 'lucide-react';

interface Proposition {
  id: number;
  title: string;
  description: string;
  image: string;
  votes: number;
}

const propositions: Proposition[] = [
  {
    id: 1,
    title: "Amende pour les pollueurs",
    description: "Mise en place d'un système d'amendes plus strict pour les personnes et entreprises qui ne respectent pas les règles de tri des déchets et de propreté urbaine. L'objectif est de maintenir nos rues propres et d'encourager le respect de l'environnement.",
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80&w=800",
    votes: 386
  },
  {
    id: 2,
    title: "Restitution de notre patrimoine floral",
    description: "Programme de réintroduction de fleurs sauvages locales dans les espaces verts de la ville pour favoriser la biodiversité et embellir nos espaces publics. Cette initiative vise à créer des corridors écologiques et à sensibiliser à la préservation de la nature.",
    image: "https://images.unsplash.com/photo-1465146633011-14f8e0781093?auto=format&fit=crop&q=80&w=800",
    votes: 275
  },
  {
    id: 3,
    title: "Augmentation du budget scolaire",
    description: "Proposition d'augmentation du budget alloué aux écoles pour améliorer les conditions d'apprentissage, renouveler le matériel pédagogique et soutenir les projets éducatifs innovants. Un investissement dans l'avenir de nos enfants.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    votes: 452
  }
];

const PartiPri = () => {
  const [currentPoints] = useState(386);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with Logo and Points */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-32 h-32 relative mb-4">
          <div className="rounded-full border-4 border-gray-200 p-4">
            <img
              src="https://images.unsplash.com/photo-1585998370941-9b7b45527892?auto=format&fit=crop&q=80&w=200"
              alt="PartiPrix Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{currentPoints} points</h2>
          <h1 className="text-3xl font-bold mb-4">Vos votes du jour:</h1>
        </div>
      </div>

      {/* Propositions Grid */}
      <div className="grid gap-8">
        {propositions.map((proposition) => (
          <div key={proposition.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={proposition.image}
                alt={proposition.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">{proposition.title}</h3>
                <p className="text-white text-sm mt-2">{proposition.description}</p>
              </div>
            </div>
            
            {/* Voting Buttons */}
            <div className="flex justify-between p-4 bg-gray-100">
              <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                <RotateCcw className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                <X className="w-6 h-6 text-red-500" />
              </button>
              <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                <Star className="w-6 h-6 text-yellow-500" />
              </button>
              <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                <Heart className="w-6 h-6 text-green-500" />
              </button>
              <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                <Zap className="w-6 h-6 text-purple-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartiPri;