
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ArrowLeft, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: 'Как сравнивать продукты?',
      answer: 'Выберите категорию (iPhone, iPad, Mac), затем добавьте до 3 продуктов для сравнения, нажав кнопку "Добавить к сравнению". После этого нажмите кнопку "Сравнить выбранные" внизу страницы.'
    },
    {
      question: 'Можно ли сравнивать продукты из разных категорий?',
      answer: 'Нет, сравнение возможно только между продуктами одной категории. Это обеспечивает корректное сравнение характеристик.'
    },
    {
      question: 'Сколько продуктов можно сравнить одновременно?',
      answer: 'Максимальное количество продуктов для одновременного сравнения — 3. Это оптимальное количество для удобного анализа характеристик.'
    },
    {
      question: 'Как работает кнопка "Купить"?',
      answer: 'Кнопка "Купить" перенаправляет на официальный сайт Apple или авторизованного ритейлера для оформления покупки.'
    },
    {
      question: 'Обновляются ли цены в реальном времени?',
      answer: 'Цены обновляются регулярно, но могут отличаться от актуальных цен в магазинах. Рекомендуем уточнять финальную стоимость на сайте продавца.'
    },
    {
      question: 'Можно ли сохранить результаты сравнения?',
      answer: 'В текущей версии функция сохранения недоступна, но мы планируем добавить эту возможность в будущих обновлениях.'
    },
    {
      question: 'Поддерживаются ли мобильные устройства?',
      answer: 'Да, наш сайт полностью адаптирован для мобильных устройств и планшетов. Интерфейс автоматически подстраивается под размер экрана.'
    },
    {
      question: 'Что делать, если характеристики отображаются некорректно?',
      answer: 'Свяжитесь с нами через страницу контактов. Мы оперативно исправим любые неточности в технических характеристиках.'
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Назад на главную
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Помощь</h1>
          <p className="text-xl text-gray-600">
            Ответы на часто задаваемые вопросы
          </p>
        </div>

        {/* Поиск */}
        <div className="mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => {
            const isExpanded = expandedItems.includes(index);
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  {isExpanded ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              По вашему запросу ничего не найдено. Попробуйте изменить поисковый запрос.
            </p>
          </div>
        )}

        {/* Дополнительная помощь */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-gray-600 mb-6">
            Свяжитесь с нами, и мы поможем решить любую проблему
          </p>
          <Link 
            to="/contacts"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Связаться с поддержкой
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Help;
