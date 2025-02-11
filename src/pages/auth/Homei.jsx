import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin người dùng từ localStorage

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Trang chủ
          </h2>
        </div>
        {user ? (
          <div className="text-center">
            <p className="text-lg text-gray-900">Xin chào, {user.name}!</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            {/* Hiển thị thêm thông tin người dùng nếu có */}
          </div>
        ) : (
          <p className="text-center text-gray-600">Vui lòng đăng nhập để xem thông tin.</p>
        )}
      </div>
    </div>
  );
};

export default Home;