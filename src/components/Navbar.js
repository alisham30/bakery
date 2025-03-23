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
      <li><p>Home</p></li>
      <li><p>About Us</p></li>
      <li><p>Products</p></li>
      <li><p>Gallery</p></li>
      <li><p>Contact</p></li>
    </ul>
    <button className="order-btn">Order Now</button>
  </nav>
);

export default Navbar;
