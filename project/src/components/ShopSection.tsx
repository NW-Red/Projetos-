import React, { useState } from 'react';
import { ShoppingBag, Star, Timer, Users } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Role_tiva',
    description: 'Camiseta exclusiva com estampa que brilha na luz negra',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'M',
    color: 'Preto'
  },
  {
    id: '2',
    name: 'Boné Role_tiva Holográfico',
    description: 'Boné com logo holográfico e acabamento premium',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Holográfico'
  },
  {
    id: '3',
    name: 'Pochete Festival',
    description: 'Pochete impermeável ideal para festas e eventos',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Preto'
  },
  {
    id: '4',
    name: 'Camiseta LED Interativa',
    description: 'Camiseta com painel LED que reage ao som',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'G',
    color: 'Branco'
  },
  {
    id: '5',
    name: 'Óculos Neon',
    description: 'Óculos com iluminação neon para festas',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Multicolor'
  },
  {
    id: '6',
    name: 'Mochila Festa',
    description: 'Mochila holográfica resistente à água',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Prata'
  },
  {
    id: '7',
    name: 'Tênis LED',
    description: 'Tênis com sola LED recarregável',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
    category: 'Calçados',
    size: '40',
    color: 'Branco'
  },
  {
    id: '8',
    name: 'Bandana Festa',
    description: 'Bandana com estampa exclusiva Role_tiva',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1532429315435-82d326c47d19?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Roxo'
  },
  {
    id: '9',
    name: 'Cropped Holográfico',
    description: 'Cropped com tecido holográfico',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'P',
    color: 'Holográfico'
  },
  {
    id: '10',
    name: 'Máscara LED',
    description: 'Máscara com painel LED programável',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Preto'
  },
  {
    id: '11',
    name: 'Jaqueta Bomber',
    description: 'Jaqueta bomber com detalhes reflexivos',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'M',
    color: 'Preto'
  },
  {
    id: '12',
    name: 'Luvas LED',
    description: 'Luvas com iluminação LED nas pontas',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1584487875993-56c5ed2ea357?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    size: 'Único',
    color: 'Preto'
  },
  {
    id: '13',
    name: 'Calça Cargo',
    description: 'Calça cargo com bolsos funcionais',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: '42',
    color: 'Preto'
  },
  {
    id: '14',
    name: 'Colar Luminoso',
    description: 'Colar com pingente que brilha no escuro',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Multicolor'
  },
  {
    id: '15',
    name: 'Shorts Neon',
    description: 'Shorts com detalhes neon',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'M',
    color: 'Neon'
  },
  {
    id: '16',
    name: 'Meia Festa',
    description: 'Meia cano alto com estampa festiva',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    size: 'Único',
    color: 'Multicolor'
  },
  {
    id: '17',
    name: 'Shoulder Bag',
    description: 'Bolsa transversal com compartimentos',
    price: 99.90,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Preto'
  },
  {
    id: '18',
    name: 'Top Metalizado',
    description: 'Top com tecido metalizado',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'P',
    color: 'Prata'
  },
  {
    id: '19',
    name: 'Kit Pulseiras LED',
    description: 'Kit com 5 pulseiras LED',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Multicolor'
  },
  {
    id: '20',
    name: 'Botas Platform',
    description: 'Botas com plataforma e detalhes holográficos',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    category: 'Calçados',
    size: '37',
    color: 'Preto'
  },
  {
    id: '21',
    name: 'Viseira LED',
    description: 'Viseira com painel LED programável',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Transparente'
  },
  {
    id: '22',
    name: 'Kimono Festival',
    description: 'Kimono leve com estampa exclusiva',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?auto=format&fit=crop&q=80',
    category: 'Vestuário',
    size: 'Único',
    color: 'Multicolor'
  },
  {
    id: '23',
    name: 'Pochete Holográfica',
    description: 'Pochete com acabamento holográfico',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    color: 'Holográfico'
  }
];

const ShopSection = () => {
  const { dispatch } = useCart();
  const [activeCategory, setActiveCategory] = useState<'all' | 'clothing' | 'accessories' | 'shoes'>('all');

  const categories = {
    all: 'Todos',
    clothing: 'Vestuário',
    accessories: 'Acessórios',
    shoes: 'Calçados'
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => {
        switch (activeCategory) {
          case 'clothing':
            return product.category === 'Vestuário';
          case 'accessories':
            return product.category === 'Acessórios';
          case 'shoes':
            return product.category === 'Calçados';
          default:
            return true;
        }
      });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Loja Role_tiva
        </span>
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-12">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeCategory === key
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <article 
            key={product.id}
            className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm text-purple-300">{product.category}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.size && (
                  <span className="text-sm bg-gray-700/50 px-2 py-1 rounded">
                    Tam: {product.size}
                  </span>
                )}
                {product.color && (
                  <span className="text-sm bg-gray-700/50 px-2 py-1 rounded">
                    Cor: {product.color}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  R$ {product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  <ShoppingBag size={18} />
                  Adicionar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;