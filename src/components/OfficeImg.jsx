/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const OfficeImg = ({
  nameFirstLine,
  nameSecondLine,
  diplome,
  title,
  description,
  img,
  positionImg,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Déclenche l'observateur si 10% de l'élément est visible
  });

  const spanRef = useRef(null);
  const [spanSize, setSpanSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (spanRef.current) {
      setSpanSize({
        width: spanRef.current.offsetWidth,
        height: spanRef.current.offsetHeight,
      });
    }
  }, [nameFirstLine]);

  return (
    <div
      ref={ref} // Attacher l'observateur ici
      className={`flex flex-col relative px-6 my-14 gap-12 items-center ${
        positionImg === "flex-row"
          ? "md:flex-row lg:flex-row xl:flex-row"
          : "md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse"
      } md:px-8 lg:px-24 xl:px-32`}
    >
      <div className="relative w-full h-[25rem] md:w-1/2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
        >
          
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
      <div className="relative flex flex-col text-[#1B2C51] md:w-1/2">
        <div className="inline-block text-fuchsia-900">
          <motion.p
            ref={spanRef}
            className="px-5 py-4 text-4xl font-medium mb-3 lg:text-4xl inline-block"
            initial={{ opacity: 0, y: 20 }} // Animation initiale
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation quand dans la vue
            transition={{ duration: 0.5 }}
          >
            <span>{nameFirstLine}</span>
            <br />
            <span>{nameSecondLine}</span>
            <span className="block text-base text-left text-[#1B2C51]">
              {title}
            </span>
          </motion.p>
        </div>

        <div
          style={{
            width: spanSize.width,
            height: spanSize.height,
          }}
          className="absolute -top-2 left-0 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl 
            lg:w-96
            xl:h-32 xl:w-[450px] xl:-bottom-6"
        ></div>

        <div
          style={{
            width: spanSize.width,
            height: spanSize.height,
          }}
          className="absolute h-24 top-1 left-3 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl 
            lg:w-96
            xl:h-32 xl:w-[450px] xl:-bottom-6"
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} // Animation initiale
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation quand dans la vue
          transition={{ duration: 0.5 }}
        >
          <ul className="list-disc pl-5">
            {diplome.map((diplome, index) => (
              <li key={index}>{diplome}</li>
            ))}
          </ul>
          <p className="mt-4 text-justify line-h">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default OfficeImg;
