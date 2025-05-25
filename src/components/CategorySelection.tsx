
import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { ProductGrid } from './ProductGrid';

const categories = [
  {
    id: 'iphone',
    name: 'iPhone',
    icon: Smartphone,
    description: 'Мощные смартфоны с передовыми технологиями',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'ipad',
    name: 'iPad',
    icon: Tablet,
    description: 'Универсальные планшеты для работы и творчества',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    id: 'mac',
    name: 'Mac',
    icon: Monitor,
    description: 'Профессиональные компьютеры для любых задач',
    gradient: 'from-gray-600 to-gray-800'
  }
];

export const CategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState('iphone');

  return (
    <section id="category-selection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Выберите категорию
          </h2>
          <p className="text-xl text-gray-600">
            Сравните продукты в каждой категории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <div
                key={category.id}
                data-category={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  relative cursor-pointer p-8 rounded-2xl transition-all duration-300 transform hover:scale-105
                  ${isSelected 
                    ? 'bg-gradient-to-br ' + category.gradient + ' text-white shadow-2xl' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-full mb-4
                    ${isSelected ? 'bg-white/20' : 'bg-white shadow-md'}
                  `}>
                    <Icon 
                      size={32} 
                      className={isSelected ? 'text-white' : 'text-gray-700'} 
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
                    {category.description}
                  </p>
                </div>
                {isSelected && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        <div id="products-section">
          <ProductGrid category={selectedCategory} />
        </div>
      </div>
    </section>
  );
};
