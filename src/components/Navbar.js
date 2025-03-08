import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.webp"; // Correct path to logo

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img src={logo} alt="AshBaky Logo" className="logo-img" />
      <h1 className="brand-name">AshBaky</h1>
    </div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button className="order-btn">Order Now</button>
  </nav>
);

export default Navbar;
