  import React, { useState, useEffect } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { 
    faCoffee, faUtensils, faWifi, faBath, faUser , 
    faRulerCombined 
  } from '@fortawesome/free-solid-svg-icons';
  

  const RoomCard = ({ room, onReserve }) => {
    return (
      <div className="bg-white rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative overflow-hidden">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-center uppercase mb-4">{room.title}</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <FontAwesomeIcon icon={faCoffee} className="text-gray-600" />
            {room.hasFood && <FontAwesomeIcon icon={faUtensils} className="text-gray-600" />}
            <FontAwesomeIcon icon={faBath} className="text-gray-600" />
            <FontAwesomeIcon icon={faWifi} className="text-gray-600" />
          </div>
          <div className="flex justify-center space-x-4 text-sm border-t border-b border-gray-200 py-2 mb-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUser } className="text-gray-600" />
              <span>{room.guests} Khách</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faRulerCombined} className="text-gray-600" />
              <span>{room.size} m²</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{room.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-red-600 font-bold">{room.price}₫/Đêm</span>
            <button 
              onClick={() => onReserve(room)} 
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 border-2 border-red-600 transition-colors uppercase"
            >
              Đặt Phòng
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Reviews = ({ reviews }) => {
    return (
      <div className="mb-4">
        <h4 className="font-semibold">Đánh giá:</h4>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="font-bold">{review.author}</p>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Chưa có đánh giá nào.</p>
        )}
      </div>
    );
  };

  const CommentForm = ({ onSubmit }) => {
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (comment && author) {
        onSubmit({ author, comment });
        setComment('');
        setAuthor('');
      } else {
        alert("Vui lòng nhập tên và bình luận.");
      }
    };

    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Tên của bạn"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Để lại bình luận..."
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Gửi</button>
      </form>
    );
  };

  const BookingModal = ({ room, onClose, onConfirm }) => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [reviews, setReviews] = useState([]);
      
    const calculateTotal = () => {
      if (checkInDate && checkOutDate) {
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const timeDifference = checkOut.getTime() - checkIn.getTime();
        const days = Math.max(0, Math.floor(timeDifference / (1000 * 3600 * 24)));
        
        if (days > 0) {
          const basePrice = parseFloat(room.price) || 0;
          let extraCharges = 0;

          if (room.hasFood) extraCharges += 50000;
          if (room.hasWifi) extraCharges += 20000;
          
          const total = (days * basePrice) + extraCharges;
          setTotalAmount(isNaN(total) ? 0 : total);
        } else {
          setTotalAmount(0);
        }
      } else {
        setTotalAmount(0);
      }
    };

    useEffect(() => {
      calculateTotal();
    }, [checkInDate, checkOutDate, room]);

    const handleConfirm = () => {
      if (checkInDate && checkOutDate && totalAmount > 0) {
        onConfirm(room, checkInDate, checkOutDate, totalAmount);
        onClose();
      } else {
        alert("Vui lòng nhập đầy đủ thông tin và chọn ngày hợp lệ.");
      }
    };

    const handleCommentSubmit = (newReview) => {
      setReviews([...reviews, newReview]);
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 className="text-xl font-semibold mb-4">Đặt Phòng: {room.title}</h3>
          <img src={room.image} alt={room.title} className="w-full h-48 object-cover mb-4" />
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="mb-4">
            <label className="block mb-1">Ngày nhận phòng:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Ngày trả phòng:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || new Date().toISOString().split('T')[0]}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <span className="font-bold">Tổng tiền: {totalAmount.toLocaleString()}₫</span>
          </div>
          <Reviews reviews={reviews} />
          <CommentForm onSubmit={handleCommentSubmit} />
          <div className="flex justify-between">
            <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">Hủy</button>
            <button 
              onClick={handleConfirm} 
              disabled={totalAmount <= 0}
              className={`px-4 py-2 rounded-lg ${
                totalAmount > 0 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Xác Nhận
            </button>
          </div>
        </div>
      </div>
    );
  };
  const RoomsSection = ({ title, apiEndpoint }) => {
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('default'); // Thêm state cho tiêu chí sắp xếp

    useEffect(() => {
      const fetchRooms = async () => {
        try {
          const response = await axios.get(apiEndpoint);
          setRooms(response.data);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      };
      fetchRooms();
    }, [apiEndpoint]);

    // Filter rooms based on search term
    const filteredRooms = rooms.filter(room =>
      room.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort rooms based on sortCriteria
    const sortedRooms = [...filteredRooms].sort((a, b) => {
      switch (sortCriteria) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'sizeAsc':
          return a.size - b.size;
        case 'sizeDesc':
          return b.size - a.size;
        default:
          return 0;
      }
    });

    // Calculate the index of the first and last room on the current page
    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = sortedRooms.slice(indexOfFirstRoom, indexOfLastRoom);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const navigate = useNavigate();
    const handleReserve = (room) => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Bạn cần đăng nhập để đặt phòng.');
        navigate('/login'); // Điều hướng đến trang đăng nhập
        return;
      }
      setSelectedRoom(room);
    };
    

    const handleConfirmReservation = (room, checkInDate, checkOutDate, totalAmount) => {
      const confirmPayment = window.confirm(`Tổng số tiền là ${totalAmount}₫. Bạn có muốn thanh toán không?`);
    
      if (confirmPayment) {
        const newTransaction = {
          room: room.title,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          image: room.image,
          total: totalAmount
        };
    
        // Lấy dữ liệu cũ từ localStorage
        const existingHistory = JSON.parse(localStorage.getItem('paymentHistory')) || [];
        const updatedHistory = [...existingHistory, newTransaction];
    
        // Lưu lại vào localStorage
        localStorage.setItem('paymentHistory', JSON.stringify(updatedHistory));
    
        setPaymentSuccess(true);
        setSelectedRoom(null); // Đóng modal
      }
    };
    

    return (
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto my-4"></div>
          <input
            type="text"
            placeholder="Tìm kiếm phòng..."
            className="border border-gray-300 rounded-lg p-2 w-1/2 mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            className="border border-gray-300 rounded-lg p-2" 
          >
            <option value="default">Mặc định</option>
            <option value="priceAsc">Giá tăng dần</option>
            <option value="priceDesc">Giá giảm dần</option>
            <option value="sizeAsc">Diện tích tăng dần</option>
            <option value="sizeDesc">Diện tích giảm dần</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentRooms.length > 0 ? (
            currentRooms.map((room) => <RoomCard key={room.id} room={room} onReserve={handleReserve} />)
          ) : (
            <p className="text-center col-span-full">Không có phòng nào để hiển thị.</p>
          )}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {Array.from({ length: Math.ceil(sortedRooms.length / roomsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {selectedRoom && (
          <BookingModal 
            room={selectedRoom} 
            onClose={() => setSelectedRoom(null)} 
            onConfirm={handleConfirmReservation} 
          />
        )}
        {paymentSuccess && (
          <div className="mt-4 text-center text-green-600">
            <p>Thanh toán thành công! Cảm ơn bạn đã đặt phòng.</p>
            <button 
      onClick={() => navigate('/profile')} 
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      Xem lịch sử thanh toán
    </button>
          </div>
        )}
      </section>
    );
  };

  export default RoomsSection;