import React from 'react';
import { Search, Filter, BarChart2, ShoppingCart, Mail } from 'lucide-react';

export const Help = () => {
  const faqItems = [
    {
      icon: Search,
      title: 'Как найти нужный товар?',
      content: 'Выберите категорию товара в верхней части страницы. Используйте поиск по названию или фильтры для уточнения параметров. Вы можете сортировать товары по цене и другим характеристикам.'
    },
    {
      icon: Filter,
      title: 'Как работает сравнение товаров?',
      content: 'Выберите до 4 товаров для сравнения, нажав кнопку "Сравнить" на карточке товара. После выбора товаров нажмите кнопку "Сравнить выбранные" для просмотра детального сравнения характеристик.'
    },
    {
      icon: BarChart2,
      title: 'Какие характеристики сравниваются?',
      content: 'Мы сравниваем все основные технические характеристики товаров: процессор, память, дисплей, камера, аккумулятор и другие параметры, специфичные для каждой категории товаров.'
    },
    {
      icon: ShoppingCart,
      title: 'Как купить выбранный товар?',
      content: 'На карточке товара нажмите кнопку "Купить", чтобы перейти на страницу покупки. Мы перенаправим вас на официальный сайт продавца или магазин, где вы сможете оформить заказ.'
    },
    {
      icon: Mail,
      title: 'Как связаться с поддержкой?',
      content: 'Если у вас возникли вопросы или проблемы, вы можете написать нам через форму обратной связи на странице "Контакты". Мы постараемся ответить в течение 24 часов.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark transition-theme">
        Помощь и поддержка
      </h1>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg text-text-light dark:text-text-dark transition-theme">
          На этой странице вы найдете ответы на часто задаваемые вопросы и инструкции по использованию сервиса ProductCompare. 
          Если вы не нашли ответ на свой вопрос, свяжитесь с нами через форму обратной связи.
        </p>
      </div>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 transition-theme"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary-light dark:text-primary-dark transition-theme" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark transition-theme">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-theme">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-theme">
        <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark transition-theme">
          Нужна дополнительная помощь?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 transition-theme mb-4">
          Если у вас остались вопросы или нужна помощь в использовании сервиса, 
          наши специалисты готовы помочь вам. Свяжитесь с нами любым удобным способом:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 transition-theme space-y-2">
          <li>Через форму обратной связи на странице "Контакты"</li>
          <li>По электронной почте: support@productcompare.com</li>
          <li>В рабочее время с 9:00 до 18:00 по московскому времени</li>
        </ul>
      </div>
    </div>
  );
};
