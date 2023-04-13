import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from '../Views/Contact';
import Terms from '../Views/Terms';
import Home from '../Views/Home';
// import ProductsDetails from './Views/ProductsDetails';
import PreFre from '../Views/PreFre';
import Login from '../Views/Login';
import Products from "../Views/Products";
import Privacy from "../Views/Privacy";
import SignIn from "../Views/SignIn";


const Router = () => {
   return (
      <BrowserRouter>
         
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/faqs" element={<PreFre/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/register" element={<SignIn/>} />
            
            {/* <Route path="/register" element={<Register/>} />
            <Route path="/register" element={<Register/>} /> */}
            
         </Routes>
      </BrowserRouter>
   );
};


export default Router
