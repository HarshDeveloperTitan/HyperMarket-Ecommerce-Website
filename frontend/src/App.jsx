import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import LandingPage from "./components/LandingPage";
import NewNavbar from "./components/NewNavbar.jsx";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
