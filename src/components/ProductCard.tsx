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
    <div className="group relative bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border">
      {/* Изображение продукта */}
      <div className="aspect-square bg-muted p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Информация о продукте */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-primary mb-4">
          {product.price}
        </p>

        {/* Основные характеристики */}
        <div className="space-y-2 mb-4">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="text-sm text-muted-foreground"
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
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed'
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
            className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Купить"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
