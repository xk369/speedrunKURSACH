import React from 'react';
import { X, BarChart2 } from 'lucide-react';

interface ComparisonFloatingPanelProps {
  selectedCount: number;
  onCompare: () => void;
  onReset: () => void;
}

export const ComparisonFloatingPanel = ({ selectedCount, onCompare, onReset }: ComparisonFloatingPanelProps) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2 transition-all duration-300">
      <div className="flex items-center gap-2">
        <BarChart2 className="h-5 w-5 text-primary-light dark:text-primary-dark" />
        <span className="text-sm font-medium text-text-light dark:text-text-dark">
          Выбрано товаров: {selectedCount}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onCompare}
          className="px-4 py-2 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
        >
          Сравнить
        </button>
        <button
          onClick={onReset}
          className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Сбросить выбор"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}; 