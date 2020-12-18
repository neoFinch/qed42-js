import React, {useEffect, useRef}  from 'react';
import NOVARTIS from '../../images/novartis-client-logo (1).png'
import MGM from '../../images/mgm-client-logo.png'
import ACQUIA from  '../../images/acquia-client-logo.png';
import NESTLE from '../../images/nestle-client-logo.png';
import STANFORD_UNIVERSITY from '../../images/stanford-client-logo.png';
import AAMAADMI from '../../images/aamc-client-logo.png';
import ARIA from '../../images/aria-client-logo.png';
import ASHOKA from '../../images/ashoka-logo.png';
import FILA from '../../images/fila-client-logo.png';
import HP from '../../images/hp-client-logo.png';
import ILAO from '../../images/ilao-client-logo.png';
import INTEL from '../../images/intel-client-logo.png';
import NRDC from '../../images/nrdc-client-logo.png';
import NYC from '../../images/nyc-client-logo.png';
import PWC from '../../images/pwc-client-logo.png';
import SAB_MILLAR from '../../images/sabmiller-client-logo.png';
import SONY from '../../images/sony-client-logo.png';
import TISS from '../../images/tiss-client-logo.png';
import UBM from '../../images/ubm-client-logo.png';
import UNITARIAN from '../../images/unitarian-client-logo.png';
import WARNER from '../../images/warner-client-logo.png';
import IITB from '../../images/iitb-logo.png';
import { gsap } from "gsap";
import { TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './style.css';

gsap.registerPlugin(ScrollTrigger)

export default function Client() {

  const headerRef = useRef(null);
  const imageRef = useRef([]);
  imageRef.current = []
  console.log("imageRef",imageRef);

  useEffect( () =>{
    gsap.from(headerRef.current,{
      duration:1,
      autoAlpha:0,
      ease: 'none',
      delay: 1
    })


      gsap.fromTo("#one",
         {autoAlpha: 0},
         {
          duration: 1,
          autoAlpha: 1,
          yPercent: -100,
          ease: 'none',
          scrollTrigger :{
            trigger: "#one",
            scrub: true,
            start: "top center+=50",
            toggleActions:'play none none reverse',
          }
        })

        gsap.fromTo("#two",
        {autoAlpha: 0},
        {
         duration: 1,
         autoAlpha: 1,
         yPercent: -100,
         ease: 'none',
         scrollTrigger :{
           trigger: "#two",
           scrub: true,
           start: "top center+=50",
           toggleActions:'play none none reverse',
         }
       })

       gsap.fromTo("#three",
       {autoAlpha: 0},
       {
        duration: 1,
        autoAlpha: 1,
        yPercent: -100,
        ease: 'none',
        scrollTrigger :{
          trigger: "#three",
          scrub: true,
          start: "top center+=50",
          toggleActions:'play none none reverse',
        }
      })
 
      gsap.fromTo("#four",
      {autoAlpha: 0},
      {
       duration: 1,
       autoAlpha: 1,
       yPercent: -100,
       ease: 'none',
       scrollTrigger :{
         trigger: "#four",
         scrub: true,
         start: "top center+=50",
         toggleActions:'play none none reverse',
       }
     })


     gsap.fromTo("#five",
     {autoAlpha: 0},
     {
      duration: 1,
      autoAlpha: 1,
      yPercent: -100,
      ease: 'none',
      scrollTrigger :{
        trigger: "#five",
        scrub: true,
        start: "top center+=50",
        toggleActions:'play none none reverse',
      }
    })


    gsap.fromTo("#six",
    {autoAlpha: 0},
    {
     duration: 1,
     autoAlpha: 1,
     yPercent: -100,
     ease: 'none',
     scrollTrigger :{
       trigger: "#six",
       scrub: true,
       start: "top center+=50",
       toggleActions:'play none none reverse',
     }
   })


   gsap.fromTo("#seven",
   {autoAlpha: 0},
   {
    duration: 1,
    autoAlpha: 1,
    yPercent: -100,
    ease: 'none',
    scrollTrigger :{
      trigger: "#seven",
      scrub: true,
      start: "top center+=50",
      toggleActions:'play none none reverse',
    }
  })


  gsap.fromTo("#eight",
  {autoAlpha: 0},
  {
   duration: 1,
   autoAlpha: 1,
   yPercent: -100,
   ease: 'none',
   scrollTrigger :{
     trigger: "#eight",
     scrub: true,
     start: "top center+=50",
     toggleActions:'play none none reverse',
   }
 })


 gsap.fromTo("#nine",
 {autoAlpha: 0},
 {
  duration: 1,
  autoAlpha: 1,
  yPercent: -100,
  ease: 'none',
  scrollTrigger :{
    trigger: "#nine",
    scrub: true,
    start: "top center+=50",
    toggleActions:'play none none reverse',
  }
})


gsap.fromTo("#ten",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#ten",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})


gsap.fromTo("#eleven",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#eleven",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})


gsap.fromTo("#twelve",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#twelve",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#thirteen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#thirteen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})



gsap.fromTo("#fourteen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#fourteen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})



gsap.fromTo("#fifteen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#fifteen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#sixteen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#sixteen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#seventeen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#seventeen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#eighteen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#eighteen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#nineteen",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#nineteen",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#twenty",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#twenty",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#twentyone",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#twentyone",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})

gsap.fromTo("#twentytwo",
{autoAlpha: 0},
{
 duration: 1,
 autoAlpha: 1,
 yPercent: -100,
 ease: 'none',
 scrollTrigger :{
   trigger: "#twentytwo",
   scrub: true,
   start: "top center+=50",
   toggleActions:'play none none reverse',
 }
})
  },[])

  return (
  <div id="section">  
    <div 
      ref={headerRef}  
      className='content-wrapper'  >
      <div ref={imageRef} className='content-images' >
        <div className="content-image-wrapper" id="one" >
          <img 
            className="element"
            src={NOVARTIS}  
            // style={{ animation:'stretch 4.5s ease-out 60s 2 alternate'}} 
          />
        </div>
        <div className="content-image-wrapper" id="two" >
          <img 
            className="element"
            src={MGM}    
            // style={{ animation:'stretch 5s ease-out 280s 2 alternate'}}
          />
        </div>
        <div className="content-image-wrapper" id="three" >
          <img 
            className="element"
            src={NESTLE}   
            // style={{ animation:'stretch 1s ease-out 50s 2 alternate'}}
          />
        </div>
        <div className="content-image-wrapper" id="four">
          <img 
            className="element"
            src={AAMAADMI}   
            // style={{ animation:'stretch 3s ease-out 10s 2 alternate'}}
          />
        </div>
      </div>
      <div className='content-images flex px-12 w-full justify-evenly' >
        <div className="content-image-wrapper" id="five">
          <img 
            src={ACQUIA} className="element6"  
            // style={{ animation:'stretch 6.5s ease-out 85s 2 alternate'}} 
          />
        </div>
        <div className="content-image-wrapper" id="six">
          <img 
            src={WARNER} className="element2"  
            // style={{ animation:'stretch 3s ease-out 115s 2 alternate'}}
          />
        </div>
        <div className="content-image-wrapper" id="seven">
          <img 
            src={STANFORD_UNIVERSITY} className="element5"  
            // style={{ animation:'stretch 7s ease-out 175s 2 alternate'}}
          />
        </div>
        <div className="content-image-wrapper" id="eight">
          <img 
            src={UNITARIAN} className="element6"  
            // style={{ animation:'stretch 3s ease-out 150s 2 alternate'}}
          />
        </div>
      </div>
      <div className='content-images flex px-12  w-full justify-evenly' >
        <div className='content-image-wrapper-small' id="nine">
          <img 
            src={NRDC} className="element"  
            // style={{ animation:'stretch 3s ease-out 105s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="ten">
          <img 
            src={PWC} className="element"  
            // style={{ animation:'stretch 3s ease-out 70s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="eleven">
          <img 
            src={SONY} className="element"  
            // style={{ animation:'stretch 3s ease-out 195s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="twelve">
          <img 
            src={ARIA} className="element"   
            // style={{ animation:'stretch 3s ease-out 250s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="thirteen">
          <img 
            src={UBM} className="element"   
            // style={{ animation:'stretch 3s ease-out 265s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="fourteen">
          <img 
            src={TISS} className="element"   
            // style={{ animation:'stretch 3s ease-out 300s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="fifteen">
          <img 
            src={HP} className="element"   
            // style={{ animation:'stretch 3s ease-out 350s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="sixteen">
          <img 
            src={NYC} className="element"   
            // style={{ animation:'stretch 3s ease-out 20s 2 alternate'}}
          />
        </div>
      </div>
      <div className='content-images flex px-12  w-full justify-evenly' >
        <div className='content-image-wrapper-small' id="seventeen">
          <img 
            src={FILA} className="element my-0"  
            // style={{ animation:'stretch 3s ease-out 130s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="eighteen">
          <img 
            src={INTEL} className="element my-0"  
            // style={{ animation:'stretch 3s ease-out 160s 2 alternate'}}
          />
        </div>
       <div className='content-image-wrapper-small' id="nineteen">
          <img 
            src={SAB_MILLAR} className="element my-0"  
            // style={{ animation:'stretch 3s ease-out 220s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="twenty">
          <img 
            src={ILAO} className="element my-0"   
            // style={{ animation:'stretch 3s ease-out 40s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="twentyone">
          <img 
            src={IITB} className="element mx-0 my-0"   
            // style={{ animation:'stretch 3s ease-out 30s 2 alternate'}}
          />
        </div>
        <div className='content-image-wrapper-small' id="twentytwo">
          <img 
            src={ASHOKA} className="element mx-0 my-0"   
            // style={{ animation:'stretch 3s ease-out 320s 2 alternate'}}
          />
        </div>
      </div>
    </div>
  </div>  
  );
}

