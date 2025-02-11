import React from "react";
import { Routes, Route } from "react-router-dom";
import FoodSection from "./FoodSection";

const FoodPage = () => {
  return (
    <Routes>
      {/* Tất cả món */}
      <Route
        path="/menu"
        element={
          <FoodSection
            apiEndpoint="http://localhost:5000/api/menu/all"
            category="Tất Cả Món"
          />
        }
      />
      {/* Món ăn */}
      <Route
        path="foods"
        element={
          <FoodSection
            apiEndpoint="http://localhost:5000/api/menu/restaurant"
            category="Món Ăn Chính"
          />
        }
      />
      {/* Đồ uống */}
      <Route
        path="drinks"
        element={
          <FoodSection
            apiEndpoint="http://localhost:5000/api/menu/drinks"
            category="Đồ Uống"
          />
        }
      />
      {/* Bánh ngọt */}
      <Route
        path="desserts"
        element={
          <FoodSection
            apiEndpoint="http://localhost:5000/api/menu/desserts"
            category="Bánh Ngọt"
          />
        }
      />
    </Routes>
  );
};

export default FoodPage;
