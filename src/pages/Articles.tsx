import React, { useState } from 'react';
import { Search, BookOpen, Clock, Tag, ChevronRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Comment fonctionne le système électoral français ?",
    description: "Un guide complet pour comprendre les différents types d'élections en France et leur importance dans notre démocratie.",
    category: "Système Electoral",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Le rôle des collectivités territoriales",
    description: "Découvrez comment les décisions prises au niveau local impactent votre vie quotidienne.",
    category: "Institutions",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-14"
  },
  {
    id: 3,
    title: "Comprendre le processus législatif",
    description: "De la proposition à la promulgation : comment une loi est-elle créée en France ?",
    category: "Législation",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-13"
  },
  {
    id: 4,
    title: "L'importance de la participation citoyenne",
    description: "Pourquoi et comment s'engager dans la vie politique locale ? Un guide pratique pour les citoyens.",
    category: "Engagement",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-12"
  }
];

const categories = ["Tous", "Système Electoral", "Institutions", "Législation", "Engagement", "Europe", "International"];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Articles et Ressources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez nos articles pour mieux comprendre la politique et ses enjeux
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  {article.category}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-700 transition-colors">
                Lire l'article
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
          <p className="text-gray-600">
            Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
          </p>
        </div>
      )}
    </div>
  );
};

export default Articles;