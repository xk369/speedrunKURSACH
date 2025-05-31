import React from 'react';
import { Monitor, BarChart2, Shield, Zap } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Удобный интерфейс',
      description: 'Интуитивно понятный дизайн позволяет быстро находить нужные товары и сравнивать их характеристики'
    },
    {
      icon: BarChart2,
      title: 'Детальное сравнение',
      description: 'Подробные таблицы с техническими характеристиками и удобные фильтры для анализа товаров'
    },
    {
      icon: Shield,
      title: 'Надежные данные',
      description: 'Актуальная информация о товарах от официальных производителей и проверенных поставщиков'
    },
    {
      icon: Zap,
      title: 'Быстрый поиск',
      description: 'Мгновенный доступ к сравнению товаров в различных категориях электроники и техники'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark transition-theme">
        О сервисе ProductCompare
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-text-light dark:text-text-dark transition-theme">
          ProductCompare — это современный сервис для сравнения товаров, который помогает сделать правильный выбор при покупке электроники и техники. 
          Наша цель — упростить процесс выбора товаров, предоставляя пользователям всю необходимую информацию в удобном формате.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 transition-theme"
          >
            <feature.icon className="h-12 w-12 text-primary-light dark:text-primary-dark mb-4 transition-theme" />
            <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark transition-theme">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-theme">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 transition-theme">
        <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark transition-theme">
          Наша миссия
        </h2>
        <p className="text-gray-600 dark:text-gray-300 transition-theme">
          Мы стремимся сделать процесс выбора товаров максимально простым и информативным. 
          Наш сервис помогает пользователям экономить время и принимать взвешенные решения при покупке, 
          предоставляя удобные инструменты для сравнения характеристик товаров и анализа их преимуществ.
        </p>
      </div>
    </div>
  );
};
