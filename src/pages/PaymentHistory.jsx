import React, { useState, useEffect } from "react";
import { CalendarDays, Package, CreditCard, Trash2, X, Search, ArrowUpDown } from "lucide-react";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [sortOrder, setSortOrder] = useState("newest");
    const [showConfirmDelete, setShowConfirmDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("paymentHistory")) || [];
        if (Array.isArray(history)) {
            setPaymentHistory(history);
        } else {
            setPaymentHistory([]);
        }
    }, []);

    const formatPrice = (price) => new Intl.NumberFormat("vi-VN").format(price) + "đ";
    
    const formatDate = () => 
        new Date().toLocaleDateString("vi-VN",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const toggleSortOrder = () => setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));

    const handleDelete = (index) => {
        const newHistory = paymentHistory.filter((_, i) => i !== index);
        setPaymentHistory(newHistory);
        localStorage.setItem("paymentHistory", JSON.stringify(newHistory));
        setShowConfirmDelete(null);
    };

    const filteredHistory = [...paymentHistory]
        .filter((payment) =>
            payment.items && Array.isArray(payment.items) 
            ? payment.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            : false
        )
        .sort((a, b) => {
            const modifier = sortOrder === "newest" ? -1 : 1;
            return modifier * (new Date(b.date) - new Date(a.date));
        });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Lịch sử thanh toán</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm đơn hàng..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button onClick={toggleSortOrder} className="flex items-center px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                        <ArrowUpDown className="w-5 h-5 mr-2 text-gray-500" />
                        <span className="text-gray-700 font-medium">{sortOrder === "newest" ? "Mới nhất" : "Cũ nhất"}</span>
                    </button>
                </div>

                {filteredHistory.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        {filteredHistory.map((payment, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-6 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-b-md">
                                    Đã thanh toán
                                </div>

                                <button onClick={() => setShowConfirmDelete(index)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500">
                                    <Trash2 className="w-5 h-5" />
                                </button>

                                {showConfirmDelete === index && (
                                    <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-10">
                                        <div className="p-8 text-center max-w-sm">
                                            <button onClick={() => setShowConfirmDelete(null)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600">
                                                <X className="w-5 h-5" />
                                            </button>
                                            <div className="w-12 h-12 bg-red-100 mx-auto mb-4 flex items-center justify-center rounded-full">
                                                <Trash2 className="w-6 h-6 text-red-500" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Xác nhận xóa</h3>
                                            <p className="text-gray-500 mb-6">Bạn có chắc chắn muốn xóa đơn hàng này không?</p>
                                            <div className="flex justify-center space-x-4">
                                                <button onClick={() => setShowConfirmDelete(null)} className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                                                    Hủy
                                                </button>
                                                <button onClick={() => handleDelete(index)} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="pt-12 pb-6 px-6 border-b border-gray-100">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold text-gray-900">Đơn hàng #{payment.orderId || index + 1}</h3>
                                        <span className="text-sm font-medium text-gray-500 flex items-center bg-gray-50 px-3 py-1 rounded-full">
                                            <CalendarDays className="w-4 h-4 mr-1" />
                                            {formatDate(payment.date)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    {payment.items && Array.isArray(payment.items) ? (
                                        payment.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-sm" />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                                    <p className="text-sm text-gray-500 flex items-center">
                                                        <Package className="w-4 h-4 mr-1" />
                                                        Số lượng: {item.quantity}
                                                    </p>
                                                    <p className="text-sm font-medium text-blue-600">{formatPrice(item.price)}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 text-sm">Không có thông tin sản phẩm.</p>
                                    )}
                                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                                        <span className="text-sm font-medium text-gray-500">Tổng thanh toán</span>
                                        <span className="text-lg font-bold text-green-600">{formatPrice(payment.totalAmount)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-6">Không có lịch sử thanh toán.</p>
                )}
            </div>
        </div>
    );
};

export default PaymentHistory;
