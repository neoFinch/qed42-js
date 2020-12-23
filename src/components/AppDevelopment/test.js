import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './style.css';
import { ScrollTrigger } from 'gsap/all';
import AppDevelopOne from '../../assets/images/app-develop-1.gif';
import AnimationContext from '../../contexts/animation-context';
import Stack from "../Stack";
import AWS from '../../assets/images/amazon-web-services.png'
import GATSBY from '../../assets/images/gatsby-logo.png';
import GRAPHQL from '../../assets/images/graphql-ar21JS_F_L.svg'
import PWA from '../../assets/images/pwa-logo.png';
import REACT from '../../assets/images/reactjs-ar21JS_F_L.svg';
import REACT_NATIVE from '../../assets/images/react nativeJS_F_L.svg';
import NODE from '../../assets/images/nodejs-logo.png';
import MONGODB from '../../assets/images/mongodb-LOGO.png';
import NEXT from '../../assets/images/next-js-logo.png';


export default function ApplicationDevelopmentTest() {  

  let circleWrapperRef = useRef(null);
  let containerRef = useRef(null);
  let firstPanelRef = useRef(null);
  let height = window.innerHeight;
  let animationContext = useContext(AnimationContext);
  let [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    
    /**
     * CIRCLE ANIMATION
     */
    gsap.registerPlugin(ScrollTrigger);
    // let childNodes = circleWrapperRef.current.childNodes;
    // gsap.fromTo(childNodes, {
    //   opacity: 0,
    //   x: 900,
    // },
    // {
    //   opacity: 0.6,
    //   x: -750,
    //   duration: 2.2,
    //   stagger: 0.2,
    // }).repeat(-1).yoyo();
    
    // /**
    //  * PANELS ANIMATION
    //  */
    // let sections = gsap.utils.toArray('.panel');
    // console.log({ sections });
    // gsap.to(containerRef.current.childNodes, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top 0px",
    //     pin: true,
    //     scrub: 1,
    //     markers: true,
    //     snap: {
    //       snapTo: 1/(sections.length - 1),
    //       duration: 0.8
    //     },
    //     pinSpacing: false,
    //     onEnter: (e) => {
    //       console.log('on panel enter : ', e);
    //     },
    //     // scr
    //   }
    // });

    let options = {
        root: null,
        rootMarin: '0px',
        threshold: 0.15
    }
    let Observer = new IntersectionObserver(changeBackground, options);
    let target = document.querySelector('#scroller');
    console.log('[target] : ', target);
    Observer.observe(target);
  }, []);

  const changeBackground = (entries, observer) =>  {
    console.log('[entries] : ', entries);
    entries.map( entry => {
      if (entry.isIntersecting) {
        console.log('[intersecting]');
        setInViewport(true);
        // animationContext.setCurrentBg('#fff');
      } else {
        setInViewport(false);
        // animationContext.setCurrentBg('#DD0031');
      }
    })
  }

  return (
    <div 
      className='horizontal-wrapper pt-20 relative bg-red-200'
      // style={{background: animationContext.currentBg}}
      >
      <div
        id='scroller'
        ref={containerRef}
        className=' app-develop-wrapper w-full flex'
        >
        <div className='panel'>
          <div
            ref={circleWrapperRef}
            className='circle-wrapper w-full flex' 
            style={{height: `400px`, width: `${window.innerWidth}px`}}>
              <div 
                className='circle w-56 rounded-full h-56 self-center opacity-75' 
                style={{ background: inViewport ? 'red':'white' }}></div>
              <div 
                className='circle w-56 rounded-full h-56 self-center opacity-50' 
                style={{ background: inViewport ? 'blue':'white' }}></div>
              <div 
                className='circle w-56 rounded-full h-56 self-center' 
                style={{ background: inViewport ? 'teal':'white' }}></div>
          </div>
          <div className='app-develop-heading'>
            <h1
              className='text-gray-700 text-6xl font-bold w-full'
              style={{ height: '100px', fontFamily: 'Montserrat', color: '#555' }}>
              PRODUCT ENGINEERING
            </h1>
            <h2 
              className='text-gray-70 text-5xl' style={{fontFamily: 'Sacramento', color: '#DD0031'}}>
              Javascript Application Development
            </h2>
          </div>
        </div>

        <div className='panel'>
          <div 
            className='w-full flex justify-center' 
            style={{ 
              width: `${window.innerWidth}px`,
              height: `${window.innerHeight}px`
            }}>
            <div className='w-1/2 self-center pl-10' style={{maxHeight: '500px'}}>
              <h1 className='text-5xl text-gray-700 font-semibold' style={{ fontFamily: 'Montserrat' }}>
                Scale your <br />business with robust, <br />and high-performing applications.
              </h1>
            </div>
            <div className='w-1/2 flex self-center' style={{maxHeight: '500px'}}>
              <img src={AppDevelopOne} />
            </div>
          </div>
        </div>

        <div className='panel'>
          <div 
            className='w-full flex items-stretch self-center bg-red-500' 
            style={{ 
              width: `${window.innerWidth}px`,
              height: `${window.innerHeight}px`
            }}>
            <div className='w-full self-center' style={{maxHeight: '500px'}}>
              <h1 className='text-5xl text-gray-700 font-semibold' 
                style={{ 
                  fontFamily: 'Montserrat',
                  // maxHeight: '500px'
                }}>
                What we offer
              </h1>
              <h3 
                className='text-gray-700 text-xl pr-12 text-justify' 
                style={{ 
                  fontFamily: 'Montserrat',
                  maxHeight: '500px'
                }}>
                QED42 possesses extensive experience and skill set in delivering tailor-made applications that evolve with your business. We have over 10 years of experience offering a wide range of mobile app & website development services.  Looking to enhance an existing app, build a new one, or test your idea with an MVP? We’ve got you covered at each stage of the development life cycle.
              </h3>
            </div>
            <div className='w-full h-full self-center rounded overflow-hidden' style={{maxHeight: '500px'}}>
              <img width='100%' src='https://codedote.com/img/bg-img/stat.gif' />
            </div>
          </div>
        </div>

        <div className='panel'>
          <div className='w-full flex items-stretch self-center' 
            style={{ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` }}>
            <div className='w-1/3 h-full self-center' style={{maxHeight: '500px'}}>
              <img
                src='https://onepatch.com/wp-content/uploads/2020/03/JAVASCRIPT_CIRCLE_NEW.gif' />
            </div>
            <div className='w-2/3 self-center pl-12' style={{maxHeight: '500px'}}>
              <h1 
                className='text-5xl text-gray-700 font-semibold' 
                style={{ 
                  fontFamily: 'Montserrat',
                  maxHeight: '500px'
                }}>
                JavaScript App Development
              </h1>
              <h3 className='text-gray-700 text-xl pr-16 text-justify' style={{ fontFamily: 'Montserrat' }}>
                We render end-to-end JavaScript application development services including interactive web apps, web portals, custom JavaScript frameworks, content management systems, custom plug-ins, and dynamic enterprise grade websites. We are experts in developing highly interactive and responsive JavaScript web applications that fulfill your business goals and requirements.
              </h3>
            </div>
          </div>
        </div>

        <div className='panel'>
          <div 
            className="w-full flex items-stretch self-center"  
            style={{width: `${window.innerWidth}px`, height: `${window.innerHeight}px`}} >
            <div className='w-full pt-12 self-center' style={{maxHeight: '500px'}}>
              <h1 
                className='text-5xl text-gray-700 font-semibold' 
                style={{
                  fontFamily: 'Montserrat',
                  }}>
                Frameworks <br/>and Libraries
              </h1>
            </div>  
            <div 
              className="main-stack-wrapper self-center" 
              style={{maxHeight: '650px'}}>
              <div className="main w-full h-full p-12 self-center">
                <Stack image={NODE} background="#333333"  />
                <Stack image={MONGODB} background='#B7E6CB'  />
                <Stack image={GRAPHQL} background="#A9A9A9" width="100%" />
                <Stack image={GATSBY}  background='#FF961E' />
                <Stack image={REACT}  background='#ddd' width="100%" />
                <Stack image={REACT_NATIVE} background='#262C31' width="100%" />
                <Stack image={AWS}  background='#FFB42C' />
                <Stack image={NEXT}  filter='invert(1)'  background="#000000" />
                <Stack image={PWA} background='#E16038' />
              </div>
            </div>
          </div>
        </div>

        {/* <div className='panel min-h-screen'>
          <div className='w-full' style={{width: `${window.innerWidth}px`}}>
          </div>  
        </div> */}
      </div>
    </div>
  )
}