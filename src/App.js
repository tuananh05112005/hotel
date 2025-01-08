
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsDouble";
import RoomView from "./components/RoomView"
import RoomSingle from "./components/RoomSingle"
import Foodview from "./components/Foodview"
import Description from "./components/HotelSection"
import Blog from "./components/Blog"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";





// import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <RoomSingle />
      <RoomsSection />
      <RoomView />
      <Foodview />
      <Description />
      <Blog />
      <Footer />
   
    </div>
  );
}

export default App;
