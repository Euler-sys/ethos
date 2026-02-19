import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";
import AdminPage from "./pages/admin";
import Home from "./pages/home";




const App: React.FC = () => {
  
  return (
    <Router>
      <div className="font-sans">
        
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/admin" element={<AdminPage/>} />
                  </Routes>
       
       
      </div>
    </Router>
  );
};

export default App;
