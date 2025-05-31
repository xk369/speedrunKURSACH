import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative h-8 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 transition-all duration-500 ease-in-out hover:shadow-lg"
      aria-label="Переключить тему"
    >
      <div
        className={cn(
          "absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-500 ease-in-out",
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        )}
      >
        <div className="flex h-full w-full items-center justify-center">
          {theme === 'dark' ? (
            <Moon className="h-4 w-4 text-gray-800 transition-all duration-500" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500 transition-all duration-500" />
          )}
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-between px-2">
        <Sun className="h-4 w-4 text-gray-800 opacity-100 transition-opacity duration-500" />
        <Moon className="h-4 w-4 text-gray-800 opacity-100 transition-opacity duration-500" />
      </div>
    </button>
  );
}; 