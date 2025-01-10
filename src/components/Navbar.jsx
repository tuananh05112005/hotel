import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "../pages/About";




// import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;