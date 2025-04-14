import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Calendar, ShoppingBag, Instagram } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  handleSupportClick: (e: React.MouseEvent) => void;
}

const Navigation = ({ isOpen, onClose, handleSupportClick }: NavigationProps) => {
  const menuItems = [
    { icon: Calendar, label: 'Eventos', path: '/' },
    { icon: ShoppingBag, label: 'Loja', path: '/loja' },
    { icon: HelpCircle, label: 'Suporte', onClick: handleSupportClick },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/role_tiva' },
  ];

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="hidden lg:flex items-center gap-6">
      {menuItems.map((item, index) => {
        if (item.href) {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          );
        }
        
        if (item.onClick) {
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        }

        return (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  // Mobile Navigation
  return (
    <>
      <DesktopNav />
      
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Menu */}
        <div className="absolute left-0 top-0 bottom-0 w-64 bg-gray-900 shadow-lg">
          <div className="p-4 flex justify-between items-center border-b border-purple-500/20">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Menu
            </h2>
          </div>
          
          <nav className="p-4 flex flex-col gap-4">
            {menuItems.map((item, index) => {
              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    onClick={onClose}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </a>
                );
              }
              
              if (item.onClick) {
                return (
                  <button
                    key={index}
                    onClick={(e) => {
                      item.onClick(e);
                      onClose();
                    }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  onClick={onClose}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;