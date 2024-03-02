import React from 'react'
import hero from "./hero.png";
function Hero() {
  return (
    <div class="hero_section  top_container">
        <div class="hero-container container">
    <div class="hero_detail-box">
      <h1>
        Best way
        to fund
        your study
        abroad
      </h1>
      <p>
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam
      </p>
      <div class="hero_btn-continer">
        <a href="" class="call_to-btn btn_white-border">
          Read More
        </a>
      </div>
    </div>
    <div class="hero_img-container">
      <div>
        <img src={hero} alt="" class="img-fluid"/>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero