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
    // Находим категорию продукта
    const category = Object.entries(products).find(([_, products]) =>
      products.some(p => p.id === product.id)
    )?.[0];

    if (category) {
      // Переходим на главную страницу, если мы не на ней
      if (location.pathname !== '/') {
        navigate('/');
      }
      
      // Сбрасываем поиск
      setSearchTerm('');
      setSearchResults([]);
      setIsMobileMenuOpen(false);
      
      // Прокрутка к категории и выбор продукта
      setTimeout(() => {
        const categorySection = document.querySelector(`[data-category="${category}"]`);
        if (categorySection) {
          // Прокручиваем к категории
          categorySection.scrollIntoView({ behavior: 'smooth' });
          // Симулируем клик по категории для её выбора
          const categoryButton = categorySection.closest('button');
          if (categoryButton) {
            categoryButton.click();
          }
          
          // Добавляем небольшую задержку для обновления UI
          setTimeout(() => {
            // Прокручиваем к самому продукту
            const productElement = document.getElementById(`product-${product.id}`);
            if (productElement) {
              productElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Добавляем подсветку
              productElement.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
              // Убираем подсветку через 2 секунды
              setTimeout(() => {
                productElement.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
              }, 2000);
            }
          }, 100);
        }
      }, 100);
    }
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-2">
            <Monitor className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">
              ProductCompare
            </span>
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <button
                onClick={handleCompareClick}
                className="text-foreground hover:text-primary transition-theme"
              >
                Сравнить товары
              </button>
              <Link
                to="/about"
                className="flex items-center gap-1 text-foreground hover:text-primary transition-theme"
              >
                <Info className="h-4 w-4" />
                <span>О сервисе</span>
              </Link>
              <Link
                to="/help"
                className="flex items-center gap-1 text-foreground hover:text-primary transition-theme"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Помощь</span>
              </Link>
              <Link
                to="/contacts"
                className="flex items-center gap-1 text-foreground hover:text-primary transition-theme"
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
                className="px-3 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-theme"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

              {/* Выпадающий список результатов поиска */}
              {searchTerm && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-background rounded-lg shadow-lg z-10 border border-border max-h-60 overflow-y-auto">
                  {searchResults.map(product => (
                    <div
                      key={product.id}
                      className="px-4 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer text-foreground"
                      onClick={() => handleProductClick(product)}
                    >
                      {product.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Переключатель темы */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-theme"
              aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Мобильная кнопка меню */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-theme"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Меню</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-theme"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-4">
              <button
                onClick={() => {
                  handleCompareClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-theme"
              >
                <Monitor className="h-5 w-5" />
                Сравнить товары
              </button>
              <Link
                to="/about"
                className="flex items-center gap-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-theme"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                О сервисе
              </Link>
              <Link
                to="/help"
                className="flex items-center gap-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-theme"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HelpCircle className="h-5 w-5" />
                Помощь
              </Link>
              <Link
                to="/contacts"
                className="flex items-center gap-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-theme"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="h-5 w-5" />
                Контакты
              </Link>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-foreground">Тема оформления</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-theme"
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
