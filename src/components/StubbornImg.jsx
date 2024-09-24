import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StubbornImg = ({imgBg}) => {

  const { scrollYProgress } = useScroll();

  const text1YScroll = useTransform(scrollYProgress, [0, 0.25], [0, -200]);
  const text1OpacityScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const text2YScroll = useTransform(scrollYProgress, [0, 0.2], [0, -300]);
  const text2OpacityScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const buttonScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);


  return (
    <div className="relative overflow-hidden h-[73vh] bg-slate-600">
      <img src={imgBg} alt="logo" className="sticky object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-4/5 w-4/5 rounded-full bg-[#1ea06c] opacity-50 blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full bg-[#1ea06c] opacity-20"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <motion.div 
        className="text-xl font-semibold text-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.3, delay: 0.2 }}
        style={{ y: text1YScroll, opacity: text1OpacityScroll }}>
        Retrouver le sourire
        </motion.div>
        <motion.div
          className="text-7xl font-semibold text-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1,}}
          transition={{ duration: 0.3, delay: 0.5 }}
          style={{ y: text2YScroll, opacity: text2OpacityScroll }}
        >
          CIDRO
        </motion.div>
        <motion.div 
        style={{ scale: buttonScale, opacity: buttonOpacity }}
        className="btn relative bg-[#1B2C51] w-[15%] rounded-full shadow-xl border-0 text-white font-medium mt-14 group hover:bg-[#1B2C51]">
          <span className="relative z-40">
            <Link to="/prendrerendez-vous">Prendre rendez-vous</Link></span>
          <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
        </motion.div>
      </div>
    </div>
  );
};

export default StubbornImg;
