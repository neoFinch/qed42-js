import React, { useContext, useEffect, useRef, useState } from 'react';
// import forwardSvg from '../../assets/images/new.svg';
import takingDigitalSvg from '../../assets/images/taking-digital.svg';
import forwardSvg from '../../assets/images/forward.svg';
// import anime from 'animejs/lib/anime.es.js';
import NET from 'vanta/dist/vanta.net.min';
// import * as THREE from 'three';
import * as VFX from 'react-vfx';
import gsap from 'gsap';
import AnimationContext from '../../contexts/animation-context';

export default function Banner({reff}) {

  // const [fillColor, setFillColor] = useState('transparent');
  // const specialChars = ['ß', 'µ', 'Ø', '¥', '±', '¿', 'þ']
  let bannerRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0)
  const [flicker, setFlicker] = useState(1)
  const overlayRef = useRef(null)
  // const background = '#161618';
  let animationContext = useContext(AnimationContext);
  const [bg, setBg] = useState('');

  useEffect(() => {
    gsap.fromTo(bannerRef.current, {
      opacity: '0',
    }, {
      opacity: '1',
      duration: 0.9
    });
    animationContext.setCurrentBg('#161618');
    // setBg(animationContext.currentBg);
  }, [])

  useEffect(() => {
      if (!vantaEffect) {
      setVantaEffect(NET({
        el: bannerRef.current,
        color: 0xd71556,
        backgroundColor: animationContext.currentBg,
        points: 7.00,
      }))
      // setBg(animationContext.currentBg);
    } 
  }, [vantaEffect, animationContext.currentBg]);

  useEffect(() => {

    gsap.to(bannerRef.current, {
      scrollTrigger: {
        // markers: true,
        start: "+=133 10%",
        end: "+=133 5%",
        onEnter: () => {
          setFlicker(0)
        },
        onLeaveBack: () => {
          setFlicker(1)
        }
      }
    });

    if (animationContext.showRedBg) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 1,
        background: animationContext.currentBg,
      })
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1,
      })
    }
  }, [animationContext.showRedBg])
  
  return (
    <div ref={bannerRef} className='banner-wrapper min-h-screen flex p-10 w-full pt-40 relative'>
      {
        1 &&
        <div
          ref={overlayRef}
          className='top-0 left-0 absolute min-h-screen z-10 w-full' >
        </div>
      }
      <div 
        className='flex w-full flex-wrap justify-center text-center font-bold' 
        style={{fontFamily: 'Roboto, sans-serif'}}>
        <div ref={reff} className='flex flex-wrap self-center justify-center'>
          <img className='w-2/3 pb-20' style={{filter: 'invert(1)'}} src={takingDigitalSvg} />
          <div className='w-full text-center z-0'>
          {
            !flicker ?
            <img
              className='w-1/2 m-auto'
              src={forwardSvg}/>
              :
            <VFX.VFXProvider style={{ opacity: 0}}>
              <VFX.VFXImg
                
                className='w-1/2 m-auto'
                src={forwardSvg}
                shader="rgbGlitch"
              />
            </VFX.VFXProvider>
          }
          </div>
        </div>
      </div>
    </div>
  )
}