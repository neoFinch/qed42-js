import React, {useContext, useEffect, useRef}  from 'react';
import gsap from 'gsap';

import NOVARTIS from '../../assets/images/novartis-logo.svg'
import MGM from '../../assets/images/mgm-large.png'
import ACQUIA from  '../../assets/images/acquia-logo.png';
import NESTLE from '../../assets/images/nestle.png';
import STANFORD_UNIVERSITY from '../../assets/images/stanford-univ.png';
import AAMAADMI from '../../assets/images/aam-aadmi.png';
import ASHOKA from '../../assets/images/Ashoka-logo.png';
import FILA from '../../assets/images/fila-logo.png';
import ILAO from '../../assets/images/ilao-logo.svg';
import INTEL from '../../assets/images/intel-logo.png';
import UNITARIAN from '../../assets/images/unitarian-logo.png';
import WARNER from '../../assets/images/Warner_Music_Group.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css';
import AnimationContext from '../../contexts/animation-context';

gsap.registerPlugin(ScrollTrigger)

export default function Client({reff}) {

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
      ref={reff} 
      className='content-wrapper overflow-hidden min-h-screen pt-20'
      style={{
        // background: animationContext.currentBg
      }}
      >
      <div ref={headerRef}>
        <div className='content-images' >
          <div 
            className="content-image-wrapper" 
            id="one" 
            style={{ width: '220px'}} 
          >
            <img 
              className="element"
              src={NOVARTIS}  
            />
          </div>
          <div className="content-image-wrapper" id="two" style={{ width: '220px'}} >
            <img 
              className="element"
              src={MGM}    
            />
          </div>
          <div className="content-image-wrapper" id="three" style={{ width: '220px'}} >
            <img 
              className="element"
              src={NESTLE}   
              style={{ width: '250px'}} 
            />
          </div>
          <div className="content-image-wrapper" id="four" style={{ width: '220px'}} >
            <img 
              className="element"
              src={AAMAADMI}   
              style={{ width: '200px'}} 
            />
          </div>
        </div>
        <div className='content-images' >
          <div 
            className="content-image-wrapper" 
            id="five" 
            style={{ width: '210px'}} 
          >
            <img 
              className="element" 
              src={ACQUIA}  
            />
          </div>
          <div 
            className="content-image-wrapper" 
            id="six"
            style={{ width: '220px'}} 
            >
            <img 
              className="element" 
              src={WARNER}   
            />
          </div>
          <div className="content-image-wrapper" id="seven" style={{ width: '220px'}} >
            <img 
              className="element" 
              src={STANFORD_UNIVERSITY}
              style={{ marginTop: '25px'}}
            />
          </div>
          <div 
            className="content-image-wrapper" 
            id="eight"
            style={{ width: '220px'}} 
            >
            <img 
              className="element" 
              src={UNITARIAN}   
              style={{ marginBottom: '10px'}}
            />
          </div>
        </div>
        <div className='content-images' >
          <div className='content-image-wrapper'
                id="nine"
                style={{ width: '200px'}}
                >
            <img 
              className="element" 
              src={FILA}  
            />
          </div>
          <div className='content-image-wrapper' id="ten" style={{ width: '220px'}} >
            <img 
              className="element" 
              src={INTEL} 
            />
          </div>
          <div 
            className='content-image-wrapper' 
            id="twelve" 
            style={{ width: '150px'}} 
          >
            <img 
              className="element" 
              src={ILAO} 
            />
          </div>
          <div className='content-image-wrapper' id="thirteen" style={{ width: '220px'}} >
            <img 
              className="element" 
              src={ASHOKA} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

