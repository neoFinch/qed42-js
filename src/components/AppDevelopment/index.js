import React, { useContext, useEffect, useRef } from 'react';
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


export default function ApplicationDevelopment() {  

  let circleWrapperRef = useRef(null);
  let containerRef = useRef(null);
  let firstPanelRef = useRef(null);
  let height = window.innerHeight;
  let animationContext = useContext(AnimationContext);

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
    console.log({ sections });
    gsap.to(containerRef.current.childNodes, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70px",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.3
        },
        pinSpacing: false,
      }
    });

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "+=133 80%",
        end: "+=200 60%",
        pin: true,
        scrub: 1,
        pinSpacing: false,
        markers: true,
        onEnter: () => {
          animationContext.setCurrentBg('#fff');
        },
        onLeaveBack: () => {
          console.log('Leave BACK');
          animationContext.setCurrentBg('#161618');
        },
      }
    });

  }, []);


  return (
    <div className='pt-20' style={{ background: animationContext.currentBg }}>
      <div
        id='scroller'
        ref={containerRef}
        className='app-develop-wrapper flex overflow-x-hidden overflow-y-hidden'
        style={{ height: `${height * 5}px`, width: `${window.innerWidth}px` }}
      >
        <div className='panel' ref={firstPanelRef}>
          <div
            ref={circleWrapperRef}
            className='circle-wrapper w-full flex'
            style={{ height: `400px`, width: `${window.innerWidth - 42}px` }}
          >
            <div className='circle w-56 rounded-full h-56 self-center opacity-75' style={{ background: '#777' }}></div>
            <div className='circle w-56 rounded-full h-56 self-center opacity-50' style={{ background: '#666' }}></div>
            <div className='circle w-56 rounded-full h-56 self-center ' style={{ background: '#555' }}></div>
          </div>
          <div>
            <h1
              className='text-gray-700 text-6xl font-bold w-full'
              style={{ height: '100px', fontFamily: 'Montserrat', color: '#555' }}>
              PRODUCT ENGINEERING
            </h1>
            <h2
              className='text-gray-70 text-5xl' style={{ fontFamily: 'Sacramento', color: '#DD0031' }}>
              Javascript Application Development
            </h2>
          </div>
        </div>

        <div className='panel pt-20'>
          <div className='w-full flex items-stretch self-center' style={{ width: `${window.innerWidth - 42}px` }}>
            <div className='w-full self-center'>
              <h1 className='text-5xl text-gray-700 font-semibold' style={{ fontFamily: 'Montserrat' }}>
                Scale your <br />business with robust, <br />and high-performing applications.
              </h1>
            </div>
            <div className='w-full h-full self-stretch flex justify-center'>
              <img src={AppDevelopOne} />
            </div>
          </div>
        </div>

        <div className='panel pt-20'>
          <div className='w-full flex items-stretch self-center' style={{ width: `${window.innerWidth - 42}px` }}>
            <div className='w-full self-center'>
              <h1 className='text-6xl text-gray-700 font-semibold' style={{ fontFamily: 'Montserrat' }}>
                What we offer
              </h1>
              <h3 className='text-gray-700 text-3xl pr-12 text-' style={{ fontFamily: 'Montserrat' }}>
                QED42 possesses extensive experience and skill set in delivering tailor-made applications that evolve with your business. We have over 10 years of experience offering a wide range of mobile app & website development services.  Looking to enhance an existing app, build a new one, or test your idea with an MVP? We’ve got you covered at each stage of the development life cycle.
              </h3>
            </div>
            <div className='w-full h-full self-stretch rounded overflow-hidden'>
              <img width='100%' src='https://codedote.com/img/bg-img/stat.gif' />
            </div>
          </div>
        </div>

        <div className='panel'>
          <div className='w-full flex items-stretch self-center' style={{ width: `${window.innerWidth - 42}px` }}>
            <div className='w-1/3 h-full self-stretch'>
              <img
                src='https://onepatch.com/wp-content/uploads/2020/03/JAVASCRIPT_CIRCLE_NEW.gif' />
            </div>
            <div className='w-2/3 self-center pl-12'>
              <h1 className='text-6xl text-gray-700 font-semibold' style={{ fontFamily: 'Montserrat' }}>
                JavaScript App Development
              </h1>
              <h3 className='text-gray-700 text-3xl pr-12 text-' style={{ fontFamily: 'Montserrat' }}>
                We render end-to-end JavaScript application development services including interactive web apps, web portals, custom JavaScript frameworks, content management systems, custom plug-ins, and dynamic enterprise grade websites. We are experts in developing highly interactive and responsive JavaScript web applications that fulfill your business goals and requirements.
              </h3>
            </div>
          </div>
        </div>

        <div className='panel'>
          <div className="w-full flex items-stretch self-center"  style={{width: `${window.innerWidth - 42}px`}} >
            <div className='w-full pt-12'>
              <h1 className='text-6xl text-gray-700 font-semibold' style={{fontFamily: 'Montserrat'}} >
                Frameworks and Libraries
              </h1>
            </div>  
            <div className="main-stack-wrapper">
              <div className="main w-full h-full p-12">
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

        <div className='panel min-h-screen'>
          <div className='w-full' style={{width: `${window.innerWidth - 42}px`}}>
          </div>  
        </div>
      </div>
    </div>
  )
}