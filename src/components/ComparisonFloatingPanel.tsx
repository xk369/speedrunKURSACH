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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-background rounded-full shadow-lg border border-border px-4 py-2 transition-all duration-300">
      <div className="flex items-center gap-2">
        <BarChart2 className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-foreground">
          Выбрано товаров: {selectedCount}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onCompare}
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Сравнить
        </button>
        <button
          onClick={onReset}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label="Сбросить выбор"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}; 