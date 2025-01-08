import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, 
  Instagram, Youtube, ArrowRight, Bell, Send,
  Coffee, Wifi, Car, Clock, CreditCard
} from 'lucide-react';

const AnimatedIcon = ({ icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay 
    }}
  >
    <Icon className="w-5 h-5" />
  </motion.div>
);

const HoverCard = ({ children }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      y: -5,
      backgroundColor: "rgba(255,255,255,0.05)" 
    }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="p-4 rounded-xl backdrop-blur-sm transition-colors"
  >
    {children}
  </motion.div>
);

const LocationCard = ({ address, phone }) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="flex items-start space-x-3 group"
  >
    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center
      group-hover:bg-yellow-500 transition-colors mt-1">
      <MapPin className="w-4 h-4 group-hover:text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm">{address}</span>
      <span className="text-sm text-yellow-500">Hotline: {phone}</span>
    </div>
  </motion.div>
);

const Footer = () => {
  const [isNewsletterFocused, setIsNewsletterFocused] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const locations = [
    {
      address: "235/45 Bình Tiên, Phường 8, Quận 6",
      phone: "0862.365.987"
    },
    {
      address: "54 Tôn Thất Tùng, Phường Bến Thành, Quận 1",
      phone: "0862.365.988"
    },
    {
      address: "85 Hoàng Sa, Quận Bình Thạnh",
      phone: "0862.365.989"
    },
    {
      address: "35 Nguyễn Văn Nghi, Phường 4, Quận Gò Vấp",
      phone: "0862.365.990"
    },
    {
      address: "35 Huỳnh Tấn Phát, Quận 7",
      phone: "0862.365.991"
    },
    {
      address: "268 Lý Chính Thắng, Phường 9, Quận 3",
      phone: "0862.365.992"
    }
  ];

  const advantages = [
    { icon: Coffee, text: "Dịch vụ 5 sao" },
    { icon: Wifi, text: "Wifi miễn phí" },
    { icon: Car, text: "Đưa đón sân bay" },
    { icon: Clock, text: "Phục vụ 24/7" },
    { icon: CreditCard, text: "Thanh toán linh hoạt" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,180,0,0.1),transparent)]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "200% 200%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            background: "radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.1) 100%)"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto pt-20 pb-12 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Advantages Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
          variants={containerVariants}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center space-x-3 text-sm"
            >
              <item.icon className="w-5 h-5 text-yellow-500" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Locations Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {locations.map((location, index) => (
            <motion.div key={index} variants={itemVariants}>
              <LocationCard {...location} />
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="relative max-w-2xl mx-auto mb-20 text-center"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Đăng Ký Nhận Thông Tin
          </motion.h3>
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-xl"
              animate={{
                scale: isNewsletterFocused ? [1, 1.2, 1] : 1,
                opacity: isNewsletterFocused ? 1 : 0.5
              }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-6 py-4 rounded-l-full bg-white/10 border border-white/20 
                  focus:outline-none focus:border-yellow-500/50 backdrop-blur-sm transition-all"
                onFocus={() => setIsNewsletterFocused(true)}
                onBlur={() => setIsNewsletterFocused(false)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 rounded-r-full bg-gradient-to-r from-yellow-500 to-red-500 
                  text-white font-medium flex items-center space-x-2"
              >
                <span>Đăng Ký</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <HoverCard>
              <h4 className="text-xl font-bold text-white mb-6">Liên Hệ</h4>
              <div className="space-y-4">
                <motion.a
                  href="tel:19006750"
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center
                    group-hover:bg-yellow-500 transition-colors">
                    <Phone className="w-4 h-4 group-hover:text-white" />
                  </div>
                  <span className="text-lg font-medium">1900 6750</span>
                </motion.a>
                <motion.a
                  href="mailto:support@sapo.vn"
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center
                    group-hover:bg-yellow-500 transition-colors">
                    <Mail className="w-4 h-4 group-hover:text-white" />
                  </div>
                  <span>support@sapo.vn</span>
                </motion.a>
              </div>
            </HoverCard>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <HoverCard>
              <h4 className="text-xl font-bold text-white mb-6">Kết Nối</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                      hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 
                      transition-all duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatedIcon icon={Icon} delay={index * 0.1} />
                  </motion.a>
                ))}
              </div>
            </HoverCard>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <HoverCard>
              <h4 className="text-xl font-bold text-white mb-6">Truy Cập Nhanh</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Về chúng tôi', 'Phòng & Suites', 'Ưu đãi', 'Đặt phòng', 'Tin tức', 'Liên hệ'].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-yellow-500 transition-colors">{item}</span>
                  </motion.a>
                ))}
              </div>
            </HoverCard>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.p variants={itemVariants} className="text-sm">
              © 2024 Bean Hotel. All rights reserved.
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Cookies</a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Float Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 
            flex items-center justify-center shadow-lg shadow-yellow-500/20"
        >
          <Bell className="w-6 h-6 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
            flex items-center justify-center shadow-lg"
        >
          <ArrowRight className="w-6 h-6 text-white transform rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;