import React, { useEffect, useRef, useState, useMemo, useContext } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import './style.css'

import { useTransition, a } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from './useMeasure'
import useMedia from './useMedia'
import data from '../../data'
import Service1 from './service1';
import Service2 from './service2'
import { useDencrypt } from "use-dencrypt-effect";
import AnimationContext from '../../contexts/animation-context';


export default function OurServices({reff}) {

  const { result, dencrypt } = useDencrypt();
  const [entered, setEntered] = useState(false);
  
  let animationContext = useContext(AnimationContext)

  const ourServicesRef = useRef(null);
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ourServicesRef.current,
        start: "+=133 90%",
        end: "+=200 60%",
        // markers: true,
        pinSpacing: false,
        onEnter: () => {
          animationContext.setCurrentBg('#1A212C');
          dencrypt('REST API Solutions');
          setEntered(true);
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#fff')
        }
      }
    });
  }, []);
  
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set] = useState(data)
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, items, width])
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })

  return (
    <div
      ref={ourServicesRef}
      className='our-services-wrapper flex flex-wrap min-h-screen w-full px-10 py-16 overflow-hidden' 
      style={{zIndex: '1', fontFamily: 'Montserrat', maxHeight: window.innerHeight}}>
      <h1 className='text-5xl font-semibold text-gray-700 w-full' style={{fontFamily: 'Montserrat'}}>Our Services</h1>
      <div className='w-full flex justify-around'>
        <div className='list-wrapper'>
            <div {...bind} className="list w-screen " style={{ height: Math.max(...heights)}}>
              {transitions.map(({ item, props: { xy, ...rest }, key }) => (
                <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                  <div style={{ backgroundImage: item.css }} />
                </a.div>
              ))}
            </div>

        </div>
        <div ref={reff} className='w-4/12 flex flex-col relative pt-12 pl-6' style={{height: '450px'}}>
          <div className='w-screen mt-4'>
            <h3 className='text-2xl text-gray-600 font-semibold' style={{fontFamily: 'Montserrat'}}>{result}</h3>
          </div>
          <Service1 entered={entered} />
          <Service2 entered={entered} />
        </div>
      </div>
    </div>
  )
}