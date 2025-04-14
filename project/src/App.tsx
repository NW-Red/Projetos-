import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';
import Navigation from './components/Navigation';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import SupportModal from './components/SupportModal';
import ShopSection from './components/ShopSection';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import { events } from './components/eventData';
import HeroSection from './components/HeroSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white">
          {/* Header */}
          <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-purple-400 hover:text-purple-300"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Role_tiva
                </h1>
                <Navigation 
                  isOpen={isMenuOpen} 
                  onClose={() => setIsMenuOpen(false)} 
                  handleSupportClick={() => setIsSupportModalOpen(true)} 
                />
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="text-purple-400 hover:text-purple-300 transition-colors relative"
                >
                  <ShoppingCart size={24} />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <div className="container mx-auto px-4 py-12">
                    <h2 className="text-3xl font-bold mb-8">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Próximos Eventos
                      </span>
                    </h2>
                    <EventList events={events.filter(event => event.city === 'Curitiba')} />
                  </div>
                </>
              } />
              <Route path="/evento/:id" element={<EventDetails events={events} />} />
              <Route path="/loja" element={<ShopSection />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

          {/* Support Modal */}
          <SupportModal isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />

          {/* Shopping Cart */}
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;