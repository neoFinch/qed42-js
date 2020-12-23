import gsap from 'gsap'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { useSpring, config, animated } from 'react-spring'
import AnimationContext from '../../contexts/animation-context'

import './style.css'

export default function ContactUs() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [input1Focus, setInput1Focus] = useState(false)
  const [input2Focus, setInput2Focus] = useState(false)
  const [input3Focus, setInput3Focus] = useState(false)

  const springRef = useRef();
  const contacUsRef = useRef(null);
  let animationContext = useContext(AnimationContext);
  const { height, width, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { height: '18%', width: "30%", background: '#e2e8f0' },
    to: { height: open ? '100%' : '18%', width: open ? '100%' : "30%", background: open ? 'white' : '#e2e8f0' }
  })

  const adjustFocus = (id) => {
    if (id === "input1") {
      setInput1Focus(true)
      setInput2Focus(false)
      setInput3Focus(false)
    } else if (id === "input2") {
      setInput1Focus(false)
      setInput2Focus(true)
      setInput3Focus(false)
    } else {
      setInput1Focus(false)
      setInput2Focus(false)
      setInput3Focus(true)
    }
  }

  useEffect(() => {
    gsap.to(contacUsRef.current, {
      scrollTrigger: {
        trigger: contacUsRef.current,
        start: "+=133 90%",
        end: "+=200 60%",
        // markers: true,
        onEnter: () => {
          animationContext.setCurrentBg('#232323');
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#fff');
        }
      }
    })
  }, [])

  return (
    <div
      ref={contacUsRef}
      className="w-full flex items-center justify-center z-20" style={{ height: window.innerHeight }}>
      <animated.div
        id="wrapper"
        className="rounded-full flex items-center justify-center cursor-pointer"
        style={{ ...rest, width: width, height: height }}
      >
        {
          !open ? (
            <div
              className="label-wrapper cursor-pointer text-center"
              onClick={() => setOpen(true)}
            >
              <h1 className="font-semibold text-5xl cursor-pointer" style={{ fontFamily: 'Montserrat' }} >
                Contact Us?
              </h1>
            </div>
          ) : null
        }

        {
          open ? (
            <div
              className="w-full flex items-center justify-center"
              style={{ height: window.innerHeight }}
            >
              <div className="w-1/2 h-auto">
                <h1 className="font-bold mb-5 text-6xl" style={{ fontFamily: 'Montserrat' }}>
                  WRITE TO US
                  </h1>
                <p >
                  <input
                    type="text"
                    id="input1"
                    placeholder="Name"
                    className="w-full h-16 border-b outline-none"
                    onFocus={() => { adjustFocus("input1") }}
                    style={{ fontFamily: 'Montserrat', borderBottomColor: input1Focus ? 'gray' : "" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  <input
                    type="email"
                    id="input2"
                    placeholder="Email"
                    className="w-full h-16 border-b outline-none"
                    style={{ fontFamily: 'Montserrat', borderBottomColor: input2Focus ? 'gray' : "" }}
                    value={email}
                    onFocus={() => { adjustFocus("input2") }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    id="input3"
                    placeholder="How can we help you?"
                    className="w-full h-16 border-b outline-none"
                    style={{ fontFamily: 'Montserrat', borderBottomColor: input3Focus ? 'gray' : "" }}
                    value={description}
                    onFocus={() => { adjustFocus("input3") }}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </p>
                <p className="mt-5">
                  <input type="checkbox" value={isChecked} onChange={() => setIsChecked(true)} />
                  <label className="ml-2 font-light" style={{ fontFamily: 'Montserrat' }}>I agree to the tranfer of personal data in accordance with the Privacy Policy.</label>
                </p>
                <div className="w-full mt-12">
                  <p
                    className="submitBtnWrapper flex ml-auto mr-auto items-center justify-center rounded-full cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className="submitBtn flex items-center justify-center bg-gray-300 rounded-full"
                      style={{ width: 200, height: 200 }}
                    >
                      <button className="font-semibold" style={{ fontFamily: 'Montserrat', outline: 'none' }} >SUBMIT</button>
                    </span>
                  </p>
                </div>
              </div>
            </div >
          ) : null
        }
      </animated.div>
    </div>

  )
}
