import React from 'react';
import { Smartphone, Tablet, Monitor, Watch, Headphones, Camera } from 'lucide-react';

const categories = [
  { id: 'smartphones', name: 'Смартфоны', icon: Smartphone },
  { id: 'tablets', name: 'Планшеты', icon: Tablet },
  { id: 'laptops', name: 'Ноутбуки', icon: Monitor },
  { id: 'watches', name: 'Умные часы', icon: Watch },
  { id: 'headphones', name: 'Наушники', icon: Headphones },
  { id: 'cameras', name: 'Фотоаппараты', icon: Camera },
];

interface CategorySelectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategorySelection = ({ selectedCategory, onSelectCategory }: CategorySelectionProps) => {
  return (
    <section id="category-selection" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Выберите категорию
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                data-category={category.id}
                className={`
                  flex flex-col items-center justify-center p-4 rounded-xl
                  transition-all duration-300 ease-in-out
                  ${selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-border'
                  }
                `}
              >
                <Icon className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
