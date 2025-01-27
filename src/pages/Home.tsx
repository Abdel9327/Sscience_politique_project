import React from 'react';
import { ArrowRight, Users, BookOpen, Calendar, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
             Particip'Activ
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez, comprenez et participez à la vie politique de manière simple et inclusive
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-indigo-50 transition-colors flex items-center space-x-2 mx-auto">
              <span>Commencer maintenant</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Why Participate Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi participer ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8" />,
              title: "Impact Collectif",
              description: "Votre voix compte dans les décisions qui façonnent notre société"
            },
            {
              icon: <BookOpen className="h-8 w-8" />,
              title: "Apprentissage Continu",
              description: "Comprendre les enjeux politiques de manière simple et claire"
            },
            {
              icon: <Calendar className="h-8 w-8" />,
              title: "Événements Locaux",
              description: "Participez aux événements qui vous concernent directement"
            },
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "Communauté Engagée",
              description: "Échangez avec d'autres citoyens engagés et motivés"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Grâce à Politique Accessible, j'ai enfin compris comment m'impliquer dans ma commune.",
                author: "Marie D.",
                role: "Citoyenne engagée"
              },
              {
                quote: "Une plateforme qui rend la politique vraiment accessible à tous. Bravo !",
                author: "Thomas L.",
                role: "Étudiant"
              },
              {
                quote: "Je me sens enfin capable de participer aux débats politiques en toute confiance.",
                author: "Sarah M.",
                role: "Professeure"
              }
            ].map((testimonial, index) => (
              <blockquote key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <footer>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-indigo-600">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;