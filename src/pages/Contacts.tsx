import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    // Очистка формы после отправки
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark transition-theme">
        Контакты
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Контактная информация */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 transition-theme">
            <h2 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark transition-theme">
              Свяжитесь с нами
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light dark:text-primary-dark transition-theme" />
                <span className="text-gray-600 dark:text-gray-300 transition-theme">
                  support@productcompare.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light dark:text-primary-dark transition-theme" />
                <span className="text-gray-600 dark:text-gray-300 transition-theme">
                  +7 (999) 123-45-67
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-light dark:text-primary-dark transition-theme" />
                <span className="text-gray-600 dark:text-gray-300 transition-theme">
                  Москва, ул. Примерная, д. 123
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 transition-theme">
            <h2 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark transition-theme">
              Режим работы
            </h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-300 transition-theme">
              <p>Понедельник - Пятница: 9:00 - 18:00</p>
              <p>Суббота - Воскресенье: Выходной</p>
            </div>
          </div>
        </div>

        {/* Форма обратной связи */}
        <form onSubmit={handleSubmit} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 transition-theme">
          <h2 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark transition-theme">
            Форма обратной связи
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-theme"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-theme"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Тема
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-theme"
              >
                <option value="">Выберите тему</option>
                <option value="general">Общий вопрос</option>
                <option value="technical">Техническая поддержка</option>
                <option value="business">Сотрудничество</option>
                <option value="other">Другое</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-theme"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-theme"
            >
              <Send className="h-5 w-5" />
              Отправить сообщение
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
