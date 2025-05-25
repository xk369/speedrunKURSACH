
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Сравнение продуктов</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          {/* Изображения и названия продуктов */}
          <div className={`grid ${getGridCols()} gap-6 p-6 border-b border-gray-200`}>
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <div className="aspect-square bg-gray-50 rounded-xl mb-4 p-6 flex items-center justify-center max-w-xs mx-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
                <button 
                  onClick={() => onBuy(product.id)}
                  className="w-full max-w-xs mx-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={16} />
                  <span>Купить</span>
                </button>
              </div>
            ))}
          </div>
          
          {/* Таблица сравнения характеристик */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Технические характеристики</h3>
            <div className="space-y-4">
              {specKeys.map((specKey) => (
                <div key={specKey} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-900 capitalize">
                    {specKey === 'display' && 'Дисплей'}
                    {specKey === 'chip' && 'Процессор'}
                    {specKey === 'camera' && 'Камера'}
                    {specKey === 'storage' && 'Накопитель'}
                    {specKey === 'battery' && 'Батарея'}
                    {specKey === 'memory' && 'Память'}
                  </div>
                  <div className={`grid ${getGridCols()} divide-y md:divide-y-0 md:divide-x divide-gray-200`}>
                    {products.map((product) => (
                      <div key={product.id} className="p-4 text-sm text-gray-600 text-center md:text-left">
                        {product.specs[specKey]}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ключевые особенности</h3>
            <div className={`grid ${getGridCols()} gap-6`}>
              {products.map((product) => (
                <div key={product.id}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-center md:text-left">{product.name}</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
