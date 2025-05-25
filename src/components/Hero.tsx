
import React from 'react';

export const Hero = () => {
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
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Найди идеальный
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}продукт
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Сравни характеристики, функции и цены чтобы выбрать устройство, которое идеально подходит для ваших потребностей
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleStartComparison}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Начать сравнение
          </button>
          <button 
            onClick={handleViewAllProducts}
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Посмотреть все продукты
          </button>
        </div>
      </div>
    </section>
  );
};
