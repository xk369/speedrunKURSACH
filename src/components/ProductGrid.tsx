import React, { useState, useMemo } from 'react';
import { Plus, Check, Filter, SortAsc, SortDesc, ChevronDown } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ComparisonPanel } from './ComparisonPanel';

// Расширенные мок-данные продуктов
const products = {
  iphone: [
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      price: '134 990 ₽',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['A17 Pro чип', '6.7" дисплей', '5x оптический зум', 'Титановый корпус'],
      specs: {
        display: '6.7" Super Retina XDR',
        chip: 'A17 Pro',
        camera: '48МП основная + 12МП ультраширокоугольная + 12МП телефото',
        storage: '256ГБ, 512ГБ, 1ТБ',
        battery: 'до 29 часов видео'
      }
    },
    {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      price: '114 990 ₽',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['A17 Pro чип', '6.1" дисплей', '3x оптический зум', 'Титановый корпус'],
      specs: {
        display: '6.1" Super Retina XDR',
        chip: 'A17 Pro',
        camera: '48МП основная + 12МП ультраширокоугольная + 12МП телефото',
        storage: '128ГБ, 256ГБ, 512ГБ, 1ТБ',
        battery: 'до 23 часов видео'
      }
    },
    {
      id: 'iphone-15-plus',
      name: 'iPhone 15 Plus',
      price: '99 990 ₽',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['A16 Bionic чип', '6.7" дисплей', '2x оптический зум', 'Алюминиевый корпус'],
      specs: {
        display: '6.7" Super Retina XDR',
        chip: 'A16 Bionic',
        camera: '48МП основная + 12МП ультраширокоугольная',
        storage: '128ГБ, 256ГБ, 512ГБ',
        battery: 'до 26 часов видео'
      }
    },
    {
      id: 'iphone-15',
      name: 'iPhone 15',
      price: '89 990 ₽',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['A16 Bionic чип', '6.1" дисплей', '2x оптический зум', 'Алюминиевый корпус'],
      specs: {
        display: '6.1" Super Retina XDR',
        chip: 'A16 Bionic',
        camera: '48МП основная + 12МП ультраширокоугольная',
        storage: '128ГБ, 256ГБ, 512ГБ',
        battery: 'до 20 часов видео'
      }
    },
    {
      id: 'iphone-14',
      name: 'iPhone 14',
      price: '69 990 ₽',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['A15 Bionic чип', '6.1" дисплей', '2x оптический зум', 'Алюминиевый корпус'],
      specs: {
        display: '6.1" Super Retina XDR',
        chip: 'A15 Bionic',
        camera: '12МП основная + 12МП ультраширокоугольная',
        storage: '128ГБ, 256ГБ, 512ГБ',
        battery: 'до 20 часов видео'
      }
    },
    {
      id: 'iphone-se',
      name: 'iPhone SE',
      price: '49 990 ₽',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      features: ['A15 Bionic чип', '4.7" дисплей', 'Touch ID', 'Компактный дизайн'],
      specs: {
        display: '4.7" Retina HD',
        chip: 'A15 Bionic',
        camera: '12МП основная',
        storage: '64ГБ, 128ГБ, 256ГБ',
        battery: 'до 15 часов видео'
      }
    }
  ],
  ipad: [
    {
      id: 'ipad-pro-12',
      name: 'iPad Pro 12.9"',
      price: '124 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      features: ['M2 чип', '12.9" дисплей', 'Поддержка Apple Pencil', 'Face ID'],
      specs: {
        display: '12.9" Liquid Retina XDR',
        chip: 'Apple M2',
        camera: '12МП основная + 10МП ультраширокоугольная',
        storage: '128ГБ, 256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-pro-11',
      name: 'iPad Pro 11"',
      price: '94 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      features: ['M2 чип', '11" дисплей', 'Поддержка Apple Pencil', 'Face ID'],
      specs: {
        display: '11" Liquid Retina',
        chip: 'Apple M2',
        camera: '12МП основная + 10МП ультраширокоугольная',
        storage: '128ГБ, 256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-air',
      name: 'iPad Air',
      price: '74 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      features: ['M1 чип', '10.9" дисплей', 'Touch ID', 'USB-C'],
      specs: {
        display: '10.9" Liquid Retina',
        chip: 'Apple M1',
        camera: '12МП основная + 12МП ультраширокоугольная',
        storage: '64ГБ, 256ГБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-10',
      name: 'iPad (10-го поколения)',
      price: '44 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      features: ['A14 Bionic чип', '10.9" дисплей', 'Touch ID', 'USB-C'],
      specs: {
        display: '10.9" Liquid Retina',
        chip: 'A14 Bionic',
        camera: '12МП основная',
        storage: '64ГБ, 256ГБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-mini',
      name: 'iPad mini',
      price: '64 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      features: ['A15 Bionic чип', '8.3" дисплей', 'Touch ID', 'Портативный'],
      specs: {
        display: '8.3" Liquid Retina',
        chip: 'A15 Bionic',
        camera: '12МП основная',
        storage: '64ГБ, 256ГБ',
        battery: 'до 10 часов'
      }
    }
  ],
  mac: [
    {
      id: 'macbook-pro-16',
      name: 'MacBook Pro 16"',
      price: '249 990 ₽',
      image: 'https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-white-table-tAiXthpxA28',
      features: ['M3 Pro чип', '16" дисплей', 'до 22 часов работы', 'MagSafe 3'],
      specs: {
        display: '16.2" Liquid Retina XDR',
        chip: 'Apple M3 Pro',
        memory: '18ГБ, 36ГБ, 128ГБ',
        storage: '512ГБ, 1ТБ, 2ТБ, 4ТБ, 8ТБ',
        battery: 'до 22 часов'
      }
    },
    {
      id: 'macbook-pro-14',
      name: 'MacBook Pro 14"',
      price: '199 990 ₽',
      image: 'https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-desk-IUBEBe8sQ-U',
      features: ['M3 Pro чип', '14" дисплей', 'до 18 часов работы', 'MagSafe 3'],
      specs: {
        display: '14.2" Liquid Retina XDR',
        chip: 'Apple M3 Pro',
        memory: '18ГБ, 36ГБ, 128ГБ',
        storage: '512ГБ, 1ТБ, 2ТБ, 4ТБ, 8ТБ',
        battery: 'до 18 часов'
      }
    },
    {
      id: 'macbook-air-15',
      name: 'MacBook Air 15"',
      price: '149 990 ₽',
      image: 'https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-white-desk-dq5rTIBMpNo',
      features: ['M2 чип', '15.3" дисплей', 'до 18 часов работы', 'MagSafe 3'],
      specs: {
        display: '15.3" Liquid Retina',
        chip: 'Apple M2',
        memory: '8ГБ, 16ГБ, 24ГБ',
        storage: '256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'до 18 часов'
      }
    },
    {
      id: 'macbook-air-13',
      name: 'MacBook Air 13"',
      price: '119 990 ₽',
      image: 'https://unsplash.com/photos/silver-macbook-on-white-fabric-sofa-OuxSTrA1Z6M',
      features: ['M2 чип', '13.6" дисплей', 'до 18 часов работы', 'MagSafe 3'],
      specs: {
        display: '13.6" Liquid Retina',
        chip: 'Apple M2',
        memory: '8ГБ, 16ГБ, 24ГБ',
        storage: '256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'до 18 часов'
      }
    },
    {
      id: 'imac-24',
      name: 'iMac 24"',
      price: '134 990 ₽',
      image: 'https://unsplash.com/photos/a-computer-monitor-sitting-on-top-of-a-wooden-desk-dDkJtxVPOjE',
      features: ['M3 чип', '24" 4.5K дисплей', 'Magic Keyboard', 'Magic Mouse'],
      specs: {
        display: '24" 4.5K Retina',
        chip: 'Apple M3',
        memory: '8ГБ, 16ГБ, 24ГБ',
        storage: '256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'Подключение к сети'
      }
    },
    {
      id: 'mac-studio',
      name: 'Mac Studio',
      price: '229 990 ₽',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      features: ['M2 Max чип', 'Компактный дизайн', 'Множество портов', 'Профессиональная производительность'],
      specs: {
        display: 'Внешний дисплей',
        chip: 'Apple M2 Max',
        memory: '32ГБ, 64ГБ, 128ГБ',
        storage: '512ГБ, 1ТБ, 2ТБ, 4ТБ, 8ТБ',
        battery: 'Подключение к сети'
      }
    }
  ]
};

interface ProductGridProps {
  category: string;
}

export const ProductGrid = ({ category }: ProductGridProps) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'newest'>('newest');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [priceFilter, setPriceFilter] = useState<'all' | 'budget' | 'mid' | 'premium'>('all');

  const categoryProducts = products[category as keyof typeof products] || [];

  // Фильтрация и сортировка продуктов
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    // Фильтрация по цене
    if (priceFilter !== 'all') {
      filtered = filtered.filter(product => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        switch (priceFilter) {
          case 'budget':
            return price < 80000;
          case 'mid':
            return price >= 80000 && price < 150000;
          case 'premium':
            return price >= 150000;
          default:
            return true;
        }
      });
    }

    // Сортировка
    filtered.sort((a, b) => {
      let compareValue = 0;
      
      switch (sortBy) {
        case 'name':
          compareValue = a.name.localeCompare(b.name);
          break;
        case 'price':
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          compareValue = priceA - priceB;
          break;
        case 'newest':
          // Считаем новыми продукты с большими числами в названии
          const getModelNumber = (name: string) => {
            const match = name.match(/\d+/);
            return match ? parseInt(match[0]) : 0;
          };
          compareValue = getModelNumber(b.name) - getModelNumber(a.name);
          break;
      }

      return sortOrder === 'desc' ? -compareValue : compareValue;
    });

    return filtered;
  }, [categoryProducts, sortBy, sortOrder, priceFilter]);

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 3) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const handleBuyProduct = (productId: string) => {
    const product = categoryProducts.find(p => p.id === productId);
    if (product) {
      alert(`Переход к покупке ${product.name}`);
    }
  };

  const selectedProductsData = categoryProducts.filter(product => 
    selectedProducts.includes(product.id)
  );

  return (
    <div>
      {/* Apple-стиль фильтры и сортировка */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Filter size={16} className="text-gray-600" />
              </div>
              <span className="font-semibold text-gray-900 text-lg">Фильтры</span>
            </div>
            <div className="relative">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="appearance-none bg-gray-50 border-0 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 cursor-pointer hover:bg-gray-100"
              >
                <option value="all">Все цены</option>
                <option value="budget">До 80 000 ₽</option>
                <option value="mid">80 000 - 150 000 ₽</option>
                <option value="premium">От 150 000 ₽</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-gray-900 text-lg">Сортировка</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-gray-50 border-0 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 cursor-pointer hover:bg-gray-100"
                >
                  <option value="newest">По новизне</option>
                  <option value="name">По названию</option>
                  <option value="price">По цене</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              >
                {sortOrder === 'asc' ? 
                  <SortAsc size={18} className="text-gray-600" /> : 
                  <SortDesc size={18} className="text-gray-600" />
                }
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
            Найдено продуктов: <span className="font-semibold text-gray-900">{filteredAndSortedProducts.length}</span>
          </div>
          {selectedProducts.length > 0 && (
            <div className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-xl">
              Выбрано для сравнения: <span className="font-semibold">{selectedProducts.length}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProducts.includes(product.id)}
            onToggle={() => toggleProduct(product.id)}
            onBuy={() => handleBuyProduct(product.id)}
            canSelect={selectedProducts.length < 3 || selectedProducts.includes(product.id)}
          />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Filter size={24} className="text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg font-medium">
            По выбранным фильтрам продукты не найдены
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Попробуйте изменить параметры фильтрации
          </p>
        </div>
      )}

      {selectedProducts.length > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={() => setShowComparison(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:bg-blue-700 transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-2xl"
          >
            <span className="font-semibold">Сравнить выбранные ({selectedProducts.length})</span>
            <Check size={20} />
          </button>
        </div>
      )}

      {showComparison && (
        <ComparisonPanel
          products={selectedProductsData}
          onClose={() => setShowComparison(false)}
          onBuy={handleBuyProduct}
        />
      )}
    </div>
  );
};
