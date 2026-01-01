import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import LandingPage from "./components/LandingPage";
import NewNavbar from "./components/NewNavbar.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
