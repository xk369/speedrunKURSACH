import React from 'react';
import { Hero } from '../components/Hero';
import { CategorySelection } from '../components/CategorySelection';
import { ProductGrid } from '../components/ProductGrid';
import { useCategory } from '../context/CategoryContext';

export const Home = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="space-y-12">
      <Hero />
      <div id="category-selection">
        <CategorySelection selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      </div>
      <ProductGrid category={selectedCategory} />
    </div>
  );
}; 