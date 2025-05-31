import React from 'react';
import { Plus, Check, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
  onBuy: () => void;
  canSelect: boolean;
}

export const ProductCard = ({ product, isSelected, onSelect, onBuy, canSelect }: ProductCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Изображение продукта */}
      <div className="aspect-square bg-gray-50 dark:bg-gray-900 p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Информация о продукте */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-text-light dark:text-text-dark mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-primary-light dark:text-primary-dark mb-4">
          {product.price}
        </p>

        {/* Основные характеристики */}
        <div className="space-y-2 mb-4">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="text-sm text-secondary-light dark:text-secondary-dark"
            >
              • {feature}
            </div>
          ))}
        </div>

        {/* Кнопки действий */}
        <div className="flex items-center gap-2">
          <button
            onClick={onSelect}
            disabled={!canSelect && !isSelected}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isSelected
                ? 'bg-primary-light dark:bg-primary-dark text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="h-4 w-4" />
                <span>Выбрано</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>{canSelect ? 'Сравнить' : 'Лимит (3)'}</span>
              </>
            )}
          </button>
          <button
            onClick={onBuy}
            className="p-2 rounded-lg bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
            aria-label="Купить"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
