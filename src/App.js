import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'; // Import trang About
import Home from './pages/Home'; // Ví dụ import Home
import Header from './components/Header'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import RoomSection from './pages/RoomSection'; // Import RoomSection
import RoomsPage from './pages/RoomsPage'; // Import RoomDetail
import RoomDetail from './pages/RoomDetail'; // Import RoomDetail
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage'; 
import FoodSection from './pages/FoodSection';
import FoodPage from './pages/FoodPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Logout from './pages/auth/Logout';
import Profile from './pages/auth/Profile';
import PaymentHistory from './pages/PaymentHistory';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />       {/* Trang chủ */}
        <Route path="/about" element={<About />} /> {/* Trang About */}
        <Route path="/" element={<RoomSection />} /> {/* Trang Room */}
        {/* <Route path="/rooms/:id" element={<RoomDetail />} /> */}
        <Route path="/rooms/*" element={<RoomsPage />} />
        <Route path="/menu" element={<FoodSection />} />
        <Route path="/menu/*" element={<FoodPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
