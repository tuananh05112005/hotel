import React from "react";
import RoomsDouble from "../components/rooms/RoomsDouble"
import RoomSingle from "../components/rooms/RoomSingle"
import RoomView from "../components/rooms/RoomView"
import AboutSection from "../components/sections/AboutSection"
import Blog from "../components/sections/Blog"
import Foodview from "../components/sections/Foodview"
import HeroSection from "../components/sections/HeroSection"
import HotelSection from "../components/sections/HotelSection";

function Home(){
    return(
        <>
        <HeroSection/>
    <AboutSection/>
    <RoomSingle/>
    <RoomsDouble/>
    <RoomView/>
    <HotelSection/>
    <Foodview/>
    <Blog/>
    </>
    )
}
export default Home;