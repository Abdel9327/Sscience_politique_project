import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  type: 'rencontre' | 'vie-citoyenne' | 'vie-commune' | 'livestream';
}

const events: Event[] = [
  {
    id: 1,
    date: '2024-01-18',
    title: 'Rencontre élus - Jean CHELBY',
    description: 'Rencontre avec Jean Chelby, élu local, pour discuter des projets liés aux infrastructures cyclables et à la mobilité durable',
    type: 'rencontre'
  },
  {
    id: 2,
    date: '2024-01-20',
    title: 'Vie citoyenne - Vote des projets municipaux',
    description: 'Journée de vote pour les projets municipaux. Une occasion pour les citoyens de s\'exprimer et de participer aux décisions concernant l\'avenir de leur ville.',
    type: 'vie-citoyenne'
  },
  {
    id: 3,
    date: '2024-01-21',
    title: 'Vie de la commune - Journée conviviale',
    description: 'Événement de la vie communale : participez à cette journée conviviale pour découvrir les projets locaux, échanger avec vos voisins et renforcer le lien social.',
    type: 'vie-commune'
  }
];

const Calendrier = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'JANVIER', 'FÉVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN',
    'JUILLET', 'AOÛT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'
  ];

  const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  const getEventType = (day: number): Event['type'][] => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateStr = date.toISOString().split('T')[0];
    return events
      .filter(event => event.date === dateStr)
      .map(event => event.type);
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7;

    for (let i = 0; i < totalDays; i++) {
      const dayNumber = i - firstDayOfMonth + 1;
      const eventTypes = dayNumber > 0 && dayNumber <= daysInMonth ? getEventType(dayNumber) : [];

      days.push(
        <div
          key={i}
          className={`h-12 border border-gray-200 flex items-center justify-center relative
            ${dayNumber <= 0 || dayNumber > daysInMonth ? 'bg-gray-50' : 'bg-white'}`}
        >
          {dayNumber > 0 && dayNumber <= daysInMonth && (
            <>
              <span className="text-sm">{dayNumber}</span>
              <div className="absolute bottom-1 flex gap-1">
                {eventTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      type === 'rencontre' ? 'bg-red-500' :
                      type === 'vie-citoyenne' ? 'bg-green-500' :
                      type === 'vie-commune' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Calendrier des événements</h1>
          
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Mois précédent</span>
            </button>
            
            <h2 className="text-xl font-semibold">
              {monthNames[currentMonth.getMonth()]}
            </h2>
            
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <span>Mois suivant</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {weekDays.map(day => (
              <div key={day} className="bg-gray-100 p-2 text-center text-sm font-medium">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm">Rencontre élus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm">Vie citoyenne</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm">Vie de la commune</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm">Livestreams</span>
            </div>
          </div>
        </div>

        {/* Events List Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-bold mb-6 bg-indigo-900 text-white p-3 rounded">
            VOS EVENEMENTS
          </h2>
          <div className="space-y-6">
            {events.map(event => (
              <div key={event.id} className="relative pl-6 border-l-4 border-indigo-500">
                <div className="mb-1">
                  <div className="font-semibold">
                    Le {new Date(event.date).toLocaleDateString('fr-FR', { 
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <h3 className="font-bold text-lg">{event.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendrier;