import React from 'react'
import client from "./client.png";
function Testimonial() {
   
  return (
    <div>
         <section class="client_section layout_padding">
    <h2 class="">
      Testimonial
    </h2>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <div class="row">
                      <div class="col-md-3">
                        <div class="client_img-box">
                          <img src={client} alt=""/>
                        </div>
                      </div>
                      <div class="col-md-9">
                        <div class="client_detail-box">
                          <h5>
                            Alex Du
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="carousel-item">
                  <div class="row">
                      <div class="col-md-3">
                        <div class="client_img-box">
                          <img src={client} alt=""/>
                        </div>
                      </div>
                      <div class="col-md-9">
                        <div class="client_detail-box">
                          <h5>
                            Alex Du
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="carousel-item">
                  <div class="row">
                      <div class="col-md-3">
                        <div class="client_img-box">
                          <img src={client} alt=""/>
                        </div>
                      </div>
                      <div class="col-md-9">
                        <div class="client_detail-box">
                          <h5>
                            Alex Du
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
     
    </div>
  </section>

    </div>
  )
}

export default Testimonial;