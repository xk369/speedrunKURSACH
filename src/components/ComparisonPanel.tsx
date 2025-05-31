import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

interface ComparisonPanelProps {
  products: Product[];
  onClose: () => void;
  onBuy: (productId: string) => void;
}

export const ComparisonPanel = ({ products, onClose, onBuy }: ComparisonPanelProps) => {
  const specKeys = products.length > 0 ? Object.keys(products[0].specs) : [];
  
  // Определяем количество колонок в зависимости от количества продуктов
  const getGridCols = () => {
    if (products.length === 1) return 'grid-cols-1';
    if (products.length === 2) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-3';
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden transition-theme">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark transition-theme">
            Сравнение продуктов
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          {/* Изображения и названия продуктов */}
          <div className={`grid ${getGridCols()} gap-6 p-6 border-b border-gray-200 dark:border-gray-700`}>
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <div className="aspect-square bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 p-6 flex items-center justify-center max-w-xs mx-auto transition-theme">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-text-light dark:text-text-dark mb-2 transition-theme">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-primary-light dark:text-primary-dark mb-4 transition-theme">
                  {product.price}
                </p>
                <button 
                  onClick={() => onBuy(product.id)}
                  className="w-full max-w-xs mx-auto bg-primary-light dark:bg-primary-dark text-white py-2 px-4 rounded-xl hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-theme flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={16} />
                  <span>Купить</span>
                </button>
              </div>
            ))}
          </div>
          
          {/* Таблица сравнения характеристик */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4 transition-theme">
              Технические характеристики
            </h3>
            <div className="space-y-4">
              {specKeys.map((specKey) => (
                <div key={specKey} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-theme">
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 font-semibold text-text-light dark:text-text-dark capitalize transition-theme">
                    {specKey === 'display' && 'Дисплей'}
                    {specKey === 'chip' && 'Процессор'}
                    {specKey === 'camera' && 'Камера'}
                    {specKey === 'storage' && 'Накопитель'}
                    {specKey === 'battery' && 'Батарея'}
                    {specKey === 'memory' && 'Память'}
                  </div>
                  <div className={`grid ${getGridCols()} divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700`}>
                    {products.map((product) => (
                      <div key={product.id} className="p-4 text-sm text-secondary-light dark:text-secondary-dark text-center md:text-left transition-theme">
                        {product.specs[specKey]}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4 transition-theme">
              Ключевые особенности
            </h3>
            <div className={`grid ${getGridCols()} gap-6`}>
              {products.map((product) => (
                <div key={product.id}>
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 text-center md:text-left transition-theme">
                    {product.name}
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-secondary-light dark:text-secondary-dark flex items-start transition-theme">
                        <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full mt-2 mr-3 flex-shrink-0 transition-theme"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
