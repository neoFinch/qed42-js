import React, { useContext, useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo-qed.png';
import QedLogo from '../../assets/images/qed-logo-1.svg';
import Menu from '../../assets/images/menu.svg';
import MenuOpen from '../../assets/images/menu_open.svg';
import gsap from 'gsap';
import './style.css';
import AnimationContext from '../../contexts/animation-context';
import { lightOrDark } from '../../services/helper';

export default function Navbar() {

  let animationContext = useContext(AnimationContext)
  let navbarRef = useRef(null);
  let logoRef = useRef(null);
  let menuRef = useRef(null);
  let menuLinkRef = useRef(null)
  const [navBg, setNavBg] = useState('transparent');
  

  useEffect(() => {
    let bgType = lightOrDark(animationContext.currentBg);
    setNavBg(bgType);
    gsap.to(menuLinkRef.current.childNodes, {
      opacity: 1,
      color: bgType === 'light' ? '#555': '#fff'
    })
  }, [animationContext.currentBg])

  

  useEffect(() => {
    gsap.fromTo(logoRef.current, {
      opacity: 0,
      x: -20
    },{
      x: 0,
      opacity: 1,
      duration: 1
    });
    gsap.fromTo(menuRef.current, {
      opacity: 0,
      x: 20
    },{
      x: 0,
      opacity: 1,
      duration: 1
    })
  }, []);

  useEffect(() => {
    
    if (animationContext.openNav) {
      gsap.to(menuLinkRef.current, {
        opacity: 1,
        duration: 1
      });
      
    } else {
      gsap.to(menuLinkRef.current, {
        opacity: 0,
        duration: 0.5
      });
    }
  }, [animationContext.openNav])
  
  return (
    <div
      className='flex justify-between px-10 py-5 w-full fixed top-0 left-0 z-40' 
      style={{maxHeight: '70px', fontFamily: 'Montserrat'}}>
      <div 
        ref={logoRef}
        onClick={() => animationContext.executeScroll('Home')}
        className='logo-wrapper cursor-pointer rounded-full' 
        style={{width: '120px', height: '40px', backdropFilter: 'blur(5px)', padding: '5px'}}>
        <img src={QedLogo} style={{width: '100px'}}/>
      </div>
      <div 
        ref={menuRef} 
        className='flex justify-end menu-wrapper h-8 w-6/12 self-center '>
        <ul 
          ref={menuLinkRef}
          style={{backdropFilter: 'blur(5px)'}}
          className='self-end rounded px-2 font-semibold'
          >
          <li 
            className='cursor-pointer' 
            onClick={() => animationContext.executeScroll('Home')}
            >Home</li>
          <li 
            className='cursor-pointer' 
            onClick={() => animationContext.executeScroll('Project')} 
            >Projects</li>
          <li 
            className='cursor-pointer' 
            onClick={() => animationContext.executeScroll('Client')} 
            >Clients</li>
          <li 
            className='cursor-pointer' 
            onClick={() => animationContext.executeScroll('Services')} 
            >Services</li>
          <li 
            className='cursor-pointer' 
            onClick={() => animationContext.executeScroll('Dev')} 
            >Engineering</li>
          <li 
            className='cursor-pointer' 
            onClick={() => animationContext.executeScroll('Contact')} 
            >Contact Us</li>
        </ul>
        <button 
          onClick={() => animationContext.setOpenNav(!animationContext.openNav)} 
          className='invert-colors cursor-pointer focus:outline-none pt-1'>
          {
            animationContext.openNav ? 
            <img
              className={navBg === 'light' 
                ? 'transform scale-110 outline-none invert-colors' 
                : 'transform scale-110 outline-none'}
              src={MenuOpen} />
            :
            <img 
              className={navBg === 'light' ? 'outline-none invert-colors' : 'outline-none'}
              src={Menu}/>
          }
        </button>
      </div>
    </div>
  )
}