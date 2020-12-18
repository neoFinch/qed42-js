import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import './style.css'

export default function OurServices() {

  const ourServicesRef = useRef(null);
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ourServicesRef.current,
        start: "+=133 90%",
        end: "+=200 60%",
        scrub: true,
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(ourServicesRef.current, {
      // opacity: 0.5,
      duration: 0.5,
    }, {
      // opacity: 1,
      duration: 0.5,
      // background: ''
    })
  }, []);

  return (
    <div
      ref={ourServicesRef}
      className='our-services-wrapper flex flex-wrap min-h-screen w-full px-10 py-16 bg-white' 
      style={{zIndex: '1', fontFamily: 'Montserrat'}}>
      <h1 className='text-6xl font-semibold text-gray-500 w-full' style={{fontFamily: 'Montserrat'}}>Our Services</h1>
      <div className='w-1/3 p-5'>
        <h3 className='text-2xl text-gray-600 font-semibold' style={{fontFamily: 'Montserrat'}}>REST API Solutions</h3>
        <p className='text-xl text-justify text-gray-700 pt-4'>
          REST APIs provide a great deal of flexibility. Data is not tied to resources or methods, so REST can handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia. This flexibility allows developers to build an API that meets your needs while also meeting the needs of very diverse customers. We understand and follow all the updated and stable REST API’s in the market.
        </p>
      </div>
      <div className='w-1/3 p-5'>
        <h3 className='text-2xl text-gray-600 font-semibold' style={{fontFamily: 'Montserrat'}}>Progressive web application</h3>
        <p className='text-xl text-justify text-gray-700 pt-4'>
          We ensure that your web apps are flexible for multiple devices delivering a flawless native app alike performance. PWA’s are highly reliable, fast, engaging, and deliver an amazing experience to the users. Create PWA’s that experience maximum user engagement and increased conversions with us.
        </p>
      </div>
      <div className='w-1/3 p-5'>
        <h3 className='text-2xl text-gray-600 font-semibold' style={{fontFamily: 'Montserrat'}}>Front end performance optimization</h3>
        <p className='text-xl text-justify text-gray-700 pt-4'>
          Improving website performance where it matters the most. FEO increases your revenue opportunities, encourages agility, and helps you scale - on any device, at any time. Fast loading web pages improve user experience, retain users, and ensure they return. QED42 helps you accelerate your web performance with performance audit, providing insights, and develop an optimal solution.
        </p>
      </div>
    </div>
  )
}