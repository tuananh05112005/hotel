import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUtensils, faWifi, faBath,  faUser, faRulerCombined } from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({ image, title, guests, size, price, hasFood }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-white opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-20 transition-all duration-500 ease-in-out origin-left" />
        <div className="absolute inset-0 bg-white opacity-0 scale-y-0 group-hover:scale-y-100 group-hover:opacity-20 transition-all duration-500 ease-in-out origin-top" />
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-center uppercase mb-6">{title}</h3>
        
        <div className="flex justify-center space-x-8 mb-6">
          <FontAwesomeIcon icon={faCoffee} className="text-gray-600" />
          {hasFood && <FontAwesomeIcon icon={faUtensils} className="text-gray-600" />}
          <FontAwesomeIcon icon={faBath} className="text-gray-600" />
          <FontAwesomeIcon icon={faWifi} className="text-gray-600" />
        </div>
        
        <div className="flex justify-center space-x-4 text-sm border-t border-b border-gray-200 py-4 mb-6">
          <div className="flex items-center space-x-2">
                     <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                     <span>{guests}</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <FontAwesomeIcon icon={faRulerCombined} className="text-gray-600" />
                     <span>{size}</span>
                   </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-red-600 font-bold">{price}₫/Đêm</span>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-white hover:text-red-500 rounded-lg border-2 border-red-500 transition-colors uppercase">
            Đặt phòng
          </button>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = () => {
  const rooms = [
    {
      image: "assets/p1.webp",
      title: "Phòng Đơn Tiêu Chuẩn",
      guests: "01 Khách",
      size: "25m²",
      price: "500.000",
      hasFood: false,
    },
    {
      image: "assets/p2.webp",
      title: "Phòng Đơn View Thành Phố",
      guests: "02 Khách",
      size: "30m²",
      price: "700.000",
      hasFood: true,
    },
    {
      image: "assets/p3.webp",
      title: "Phòng Đơn View Sân Vườn",
      guests: "02 Khách",
      size: "30m²",
      price: "800.000",
      hasFood: false,
    },
    {
      image: "assets/p4.webp",
      title: "Phòng Đơn View Biển",
      guests: "04 Khách",
      size: "32m²",
      price: "900.000",
      hasFood: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">PHÒNG ĐƠN</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gray-400"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-0.5 bg-gray-400"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            guests={room.guests}
            size={room.size}
            price={room.price}
            hasFood={room.hasFood}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
