import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './styles.css'

const cards = [
  'https://i.picsum.photos/id/986/200/300.jpg?hmac=uk_NL7rXttZ_ISvqJ3g_aV8Z_hQMxNLaABWXMHESj2Q',
  'https://i.picsum.photos/id/167/200/200.jpg?hmac=sv_8nQnuUO9QJ47YNgjG2iTmSnnzYA2ysw8JrvD5OTk',
  'https://i.picsum.photos/id/737/200/200.jpg?hmac=YPktyFzukhcmeW3VgULbam5iZTWOMXfwf6WIBPpJD50',
  'https://i.picsum.photos/id/406/200/200.jpg?hmac=RkvoDL29GdYFLEDajHXtCCieqAjWVp9vl__A-D6bddw',
  'https://i.picsum.photos/id/717/200/200.jpg?hmac=bKg3Tgutvsprm3Nh_kFIbGVlWJaT334I_qZCDn_INZ8',
  'https://i.picsum.photos/id/643/200/200.jpg?hmac=ouS38xYuy8iE3e24i3dNN11vJoBa6kKr3HzduEJ5Msk',
  'https://i.picsum.photos/id/117/200/200.jpg?hmac=hAXY0lMbkjkxYIKxW0UjtazVquGY1NCu3ruHLJGc4gs',
  'https://i.picsum.photos/id/1058/200/200.jpg?hmac=EF_mUeWbCxK5wJj7PuNrLKm7kBMu2DBtQXuGQg6p_gA'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck(props) {
  const { controlDir, isControllerPressed, controlVelocity, setIndex } = props
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [data, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    console.log('index', index)
    const trigger = (controlVelocity || velocity) > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = (controlDir || xDir) < 0 ? -1 : 1 // Direction should either point left or right
    if ((controlVelocity === 0.25 || !down) && trigger) {
      gone.add(index)
      setIndex(index)
    } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : (down || isControllerPressed) ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * (velocity || controlVelocity) : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = (isControllerPressed || down) ? 1.15 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: (down || isControllerPressed) ? 800 : isGone ? 200 : 500 } }
    })
    if ((!down || controlVelocity === 0.25) && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return data.map(({ x, y, rot, scale }, i) => (
    <animated.div id="wrapper_div" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
      {/* <animated.img src={`${cards[i]}`} {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} /> */}
    </animated.div>
  ))
}
