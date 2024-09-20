import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const OfficeImg = ({ title, description, img, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const opacityblur = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.8], [125, 0]);
  const y = useTransform(scrollYProgress, [0, 0.82], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.81], [0, 1]);

  return (
    <div ref={ref} className={`flex ${className} relative px-32 my-14 gap-12`}>
      <div className="relative w-1/2 h-[25rem]">
        <motion.div
          style={{ scale: scale }}
          className="relative rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
        >
          <motion.div
            style={{
              opacity: opacityblur,
            }}
            className="absolute overflow-hidden bg-slate-900/70 rounded-tr-3xl z-40 rounded-bl-3xl shadow-xl w-full h-full"
          />
          <div className="absolute overflow-hidden rounded-tr-3xl z-10 rounded-bl-3xl shadow-xl w-full h-full">
            <img
              src={img}
              alt="dentiste"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-slate-900/8 overflow-hidden" />
      </div>
      <div className="relative flex w-1/2 flex-col text-[#1B2C51]">
        <span className="flex flex-col text-fuchsia-900">
          <motion.span
            style={{
              y: y2,
            }}
            className="text-5xl font-medium mb-3"
          >
            {title}
          </motion.span>
        </span>
        <motion.div
          style={{
            opacity: opacity,
            y: y,
          }}
        >
          <p className="mt-4 text-justify line-h">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default OfficeImg;
