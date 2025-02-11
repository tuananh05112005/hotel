// components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    alert('Bạn đã đăng xuất thành công');
    navigate('/login'); // Chuyển hướng về trang đăng nhập
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Đang đăng xuất...</h2>
      </div>
    </div>
  );
};

export default Logout;
