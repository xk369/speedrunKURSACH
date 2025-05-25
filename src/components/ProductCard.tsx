
import React from 'react';
import { Plus, Check, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: () => void;
  onBuy: () => void;
  canSelect: boolean;
}

export const ProductCard = ({ product, isSelected, onToggle, canSelect, onBuy }: ProductCardProps) => {
  return (
    <div className={`
      relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden
      ${isSelected ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:transform hover:scale-102'}
    `}>
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
        
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="space-y-3">
          <button
            onClick={onToggle}
            disabled={!canSelect && !isSelected}
            className={`
              w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2
              ${isSelected 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : canSelect 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isSelected ? (
              <>
                <Minus size={20} />
                <span>Убрать из сравнения</span>
              </>
            ) : (
              <>
                <Plus size={20} />
                <span>{canSelect ? 'Добавить к сравнению' : 'Максимум 3 продукта'}</span>
              </>
            )}
          </button>
          
          <button 
            onClick={onBuy}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Купить
          </button>
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2">
          <Check size={16} />
        </div>
      )}
    </div>
  );
};
