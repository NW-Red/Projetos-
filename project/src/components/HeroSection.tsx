import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { events, curitibaNeighborhoods, Event } from './eventData';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to update map center
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
}

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number]>([-25.4284, -49.2733]); // Curitiba coordinates
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length > 1) {
      const filtered = curitibaNeighborhoods.filter(neighborhood => 
        neighborhood.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setFilteredEvents([]);
    }
  };

  const handleSuggestionClick = (neighborhood: string) => {
    setSearchTerm(neighborhood);
    setShowSuggestions(false);
    
    // Filter events in Curitiba by neighborhood
    const neighborhoodEvents = events.filter(event => 
      event.city === 'Curitiba' && 
      event.neighborhood?.toLowerCase() === neighborhood.toLowerCase()
    );
    
    setFilteredEvents(neighborhoodEvents);
    
    if (neighborhoodEvents.length > 0) {
      setMapCenter(neighborhoodEvents[0].position);
      setShowMap(true);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const neighborhoodEvents = events.filter(event => 
        event.city === 'Curitiba' && 
        event.neighborhood?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(neighborhoodEvents);
      
      if (neighborhoodEvents.length > 0) {
        setMapCenter(neighborhoodEvents[0].position);
        setShowMap(true);
      }
    }
  };

  const handleEventClick = (event: Event) => {
    navigate(`/evento/${event.id}`);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Encontre as melhores
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              festas em Curitiba
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Busque por bairro e descubra eventos incríveis perto de você
          </p>

          {/* Search Bar */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg max-w-2xl flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-md px-4 py-2">
                <MapPin className="text-purple-400" size={20} />
                <input
                  type="text"
                  placeholder="Digite o bairro em Curitiba..."
                  className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Search size={20} />
                <span>Buscar</span>
              </button>
            </div>

            {/* Location Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div 
                ref={suggestionsRef}
                className="absolute top-full left-0 right-0 max-w-2xl bg-gray-800 rounded-lg mt-2 shadow-lg z-50"
              >
                {suggestions.map((neighborhood, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center gap-2"
                    onClick={() => handleSuggestionClick(neighborhood)}
                  >
                    <MapPin size={16} className="text-purple-400" />
                    {neighborhood}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filtered Events List */}
          {filteredEvents.length > 0 && (
            <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">
                Eventos encontrados em {searchTerm}
              </h2>
              <div className="grid gap-4">
                {filteredEvents.map(event => (
                  <div
                    key={event.id}
                    className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="flex gap-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-300 mb-2">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {event.venue}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Map */}
          {showMap && (
            <div className="rounded-lg overflow-hidden shadow-lg mb-8 transition-all duration-300">
              <MapContainer
                center={mapCenter}
                zoom={13}
                scrollWheelZoom={false}
                className="z-10"
              >
                <MapUpdater center={mapCenter} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredEvents.map((event) => (
                  <Marker key={event.id} position={event.position}>
                    <Popup className="custom-popup">
                      <div className="overflow-hidden cursor-pointer" onClick={() => handleEventClick(event)}>
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-purple-400">{event.category}</span>
                            <span className="text-sm text-gray-400">{event.date}</span>
                          </div>
                          <h3 className="font-semibold mb-2">{event.title}</h3>
                          <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                          {event.price && (
                            <div className="flex items-center justify-between">
                              <span className="text-purple-400 font-semibold">R$ {event.price}</span>
                              <button 
                                className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-medium"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEventClick(event);
                                }}
                              >
                                Ver Detalhes
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;