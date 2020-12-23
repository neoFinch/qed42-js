import React, { useContext, useEffect, useRef, useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import AnimationContext from '../../contexts/animation-context';
import './style.css'
import Deck from '../CardDeck';
import gsap from 'gsap';


export default function ProjectHighlights() {

  const [index, setIndex] = useState(0)
  let animationContext = useContext(AnimationContext);
  let swiperWrapperRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(swiperWrapperRef.current, {
      opacity: 1,
      scrollTrigger: {
        // markers: true,
        trigger: swiperWrapperRef.current,
        start: "+=133 80%",
        end: "+=200 60%",
        onEnter: () => {
          animationContext.setCurrentBg('#DD0031');
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#171719')
        }
      }
    })
  }, [])

  const cards = [
    {
      text: 'ILAO - Digitised Legal Accessibility',
      id: 0
    },
    {
      text: 'Shop The Area - Gatsby Powered Multi-vendor E-commerce Platform',
      id: 1
    },
    {
      text: 'Grofers - Marketing CMS for Mobile App',
      id: 2
    },
    {
      text: 'An Intuitive Platform to Find Co-living Spaces for Digital Nomads',
      id: 3
    },
    {
      text: "Ashoka - Localised Presence Across Geographies",
      id: 4
    },
    {
      text: 'SABMiller - Drupal Multi-site',
      id: 5
    },
    {
      text: 'Clasifika - Decoupled Drupal Mobile App',
      id: 6
    },
    {
      text: 'Azim Premji Foundation - Enabling Educators',
      id: 7
    }
  ]

  const transitions = useTransition(cards[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  return (
    <div
      ref={swiperWrapperRef}
      className="overflow-x-hidden flex items-center w-full"
      style={{ height: window.innerHeight, backgroundColor: animationContext.currentBg }}
    >
      <div className="flex w-full flex-row justify-center">
        <div className="relative w-1/3 flex items-center justify-center">
          {
            transitions.map(({ item, props, key }) => (
              <animated.div key={key} className="heading-wrapper absolute" style={{ ...props }}>
                <h1 className="font-semibold text-5xl text-white" style={{ fontFamily: 'Montserrat' }}>
                  {item.text}
                </h1>
              </animated.div>
            ))
          }
        </div>
        <div className=" relative w-1/2 flex items-center justify-center">
          <Deck setIndex={setIndex} />
        </div>
      </div>
    </div>
  )
}
