import React from 'react'
import why from "./why.png";
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
                    About our School
                  </h3>
                  <p>
                  Our online school is free and available for everyone, regardless of their gender, age, or education level.
                   We provide online courses and teachings on Farsi, Pashto, English, mathematics, and sciences from grades 6-12 for free. 
                   We begin by teaching you how to access an online web VPN and download a zoom account, which will allow you to access the rest of our courses securely and safely. Then, you have the option of being put in an online classroom with a teacher based internationally, or by providing you a customized learning plan that you can follow on your own time.
                  </p>
                  <div class="">
    
                    <Link to="/mission"><a class="call_to-btn btn_white-border">Learn more about our school and mission here! </a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
      )
    
}

export default Mission