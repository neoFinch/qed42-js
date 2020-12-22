import React, { useContext, useEffect, useRef, useState } from 'react';
// import forwardSvg from '../../assets/images/new.svg';
import takingDigitalSvg from '../../assets/images/taking-digital.svg';
import forwardSvg from '../../assets/images/forward.svg';
import anime from 'animejs/lib/anime.es.js';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import * as VFX from 'react-vfx';
import gsap from 'gsap';
import AnimationContext from '../../contexts/animation-context';

export default function Banner() {

  const [fillColor, setFillColor] = useState('transparent');
  const specialChars = ['ß', 'µ', 'Ø', '¥', '±', '¿', 'þ']
  let bannerRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const background = '#161618';
  let animationContext = useContext(AnimationContext);
  const [bg, setBg] = useState('');

  useEffect(() => {
    gsap.fromTo(bannerRef.current, {
      opacity: '0',
    }, {
      opacity: '1',
      duration: 0.9
    });
    // setVantaEffect(1);
    animationContext.setCurrentBg('#161618');
    setBg(animationContext.currentBg);
  }, [])

  useEffect(() => {
    console.log('current bg vanta : ', animationContext.currentBg);
    // console.log('bg : ', bg);
    // console.log('vantaEffect : ', vantaEffect);
    // if (!vantaEffect || bg !== animationContext.currentBg) {
      if (!vantaEffect) {
      setVantaEffect(NET({
        el: bannerRef.current,
        color: 0xd71556,
        // backgroundColor: '#161618',
        backgroundColor: animationContext.currentBg,
        points: 9.00,
        THREE: THREE
      }))
      setBg(animationContext.currentBg);
    } 
  }, [vantaEffect, animationContext.currentBg])
  
  return (
    <div ref={bannerRef} className='banner-wrapper min-h-screen flex p-10 w-full pt-40'>
      <div className='flex w-full flex-wrap justify-center text-center font-bold' style={{fontFamily: 'Roboto, sans-serif'}}>
        <div className='flex flex-wrap self-center justify-center'>
          <img className='w-2/3 pb-20' style={{filter: 'invert(1)'}} src={takingDigitalSvg} />
          <div className='w-full text-center'>
            <VFX.VFXProvider>
              <VFX.VFXImg
                className='w-1/2 m-auto'
                src={forwardSvg}
                shader="rgbGlitch"
              />
            </VFX.VFXProvider>
          </div>
        </div>
      </div>
    </div>
  )
}