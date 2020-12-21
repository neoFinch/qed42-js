import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

import './style.css'
import NextButton from '../../assets/images/next.svg'
import PreviousButton from '../../assets/images/previous.svg'
import Deck from '../CardDeck';

export default function ProjectHighlights() {

  const [controlVelocity, setControlVel] = useState(0)
  const [controlDir, setControlDir] = useState(0)
  const [isControllerPressed, setIsControllerPressed] = useState(false)
  const [index, setIndex] = useState(0)

  const tempCards = [
    {
      text: 'Making Legal Language Digitally Accessible - ILAO',
      id: 0
    },
    {
      text: 'Powering a Multi-vendor E-commerce Platform with Gatsby',
      id: 1
    },
    {
      text: 'Marketing CMS for Grofers Native Mobile App',
      id: 2
    },
    {
      text: 'An Intuitive Platform to Find Co-living Spaces for Digital Nomads',
      id: 3
    },
    {
      text: "Enabling Ashoka.org's Presence Across 90+ Geographies with Localisation",
      id: 4
    },
    {
      text: 'Enabled Multi-site rollouts for SABMiller with Drupal',
      id: 5
    },
    {
      text: 'Multi-platform Real estate app powered by Decoupled Drupal - Clasifika',
      id: 6
    },
    {
      text: 'Enabling Educators at Azim Premji Foundation',
      id: 7
    }
  ]

  const transitions = useTransition(tempCards[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  const flipCard = (dir) => {
    dir === 'right' ? setControlDir(1) : setControlDir(-1)
    setControlVel(0.25)
    setTimeout(() => {
      setControlDir(0)
      setControlVel(0)
      setIsControllerPressed(false)
    }, 200)
  }

  const handleController = () => {
    setIsControllerPressed(true)
  }
  const resetControllerPress = () => {
    setIsControllerPressed(false)
  }

  return (
    <div
      className="overflow-x-hidden flex w-full justify-around"
      style={{ height: window.innerHeight, backgroundColor: '#DD0031' }}
    >
      <div className="align-center justify-center flex flex-col">
        <img
          id="controller"
          src={NextButton}
          alt="next button"
          onClick={() => { flipCard('right') }}
          onMouseDown={handleController}
          onMouseUp={resetControllerPress}
        />
        <div className="h-5" />
        <img
          id="controller"
          src={PreviousButton}
          alt="previous button"
          onClick={() => { flipCard('left') }}
          onMouseDown={handleController}
          onMouseUp={resetControllerPress}
        />
      </div>
      <div className="flex w-4/5 flex-row justify-around">
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
          <Deck
            controlDir={controlDir}
            controlVelocity={controlVelocity}
            isControllerPressed={isControllerPressed}
            setIndex={setIndex}
          />
        </div>
      </div>
    </div>
  )
}
