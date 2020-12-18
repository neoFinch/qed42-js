import React, { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo-qed.png';
import gsap from 'gsap';

export default function Navbar() {

  let navbarRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(navbarRef.current, {
      opacity: 0,
      x: -20
    },{
      x: 0,
      opacity: 1,
      duration: 0.5
    })
  }, [])
  
  return (
    <div ref={navbarRef} className='flex p-2 w-full fixed top-0 left-0 z-10' style={{maxHeight: '70px'}}>
      <div className='logo-wrapper' style={{width: '50px'}}>
        <img src={logo} className='w-full'/>
      </div>
      {console.log('NAVBAR CALLED')}
    </div>
  )
}