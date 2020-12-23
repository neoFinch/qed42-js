import React, {useContext, useEffect, useRef}  from 'react';
import gsap from 'gsap';

import NOVARTIS from '../../assets/images/novartis-logo.svg'
import MGM from '../../assets/images/mgm-large.png'
import ACQUIA from  '../../assets/images/acquia-logo.png';
import NESTLE from '../../assets/images/nestle.png';
import STANFORD_UNIVERSITY from '../../assets/images/stanford-univ.png';
import AAMAADMI from '../../assets/images/aam-aadmi.png';
import ASHOKA from '../../assets/images/Ashoka-logo (1).png';
import FILA from '../../assets/images/fila-logo.png';
import ILAO from '../../assets/images/ilao-logo.svg';
import INTEL from '../../assets/images/intel-logo.png';
import UNITARIAN from '../../assets/images/unitarian-logo.png';
import WARNER from '../../assets/images/Warner_Music_Group.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css';
import AnimationContext from '../../contexts/animation-context';


gsap.registerPlugin(ScrollTrigger)

export default function Client() {

  const headerRef = useRef(null);
  const imageRef = useRef([]);
  imageRef.current = []
  console.log("imageRef",imageRef);

  let animationContext = useContext(AnimationContext);

  
  
  useEffect( () => {

    let tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: headerRef.current,
        start: "+=133 70%",
        end: "0%",
        scrub: true,
        // toggleActions: "restart",
        onEnter: () => {
          animationContext.setCurrentBg('#fff')
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#DD0031')
        }
      }
    });

    tl.fromTo(headerRef.current.childNodes, {
      yPercent: 200, 
      duration: 3,
      opacity: 0,
    }, {
      opacity: 1,
      yPercent: 0, 
      duration: 1,
      stagger: 0.3
    })
  }, [])
  return (
    <div 
      ref={headerRef}  
      className='content-wrapper overflow-hidden  py-40 min-h-screen'
      >
      <div ref={imageRef} className='content-images' >
        <div className="content-image-wrapper" id="one" >
          <img 
            className="element"
            src={NOVARTIS}  
          />
        </div>
        <div className="content-image-wrapper" id="two" >
          <img 
            className="element"
            src={MGM}    
          />
        </div>
        <div className="content-image-wrapper" id="three" >
          <img 
            className="element"
            src={NESTLE}   
          />
        </div>
        <div className="content-image-wrapper" id="four">
          <img 
            className="element"
            src={AAMAADMI}   
          />
        </div>
      </div>
      <div className='content-images' >
        <div className="content-image-wrapper" id="five">
          <img 
            className="element" 
            src={ACQUIA}  
          />
        </div>
        <div className="content-image-wrapper" id="six">
          <img 
            className="element" 
            src={WARNER}   
          />
        </div>
        <div className="content-image-wrapper" id="seven">
          <img 
            className="element" 
            src={STANFORD_UNIVERSITY}
            style={{ marginTop: '40px'}}
          />
        </div>
        <div className="content-image-wrapper" id="eight">
          <img 
            className="element" 
            src={UNITARIAN}   
          />
        </div>
      </div>
      <div className='content-images' >
        <div className='content-image-wrapper' id="nine">
          <img 
            className="element" 
            src={FILA}  
          />
        </div>
        <div className='content-image-wrapper' id="ten">
          <img 
            className="element" 
            src={INTEL} 
          />
        </div>
        <div className='content-image-wrapper' id="eleven">
          <img 
            className="element" 
            src={ILAO} 
          />
        </div>
        <div className='content-image-wrapper' id="twelve">
          <img 
            className="element" 
            src={ASHOKA} 
          />
        </div>
      </div>
    </div>
  );
}

