import React, {useContext, useEffect, useRef}  from 'react';
import gsap from 'gsap';

import NOVARTIS from '../../images/novartis-client-logo (1).png'
import MGM from '../../images/mgm-client-logo.png'
import ACQUIA from  '../../images/acquia-client-logo.png';
import NESTLE from '../../images/nestle-client-logo.png';
import STANFORD_UNIVERSITY from '../../images/stanford-client-logo.png';
import AAMAADMI from '../../images/aamc-client-logo.png';
import ASHOKA from '../../images/ashoka-logo.png';
import FILA from '../../images/fila-client-logo.png';
import ILAO from '../../images/ilao-client-logo.png';
import INTEL from '../../images/intel-client-logo.png';
import UNITARIAN from '../../images/unitarian-client-logo.png';
import WARNER from '../../images/warner-client-logo.png';
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
      className='content-wrapper overflow-hidden py-40 min-h-screen '
      style={{
        // background: animationContext.currentBg
      }}
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
        <div className='content-image-wrapper' id="twelve">
          <img 
            className="element" 
            src={ILAO} 
          />
        </div>
        <div className='content-image-wrapper' id="thirteen">
          <img 
            className="element" 
            src={ASHOKA} 
          />
        </div>
      </div>
    </div>
  );
}

