import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products, Product } from '@/data/products';

export const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length > 1) {
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
      navigate('/');
      setSearchTerm('');
      setSearchResults([]);
      
      // Прокрутка к категории и выбор продукта
      setTimeout(() => {
        const categorySection = document.querySelector(`[data-category="${category}"]`);
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
          categorySection.click(); // Выбираем категорию
        }
      }, 100);
    }
  };

  const handleStartComparison = () => {
    // Прокрутка к разделу выбора категории
    const categorySection = document.querySelector('#category-selection');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllProducts = () => {
    // Прокрутка к разделу с продуктами
    const productsSection = document.querySelector('#products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-6 transition-theme">
          Сравните товары и выберите лучшее
        </h1>
        <p className="text-lg md:text-xl text-secondary-light dark:text-secondary-dark mb-8 max-w-2xl mx-auto transition-theme">
          Наш сервис поможет вам сравнить характеристики товаров и сделать правильный выбор
        </p>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-theme"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />

            {/* Выпадающий список результатов поиска */}
            {searchTerm && searchResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
                {searchResults.map(product => (
                  <div
                    key={product.id}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-text-light dark:text-text-dark"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
