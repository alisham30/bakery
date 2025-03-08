import React from "react";
import breadImage from "../assets/bread.jpg";
import cupcakesImage from "../assets/cupcakes.jpeg";
import "./Pro.css";

const Products = () => (
  <div className="products">
    <h2>Our Bestsellers</h2>
    <div className="product">
      <img src={breadImage} alt="Fresh Bread" />
      <h3>Bread</h3>
      <button>Buy Now</button>
    </div>
    <div className="product">
      <img src={cupcakesImage} alt="Cupcakes" />
      <h3>Cupcakes</h3>
      <button>Buy Now</button>
    </div>
  </div>
);

export default Products;
