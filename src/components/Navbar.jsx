import React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import About from "../page/About"




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