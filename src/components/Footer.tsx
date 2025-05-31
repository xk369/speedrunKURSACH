import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-text-light dark:text-text-dark py-8 mt-12 transition-theme">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 ProductCompare. Все права защищены.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/about" className="hover:underline">О сервисе</a>
          <a href="/help" className="hover:underline">Помощь</a>
          <a href="/contacts" className="hover:underline">Контакты</a>
        </div>
      </div>
    </footer>
  );
}; 