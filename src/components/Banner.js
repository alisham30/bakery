import React from "react";
import bannerImage from "../assets/Banner.png"; // Import the image

import "./Banner.css";

const Banner = () => (
  <div className="banner-container" style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="banner">
      <h2 class="white">Freshly Baked, Just for You!</h2>
      <p class='white'>Delicious homemade treats crafted with love.</p>
      
    </div>
  </div>
);

export default Banner;

