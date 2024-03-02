import React from 'react'

import { Link } from 'react-router-dom';
function Hero() {
  const customStyle = {
    backgroundColor: '#7CC6FE',
    margin: "20px"
  };

  return (
    <div style={customStyle} class="hero_section  top_container">
        <div class="hero-container container">
    <div class="hero_detail-box">
      <h1>
        Learn without limits!
      </h1>
      <p>
      Are you a girl banned from going to school past sixth grade in August 2021? This is your opportunity to take your education into your hands!
       Maaktabi provides opportunities for all students to learn from their home with all your school subjects from grade 6-12 with a custom learning plan.
      </p>
      <div class="hero_btn-continer">
        
        <Link to="/register"> <a class="call_to-btn btn_white-border" >Register</a></Link>

      </div>
    </div>
    <div class="hero_img-container">
      <div>
      <img src="https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2021/10/202110asia_afghanistan_woman.jpg?itok=hpe344q9" alt="" class="img-fluid"/>
      <div class="hero-img2">
      <img  src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/14-08-2023-UNICEF-Afghanistan-school.jpg/image770x420cropped.jpg" alt="" class="img-fluid"/>
      </div>
        
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero