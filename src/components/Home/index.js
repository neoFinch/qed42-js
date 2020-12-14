import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import './style.css';

export default function Home() {

  const logoRef = useRef(null);
  useEffect(() => {
    let refArray = [...logoRef.current.childNodes];
    let filteredArr = refArray.filter(node => 
      node.attributes.datatype.value < 55
    ).reverse();
    gsap.fromTo(logoRef.current.childNodes, {
      y: 30,
      opacity: 0,
      // ease: 'expo.out'
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "expo.out",
      stagger: 0.1
    });
  }, [])

  const createSquares = () => {
    let squareArr = [];
    for(let i=0; i < 91; i++) {
      let redBox = [3, 11, 17, 18, 23, 24, 25, 29, 30, 31, 33, 35, 36, 37, 39, 40, 41];
      let lastRow = [50, 51, 52, 53, 54];
      let grayBox = [57, 58, 59, 60, 61, 65, 66, 67, 73, 80, 87];
      let sixthRow = [42, 43, 44, 45, 46, 47, 48];
      let customClassname = `box box-${i}`;

      if (redBox.indexOf(i) !== -1) {
        customClassname = `${customClassname} box-red`;
      }
      if (grayBox.indexOf(i) !== -1) {
        customClassname = `${customClassname} box-grey`;
      }
      if (lastRow.indexOf(i) !== -1) {
        customClassname = `${customClassname} box-last-row`;
      }
      if (sixthRow.indexOf(i) !== -1) {
        customClassname = `${customClassname} box-six-row`;
      }
      squareArr.push(
      <div key={i} className={customClassname} datatype={i}></div>
      )
    }
    return squareArr
  }

  return (
    <div className='splash-screen-wrapper flex justify-center align-middle w-full'>
      <div 
        ref={logoRef} 
        className='animated-logo-wrapper flex flex-wrap self-center'>
        {
          createSquares()
        }
      </div>
    </div>
  )
}