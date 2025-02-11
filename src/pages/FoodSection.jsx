import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
};

const FoodSection = ({ apiEndpoint, category }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                setLoading(true);
                const response = await axios.get(apiEndpoint);
                setMenuItems(response.data);
            } catch (err) {
                setError("Có lỗi xảy ra khi tải dữ liệu.");
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, [apiEndpoint]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleViewDetails = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleAddToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { id: item.id, item, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (itemToRemove) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === itemToRemove.id);
            if (existingItem.quantity > 1) {
                return prevCart.map((cartItem) =>
                    cartItem.id === itemToRemove.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter((item) => item.id !== itemToRemove.id);
            }
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleCheckout = () => {
        const totalAmount = cart.reduce((total, cartItem) => {
            return total + cartItem.item.price * cartItem.quantity;
        }, 0);
    
        // Tạo đối tượng thanh toán
        const payment = {
            date: new Date().toLocaleString(),
            items: cart.map((cartItem) => ({
                id: cartItem.id,
                name: cartItem.item.name,
                price: cartItem.item.price,
                quantity: cartItem.quantity,
                image: cartItem.item.image, // Thêm đường dẫn hình ảnh
            })),
            totalAmount: totalAmount,
        };
    
        // Lấy lịch sử thanh toán hiện tại từ localStorage
        const history = JSON.parse(localStorage.getItem("paymentHistory")) || [];
        // Thêm thanh toán mới vào lịch sử
        history.push(payment);
        // Lưu lịch sử thanh toán mới vào localStorage
        localStorage.setItem("paymentHistory", JSON.stringify(history));
    
        alert(`Tổng thanh toán: ${formatPrice(totalAmount)}`);
        setCart([]); // Clear the cart after payment
        toggleCart(); // Close the cart
    };

    return (
        <div className="food-section max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center text-4xl font-semibold text-gray-900 mb-8">
                {category}
            </h2>

            {loading ? (
                <div className="text-center text-lg text-gray-600 animate-pulse">
                    Đang tải...
                </div>
            ) : error ? (
                <div className="text-center text-red-500 font-semibold">{error}</div>
            ) : (
                <>
                    {/* Cart Button */}
                    <button onClick={toggleCart} className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Giỏ hàng ({cart.reduce((total, cartItem) => total + cartItem.quantity, 0)})
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-slide-up"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="relative group">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            <button
                                                onClick={() => handleViewDetails(item)}
                                                className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-orange-500 hover:text-white"
                                            >
                                                <ShoppingCart className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {item.discount > 0 && (
                                            <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center animate-bounce">
                                                <span className="text-sm">-{item.discount}%</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 mb-2">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-red-600 font-bold">
                                                {formatPrice(item.price)}
                                            </span>
                                            {item.originalPrice > item.price && (
                                                <span className="text-gray-500 text-sm line-through">
                                                    {formatPrice(item.originalPrice)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center text-lg text-gray-500">
                                Không có món ăn nào trong danh mục này.
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: Math.ceil(menuItems.length / itemsPerPage) }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`px-4 py-2 rounded-full ${
                                    currentPage === i + 1
                                        ? "bg-orange-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    {/* Cart Modal */}
                    {isCartOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                                <h3 className="text-xl font-semibold mb-4">Giỏ hàng</h3>
                                {cart.length > 0 ? (
                                    <>
                                        <ul className="mb-4">
                                            {cart.map((cartItem) => (
                                                <li key={cartItem.id} className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span>{cartItem.item.name}</span>
                                                        <button
                                                            onClick={() => handleRemoveFromCart(cartItem.item)}
                                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                        >
                                                            -
                                                        </button>
                                                        <span>{cartItem.quantity}</span>
                                                        <button
                                                            onClick={() => handleAddToCart(cartItem.item)}
                                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => setCart((prevCart) => prevCart.filter((item) => item.id !== cartItem.id))}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        Xóa
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                         {/* Tổng tiền */}
                    <div className="flex justify-between font-semibold mb-4">
                        <span>Tổng tiền:</span>
                        <span className="text-red-600">
                            {formatPrice(
                                cart.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0)
                            )}
                        </span>
                    </div>
                                        <button
                                            onClick={handleCheckout}
                                            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                        >
                                            Thanh toán
                                        </button>
                                    </>
                                ) : (
                                    <div className="text-center text-lg text-gray-500">
                                        Giỏ hàng trống.
                                    </div>
                                )}
                                <button
                                    onClick={toggleCart}
                                    className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Modal for viewing item details */}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">{selectedItem.name}</h3>
                        <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-48 object-cover mb-4" />
                        <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-red-600 font-bold">{formatPrice(selectedItem.price)}</span>
                            <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodSection;