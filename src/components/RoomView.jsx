import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCoffee, faUtensils, faWifi, faBath, faUser, 
  faTShirt, faRulerCombined, faAngleRight 
} from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({ image, title, guests, size, description, hasPrice, hasTittle, hasFull }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden group/card transition-all duration-500
      ${hasFull ? 'border border-gray-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-1' : 'hover:shadow-lg'}`}>
      <div className="relative overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className={`w-full object-cover transition-all duration-700 ease-out group-hover/card:scale-110 
              ${hasFull ? 'h-auto' : 'h-[280px]'}`}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 
            group-hover/card:opacity-100 transition-opacity duration-500" />
          
          {/* Shine Effect */}
          <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent 
            via-white/30 to-transparent transform group-hover/card:translate-x-full transition-transform 
            duration-1000 ease-in-out" />
        </div>

        {/* Room Title Overlay */}
        {hasTittle && (
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-6 py-4 
            bg-gradient-to-t from-black/80 to-transparent transform translate-y-0 transition-transform duration-500">
            <h4 className="text-white text-xs font-bold tracking-wide">{title}</h4>
            {hasPrice && (
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg w-1/2
                text-sm font-medium shadow-lg transform group-hover/card:scale-105 transition-transform duration-300">
                {hasPrice}
              </div>
            )}
          </div>
        )}
      </div>

      {hasFull && (
        <div className="p-8 space-y-6">
          {/* Title */}
          <h4 className="text-xl font-bold tracking-wide text-gray-800">{title}</h4>
          
          {/* Amenities Icons */}
          <div className="flex justify-end space-x-8">
            {[faCoffee, faUtensils, faBath, faTShirt, faWifi].map((icon, index) => (
              <div key={index} className="group/icon relative">
                <FontAwesomeIcon 
                  icon={icon} 
                  className="text-gray-400 hover:text-red-500 transform hover:scale-125 transition-all duration-300" 
                  size="lg"
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 
                  rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
                  {icon.iconName === 'coffee' && 'Minibar'}
                  {icon.iconName === 'utensils' && 'Bữa sáng'}
                  {icon.iconName === 'bath' && 'Bồn tắm'}
                  {icon.iconName === 't-shirt' && 'Giặt ủi'}
                  {icon.iconName === 'wifi' && 'Wifi'}
                </div>
              </div>
            ))}
          </div>

          {/* Room Details */}
          <div className="flex space-x-8 text-gray-600 text-sm">
            <span className="flex items-center space-x-2 group/detail">
              <FontAwesomeIcon icon={faUser} className="group-hover/detail:text-red-500 transition-colors" />
              <span>{guests} Khách</span>
            </span>
            <span className="flex items-center space-x-2 group/detail">
              <FontAwesomeIcon icon={faRulerCombined} className="group-hover/detail:text-red-500 transition-colors" />
              <span>{size} m²</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          {/* Booking Button */}
          <button className="group/btn relative w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 
            rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:from-red-500 hover:to-red-600 ">
            <span className="relative z-10 flex items-center justify-center">
              ĐẶT PHÒNG TỪ 2.500.000₫/Đêm
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 
              group-hover/btn:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      )}
    </div>
  );
};

const RoomsSection = () => {
  const mainRoom = {
    id: 1,
    image: "assets/p10.webp",
    title: "PHÒNG ĐƠN VIP",
    guests: "02",
    size: "35",
    description: "Với tiêu chí ngày càng nâng cao và đáp ứng mọi nhu cầu của khách hàng chúng tôi cung cấp thêm loại phòng đơn...",
    hasTittle: false,
    hasFull: true
  };

  const otherRooms = [
    {
      id: 2,
      image: "assets/p11.webp",
      title: "PHÒNG GIA ĐÌNH",
      hasPrice: "3.000.000₫/Đêm",
      hasTittle: true
    },
    {
      id: 3,
      image: "assets/p12.webp",
      title: "CĂN HỘ CHUNG CƯ",
      hasPrice: "2.700.000₫/Đêm",
      hasTittle: true
    },
    {
      id: 4,
      image: "assets/p13.webp",
      title: "PHÒNG HẠNG SANG",
      hasPrice: "3.500.000₫/Đêm",
      hasTittle: true
    },
    {
      id: 5,
      image: "assets/p14.webp",
      title: "PHÒNG ĐÔI NỐI LIỀN",
      hasPrice: "4.000.000₫/Đêm",
      hasTittle: true
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">PHÒNG VIP</h2>
        <div className="relative flex justify-center items-center">
          <div className="w-24 h-0.5 bg-red-500"></div>
          <div className="absolute w-16 h-0.5 bg-red-500 -translate-y-2"></div>
          <div className="absolute w-16 h-0.5 bg-red-500 translate-y-2"></div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main room */}
        <div className="lg:col-span-1">
          <RoomCard {...mainRoom} />
        </div>
        
        {/* Other rooms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {otherRooms.map(room => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;