export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

export const products = {
  smartphones: [
    {
      id: 'iphone-15-pro-max',
      name: 'iPhone 15 Pro Max',
      price: '134 990 ₽',
      image: '/images/products/15promax.jpeg',
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
      image: '/images/products/15pro.jpeg',
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
      image: '/images/products/15plus.jpeg',
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
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
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
      image: '/images/products/14.jpeg',
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
      image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400',
      features: ['A15 Bionic чип', '4.7" дисплей', 'Touch ID', 'Компактный дизайн'],
      specs: {
        display: '4.7" Retina HD',
        chip: 'A15 Bionic',
        camera: '12МП основная',
        storage: '64ГБ, 128ГБ, 256ГБ',
        battery: 'до 15 часов видео'
      }
    },
    {
      id: 'iphone-13-mini',
      name: 'iPhone 13 mini',
      price: '59 990 ₽',
      image: '/images/products/13mini.jpeg',
      features: ['A15 Bionic чип', '5.4" дисплей', 'Компактный размер', 'Face ID'],
      specs: {
        display: '5.4" Super Retina XDR',
        chip: 'A15 Bionic',
        camera: '12МП двойная',
        storage: '128ГБ, 256ГБ, 512ГБ',
        battery: 'до 17 часов видео'
      }
    },
    {
      id: 'iphone-12',
      name: 'iPhone 12',
      price: '49 990 ₽',
      image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400',
      features: ['A14 Bionic чип', '6.1" дисплей', 'OLED', 'Face ID'],
      specs: {
        display: '6.1" Super Retina XDR',
        chip: 'A14 Bionic',
        camera: '12МП двойная',
        storage: '64ГБ, 128ГБ, 256ГБ',
        battery: 'до 17 часов видео'
      }
    },
    {
      id: 'iphone-xr',
      name: 'iPhone XR',
      price: '39 990 ₽',
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400',
      features: ['A12 Bionic чип', '6.1" дисплей', 'Face ID', 'Яркие цвета'],
      specs: {
        display: '6.1" Liquid Retina',
        chip: 'A12 Bionic',
        camera: '12МП',
        storage: '64ГБ, 128ГБ, 256ГБ',
        battery: 'до 16 часов видео'
      }
    },
    {
      id: 'samsung-s24-ultra',
      name: 'Samsung Galaxy S24 Ultra',
      price: '129 990 ₽',
      image: '/images/products/samsungultra.jpeg',
      features: ['Snapdragon 8 Gen 3', '6.8" дисплей', '200МП камера', 'S Pen'],
      specs: {
        display: '6.8" Dynamic AMOLED 2X',
        chip: 'Snapdragon 8 Gen 3',
        camera: '200МП основная + 12МП ультраширокоугольная + 50МП телефото + 10МП телефото',
        storage: '256ГБ, 512ГБ, 1ТБ',
        battery: '5000 мАч'
      }
    },
    {
      id: 'samsung-s24-plus',
      name: 'Samsung Galaxy S24+',
      price: '99 990 ₽',
      image: '/images/products/samsungplus.jpeg',
      features: ['Snapdragon 8 Gen 3', '6.7" дисплей', '50МП камера', 'Быстрая зарядка'],
      specs: {
        display: '6.7" Dynamic AMOLED 2X',
        chip: 'Snapdragon 8 Gen 3',
        camera: '50МП основная + 12МП ультраширокоугольная + 10МП телефото',
        storage: '256ГБ, 512ГБ',
        battery: '4900 мАч'
      }
    },
    {
      id: 'pixel-8-pro',
      name: 'Google Pixel 8 Pro',
      price: '89 990 ₽',
      image: '/images/products/pixel.jpeg',
      features: ['Tensor G3', '6.7" дисплей', '50МП камера', 'ИИ-функции'],
      specs: {
        display: '6.7" LTPO OLED',
        chip: 'Google Tensor G3',
        camera: '50МП основная + 48МП ультраширокоугольная + 48МП телефото',
        storage: '128ГБ, 256ГБ, 512ГБ',
        battery: '5050 мАч'
      }
    }
  ],
  tablets: [
    {
      id: 'ipad-pro-12',
      name: 'iPad Pro 12.9"',
      price: '124 990 ₽',
      image: '/images/products/ipad-pro-12-9.jpg',
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
      image: '/images/products/ipadpro11.jpeg',
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
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
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
      image: '/images/products/iPad10.jpeg',
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
      image: '/images/products/iPadmini.jpeg',
      features: ['A15 Bionic чип', '8.3" дисплей', 'Touch ID', 'Портативный'],
      specs: {
        display: '8.3" Liquid Retina',
        chip: 'A15 Bionic',
        camera: '12МП основная',
        storage: '64ГБ, 256ГБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-pro-2021',
      name: 'iPad Pro 2021',
      price: '109 990 ₽',
      image: '/images/products/ipadpro2021.jpeg',
      features: ['M1 чип', '12.9" дисплей', 'Thunderbolt', 'Face ID'],
      specs: {
        display: '12.9" Liquid Retina XDR',
        chip: 'Apple M1',
        camera: '12МП + 10МП',
        storage: '128ГБ, 256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-9',
      name: 'iPad (9-го поколения)',
      price: '29 990 ₽',
      image: '/images/products/iPad9.jpeg',
      features: ['A13 Bionic чип', '10.2" дисплей', 'Touch ID', 'Поддержка Apple Pencil'],
      specs: {
        display: '10.2" Retina',
        chip: 'A13 Bionic',
        camera: '8МП',
        storage: '64ГБ, 256ГБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'ipad-mini-5',
      name: 'iPad mini 5',
      price: '39 990 ₽',
      image: '/images/products/ipadmini5.jpeg',
      features: ['A12 Bionic чип', '7.9" дисплей', 'Touch ID', 'Портативный'],
      specs: {
        display: '7.9" Retina',
        chip: 'A12 Bionic',
        camera: '8МП',
        storage: '64ГБ, 256ГБ',
        battery: 'до 10 часов'
      }
    },
    {
      id: 'galaxy-tab-s9-ultra',
      name: 'Samsung Galaxy Tab S9 Ultra',
      price: '149 990 ₽',
      image: '/images/products/SamsungS9.jpeg',
      features: ['Snapdragon 8 Gen 2', '14.6" дисплей', 'S Pen', 'IP68'],
      specs: {
        display: '14.6" Dynamic AMOLED 2X',
        chip: 'Snapdragon 8 Gen 2',
        camera: '13МП + 8МП',
        storage: '256ГБ, 512ГБ, 1ТБ',
        battery: '11200 мАч'
      }
    },
    {
      id: 'galaxy-tab-s9-plus',
      name: 'Samsung Galaxy Tab S9+',
      price: '119 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['Snapdragon 8 Gen 2', '12.4" дисплей', 'S Pen', 'IP68'],
      specs: {
        display: '12.4" Dynamic AMOLED 2X',
        chip: 'Snapdragon 8 Gen 2',
        camera: '13МП + 8МП',
        storage: '256ГБ, 512ГБ',
        battery: '10090 мАч'
      }
    }
  ],
  laptops: [
    {
      id: 'macbook-pro-16',
      name: 'MacBook Pro 16"',
      price: '249 990 ₽',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
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
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
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
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
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
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
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
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
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
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['M2 Max чип', 'Компактный дизайн', 'Множество портов', 'Профессиональная производительность'],
      specs: {
        display: 'Внешний дисплей',
        chip: 'Apple M2 Max',
        memory: '32ГБ, 64ГБ, 128ГБ',
        storage: '512ГБ, 1ТБ, 2ТБ, 4ТБ, 8ТБ',
        battery: 'Подключение к сети'
      }
    },
    {
      id: 'macbook-air-m1',
      name: 'MacBook Air M1',
      price: '99 990 ₽',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['M1 чип', '13.3" дисплей', 'Бесшумная работа', 'До 18 часов'],
      specs: {
        display: '13.3" Retina',
        chip: 'Apple M1',
        memory: '8ГБ, 16ГБ',
        storage: '256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'до 18 часов'
      }
    },
    {
      id: 'mac-mini-m2',
      name: 'Mac mini M2',
      price: '79 990 ₽',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['M2 чип', 'Компактный корпус', 'Множество портов', 'Тихая работа'],
      specs: {
        display: 'Внешний дисплей',
        chip: 'Apple M2',
        memory: '8ГБ, 16ГБ, 24ГБ',
        storage: '256ГБ, 512ГБ, 1ТБ, 2ТБ',
        battery: 'Подключение к сети'
      }
    },
    {
      id: 'imac-27',
      name: 'iMac 27" (2020)',
      price: '159 990 ₽',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['Intel i7/i9', '27" 5K дисплей', 'Magic Keyboard', 'Magic Mouse'],
      specs: {
        display: '27" 5K Retina',
        chip: 'Intel i7/i9',
        memory: '8ГБ, 16ГБ, 32ГБ, 64ГБ, 128ГБ',
        storage: '512ГБ, 1ТБ, 2ТБ, 4ТБ',
        battery: 'Подключение к сети'
      }
    },
    {
      id: 'dell-xps-15',
      name: 'Dell XPS 15',
      price: '199 990 ₽',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
      features: ['Intel Core i9', '15.6" 4K дисплей', 'RTX 4070', 'OLED'],
      specs: {
        display: '15.6" 4K OLED',
        chip: 'Intel Core i9-13900H',
        memory: '32ГБ, 64ГБ',
        storage: '1ТБ, 2ТБ, 4ТБ',
        battery: '86 Вт⋅ч'
      }
    },
    {
      id: 'dell-xps-13',
      name: 'Dell XPS 13',
      price: '149 990 ₽',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['Intel Core i7', '13.4" дисплей', 'Intel Iris Xe', 'Безрамочный'],
      specs: {
        display: '13.4" 4K UHD+',
        chip: 'Intel Core i7-1360P',
        memory: '16ГБ, 32ГБ',
        storage: '512ГБ, 1ТБ, 2ТБ',
        battery: '55 Вт⋅ч'
      }
    }
  ],
  watches: [
    {
      id: 'apple-watch-ultra-2',
      name: 'Apple Watch Ultra 2',
      price: '79 990 ₽',
      image: '/images/products/ultra8.jpeg',
      features: ['S9 чип', '49мм дисплей', 'До 36 часов', 'Титан'],
      specs: {
        display: '49мм Always-On Retina',
        chip: 'Apple S9',
        storage: '32ГБ',
        battery: 'До 36 часов',
        waterResistance: 'WR100'
      }
    },
    {
      id: 'apple-watch-series-9',
      name: 'Apple Watch Series 9',
      price: '39 990 ₽',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['S9 чип', '41/45мм дисплей', 'До 18 часов', 'Алюминий/Сталь'],
      specs: {
        display: '41/45мм Always-On Retina',
        chip: 'Apple S9',
        storage: '32ГБ',
        battery: 'До 18 часов',
        waterResistance: 'WR50'
      }
    },
    {
      id: 'samsung-watch-6-pro',
      name: 'Samsung Galaxy Watch 6 Pro',
      price: '34 990 ₽',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
      features: ['Exynos W930', '47мм дисплей', 'До 40 часов', 'Титан'],
      specs: {
        display: '47мм Super AMOLED',
        chip: 'Exynos W930',
        storage: '16ГБ',
        battery: '425 мАч',
        waterResistance: 'IP68'
      }
    }
  ],
  headphones: [
    {
      id: 'airpods-pro-2',
      name: 'Apple AirPods Pro 2',
      price: '24 990 ₽',
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400',
      features: ['Активное шумоподавление', 'Пространственное аудио', 'USB-C', 'До 6 часов'],
      specs: {
        battery: 'До 6 часов (ANC), до 30 часов с кейсом',
        connectivity: 'Bluetooth 5.3',
        waterResistance: 'IPX4',
        features: 'Активное шумоподавление, Прозрачный режим'
      }
    },
    {
      id: 'airpods-max',
      name: 'Apple AirPods Max',
      price: '59 990 ₽',
      image: '/images/products/airpodsmax.jpg',
      features: ['Активное шумоподавление', 'Пространственное аудио', 'До 20 часов', 'Алюминий'],
      specs: {
        battery: 'До 20 часов (ANC)',
        connectivity: 'Bluetooth 5.0',
        features: 'Активное шумоподавление, Прозрачный режим, Цифровая корона'
      }
    },
    {
      id: 'sony-wh-1000xm5',
      name: 'Sony WH-1000XM5',
      price: '39 990 ₽',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80&auto=format&fit=crop&crop=entropy&w=400&h=400',
      features: ['Активное шумоподавление', '30 часов работы', 'Быстрая зарядка', 'Сенсорное управление'],
      specs: {
        battery: 'До 30 часов (ANC)',
        connectivity: 'Bluetooth 5.2',
        features: 'Активное шумоподавление, Прозрачный режим, Автоматическое определение активности'
      }
    }
  ],
  cameras: [
    {
      id: 'sony-a7iv',
      name: 'Sony Alpha 7 IV',
      price: '249 990 ₽',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
      features: ['33МП полнокадровая матрица', '4K 60p', 'IBIS', 'Двойные слота SD'],
      specs: {
        sensor: '33МП полнокадровый CMOS',
        video: '4K 60p, 10-bit 4:2:2',
        stabilization: '5-осевая IBIS',
        connectivity: 'Wi-Fi 5, Bluetooth 4.2'
      }
    },
    {
      id: 'canon-r6-mark-ii',
      name: 'Canon EOS R6 Mark II',
      price: '229 990 ₽',
      image: '/images/products/canon.jpeg',
      features: ['24МП полнокадровая матрица', '4K 60p', 'IBIS', 'Двойные слота SD'],
      specs: {
        sensor: '24МП полнокадровый CMOS',
        video: '4K 60p, 10-bit 4:2:2',
        stabilization: '5-осевая IBIS',
        connectivity: 'Wi-Fi 5, Bluetooth 4.2'
      }
    },
    {
      id: 'fujifilm-x-t5',
      name: 'Fujifilm X-T5',
      price: '179 990 ₽',
      image: '/images/products/fujifilmxt5 .jpeg',
      features: ['40МП APS-C матрица', '6.2K 30p', 'IBIS', 'Двойные слота SD'],
      specs: {
        sensor: '40МП APS-C X-Trans CMOS 5 HR',
        video: '6.2K 30p, 4K 60p',
        stabilization: '5-осевая IBIS',
        connectivity: 'Wi-Fi 6, Bluetooth 4.2'
      }
    }
  ]
}; 