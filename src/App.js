import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';


const App = () => {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<h1 className="text-center p-6">Home Page</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
