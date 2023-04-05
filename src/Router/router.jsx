import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Contact from '../Views/Contact';
import Terms from '../Views/Terms';
import Home from '../Views/Home';
// import ProductsDetails from './Views/ProductsDetails';
import PreFre from '../Views/PreFre';
import Login from '../Views/Login';

const Router = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/faqs" element={<PreFre/>} />
            <Route path="/terms" element={<Terms/>} />
            {/* <Route path="/register" element={<Register/>} />
            <Route path="/register" element={<Register/>} /> */}
            
         </Routes>
      </BrowserRouter>
   );
};


export default Router
