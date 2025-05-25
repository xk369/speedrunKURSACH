
import React from 'react';
import { Header } from '@/components/Header';
import { ArrowLeft, Award, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Экспертность',
      description: 'Более 10 лет опыта в сфере технологий Apple'
    },
    {
      icon: Users,
      title: 'Доверие',
      description: 'Более 1 миллиона довольных пользователей'
    },
    {
      icon: Zap,
      title: 'Скорость',
      description: 'Быстрое и удобное сравнение характеристик'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Актуальная информация о всех продуктах'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            ProductCompare — это современный сервис для сравнения продуктов Apple. 
            Мы помогаем пользователям принимать обоснованные решения при выборе устройств.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Мы верим, что каждый пользователь заслуживает найти идеальное устройство Apple, 
              которое будет соответствовать его потребностям и бюджету.
            </p>
            <p className="mb-4">
              Наша платформа предоставляет детальную информацию о характеристиках, 
              помогает сравнивать модели и принимать обоснованные решения.
            </p>
            <p>
              Мы постоянно обновляем информацию о продуктах и улучшаем пользовательский опыт, 
              чтобы сделать процесс выбора максимально простым и удобным.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
