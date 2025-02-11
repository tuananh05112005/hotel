import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Calendar, Clock, MapPin } from 'lucide-react';

const ServicePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const events = [
    {
      title: "Tổ chức tiệc hội nghị, hội thảo cao cấp",
      image: "/api/placeholder/400/300",
      category: "conference",
      description: "Không gian sang trọng, thiết bị hiện đại, đội ngũ nhân viên chuyên nghiệp sẽ mang đến sự kiện đẳng cấp và ấn tượng.",
      features: ["Sức chứa 500 người", "Âm thanh hiện đại", "Màn hình LED"],
      rating: 4.9
    },
    {
      title: "Tổ chức tiệc cưới - kết nối nhân duyên",
      image: "/api/placeholder/400/300",
      category: "wedding",
      description: "Trang trí độc đáo, dịch vụ chuyên nghiệp, tạo nên không gian lãng mạn cho ngày trọng đại của bạn.",
      features: ["Sức chứa 300 người", "Trang trí theo chủ đề", "Đội ngũ chuyên nghiệp"],
      rating: 5.0
    },
    {
      title: "Tổ chức tiệc cưới - hội ngoài trời",
      image: "/api/placeholder/400/300",
      category: "outdoor",
      description: "Không gian thoáng đãng, view đẹp, tạo nên những khoảnh khắc đáng nhớ dưới bầu trời xanh.",
      features: ["View biển", "Âm thanh ánh sáng", "Lễ cưới hoàng hôn"],
      rating: 4.8
    },
    {
      title: "Gói hội nghị, hội thảo tổ chức trong ngày",
      image: "/api/placeholder/400/300",
      category: "daily",
      description: "Linh hoạt, tiết kiệm thời gian, đáp ứng mọi nhu cầu tổ chức sự kiện chuyên nghiệp.",
      features: ["Trang thiết bị đầy đủ", "Tea-break", "Hỗ trợ 24/7"],
      rating: 4.7
    }
  ];

  const wellness = [
    {
      title: "Nghỉ dưỡng kết hợp massage thư giãn với đá nóng",
      image: "/api/placeholder/400/300",
      description: "Thư giãn toàn diện với đá nóng, giúp cơ thể thư giãn và phục hồi năng lượng tích cực.",
      duration: "120 phút",
      price: "1,200,000đ",
      rating: 4.9
    },
    {
      title: "Tắm trắng và kết hợp dưỡng da toàn thân",
      image: "/api/placeholder/400/300",
      description: "Làn da trắng sáng, mịn màng với liệu trình chăm sóc toàn diện từ các chuyên gia có kỹ năng.",
      duration: "90 phút",
      price: "890,000đ",
      rating: 4.8
    },
    {
      title: "Massage body toàn thân bằng tinh dầu và hơi nước",
      image: "/api/placeholder/400/300",
      description: "Giải tỏa căng thẳng, thư giãn cơ thể với liệu pháp tinh dầu và hơi nước độc đáo.",
      duration: "75 phút",
      price: "750,000đ",
      rating: 4.9
    },
    {
      title: "Tẩy da chết toàn thân bằng tinh chất cám gạo, ngũ cốc",
      image: "/api/placeholder/400/300",
      description: "Làn da mềm mại, tươi trẻ với các thành phần tự nhiên an toàn cho da.",
      duration: "60 phút",
      price: "650,000đ",
      rating: 4.7
    }
  ];

  const ServiceCard = ({ title, image, description, features, rating, duration, price }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl group"
    >
      <div className="relative h-72">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white flex items-center justify-center space-x-2">
              <span>Đặt lịch ngay</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        {rating && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        )}
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        {features && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {duration && price && (
          <div className="mt-6 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="font-semibold text-orange-500">{price}</div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dịch vụ đẳng cấp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trải nghiệm dịch vụ cao cấp với đội ngũ chuyên nghiệp, trang thiết bị hiện đại 
            và không gian sang trọng
          </p>
        </div>

        {/* Events Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 relative">
              HỘI NGHỊ - CƯỚI HỎI
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
            </h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === 'all' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                Tất cả
              </button>
              <button 
                onClick={() => setActiveCategory('wedding')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === 'wedding' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                Tiệc cưới
              </button>
              <button 
                onClick={() => setActiveCategory('conference')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === 'conference' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                Hội nghị
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events
              .filter(event => activeCategory === 'all' || event.category === activeCategory)
              .map((event, index) => (
                <ServiceCard key={index} {...event} />
              ))
            }
          </div>
        </section>

        {/* Wellness Section */}
        <section>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 relative">
              SỨC KHỎE - LÀM ĐẸP
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wellness.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;