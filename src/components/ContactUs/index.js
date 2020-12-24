import gsap from 'gsap'
import React, { useState, useRef, useEffect, useContext } from 'react'
import AnimationContext from '../../contexts/animation-context'

import './style.css'

export default function ContactUs({reff}) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [input1Focus, setInput1Focus] = useState(false)
  const [input2Focus, setInput2Focus] = useState(false)
  const [input3Focus, setInput3Focus] = useState(false)

  // const springRef = useRef();
  const contacUsRef = useRef(null);
  let animationContext = useContext(AnimationContext);
  // const { height, width, opacity, ...rest } = useSpring({
  //   ref: springRef,
  //   config: config.stiff,
  //   from: { height: '18%', width: "30%", background: '#e2e8f0' },
  //   to: { height: open ? '100%' : '18%', width: open ? '100%' : "30%", background: open ? 'white' : '#e2e8f0' }
  // })

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
          animationContext.setCurrentBg('linear-gradient(to left, #8a2387, #e94057, #EB484F)');
        },
        onLeaveBack: () => {
          animationContext.setCurrentBg('#fff');
        }
      }
    })
  }, [])

  const handleClickOpen = () => {
    gsap.from('.component', {
      opacity: 0,
      y: 250,
      duration: 0.5,
      ease: 'power1.out',
    })
  }

  const handleClickClose = () => {
    gsap.from('.component', {
      opacity: 0,
      duration: 0.5,
      y: 250,
      ease: 'power1.out',
    })
  }

  return (
    <div
      ref={contacUsRef}
      className="w-full flex items-center justify-center z-20 pt-10" style={{ height: window.innerHeight }}>
      <div
        ref={reff}
        id="wrapper"
        className="component w-full h-full flex items-center justify-center"
      >
        {
          !open ? (
            <div
              className="cursor-pointer text-center bg-gray-300 flex items-center justify-center rounded-full"
              onClick={() => {
                setOpen(true)
                handleClickOpen()
              }}
              style={{ height: '20%', width: '30%' }}
            >
              <h1 className="label font-semibold text-5xl cursor-pointer" style={{ fontFamily: 'Montserrat' }} >
                Contact Us?
              </h1>
            </div>
          ) : null
        }

        {
          open ? (
            <div
              className="form-container flex items-center justify-center rounded-full"
              style={{ height: window.innerHeight * 0.9, width: '90%', backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="w-1/2 h-auto">
                <h1 className="font-bold mb-5 text-6xl text-white" style={{ fontFamily: 'Montserrat' }}>
                  WRITE TO US
                  </h1>
                <p >
                  <input
                    type="text"
                    id="input1"
                    placeholder="Name"
                    className="w-full h-16 border-b border-gray-600 outline-none placeholder-gray-200 font-semibold"
                    onFocus={() => { adjustFocus("input1") }}
                    style={{ fontFamily: 'Montserrat', borderBottomColor: input1Focus ? 'black' : "" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  <input
                    type="email"
                    id="input2"
                    placeholder="Email"
                    className="w-full h-16 border-b border-gray-600 outline-none placeholder-gray-200 font-semibold"
                    style={{ fontFamily: 'Montserrat', borderBottomColor: input2Focus ? 'black' : "" }}
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
                    className="w-full h-16 border-b border-gray-600 outline-none placeholder-gray-200 font-semibold"
                    style={{ fontFamily: 'Montserrat', borderBottomColor: input3Focus ? 'black' : "" }}
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
                    onClick={() => {
                      setOpen(false)
                      handleClickClose()
                    }}
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
      </div>
    </div>

  )
}
