import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, Menu, X, Heart, HelpCircle, Mail, Info } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCompareClick = () => {
    // Если мы не на главной странице, сначала переходим туда
    if (location.pathname !== '/') {
      navigate('/');
      // Даем время для загрузки страницы, затем прокручиваем
      setTimeout(() => {
        const categorySection = document.querySelector('#category-selection');
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Если уже на главной, просто прокручиваем
      const categorySection = document.querySelector('#category-selection');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (category: string) => {
    // Если мы не на главной странице, сначала переходим туда
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const categorySection = document.querySelector('#category-selection');
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
          
          setTimeout(() => {
            const categoryButton = document.querySelector(`[data-category="${category}"]`);
            if (categoryButton) {
              (categoryButton as HTMLElement).click();
            }
          }, 500);
        }
      }, 100);
    } else {
      const categorySection = document.querySelector('#category-selection');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          const categoryButton = document.querySelector(`[data-category="${category}"]`);
          if (categoryButton) {
            (categoryButton as HTMLElement).click();
          }
        }, 500);
      }
    }
  };

  const menuItems = [
    { to: '/about', icon: Info, label: 'О нас' },
    { to: '/favorites', icon: Heart, label: 'Избранное' },
    { to: '/help', icon: HelpCircle, label: 'Помощь' },
    { to: '/contacts', icon: Mail, label: 'Контакты' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              ProductCompare
            </Link>
            <nav className="hidden lg:flex space-x-8">
              <button 
                onClick={() => handleNavClick('iphone')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Smartphone size={18} />
                <span>iPhone</span>
              </button>
              <button 
                onClick={() => handleNavClick('ipad')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Tablet size={18} />
                <span>iPad</span>
              </button>
              <button 
                onClick={() => handleNavClick('mac')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Monitor size={18} />
                <span>Mac</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Десктопная навигация */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Icon size={16} />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <button 
              onClick={handleCompareClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm lg:px-6"
            >
              Сравнить продукты
            </button>

            {/* Мобильное меню */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 lg:hidden">
          <div className="px-4 py-4 space-y-4">
            {/* Категории */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Категории</h3>
              <button 
                onClick={() => {
                  handleNavClick('iphone');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors w-full"
              >
                <Smartphone size={18} />
                <span>iPhone</span>
              </button>
              <button 
                onClick={() => {
                  handleNavClick('ipad');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors w-full"
              >
                <Tablet size={18} />
                <span>iPad</span>
              </button>
              <button 
                onClick={() => {
                  handleNavClick('mac');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors w-full"
              >
                <Monitor size={18} />
                <span>Mac</span>
              </button>
            </div>

            {/* Страницы */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Страницы</h3>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
