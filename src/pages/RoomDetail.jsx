import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RoomDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/rooms/${id}`);
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };
    fetchRoomDetails();
  }, [id]);

  if (!room) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="relative overflow-hidden">
          <img src={room.image} alt={room.title} className="w-full h-[400px] object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl font-semibold text-center">{room.title}</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <p className="text-gray-600">{room.hasFood ? 'Có đồ ăn' : 'Không có đồ ăn'}</p>
            <p className="text-gray-600">{room.size} m²</p>
          </div>
          <p className="text-gray-600 text-lg mb-4">{room.description}</p>
          <div className="text-red-600 font-bold text-xl mb-4">{room.price}₫/Đêm</div>
          <div className="flex justify-between items-center">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 border-2 border-red-600 transition-colors uppercase">
              Đặt Phòng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
