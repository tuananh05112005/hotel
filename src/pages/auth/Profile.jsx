import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Calendar, Search, ArrowUpDown, Trash2, X } from 'lucide-react';

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('paymentHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleDelete = (index) => {
    setDeleteItemId(index);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (deleteItemId !== null) {
      const newHistory = history.filter((_, index) => index !== deleteItemId);
      setHistory(newHistory);
      localStorage.setItem('paymentHistory', JSON.stringify(newHistory));
      setShowDeleteDialog(false);
      setDeleteItemId(null);
    }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedHistory = [...history]
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      const aValue = a[sortConfig.key] || '';
      const bValue = b[sortConfig.key] || '';
      if (sortConfig.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    })
    .filter((item) => {
      const searchString = Object.values(item).join(' ').toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });

  const pageCount = Math.ceil(sortedHistory.length / itemsPerPage);
  const paginatedHistory = sortedHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Lịch Sử Thanh Toán</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm"
            />
          </div>
        </div>

        {history.length > 0 ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {[
                      { key: 'room', label: 'Phòng' },
                      { key: 'checkIn', label: 'Ngày nhận' },
                      { key: 'checkOut', label: 'Ngày trả' },
                      { key: 'total', label: 'Tổng tiền' },
                      { key: 'image', label: 'Hình ảnh' },
                      { key: 'actions', label: 'Thao tác' },
                    ].map(({ key, label }) => (
                      <th
                        key={key}
                        className="px-6 py-4 text-left text-sm font-medium text-gray-500"
                      >
                        {key !== 'actions' ? (
                          <button
                            onClick={() => handleSort(key)}
                            className="flex items-center space-x-1 hover:text-gray-700"
                          >
                            <span>{label}</span>
                            <ArrowUpDown className="w-4 h-4" />
                          </button>
                        ) : (
                          label
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedHistory.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {item.room || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {item.checkIn || 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {item.checkOut || 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {item.total?.toLocaleString() || '0'}₫
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <img src={item.image} alt={item.room} className="w-auto h-28 object-cover rounded" />
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Trước
                </button>
                <span className="text-sm text-gray-500">
                  Trang {currentPage} / {pageCount}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
                  disabled={currentPage === pageCount}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Sau
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">Chưa có giao dịch nào.</p>
            <p className="text-gray-400 text-sm mt-2">
              Lịch sử thanh toán của bạn sẽ xuất hiện tại đây.
            </p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 relative">
            <button
              onClick={() => setShowDeleteDialog(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Xác nhận xóa</h3>
              <p className="text-gray-500 mb-6">
                Bạn có chắc chắn muốn xóa bản ghi này không? Hành động này không thể hoàn tác.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;