import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Enhanced Image Container */}
        <div className="md:w-1/2 group relative overflow-hidden rounded-2xl">
          {/* Background Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-700" />
          
          {/* Image Wrapper */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Main Image */}
            <img
              src="assets/about.webp"
              alt="Hotel Reception"
              className="w-full h-[500px] object-cover transform transition-all duration-700 ease-out 
                         group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Shine Effect */}
            <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
                          transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-yellow-400 opacity-0 
                          group-hover:opacity-100 transition-all duration-500 delay-100" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-yellow-400 opacity-0 
                          group-hover:opacity-100 transition-all duration-500 delay-100" />
            
            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 
                            group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <p className="text-2xl font-bold">Bean Hotel</p>
                <p className="text-sm">Trải nghiệm đẳng cấp 5 sao</p>
              </div>
            </div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 
                        group-hover:opacity-70 transition-all duration-700 animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-300 rounded-full opacity-0 
                        group-hover:opacity-70 transition-all duration-700 animate-pulse" />
        </div>

        {/* Content Container */}
        <div className="md:w-1/2 space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-800 relative">
              Bean Hotel
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200"></span>
            </h2>
            <h3 className="text-2xl font-medium text-gray-600">
              Giới thiệu về chúng tôi
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">
            Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận
            chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với
            hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt, chúng
            tôi mang lại sự thoải mái tối đa cho khách hàng.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-2 group/item">
              <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover/item:scale-150 transition-transform" />
              <span className="text-gray-700">Phòng sang trọng</span>
            </div>
            <div className="flex items-center gap-2 group/item">
              <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover/item:scale-150 transition-transform" />
              <span className="text-gray-700">Dịch vụ 24/7</span>
            </div>
            <div className="flex items-center gap-2 group/item">
              <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover/item:scale-150 transition-transform" />
              <span className="text-gray-700">Nhà hàng 5 sao</span>
            </div>
            <div className="flex items-center gap-2 group/item">
              <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover/item:scale-150 transition-transform" />
              <span className="text-gray-700">Spa & Fitness</span>
            </div>
          </div>

          {/* Button */}
          <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 
                           font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg">
            <span className="relative z-10 group-hover:text-gray-800">Xem thêm</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-100 
                          transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;