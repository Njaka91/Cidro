/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import smile_dental from "../assets/images/Nos soins/Smile_dental.png";

const SmileCareTitle = ({ p, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Déclenche l'animation lorsque 10% de l'élément est visible
  });

  const splitText = (text) => {
    const middleIndex = Math.floor(text.length / 2);
    return [text.slice(0, middleIndex), text.slice(middleIndex)];
  };

  const [firstHalf, secondHalf] = splitText(p);

  return (
    <div ref={ref} className="flex flex-row px-6 py-11 items-center justify-center h-full md:px-8 lg:px-24 xl-px-32">
      <div className="w-full h-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 relative shadow-xl w-full md:w-1/2 flex h-full"
        >
          <img
            src={smile_dental}
            alt="smile_dental"
            className="object-cover w-full h-full rounded-tl-3xl rounded-br-3xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center absolute right-0 left-0 text-[35px] font-extrabold bottom-[20%] 
            md:hidden whitespace-nowrap"
          >
            <span className="text-white">{p}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center absolute md:mt-16 lg:mt-40 text-xl font-semibold left-0 md:left-[110%] w-full text-[#1B2C51] -bottom-[30%] md:bottom-[55%]"
          >
            {description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block absolute text-[75px] font-extrabold md:top-[50%] lg:top-[60%] right-0 
            whitespace-nowrap"
          >
            <span className="text-white">{firstHalf}</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block absolute text-[75px] font-extrabold md:top-[50%] lg:top-[60%] left-[100%] 
            whitespace-nowrap"
          >
            <span className="text-fuchsia-900">{secondHalf}</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default SmileCareTitle;
