import React from 'react'; 
import './style.css'
import PICSUM from '../../images/picsum.jpg'
import { gsap } from "gsap";

export default function Test () {
    
    gsap.to(".pContent", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
      }, 
    });
      
    gsap.to(".pImage", {
        yPercent: 150,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true
        }, 
      });

        return (
        <div className="content">
          <section id="first-section">
      <div class="container">
        <div class="images">
          <div class="image-wrapper" id="first">
            <img src="https://i.postimg.cc/bw2Kx6k0/6.png" />
          </div>
          <div class="image-wrapper" id="second">
            <img src="https://i.postimg.cc/283p6j5K/5.png" />
          </div>
          <div class="image-wrapper" id="third">
            <img src="https://i.postimg.cc/L4xK2gmP/4.png" />
          </div>
          <div class="image-wrapper" id="forth">
            <img src="https://i.postimg.cc/L5CrTwxD/3.png" />
          </div>
          <div class="image-wrapper" id="fifth">
            <img src="https://i.postimg.cc/B6s9Qx8T/2.png" />
          </div>
          <div class="image-wrapper" id="sixth">
            <img src="https://i.postimg.cc/YCGwX2KW/1.png" />
          </div>
          <div class="blur"></div>
        </div>
       
        <div class="content-images">
          <div class="content-image-wrapper one">
            <img
              src="https://images.unsplash.com/photo-1550422086-b9589ec2d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
            />
            <h4>W</h4>
          </div>
          <div class="content-image-wrapper two">
            <img
              src="https://images.unsplash.com/photo-1550433251-d1a8ff40ff05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <h4>E</h4>
          </div>
          <div class="content-image-wrapper three">
            <img
              src="https://images.unsplash.com/photo-1550364387-ffbad4f8e9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <h4>S</h4>
          </div>
          <div class="content-image-wrapper four">
            <img
              src="https://images.unsplash.com/photo-1550183203-8d3ca82400c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
            <h4>T</h4>
          </div>
        </div>
      </div>
    </section>
        </div>          
    );
}

