import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="20" height="20" fill="none" stroke="%23999" stroke-width="0.5"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          {...fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Về Chúng Tôi
          </h2>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Bean Hotel - Khách sạn 5 sao đẳng cấp quốc tế tại TP. Hồ Chí Minh
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/hotel-exterior.webp"
              alt="Bean Hotel Exterior"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">5★</span>
              <span className="text-sm font-medium text-gray-600 mt-1">Đẳng Cấp Quốc Tế</span>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dịch Vụ
                </h3>
                <p className="text-gray-600">
                  Đa dạng dịch vụ cao cấp từ nhà hàng, hội nghị đến chơi golf
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cam Kết
                </h3>
                <p className="text-gray-600">
                  Đảm bảo chất lượng dịch vụ tốt nhất cho mọi khách hàng
                </p>
              </div>
            </div>

            <motion.button
              className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Đặt Phòng Ngay</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;