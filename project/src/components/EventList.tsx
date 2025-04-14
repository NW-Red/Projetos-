import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from './eventData';

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <article
          key={event.id}
          onClick={() => navigate(`/evento/${event.id}`)}
          className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span className="bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-purple-300">
                {event.category}
              </span>
              {event.neighborhood && (
                <span className="bg-gray-900/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-300">
                  {event.neighborhood}
                </span>
              )}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
              {event.title}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Calendar size={16} />
              <span className="text-sm">{event.date}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <MapPin size={16} />
              <span className="text-sm">{event.venue || event.address || 'Local a definir'}</span>
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {event.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                R$ {event.price?.toFixed(2)}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/evento/${event.id}`);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EventList;