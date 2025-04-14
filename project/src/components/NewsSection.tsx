import React from 'react';
import { Calendar, Ticket, Music, ArrowRight, Star } from 'lucide-react';

interface NewsCard {
  id: number;
  type: 'event' | 'interview' | 'trend';
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  hasTickets?: boolean;
  rating?: number;
}

const newsData: NewsCard[] = [
  {
    id: 1,
    type: 'event',
    title: 'Festival de Verão 2024',
    description: 'O maior festival do ano chega com atrações internacionais e uma estrutura incrível para você curtir o melhor do verão!',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
    date: '15 Mar 2024',
    category: 'Festival',
    hasTickets: true,
    rating: 4.8
  },
  {
    id: 2,
    type: 'interview',
    title: 'Entrevista Exclusiva: DJ Marky',
    description: 'Conversamos com o renomado DJ sobre sua trajetória e o que podemos esperar para 2024.',
    image: 'https://images.unsplash.com/photo-1571266866406-06d6fc551156?auto=format&fit=crop&q=80',
    date: '10 Mar 2024',
    category: 'Entrevista'
  },
  {
    id: 3,
    type: 'trend',
    title: 'Top 5 Festas Universitárias',
    description: 'Confira as festas universitárias mais aguardadas deste mês!',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    date: '8 Mar 2024',
    category: 'Tendências',
    rating: 4.5
  }
];

const NewsSection = () => {
  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Últimas Notícias
            </span>
          </h2>
          <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            Ver todas
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article 
              key={news.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {news.type === 'event' && <Calendar className="text-purple-400" size={16} />}
                  {news.type === 'interview' && <Music className="text-purple-400" size={16} />}
                  {news.type === 'trend' && <Star className="text-purple-400" size={16} />}
                  <span className="text-sm text-gray-300">{news.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold leading-tight">{news.title}</h3>
                  {news.rating && (
                    <div className="flex items-center gap-1 bg-purple-500/20 px-2 py-1 rounded-full">
                      <Star size={14} className="text-purple-400 fill-current" />
                      <span className="text-sm">{news.rating}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {news.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  {news.hasTickets && (
                    <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                      <Ticket size={16} />
                      Comprar Ingresso
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;