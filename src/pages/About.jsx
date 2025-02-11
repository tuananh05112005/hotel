import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const Stats = [
    { number: "150+", label: "Phòng Nghỉ" },
    { number: "4.9", label: "Đánh Giá" },
    { number: "24/7", label: "Hỗ Trợ" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with modern typography */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-base font-semibold tracking-wide uppercase">
              Về Chúng Tôi
            </span>
          </motion.div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Bean Hotel
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-600 font-normal">
              Khách sạn 5 sao đẳng cấp quốc tế
            </span>
          </h1>
        </motion.div>

        {/* Main content with modern layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Image and stats */}
          <motion.div 
            className="lg:col-span-7 relative"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.img
                src="assets/v1.webp"
                alt="Bean Hotel Exterior"
                className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Floating stats cards */}
              <div className="absolute -right-8 bottom-8 flex flex-col gap-4">
                {Stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg w-48"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  >
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <p className="text-xl font-bold text-gray-600 leading-relaxed">
                Tọa lạc tại trung tâm TP. Hồ Chí Minh, Bean Hotel là sự kết hợp hoàn hảo giữa kiến trúc hiện đại và dịch vụ đẳng cấp quốc tế.
              </p>
              <p className="text-xl font-bold text-gray-600 leading-relaxed">
                Mỗi không gian được thiết kế tinh tế, mang đến trải nghiệm độc đáo và sang trọng cho du khách.
              </p>
            </div>

            {/* Modern feature boxes */}
            <div className="grid gap-6">
              {["Phòng hạng sang", "Nhà hàng 5 sao", "Hội nghị & Sự kiện"].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl"
                  whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-gray-900">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modern CTA button */}
            <motion.button
              className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <a href="/"><span>Đặt Phòng Ngay</span></a>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;