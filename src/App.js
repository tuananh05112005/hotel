import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'; // Import trang About
import Home from './pages/Home'; // Ví dụ import Home
import Header from './components/Header'; // Import Navbar
import Footer from './components/Footer'; // Import Footer


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />       {/* Trang chủ */}
        <Route path="/about" element={<About />} /> {/* Trang About */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
