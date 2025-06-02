import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Check, Filter, SortAsc, SortDesc, ChevronDown } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ComparisonPanel } from './ComparisonPanel';
import { ComparisonFloatingPanel } from './ComparisonFloatingPanel';
import { products, Product } from '../data/products';

interface ProductGridProps {
  category: string;
}

export const ProductGrid = ({ category }: ProductGridProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('price-asc');

  // Сбрасываем выбранные товары при смене категории
  useEffect(() => {
    setSelectedProducts([]);
  }, [category]);

  // Получаем продукты для выбранной категории
  const categoryProducts = useMemo(() => {
    return products[category as keyof typeof products] || [];
  }, [category]);

  // Сортируем продукты
  const sortedProducts = useMemo(() => {
    return [...categoryProducts].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
      
      switch (sortBy) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [categoryProducts, sortBy]);

  const handleProductSelect = (product: Product) => {
    if (selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleBuy = (productId: string) => {
    // TODO: Implement buy functionality
    console.log('Buy product:', productId);
  };

  const handleResetSelection = () => {
    setSelectedProducts([]);
  };

  const renderProductCard = (product: Product) => {
    const isSelected = selectedProducts.some(p => p.id === product.id);
    const canSelect = selectedProducts.length < 3 || isSelected;

    return (
      <ProductCard
        key={product.id}
        product={product}
        isSelected={isSelected}
        onSelect={() => handleProductSelect(product)}
        onBuy={() => handleBuy(product.id)}
        canSelect={canSelect}
      />
    );
  };

  return (
    <div className="space-y-6">
      {/* Панель управления */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="appearance-none pl-4 pr-10 py-2 rounded-lg bg-white dark:bg-gray-800 text-text-light dark:text-text-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-theme"
            >
              <option value="price-asc">По возрастанию цены</option>
              <option value="price-desc">По убыванию цены</option>
              <option value="name">По названию</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Сетка продуктов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map(renderProductCard)}
      </div>

      {/* Плавающая панель сравнения */}
      <ComparisonFloatingPanel
        selectedCount={selectedProducts.length}
        onCompare={() => setShowComparison(true)}
        onReset={handleResetSelection}
      />

      {/* Панель сравнения */}
      {showComparison && (
        <ComparisonPanel
          products={selectedProducts}
          onClose={() => setShowComparison(false)}
          onBuy={handleBuy}
        />
      )}
    </div>
  );
};
