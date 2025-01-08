import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: '10 xu hướng thịnh hành trong ngành khách sạn 2022',
      excerpt: 'Không gian ngoài trời mở rộng hơn, nâng cấp công nghệ để hạn chế tối đa tiếp xúc là những xu hướng mới nhiều khách...',
      image: 'assets/h1.webp',
      date: '06/12/2022',
      author: 'Bean Hotel',
      category: 'Xu hướng'
    },
    {
      id: 2,
      title: 'Những điều kiêng kị khi ở khách sạn mà bạn nên biết',
      excerpt: 'Để không gặp nhiều phiền toái và giữ an toàn cho chính bản thân trong mỗi chuyến đi, bạn nên cần thận tìm hiểu một...',
      image: 'assets/h2.webp',
      date: '06/12/2022',
      author: 'Bean Hotel',
      category: 'Kinh nghiệm'
    },
    {
      id: 3,
      title: 'Ý nghĩa việc khách sạn để chocolate lên gối khi dọn phòng',
      excerpt: 'Các quản lý khách sạn phát hiện ra dịch vụ này nhận được nhiều lời khen từ khách thuê phòng hơn bất kỳ hoạt động...',
      image: 'assets/h3.webp',
      date: '06/12/2022',
      author: 'Bean Hotel',
      category: 'Dịch vụ'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-medium mb-4 block"
          >
            Blog & Tin Tức
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            HIỂU BIẾT KHÁCH SẠN
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-24 h-1 bg-amber-500 mx-auto"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={item}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-amber-500 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-amber-500 font-medium group/button"
                >
                  Đọc Thêm
                  <ArrowRight 
                    size={18} 
                    className="transform group-hover/button:translate-x-1 transition-transform duration-300"
                  />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;