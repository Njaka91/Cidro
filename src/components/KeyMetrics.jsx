import { useSpring, animated } from "react-spring"
import { useInView } from 'react-intersection-observer';


// eslint-disable-next-line react/prop-types
const KeyMetrics = ({ n }) => {
    const {ref, inView} = useInView({
      triggerOnce: true,
      threshold: 0.75,  
    })
    const {number} = useSpring({
        from: {number: 0},
        number: inView ? n : 0,
        delay: 200,
        config: {mass: 1, tension: 25, friction: 10},
    })
  return (
    <div ref={ref}>
    <animated.div>{number.to((n) => n.
    // eslint-disable-next-line react/prop-types
    toFixed(0))}</animated.div>
    </div>
     
   
  )
}

export default KeyMetrics
