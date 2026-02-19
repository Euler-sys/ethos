import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";
import AdminPage from "./pages/admin";
import Home from "./pages/home";
// import LoginModal from "./pages/login";




const App: React.FC = () => {
  
  return (
    <Router>
      <div className="font-sans">
        
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/admin" element={<AdminPage/>} />
           {/* <Route path="/login" element={<LoginModal />} /> */}
                  </Routes>
       
       
      </div>
    </Router>
  );
};

export default App;
