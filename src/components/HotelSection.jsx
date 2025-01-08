import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Hotel, Users, Sparkles, X, Bed, Utensils, Wifi, Car, Coffee, Phone } from 'lucide-react';

const ServiceDetails = {
  "KHÁCH SẠN": {
    features: [
      { icon: Bed, text: "Phòng Suite sang trọng" },
      { icon: Utensils, text: "Nhà hàng 5 sao" },
      { icon: Wifi, text: "Wi-Fi tốc độ cao" },
      { icon: Car, text: "Dịch vụ đưa đón" }
    ],
    description: "Trải nghiệm đẳng cấp tại khách sạn 5 sao của chúng tôi với các tiện nghi hiện đại và dịch vụ chuyên nghiệp. Tận hưởng không gian sang trọng, ẩm thực đẳng cấp và dịch vụ phòng 24/7.",
    image: "assets/b1.webp"
  },
  "PHÒNG HỌP": {
    features: [
      { icon: Wifi, text: "Thiết bị hội nghị hiện đại" },
      { icon: Coffee, text: "Dịch vụ ăn uống" },
      { icon: Users, text: "Sức chứa lớn" },
      { icon: Phone, text: "Hỗ trợ kỹ thuật 24/7" }
    ],
    description: "Không gian họp chuyên nghiệp với đầy đủ trang thiết bị hiện đại. Phòng họp của chúng tôi được thiết kế linh hoạt, có thể đáp ứng từ cuộc họp nhỏ đến hội nghị lớn.",
    image: "assets/b5.webp"
  },
  "LÀM ĐẸP": {
    features: [
      { icon: Sparkles, text: "Spa cao cấp" },
      { icon: Coffee, text: "Thư giãn toàn diện" },
      { icon: Users, text: "Chuyên gia kinh nghiệm" },
      { icon: Phone, text: "Đặt lịch dễ dàng" }
    ],
    description: "Thư giãn và làm đẹp với các dịch vụ spa cao cấp. Đội ngũ chuyên gia của chúng tôi sẽ mang đến cho bạn trải nghiệm thư giãn tuyệt vời với các liệu trình chăm sóc độc quyền.",
    image: "assets/b4.webp"
  }
};

const HotelSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      icon: <Hotel className="w-8 h-8 text-amber-600" />,
      title: "KHÁCH SẠN",
      description: "Không gian nghỉ dưỡng sang trọng, tiện nghi hiện đại, dịch vụ chuyên nghiệp",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "PHÒNG HỌP",
      description: "Phòng họp hiện đại với đầy đủ trang thiết bị cho các cuộc họp quan trọng",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-600" />,
      title: "LÀM ĐẸP",
      description: "Dịch vụ spa cao cấp, mang đến trải nghiệm thư giãn tuyệt vời",
      gradient: "from-amber-500 to-yellow-400"
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="group"
              onClick={() => setSelectedService(service.title)}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-gray-900 text-2xl font-bold mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                  <div className="flex justify-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedService}</h2>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                      <img
                        src={ServiceDetails[selectedService].image}
                        alt={selectedService}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {ServiceDetails[selectedService].description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Tiện ích nổi bật</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {ServiceDetails[selectedService].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl"
                        >
                          <feature.icon className="w-6 h-6 text-amber-600" />
                          <span className="text-gray-700">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 mt-4"
                    >
                      Đặt dịch vụ ngay
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            {...fadeInUp}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="aspect-w-4 aspect-h-5">
              <img 
                src="assets/b1.webp"
                alt="Luxury Hotel Room"
                className="w-screen h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                TIỆN NGHI SANG TRỌNG
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Chúng tôi mang lại không gian thư giãn và tiện nghi đáp ứng mọi nhu cầu cho bạn. 
                Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, 
                nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã 
                được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho 
                quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-amber-200 transition-all duration-300"
            >
              ĐẶT PHÒNG NGAY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelSection;