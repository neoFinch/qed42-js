import React, { useEffect, useState } from 'react';
import forwardSvg from '../../assets/images/new.svg';
import anime from 'animejs/lib/anime.es.js';

export default function Banner() {

  const [fillColor, setFillColor] = useState('transparent');
  
  useEffect(() => {
    anime({
      targets: '.banner-wrapper path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'linear',
      loop: false,
      complete: function(anim) {
        console.log('anim : ', anim)
        if (anim.completed) {
          // setFillColor('#DD0031');
        }
      }
    });
  }, [])
  
  return (
    <div className='banner-wrapper min-h-screen flex p-10 pb-24 w-full'>
      <div className='flex w-1/2 flex-wrap justify-center' style={{fontFamily: 'Montserrat'}}>
        <div className='self-center'>
          <h1 className='w-full font-semibold' style={{fontSize: '80px'}}>TAKING</h1>
          <h1 className='w-full font-semibold' style={{fontSize: '80px'}}>DIGITAL</h1>
          <h1 className='w-full font-bold italic' style={{fontSize: '100px', color: '#DD0031'}}>FORWARD</h1>
        </div>
      </div>
      <div className='flex w-1/2 justify-center'>
      <img width='60%' src='https://camo.githubusercontent.com/d1a2aad215e12e410ac90760ef7cbcb07ca638ed/68747470733a2f2f692e6962622e636f2f434a66573138482f736869702e676966'/>
      </div>
    </div>
  )
}