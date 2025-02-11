import React from "react";
import { Routes, Route } from "react-router-dom";
import RoomSection from "./RoomSection";
import Profile from "./auth/Profile";

const RoomsPage = () => {
  return (
    <Routes>
        <Route
  path="/rooms"
  element={
    <RoomSection
      apiEndpoint="http://localhost:5000/api/rooms/all"
      title="Tất Cả Phòng"
    />
  }
/> 
<Route
  path="/profile"
  element={
    <Profile 
      apiEndpoint="http://localhost:5000/api/rooms/all"
      title="Tất Cả Phòng"
    />
  }
/>

      <Route
        path="single"
        element={
          <RoomSection
            apiEndpoint="http://localhost:5000/api/rooms/single"
            title="Phòng Đơn"
          />
        }
      />
      <Route
        path="double"
        element={
          <RoomSection
            apiEndpoint="http://localhost:5000/api/rooms/double"
            title="Phòng Đôi"
          />
        }
      />
      <Route
        path="vip"
        element={
          <RoomSection
            apiEndpoint="http://localhost:5000/api/rooms/vip"
            title="Phòng VIP"
          />
        }
      />
    </Routes>
  );
};

export default RoomsPage;
