import React, { useState } from 'react';
import { Eye, ShoppingCart } from 'lucide-react';

const MenuData = {
  'mon-an': [
    { id: 1, name: 'MÌ XÀO BÒ', price: 80000, originalPrice: 100000, discount: 20, image: 'assets/f1.webp' },
    { id: 2, name: 'BÚN XÀO THỊT HEO', price: 75000, originalPrice: 90000, discount: 17, image: 'assets/f2.webp' },
    { id: 3, name: 'BÚN BÒ HUẾ', price: 95000, originalPrice: 100000, discount: 5, image: 'assets/f3.webp' },
    { id: 4, name: 'MÌ XÀO THỊT HEO', price: 85000, originalPrice: 97000, discount: 12, image: 'assets/f4.webp' },
    { id: 5, name: 'BÁNH MÌ ỐP LA TRỨNG', price: 40000, originalPrice: 40000, discount: 0, image: 'assets/f5.webp' },
    { id: 6, name: 'BÚN BÒ - HEO', price: 80000, originalPrice: 90000, discount: 11, image: 'assets/f7.webp' },
    { id: 7, name: 'BÁNH MÌ BÒ KHO', price: 70000, originalPrice: 90000, discount: 22, image: 'assets/f6.webp' },
    { id: 8, name: 'CƠM SƯỜN TRỨNG', price: 50000, originalPrice: 60000, discount: 17, image: 'assets/f8.webp' },
  ],
  'do-uong': [
    { id: 1, name: 'TRÀ ĐÀO CAM SẢ', price: 30000, originalPrice: 23000, discount: 25, image: 'assets/f9.webp' },
    { id: 2, name: 'MATCHA ĐÁ XAY', price: 55000, originalPrice: 3, discount: 0, image: 'assets/f10.webp' },
    { id: 3, name: 'CAM VẮT', price: 45000, originalPrice: 0, discount: 0, image: 'assets/f11.webp' },
    { id: 4, name: 'TRÀ QUẾ CAM THẢO', price: 80000, originalPrice: 90000, discount: 11, image: 'assets/f12.webp' },
    { id: 5, name: 'TRÀ XANH HOA NHÀI', price: 60000, originalPrice: 80000, discount: 25, image: 'assets/f13.webp' },
    { id: 6, name: 'CAFE DỪA SALA', price: 50000, originalPrice: 60000, discount: 17, image: 'assets/f14.webp' },
    { id: 7, name: 'TRÀ YODURT ĐÀO', price: 90000, originalPrice: 0, discount: 0, image: 'assets/f15.webp' },
    { id: 8, name: 'TRÀ HOA HỒNG KEM', price: 60000, originalPrice: 0, discount: 0, image: 'assets/f16.webp' },
  ],
  'banh-ngot': [
    { id: 1, name: 'BÁNH TIRAMISU', price: 55000, originalPrice: 23000, discount: 15, image: 'assets/f17.jpg' },
    { id: 2, name: 'BÁNH CHOCOLATE', price: 45000, originalPrice: 30000, discount: 10, image: 'assets/f18.jpg' },
    { id: 3, name: 'BÁNH CHEESE CAKE', price: 60000, originalPrice: 70000, discount: 14, image: 'assets/f20.jpg' },
    { id: 4, name: 'BÁNH DONUT', price: 90000, originalPrice: 100000, discount: 17, image: 'assets/f21.jpg' },
  ],
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
};

const MenuGrid = ({ items }) => {
  const handleViewDetails = (item) => {
    console.log('View details for:', item.name);
  };

  const handleAddToCart = (item) => {
    console.log('Add to cart:', item.name);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {items.map((menuItem) => (
        <div key={menuItem.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up">
          <div className="relative group">
            <img src={menuItem.image} alt={menuItem.name} className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
            
            {/* Overlay with icons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <button
                onClick={() => handleViewDetails(menuItem)}
                className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Eye className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleAddToCart(menuItem)}
                className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-orange-500 hover:text-white"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>

            {menuItem.discount > 0 && (
              <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
                <span className="text-sm">-{menuItem.discount}%</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2">{menuItem.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">{formatPrice(menuItem.price)}</span>
              {menuItem.originalPrice > menuItem.price && (
                <span className="text-gray-500 text-sm line-through">{formatPrice(menuItem.originalPrice)}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MenuLayout = () => {
  const [currentCategory, setCurrentCategory] = useState('mon-an');

  const categories = [
    { key: 'mon-an', label: 'MÓN ĂN' },
    { key: 'do-uong', label: 'ĐỒ UỐNG' },
    { key: 'banh-ngot', label: 'BÁNH NGỌT' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">ẨM THỰC</h1>
        <div className="w-24 h-1 bg-gray-300 mx-auto mt-2"></div>
      </div>

      <div className="flex justify-center gap-8 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setCurrentCategory(category.key)}
            className={`text-lg font-medium px-4 py-2 border-b-2 transition-colors ${
              currentCategory === category.key
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-600 hover:text-orange-500'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <MenuGrid items={MenuData[currentCategory]} />
    </div>
  );
};

export default MenuLayout;