import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Ticket, ArrowLeft, Share2, Heart, MapPinned, Info, Music, Tag } from 'lucide-react';
import { Event } from './eventData';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface EventDetailsProps {
  events: Event[];
}

const EventDetails = ({ events }: EventDetailsProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Evento não encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  const similarEvents = events.filter(e => 
    e.id !== event.id && 
    (e.category === event.category || e.neighborhood === event.neighborhood)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-purple-300">
                {event.category}
              </span>
              <span className="bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                {event.neighborhood}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-purple-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-purple-400" />
                <span>{event.time || '22:00'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-purple-400" />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Sobre o Evento</h2>
              <p className="text-gray-300 whitespace-pre-line">
                {event.fullDescription || `${event.description}\n\nJunte-se a nós para uma experiência única! Este evento promete momentos inesquecíveis com:\n\n• Estrutura completa de som e iluminação\n• Área VIP com vista privilegiada\n• Praça de alimentação com diversas opções\n• Área de descanso\n• Estacionamento com segurança\n• Equipe de apoio altamente treinada\n\nNão perca a oportunidade de fazer parte deste evento incrível!`}
              </p>
            </div>

            {/* Location */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Localização</h2>
              <div className="mb-4">
                <div className="flex items-start gap-3 mb-2">
                  <MapPinned className="text-purple-400 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">{event.venue}</p>
                    <p className="text-gray-300">{event.address}</p>
                    <p className="text-gray-300">{event.neighborhood}, Curitiba - PR</p>
                  </div>
                </div>
              </div>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <MapContainer
                  center={event.position}
                  zoom={15}
                  scrollWheelZoom={false}
                  className="h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={event.position}>
                    <Popup>{event.venue}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Informações Importantes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
                  <Clock className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">Horário de Abertura</p>
                    <p className="text-gray-300">21:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
                  <Users className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">Classificação</p>
                    <p className="text-gray-300">18 anos</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
                  <Info className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">Documentos</p>
                    <p className="text-gray-300">RG ou CNH original</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg">
                  <Music className="text-purple-400" size={24} />
                  <div>
                    <p className="font-semibold">Categoria</p>
                    <p className="text-gray-300">{event.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Events */}
            {similarEvents.length > 0 && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Eventos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {similarEvents.map(similarEvent => (
                    <div
                      key={similarEvent.id}
                      onClick={() => navigate(`/evento/${similarEvent.id}`)}
                      className="bg-gray-700/30 rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-[1.02] transition-all duration-300"
                    >
                      <img
                        src={similarEvent.image}
                        alt={similarEvent.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{similarEvent.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar size={14} />
                          <span>{similarEvent.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-xl p-6 sticky top-24">
              {/* Price and Actions */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">A partir de</p>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    R$ {event.price?.toFixed(2)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-700/50 rounded-full transition-colors">
                    <Share2 size={20} />
                  </button>
                  <button className="p-2 hover:bg-gray-700/50 rounded-full transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>

              {/* Ticket Types */}
              <div className="space-y-4 mb-6">
                {['Pista', 'VIP', 'Camarote'].map((type, index) => (
                  <div key={type} className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{type}</h4>
                        <p className="text-sm text-gray-400">
                          {index === 0 ? '1º lote' : index === 1 ? 'Área exclusiva' : 'Open bar premium'}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        R$ {(event.price || 100) * (index + 1)},00
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
                      Comprar
                    </button>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-3">
                  <Tag size={16} />
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[event.category, event.neighborhood, 'Curitiba', '2024'].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/30 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;