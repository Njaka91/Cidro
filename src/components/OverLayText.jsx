import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const OverLayText = ({ subHeading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    // offset: ["start", "end", "end", "start"]
 });

  const text1YScroll = useTransform(scrollYProgress, [0.2, 0], [0, 200]);

  return (
    <motion.div 
    ref={targetRef}
    className="absolute -top-28 flex h-screen w-full flex-col items-center justify-center text-white">
      <motion.p
      style={{
        y: text1YScroll
      }} 
      className="text-xl font-semibold  mb-1"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.45, delay: 0.2 }}
      >{subHeading}</motion.p>
      <motion.p 
      className="text-7xl font-semibold "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.3, delay: 0.4 }}
      >{heading}</motion.p>
    </motion.div>
  );
};

export default OverLayText;
