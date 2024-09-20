import { motion} from "framer-motion";
import { useRef } from "react";
import accueil from "../assets/images/accueil.jpg";
import { Link } from "react-router-dom";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const AppointmentBottom = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.35], [200, 0])
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])

  const y2 = useTransform(scrollYProgress, [0, 0.35], [100, 0])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])

  const scale = useTransform(scrollYProgress, [0, 0.35], [0.5, 1])
  const opacity3 = useTransform(scrollYProgress, [0, 0.35], [0, 1])



  return (
    <div className="relative overflow-hidden h-[300px] bg-slate-600">
      <img src={accueil} alt="logo" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-4/5 w-4/5 rounded-full bg-[#1ea06c] opacity-50 blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full bg-[#1ea06c] opacity-20"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8" ref={ref}>
        <motion.div 
        style={{
          scale: scale,
          opacity: opacity3,
        }}
        className="btn relative bg-[#1B2C51] w-[15%] rounded-full shadow-xl border-0 text-white font-medium group hover:bg-[#1B2C51]">
          <span className="relative z-40">
            <Link to="/prendrerendez-vous">Prendre rendez-vous</Link>
          </span>
          <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
        </motion.div>

        
          <>
            <motion.div
            ref= {ref}
              className="text-5xl font-semibold text-white"
              style={{
                y:y,
                opacity: opacity,
              }}
            >
              Contactez nous par téléphone
            </motion.div>

            <motion.div
            ref={ref}
              className="text-3xl font-semibold text-white"
              style={{
                y:y2,
                opacity: opacity2,
              }}
            >
              +261 38 08 500 00
            </motion.div>
          </>
       
      </div>
    </div>
  );
};

export default AppointmentBottom;
