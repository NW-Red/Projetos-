import { Event } from '../types';

export interface Event {
  id: number;
  position: [number, number];
  title: string;
  date: string;
  image: string;
  price?: number;
  description: string;
  category: string;
  city: string;
  venue?: string;
  address?: string;
  neighborhood?: string;
  time?: string;
  fullDescription?: string;
}

export const events: Event[] = [
  // Batel
  {
    id: 1,
    position: [-25.4420, -49.2880],
    title: 'Sunset Party Batel',
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
    price: 150,
    description: 'A melhor festa sunset de Curitiba com DJs internacionais',
    category: 'Festa',
    city: 'Curitiba',
    venue: 'Sky Bar',
    address: 'Rua Batel, 1234',
    neighborhood: 'Batel'
  },
  {
    id: 2,
    position: [-25.4425, -49.2885],
    title: 'Jazz & Wine',
    date: '16 Mar 2024',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80',
    price: 200,
    description: 'Uma noite sofisticada com jazz ao vivo e degustação de vinhos',
    category: 'Show',
    city: 'Curitiba',
    venue: 'Wine House',
    address: 'Rua Batel, 890',
    neighborhood: 'Batel'
  },
  {
    id: 3,
    position: [-25.4430, -49.2890],
    title: 'Stand Up Comedy Night',
    date: '17 Mar 2024',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80',
    price: 80,
    description: 'Os melhores comediantes do Brasil em uma noite hilária',
    category: 'Show',
    city: 'Curitiba',
    venue: 'Comedy Club',
    address: 'Rua Batel, 567',
    neighborhood: 'Batel'
  },
  {
    id: 4,
    position: [-25.4435, -49.2895],
    title: 'Festa Années 80',
    date: '18 Mar 2024',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    price: 120,
    description: 'Reviva os anos 80 com os maiores hits da época',
    category: 'Festa',
    city: 'Curitiba',
    venue: 'Vintage Club',
    address: 'Rua Batel, 432',
    neighborhood: 'Batel'
  },
  {
    id: 5,
    position: [-25.4440, -49.2900],
    title: 'Batel Food Festival',
    date: '19 Mar 2024',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80',
    price: 90,
    description: 'Festival gastronômico com os melhores restaurantes do Batel',
    category: 'Gastronomia',
    city: 'Curitiba',
    venue: 'Praça do Batel',
    address: 'Rua Batel, 123',
    neighborhood: 'Batel'
  },

  // Centro
  {
    id: 6,
    position: [-25.4284, -49.2733],
    title: 'Warung Day Festival',
    date: '20 Mar 2024',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    price: 220,
    description: 'O melhor da música eletrônica em um dos clubs mais famosos do Brasil',
    category: 'Festival',
    city: 'Curitiba',
    venue: 'Warung Beach Club',
    address: 'Alameda Dr. Carlos de Carvalho, 123',
    neighborhood: 'Centro'
  },
  {
    id: 7,
    position: [-25.4290, -49.2740],
    title: 'Feira Gastronômica Centro',
    date: '21 Mar 2024',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80',
    price: 40,
    description: 'As melhores comidas de rua do centro de Curitiba',
    category: 'Gastronomia',
    city: 'Curitiba',
    venue: 'Praça Rui Barbosa',
    address: 'Praça Rui Barbosa, s/n',
    neighborhood: 'Centro'
  },
  {
    id: 8,
    position: [-25.4295, -49.2745],
    title: 'Rock no Centro',
    date: '22 Mar 2024',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
    price: 50,
    description: 'Festival de rock com bandas locais',
    category: 'Show',
    city: 'Curitiba',
    venue: 'Underground Pub',
    address: 'Rua XV de Novembro, 456',
    neighborhood: 'Centro'
  },
  {
    id: 9,
    position: [-25.4300, -49.2750],
    title: 'Samba na Praça',
    date: '23 Mar 2024',
    image: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&q=80',
    price: 30,
    description: 'Roda de samba ao ar livre',
    category: 'Show',
    city: 'Curitiba',
    venue: 'Praça Santos Andrade',
    address: 'Praça Santos Andrade, s/n',
    neighborhood: 'Centro'
  },
  {
    id: 10,
    position: [-25.4305, -49.2755],
    title: 'Feira de Antiguidades',
    date: '24 Mar 2024',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
    price: 0,
    description: 'Feira tradicional de antiguidades e artesanato',
    category: 'Feira',
    city: 'Curitiba',
    venue: 'Largo da Ordem',
    address: 'Largo da Ordem, s/n',
    neighborhood: 'Centro'
  },

  // São Francisco
  {
    id: 11,
    position: [-25.4240, -49.2720],
    title: 'Noite Latina',
    date: '25 Mar 2024',
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80',
    price: 60,
    description: 'Festa latina com salsa, bachata e reggaeton',
    category: 'Festa',
    city: 'Curitiba',
    venue: 'Casa Havana',
    address: 'Rua São Francisco, 789',
    neighborhood: 'São Francisco'
  },
  {
    id: 12,
    position: [-25.4245, -49.2725],
    title: 'Festival de Cerveja Artesanal',
    date: '26 Mar 2024',
    image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&q=80',
    price: 80,
    description: 'Degustação das melhores cervejas artesanais',
    category: 'Festival',
    city: 'Curitiba',
    venue: 'Brewpub SF',
    address: 'Rua São Francisco, 567',
    neighborhood: 'São Francisco'
  },
  {
    id: 13,
    position: [-25.4250, -49.2730],
    title: 'Feira Vegana',
    date: '27 Mar 2024',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
    price: 0,
    description: 'Feira de produtos veganos e orgânicos',
    category: 'Feira',
    city: 'Curitiba',
    venue: 'Praça São Francisco',
    address: 'Praça São Francisco, s/n',
    neighborhood: 'São Francisco'
  },
  {
    id: 14,
    position: [-25.4255, -49.2735],
    title: 'Noite de MPB',
    date: '28 Mar 2024',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80',
    price: 45,
    description: 'Show acústico de MPB',
    category: 'Show',
    city: 'Curitiba',
    venue: 'Café Musical',
    address: 'Rua São Francisco, 432',
    neighborhood: 'São Francisco'
  },
  {
    id: 15,
    position: [-25.4260, -49.2740],
    title: 'Arte na Rua',
    date: '29 Mar 2024',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80',
    price: 0,
    description: 'Festival de arte urbana e performances',
    category: 'Festival',
    city: 'Curitiba',
    venue: 'Ruas do São Francisco',
    address: 'Rua São Francisco',
    neighborhood: 'São Francisco'
  },

  // Mercês
  {
    id: 16,
    position: [-25.4180, -49.2800],
    title: 'Blues & Beer',
    date: '30 Mar 2024',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    price: 70,
    description: 'Festival de blues com cerveja artesanal',
    category: 'Festival',
    city: 'Curitiba',
    venue: 'Blues Bar',
    address: 'Rua Mercês, 123',
    neighborhood: 'Mercês'
  },
  {
    id: 17,
    position: [-25.4185, -49.2805],
    title: 'Feira de Vinil',
    date: '31 Mar 2024',
    image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&q=80',
    price: 0,
    description: 'Feira de discos de vinil e música alternativa',
    category: 'Feira',
    city: 'Curitiba',
    venue: 'Vinyl House',
    address: 'Rua Mercês, 456',
    neighborhood: 'Mercês'
  },
  {
    id: 18,
    position: [-25.4190, -49.2810],
    title: 'Karaokê Night',
    date: '1 Apr 2024',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80',
    price: 35,
    description: 'Noite de karaokê com prêmios',
    category: 'Festa',
    city: 'Curitiba',
    venue: 'Karaokê Bar',
    address: 'Rua Mercês, 789',
    neighborhood: 'Mercês'
  },
  {
    id: 19,
    position: [-25.4195, -49.2815],
    title: 'Mercês Food Trucks',
    date: '2 Apr 2024',
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&q=80',
    price: 0,
    description: 'Festival de food trucks com música ao vivo',
    category: 'Gastronomia',
    city: 'Curitiba',
    venue: 'Praça das Mercês',
    address: 'Praça das Mercês, s/n',
    neighborhood: 'Mercês'
  },
  {
    id: 20,
    position: [-25.4200, -49.2820],
    title: 'Indie Rock Festival',
    date: '3 Apr 2024',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80',
    price: 55,
    description: 'Festival de rock independente',
    category: 'Festival',
    city: 'Curitiba',
    venue: 'Indie Club',
    address: 'Rua Mercês, 321',
    neighborhood: 'Mercês'
  },

  // Água Verde
  {
    id: 21,
    position: [-25.4500, -49.2900],
    title: 'Sertanejo VIP',
    date: '4 Apr 2024',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    price: 100,
    description: 'A maior festa sertaneja da cidade',
    category: 'Festa',
    city: 'Curitiba',
    venue: 'Country Hall',
    address: 'Rua Água Verde, 123',
    neighborhood: 'Água Verde'
  },
  {
    id: 22,
    position: [-25.4505, -49.2905],
    title: 'Pagode na Praça',
    date: '5 Apr 2024',
    image: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&q=80',
    price: 40,
    description: 'Roda de pagode ao ar livre',
    category: 'Show',
    city: 'Curitiba',
    venue: 'Praça do Água Verde',
    address: 'Praça Água Verde, s/n',
    neighborhood: 'Água Verde'
  },
  {
    id: 23,
    position: [-25.4510, -49.2910],
    title: 'Feijoada com Samba',
    date: '6 Apr 2024',
    image: 'https://images.unsplash.com/photo-1574966739987-65e1936a9376?auto=format&fit=crop&q=80',
    price: 75,
    description: 'Feijoada completa com muito samba',
    category: 'Gastronomia',
    city: 'Curitiba',
    venue: 'Clube do Água Verde',
    address: 'Rua Água Verde, 456',
    neighborhood: 'Água Verde'
  },
  {
    id: 24,
    position: [-25.4515, -49.2915],
    title: 'Forró Universitário',
    date: '7 Apr 2024',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80',
    price: 45,
    description: 'Noite de forró com aula inicial',
    category: 'Festa',
    city: 'Curitiba',
    venue: 'Forró Club',
    address: 'Rua Água Verde, 789',
    neighborhood: 'Água Verde'
  },
  {
    id: 25,
    position: [-25.4520, -49.2920],
    title: 'Festival de Churrasco',
    date: '8 Apr 2024',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80',
    price: 120,
    description: 'O melhor do churrasco com shows ao vivo',
    category: 'Gastronomia',
    city: 'Curitiba',
    venue: 'Parque Água Verde',
    address: 'Rua Água Verde, 321',
    neighborhood: 'Água Verde'
  }
];

// Bairros de Curitiba para sugestão de busca
export const curitibaNeighborhoods = [
  'Batel',
  'Centro',
  'São Francisco',
  'Mercês',
  'Água Verde',
  'Bigorrilho',
  'Cabral',
  'Juvevê',
  'Alto da XV',
  'Cristo Rei',
  'Rebouças',
  'Portão',
  'Santa Felicidade',
  'Champagnat'
];