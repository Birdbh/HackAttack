import React from 'react'
import {redirect, useNavigate,Navigate, Link,} from "react-router-dom";
import { useState } from "react";

function Navbar() {
  return (
    <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              Appname
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent"/>
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <Link to="/" class="nav-link" href="home."> Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item ">
                  <Link to="/about" class="nav-link" href="about.html"> About </Link>
                </li>

                <li class="nav-item ">
                  <a class="nav-link" href="admission.html"> Admission </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="why.html"> Why Us </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact Us</a>
                </li>

              </ul>
            </div>
        </nav>
      </div>
    
  )
}

export default Navbar