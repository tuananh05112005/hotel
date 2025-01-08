import React from 'react';
import { Link } from 'react-router-dom';

const NavBarComponent = () => {
    return (
        <nav className="bg-blue-500 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold tracking-wide">
                            MyHotel
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="hover:bg-blue-600 px-3 py-2 rounded-md transition">
                            Home
                        </Link>
                        <Link to="/about" className="hover:bg-blue-600 px-3 py-2 rounded-md transition">
                            About
                        </Link>
                        <Link to="/services" className="hover:bg-blue-600 px-3 py-2 rounded-md transition">
                            Services
                        </Link>
                        <Link to="/contact" className="hover:bg-blue-600 px-3 py-2 rounded-md transition">
                            Contact
                        </Link>
                    </div>
                    {/* Responsive Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBarComponent;
