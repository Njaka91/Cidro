import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ImageTeamLeft = ({nameLeft, lastNameLeft, professionLeft, descriptionLeft, imgLeft}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.88], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.9], [125, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const yborderbottom = useTransform(scrollYProgress, [0.76, 0.86], [12, 0])
  const xborderbottom = useTransform(scrollYProgress, [0.76, 0.88], [12, 0])
  const ybordertop = useTransform(scrollYProgress, [0.76, 0.86], [-12, 0])
  const xbordertop = useTransform(scrollYProgress, [0.76, 0.88], [-12, 0])

  return (
    <div className="flex flex-row relative justify-between items-center">
      <div className="relative w-1/2 h-96  py-8 px-32">
      <motion.div 
          ref={ref} 
          style={{ scale: scale }}
          className="relative rounded-tr-3xl rounded-bl-3xl shadow-xl h-full">
            <div className="overflow-hidden absolute z-10 rounded-tr-3xl rounded-bl-3xl shadow-xl w-full h-full">
              <img
                src={imgLeft}
                alt="dentiste"
                className="object-cover w-full h-96"
              />
            </div>
            <motion.div 
            ref={ref}
            style={{
              y: yborderbottom,
              x: xborderbottom
            }}
            className="absolute bg-none border-[2px] bottom-3 right-3 border-[#1B2C51] border-opacity-20 rounded-tr-3xl z-0 rounded-bl-3xl h-full w-full" />
            <motion.div 
            ref={ref}
            style={{
              y: ybordertop,
              x: xbordertop
            }}
            className="absolute bg-none border-[2px] bottom-3 right-3 border-fuchsia-900 top-3 left-3 border-opacity-20 rounded-tr-3xl z-20 rounded-bl-3xl h-full w-full" />
          </motion.div>
      </div>
      <div className="flex flex-col w-1/2 text-[#1B2C51] px-32 z-10">
        <div className="relative flex flex-col">
          <motion.span
          ref= {ref} 
          style={{
            y: y1
          }}
          className="text-4xl font-medium">{nameLeft}</motion.span>
          <motion.span 
          ref= {ref}
          style= {{
            y: y2
          }}
          className="text-6xl font-medium">{lastNameLeft}</motion.span>
        </div>
        <motion.div
        ref={ref}
        style={{
          opacity: opacity
        }}
        >
          <p className="text-xl font-medium mt-2">{professionLeft}</p>
          <p className="mt-4">{descriptionLeft}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageTeamLeft;
