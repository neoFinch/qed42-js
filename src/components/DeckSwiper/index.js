import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import './style.css'

gsap.registerPlugin(Draggable);
let direction = ''
let oldx = 0
let mousemovemethod = function (e) {

  if (e.pageX < oldx) {
    direction = "left"
  } else if (e.pageX > oldx) {
    direction = "right"
  }
  oldx = e.pageX;

}
document.addEventListener('mousemove', mousemovemethod)

export default function DeckSwiper() {

  const cardRef = useRef(null)
  const slideRef = useRef(null)

  const [cards, setCards] = useState([
    {
      name: 'First_Div',
      color: 'red',
      rotate: 'rotate(7deg)'
    },
    {
      name: 'Second_Div',
      color: 'blue',
      rotate: 'rotate(5deg)'
    },
    {
      name: 'Third_Div',
      color: 'green',
      rotate: 'rotate(-7deg)'
    },
    {
      name: 'Fourth_Div',
      color: 'pink',
      rotate: 'rotate(5deg)'
    }
  ])
  const [tempCards, setTempCards] = useState([
    {
      name: 'First_Div',
      color: 'red',
      rotate: 'rotate(7deg)'
    },
    {
      name: 'Second_Div',
      color: 'blue',
      rotate: 'rotate(5deg)'
    },
    {
      name: 'Third_Div',
      color: 'green',
      rotate: 'rotate(-7deg)'
    },
    {
      name: 'Fourth_Div',
      color: 'pink',
      rotate: 'rotate(5deg)'
    }
  ])

  useEffect(() => {
    enableDrag();
  }, [])


  const enableDrag = () => {
    const refArray = [...cardRef.current.childNodes]
    const { id } = slideRef.current

    Draggable.create(refArray, {
      type: "x",
      onPress: () => {
        // console.log('slideRef', slideRef)
        gsap.to(cardRef.current.childNodes[cardRef.current.childNodes.length - 1], { rotation: 0, duration: 0.6, scale: 1.2 })
      },
      onRelease: () => {
        gsap.to(cardRef.current.childNodes[cardRef.current.childNodes.length - 1], { rotation: 5, duration: 0.6, scale: 1 })
      },
      // onDrag: () => { mouseMoveAction(id) },
      onDragEnd: () => { removeCard(id) }
    })
  }

  // componentDidUpdate() {
  //   const { tempCards, cards } = this.state
  //   const abc = document.querySelectorAll('.first_div')
  //   if (!tempCards.length) {
  //     this.setState({ tempCards: cards }, () => {
  //       this.enableDrag()
  //       if (abc.length) {
  //         gsap.fromTo('.first_div', {
  //           opacity: 0,
  //           x: 800
  //         }, {
  //           opacity: 1,
  //           x: 0,
  //           duration: 1.5
  //         })

  //       }
  //     })
  //   }
  // }

  const removeCard = (item) => {
    let filteredArr = tempCards.filter((card) => card.name !== item)
    setTempCards(filteredArr)
  }

  const mouseMoveAction = (item) => {
    let card = document.getElementById(item)
    if (direction === 'right') {
      gsap.to(card, { rotation: 30, duration: 1.5 })
      gsap.to(card, { opacity: 0, duration: 5 })
    } else {
      gsap.to(card, { rotation: -30, duration: 1.5 })
      gsap.to(card, { opacity: 0, duration: 5 })
    }
  }

  return (
    <div ref={cardRef} id="container" style={{ flex: 1, display: 'flex', justifyContent: "center", alignItems: "center" }}>
      {
        tempCards.map((item, index) => (
          <div ref={slideRef} id={item.name} key={index} className='first_div' style={{ backgroundColor: item.color, transform: `${item.rotate}` }}>
            <p>{item.name}</p>
          </div>
        ))
      }
    </div>
  )
}
