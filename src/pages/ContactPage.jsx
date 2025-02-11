import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Check, Loader2, X } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [activeInput, setActiveInput] = useState(null);
  const [notification, setNotification] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setNotification({ type: 'success', message: 'Tin nhắn đã được gửi thành công!' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const InfoCard = ({ icon: Icon, title, content }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-gray-800 hover:border-gray-700 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 60%)`
          }}
        ></div>
        <div className="relative z-10">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-lg opacity-20"></div>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {content}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,126,0,0.1) 0%, transparent 35%)`
        }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl py-24 relative">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
          <h1 className="text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-orange-200 to-pink-500 text-transparent bg-clip-text">
              Liên Hệ
            </span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: MapPin, title: 'Địa Chỉ', content: '70 Lữ Gia, P.15, Q.11, TP.HCM' },
            { icon: Phone, title: 'Điện Thoại', content: '1900 6750' },
            { icon: Mail, title: 'Email', content: 'support@sapo.vn' },
            { icon: Clock, title: 'Giờ Làm Việc', content: 'Mở cửa 24/24' }
          ].map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-12 border border-gray-800">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Gửi tin nhắn
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: 'name', label: 'Họ và tên', type: 'text' },
                  { id: 'email', label: 'Email', type: 'email' }
                ].map(({ id, label, type }) => (
                  <div key={id} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
                    <input
                      type={type}
                      id={id}
                      required
                      className="block w-full bg-gray-900 rounded-lg px-6 py-4 text-white border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300 relative"
                      placeholder={label}
                      onFocus={() => setActiveInput(id)}
                      onBlur={() => setActiveInput(null)}
                    />
                  </div>
                ))}

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="block w-full bg-gray-900 rounded-lg px-6 py-4 text-white border-0 focus:ring-2 focus:ring-orange-500 transition-all duration-300 relative resize-none"
                    placeholder="Nội dung tin nhắn"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="relative group w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl opacity-70 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <div className="relative px-8 py-4 bg-gray-900 rounded-xl flex items-center justify-center space-x-3 text-white font-medium transition-all duration-300">
                    {formStatus === 'idle' && (
                      <>
                        <span>Gửi Tin Nhắn</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Đang gửi...</span>
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Đã gửi!</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.65039629999999!3d10.771940699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zNzAgTMawIEdpYSwgUGjGsOG7nW5nIDE1LCBRdeG6rW4gMTEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1705941234567!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-8 right-8 animate-slide-up">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl opacity-70 blur"></div>
            <div className="relative px-6 py-4 bg-gray-900 rounded-xl flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-white">{notification.message}</span>
              <button 
                onClick={() => setNotification(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;