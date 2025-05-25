
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ArrowLeft, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contacts = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Пн-Пт: 9:00 - 21:00'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'support@productcompare.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Москва, ул. Тверская, 15',
      description: 'Главный офис'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Назад на главную
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Как с нами связаться</h2>
            <div className="space-y-6">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                      <p className="text-lg text-blue-600 font-medium">{contact.value}</p>
                      <p className="text-gray-600">{contact.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Выберите тему</option>
                  <option value="general">Общий вопрос</option>
                  <option value="technical">Техническая поддержка</option>
                  <option value="feedback">Отзыв о сервисе</option>
                  <option value="cooperation">Сотрудничество</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Отправить сообщение</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
