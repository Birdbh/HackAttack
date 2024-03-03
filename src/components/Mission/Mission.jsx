import React from 'react'
import why from "./why.png";
import { Link } from 'react-router-dom';
function Mission() {
    return (
        <div>
        <section class="about_section">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="about_img-container">
                  <img src={why} alt=""/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about_detail-box">
                  <h3>
                    Mission Statement!
                  </h3>
                  <p>Empowering minds, breaking barriers. Our mission at Maaktabi is to provide free, accessible, and quality education for all, 
                    transcending gender, age, and educational background. We believe in the transformative power of learning and strive to unlock the full 
                    potential of every student, fostering a world where education knows no limits.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
      )
    
}

export default Mission