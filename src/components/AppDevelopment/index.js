import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './style.css';
import { ScrollTrigger } from 'gsap/all';
import scaleImg from '../../assets/images/scale.png';

export default function ApplicationDevelopment() {

  let circleWrapperRef = useRef(null);
  let containerRef = useRef(null);
  let height = window.innerHeight;
  
  useEffect(() => {
    // 
    // CIRCLE ANIMATION
    // 
    gsap.registerPlugin(ScrollTrigger);
    let childNodes = circleWrapperRef.current.childNodes;
    gsap.fromTo(childNodes, {
      opacity: 0,
      x: 700,
    },
    {
      opacity: 1,
      x: -750,
      duration: 2.2,
      stagger: 0.2,
    }).repeat(-1).yoyo();
    
    // /**
    //  * PANELS ANIMATION
    //  */

    let sections = gsap.utils.toArray('.panel');
    console.log({sections});
    gsap.to(containerRef.current.childNodes, {
      xPercent: -100 * (sections.length-1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70px",
        pin: true,
        scrub: 1,
        snap: 1/(sections.length - 1),
        end: () => "+=" + document.getElementById('scroller').offsetWidth
      }
    });
  }, []);


  return (
    <div className='pt-20'>
      <div
        id='scroller'
        ref={containerRef}
        className='app-develop-wrapper flex overflow-x-hidden overflow-y-hidden' 
        style={{height: `${height * 5}px`, width: `${window.innerWidth}px`}}
        >
        <div className='panel'>
          <div
            ref={circleWrapperRef}
            className='circle-wrapper w-full flex' 
            style={{height: `400px`, width: `${window.innerWidth - 42}px`}}>
              <div className='circle w-56 rounded-full bg-gray-800 h-56 self-center'></div>
              <div className='circle w-56 rounded-full bg-gray-700 h-56 self-center'></div>
              <div className='circle w-56 rounded-full bg-gray-600 h-56 self-center'></div>
          </div>
          <div>
            <h1 
              className='text-gray-700 text-6xl font-bold w-full' 
              style={{height: '100px', fontFamily: 'Montserrat'}}>
              PRODUCT ENGINEERING
            </h1>
            <h2 
              className='text-gray-70 text-5xl opacity-50' style={{fontFamily: 'Sacramento', color: '#DD0031'}}>
              Javascript Application Development
            </h2>
          </div>  
        </div>

        <div className='panel'>
          <div className='w-full flex items-stretch self-center' style={{width: `${window.innerWidth - 42}px`}}>
            <div className='w-full self-center'>
              <h1 className='text-5xl text-gray-700 font-semibold' style={{fontFamily: 'Montserrat'}}>
                Scale your <br/>business with robust, <br/>and high-performing applications.
              </h1>
            </div>
            <div className='w-full h-full self-stretch'>
              <img src={scaleImg} />
            </div>
          </div>  
        </div>

        <div className='panel'>
          <div className='w-full flex items-stretch self-center' style={{width: `${window.innerWidth - 42}px`}}>
            <div className='w-full self-center'>
              <h1 className='text-6xl text-gray-700 font-semibold' style={{fontFamily: 'Montserrat'}}>
                What we offer
              </h1>
              <h3 className='text-gray-700 text-3xl pr-12 text-' style={{fontFamily: 'Montserrat'}}>
              QED42 possesses extensive experience and skill set in delivering tailor-made applications that evolve with your business. We have over 10 years of experience offering a wide range of mobile app & website development services.  Looking to enhance an existing app, build a new one, or test your idea with an MVP? We’ve got you covered at each stage of the development life cycle.
              </h3>
            </div>
            <div className='w-full h-full self-stretch rounded overflow-hidden shadow-2xl'>
              <img width='100%' src='https://www.qed42.com/sites/default/files/styles/800x600/public/2019-11/3.png?itok=ozHkm7l7' />
            </div>
          </div>  
        </div>

        <div className='panel'>
          <div className='w-full flex items-stretch self-center' style={{width: `${window.innerWidth - 42}px`}}>
            <div className='w-1/3 h-full self-stretch'>
              <img 
                src='https://www.qed42.com/sites/default/files/styles/600x800/public/2019-11/JS%2BReact.png?itok=_vbUYdTF'/>
            </div>
            <div className='w-2/3 self-center pl-12'>
              <h1 className='text-6xl text-gray-700 font-semibold' style={{fontFamily: 'Montserrat'}}>
                JavaScript App Development
              </h1>
              <h3 className='text-gray-700 text-3xl pr-12 text-' style={{fontFamily: 'Montserrat'}}>
              We render end-to-end JavaScript application development services including interactive web apps, web portals, custom JavaScript frameworks, content management systems, custom plug-ins, and dynamic enterprise grade websites. We are experts in developing highly interactive and responsive JavaScript web applications that fulfill your business goals and requirements.
              </h3>
            </div>
          </div>  
        </div>

        {/* <div className='panel'>
          <div className='w-full' style={{width: `${window.innerWidth - 42}px`}}>
            <h1 
              className='text-gray-700 text-6xl font-bold w-full opacity-75' 
              style={{height: '100px'}}>
              PRODUCT ENGINEERING
            </h1>
            <h2 
              className='text-gray-800 text-4xl lowercase opacity-1'>
              JAVASCRIPT APPLICATION DEVELOPMENT
            </h2>
          </div>  
        </div>

        <div className='panel'>
          <div className='w-full' style={{width: `${window.innerWidth - 42}px`}}>
            <h1 
              className='text-gray-700 text-6xl font-bold w-full opacity-75' 
              style={{height: '100px'}}>
              PRODUCT ENGINEERING
            </h1>
            <h2 
              className='text-gray-800 text-4xl lowercase opacity-1'>
              JAVASCRIPT APPLICATION DEVELOPMENT
            </h2>
          </div>  
        </div> */}

      </div>
    </div>
  )
}