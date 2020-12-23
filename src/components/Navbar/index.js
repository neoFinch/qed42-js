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
      color: bgType === 'light' ? '#111': '#fff'
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
    let tl = gsap.timeline();

    if (animationContext.openNav) {
      let reverseNode = [...menuLinkRef.current.childNodes].reverse();
      tl
      .to(menuLinkRef.current, {
        width: '100%',
        overflow: 'auto',
        duration: 0.3
      })
      .to(reverseNode, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1
      })
    } else {
      tl
      .to(menuLinkRef.current.childNodes, {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      .to(menuLinkRef.current, { width: 0, duration: 0.3 })
    }
  }, [animationContext.openNav])
  
  return (
    <div
      className='flex justify-between px-10 py-5 w-full fixed top-0 left-0 z-20' 
      style={{maxHeight: '70px', fontFamily: 'Montserrat'}}>
      <div 
        ref={logoRef} 
        className='logo-wrapper' 
        style={{width: '100px'}}>
        <img src={QedLogo} className='w-full'/>
      </div>
      <div 
        ref={menuRef} 
        style={{backdropFilter: 'blur(5px)'}}
        className='flex justify-end menu-wrapper h-8 w-5/12 self-center'>
        <ul 
          ref={menuLinkRef}
          style={{fontSize: 'bold'}}
          className={'self-end'}
          >
          <li>Home</li>
          <li>Product Engineering</li>
          <li>Our Services</li>
          <li>Contact Us</li>
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