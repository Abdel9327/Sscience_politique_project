import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: "Comment puis-je proposer une idée ou un projet pour ma commune ?",
      answer: "Pour proposer une idée ou un projet, rendez-vous dans la section 'Participer' de notre plateforme. Vous pourrez y soumettre votre proposition en détaillant votre projet, ses objectifs et son impact potentiel sur la communauté. Notre équipe examinera votre proposition et vous accompagnera dans les étapes suivantes.",
      isOpen: false
    },
    {
      id: 2,
      question: "Qui peut participer aux votes et initiatives proposées sur le site ?",
      answer: "Tout citoyen inscrit sur notre plateforme peut participer aux votes et initiatives proposées. Nous encourageons la participation active de chacun, en veillant à ce que le processus soit ouvert et accessible à tous, afin de permettre à la communauté de s'impliquer directement dans les décisions qui la concernent.",
      isOpen: true
    },
    {
      id: 3,
      question: "Comment sont utilisées les idées proposées par les citoyens ?",
      answer: "Les idées proposées sont d'abord évaluées par notre équipe et les services municipaux concernés. Si elles sont jugées réalisables, elles sont soumises au vote des citoyens. Les projets qui reçoivent le plus de soutien sont ensuite présentés aux élus pour une potentielle mise en œuvre.",
      isOpen: false
    },
    {
      id: 4,
      question: "Que faire si je rencontre un problème pour m'inscrire ou utiliser le site ?",
      answer: "En cas de difficulté, vous pouvez consulter notre guide d'utilisation dans la section 'Aide' ou contacter notre support technique via le formulaire de contact. Notre équipe est disponible pour vous accompagner et résoudre rapidement tout problème technique.",
      isOpen: false
    }
  ]);

  const toggleQuestion = (id: number) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, isOpen: !q.isOpen } : q
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Des <span className="text-cyan-400">questions</span> ?
        </h1>
        <p className="text-xl text-gray-600">
          Nous sommes là pour vous aider
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleQuestion(q.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-left">{q.question}</span>
              {q.isOpen ? (
                <Minus className="h-5 w-5 text-cyan-500 flex-shrink-0" />
              ) : (
                <Plus className="h-5 w-5 text-cyan-500 flex-shrink-0" />
              )}
            </button>
            
            {q.isOpen && (
              <div className="px-6 pb-4">
                <div className="pt-2 text-gray-600">
                  {q.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Vous ne trouvez pas la réponse à votre question ?
        </p>
        <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
          Contactez-nous
        </button>
      </div>
    </div>
  );
};

export default Questions;