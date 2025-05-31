import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X, HelpCircle, Mail, Info, Sun, Moon, Search as SearchIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/use-theme';
import { products, Product } from '@/data/products'; // Импортируем данные о продуктах

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Логика поиска
  useEffect(() => {
    if (searchTerm.length > 1) { // Ищем, если введено больше одного символа
      const allProducts: Product[] = Object.values(products).flat();
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleProductClick = (product: Product) => {
    // TODO: Implement navigation to product category and scroll
    console.log('Selected product:', product);
    setSearchTerm(''); // Очищаем поле поиска после выбора
    setSearchResults([]);
  };

  const handleCompareClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const categorySection = document.querySelector('#category-selection');
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const categorySection = document.querySelector('#category-selection');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark transition-theme">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-2">
            <Monitor className="h-6 w-6 text-primary-light dark:text-primary-dark transition-theme" />
            <span className="text-xl font-bold text-text-light dark:text-text-dark transition-theme">
              ProductCompare
            </span>
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <button
                onClick={handleCompareClick}
                className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                Сравнить товары
              </button>
              <Link
                to="/about"
                className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                <Info className="h-4 w-4" />
                <span>О сервисе</span>
              </Link>
              <Link
                to="/help"
                className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Помощь</span>
              </Link>
              <Link
                to="/contacts"
                className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                <Mail className="h-4 w-4" />
                <span>Контакты</span>
              </Link>
            </nav>

            {/* Поле поиска */}
            <div className="relative">
              <input
                type="text"
                placeholder="Искать товары..."
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-theme"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />

              {/* Выпадающий список результатов поиска */}
              {searchTerm && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
                  {
                    searchResults.map(product => (
                      <div
                        key={product.id}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-text-light dark:text-text-dark"
                        onClick={() => handleProductClick(product)}
                      >
                        {product.name}
                      </div>
                    ))
                  }
                </div>
              )}
            </div>

            {/* Переключатель темы */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-theme"
              aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Мобильная кнопка меню */}
          <button
            className="md:hidden p-2 rounded-lg text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-theme"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark transition-theme">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  handleCompareClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                Сравнить товары
              </button>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                <Info className="h-4 w-4" />
                <span>О сервисе</span>
              </Link>
              <Link
                to="/help"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Помощь</span>
              </Link>
              <Link
                to="/contacts"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-1 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-theme"
              >
                <Mail className="h-4 w-4" />
                <span>Контакты</span>
              </Link>
              <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
                <span className="text-text-light dark:text-text-dark transition-theme">Тема оформления</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-theme"
                  aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
