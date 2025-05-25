
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    // Здесь можно загрузить избранные товары из localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleRemoveFromFavorites = (productId: string) => {
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleBuy = (productId: string) => {
    const product = favorites.find(p => p.id === productId);
    if (product) {
      alert(`Переход к покупке ${product.name}`);
    }
  };

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
          <div className="flex items-center space-x-3 mb-4">
            <Heart size={32} className="text-red-500 fill-current" />
            <h1 className="text-4xl font-bold text-gray-900">Избранное</h1>
          </div>
          <p className="text-xl text-gray-600">
            Ваши любимые продукты Apple в одном месте
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Пока нет избранных товаров
            </h2>
            <p className="text-gray-600 mb-8">
              Добавьте товары в избранное для быстрого доступа
            </p>
            <Link 
              to="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Перейти к каталогу
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={false}
                onToggle={() => {}}
                onBuy={() => handleBuy(product.id)}
                canSelect={true}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;
