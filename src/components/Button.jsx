import { useScroll } from "framer-motion";
import {motion, useTransform} from "framer-motion"
import { useRef } from "react";
import { Link } from "react-router-dom"
const Button = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      // offset: ["start", "end", "end", "start"]
    });
    const buttonScale = useTransform(scrollYProgress, [0.2, 0], [1, 0.5]);
  const buttonOpacity = useTransform(scrollYProgress, [0.2, 0], [1, 0]);
  return (
    <div className="stick z-10">
        <motion.div 
        ref={targetRef}
        initial={{y: -200}}
        style={{ scale: buttonScale, opacity: buttonOpacity }}
        className="btn relative bg-[#1B2C51] w-[15%] rounded-full shadow-xl border-0 text-white font-medium mt-14 group hover:bg-[#1B2C51]">
          <span className="relative z-40">
            <Link to="/prendrerendez-vous">Prendre rendez-vous</Link></span>
          <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
        </motion.div>
    </div>
        
  )
}

export default Button
