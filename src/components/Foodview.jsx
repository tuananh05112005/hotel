import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import  "./Foodview.css"

const MenuData = {
  'mon-an': [
    {
      id: 1,
      name: 'MÌ XÀOÀO BÒ',
      price: 80000,
      originalPrice: 100000,
      discount: 20,
      image: 'assets/f1.webp',
    },
    {
      id: 2,
      name: 'BÚN XÀOÀO THỊT HEO',
      price: 75000,
      originalPrice: 90000,
      discount: 17,
      image: 'assets/f2.webp',
    },
    {
      id: 3,
      name: 'BÚN BÒ HUẾ',
      price: 95000,
      originalPrice: 100000,
      discount: 5,
      image: 'assets/f3.webp',
    },
    {
      id: 4,
      name: 'MÌ XÀO THỊT HEO',
      price: 85000,
      originalPrice: 97000,
      discount: 12,
      image: 'assets/f4.webp',
    },
    {
      id: 5,
      name: 'BÁNH MÌ ỐP LA TRỨNG',
      price: 40000,
      originalPrice: 40000,
      discount: 0,
      image: 'assets/f5.webp',
    },
    {
      id: 6,
      name: 'BÚN BÒ - HEO',
      price: 80000,
      originalPrice: 90000,
      discount: 11,
      image: 'assets/f7.webp',
    },
    {
      id: 7,
      name: 'BÁNH MÌ BÒ KHO',
      price: 70000,
      originalPrice: 90000,
      discount: 22,
      image: 'assets/f6.webp',
    },
    {
      id: 8,
      name: 'CƠM SƯỜN TRỨNG',
      price: 50000,
      originalPrice: 60000,
      discount: 17,
      image: 'assets/f8.webp',
    }
  ],
  'do-uong': [
    {
      id: 1,
      name: 'TRÀ ĐÀO CAM SẢ',
      price: 30000,
      originalPrice: 23000,
      discount: 25,
      image: 'assets/f9.webp',
    },
    {
      id: 2,
      name: 'MATCHA ĐÁ XAY',
      price: 55000,
      originalPrice: 3,
      discount: 0,
      image: 'assets/f10.webp',
    },
    {
      id: 3,
      name: 'CAM VẮT',
      price: 45000,
      originalPrice: 0,
      discount: 0,
      image: 'assets/f11.webp',
    },
    {
      id: 4,
      name: 'TRÀ QUẾ CAM THẢO',
      price: 80000,
      originalPrice: 90000,
      discount: 11,
      image: 'assets/f12.webp',
    },
    {
      id: 5,
      name: 'TRÀ XANH HOA NHÀI',
      price: 60000,
      originalPrice: 80000,
      discount: 25,
      image: 'assets/f13.webp',
    },
    {
      id: 6,
      name: 'CAFE DỪA SALA',
      price: 50000,
      originalPrice: 60000,
      discount: 17,
      image: 'assets/f14.webp',
    },
    {
      id: 7,
      name: 'TRÀ YODURT ĐÀO',
      price: 90000,
      originalPrice: 0,
      discount: 0,
      image: 'assets/f15.webp',
    },
    {
      id: 8,
      name: 'TRÀ HOA HỒNG KEM',
      price: 60000,
      originalPrice: 0,
      discount: 0,
      image: 'assets/f16.webp',
    }
  ],
  'banh-ngot': [
    {
      id: 1,
      name: 'BÁNH TIRAMISU',
      price: 55000,
      originalPrice: 23000,
      discount: 15,
      image: 'assets/f17.jpg',
    },
    {
      id: 2,
      name: 'BÁNH CHOCOLATE',
      price: 45000,
      originalPrice: 30000,
      discount: 10,
      image: 'assets/f18.jpg',
    },
    {
      id: 3,
      name: 'BÁNH CHEESE CAKE',
      price: 60000,
      originalPrice: 70000,
      discount: 14,
      image: 'assets/f20.jpg',
    },
    {
      id: 4,
      name: 'BÁNH DONUT',
      price: 90000,
      originalPrice: 100000,
      discount: 17,
      image: 'assets/f21.jpg',
    }
  ]
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ'
};

const ActionButton = ({ icon, label, onClick, delay = 0 }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button 
        className={`bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 active:scale-95`}
        style={{ transitionDelay: `${delay}ms` }}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </button>
      {/* Tooltip */}
      <div 
        className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap transition-all duration-200 ${
          showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {label}
        {/* Tooltip arrow */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
      </div>
    </div>
  );
};

const MenuGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {items.map((menuItem) => (
        <div
          key={menuItem.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up"
        >
          <div className="relative group">
            <img
              src={menuItem.image}
              alt={menuItem.name}
              className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay with icons */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] group-hover:backdrop-blur-[1px]">
              <ActionButton 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-wiggle" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                }
                label="Thêm vào giỏ hàng"
                onClick={() => {}}
              />
              <ActionButton 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                }
                label="Xem chi tiết"
                onClick={() => {}}
                delay={100}
              />
            </div>
            {menuItem.discount > 0 && (
              <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
                <span className="text-sm">-{menuItem.discount}%</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2 transition-colors duration-300 group-hover:text-orange-500">
              {menuItem.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold transition-transform duration-300 hover:scale-110">
                {formatPrice(menuItem.price)}
              </span>
              {menuItem.originalPrice > menuItem.price && (
                <span className="text-gray-500 text-sm line-through">
                  {formatPrice(menuItem.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Thêm keyframes mới cho animation


const MenuLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || 'mon-an';

  const categories = [
    { path: 'mon-an', label: 'MÓN ĂN' },
    { path: 'do-uong', label: 'ĐỒ UỐNG' },
    { path: 'banh-ngot', label: 'BÁNH NGỌT' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">ẨM THỰC</h1>
        <div className="w-24 h-1 bg-gray-300 mx-auto mt-2"></div>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-8 mb-8">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={`/${category.path}`}
            className={`text-lg font-medium px-4 py-2 border-b-2 transition-colors ${
              currentPath === category.path
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-600 hover:text-orange-500'
            }`}
          >
            {category.label}
          </Link>
        ))}
      </div>

      {/* Menu Content */}
      <Routes>
        <Route path="/" element={<MenuGrid items={MenuData['mon-an']} />} />
        <Route path="/mon-an" element={<MenuGrid items={MenuData['mon-an']} />} />
        <Route path="/do-uong" element={<MenuGrid items={MenuData['do-uong']} />} />
        <Route path="/banh-ngot" element={<MenuGrid items={MenuData['banh-ngot']} />} />
      </Routes>
    </div>
  );
};

const VietnameseMenu = () => {
  return (
    <BrowserRouter>
      <MenuLayout />
    </BrowserRouter>
  );
};

export default VietnameseMenu;