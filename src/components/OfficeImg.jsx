import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const OfficeImg = ({ name, title, description, img, positionImg }) => {
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

  const spanRef = useRef(null);
  const [spanSize, setSpanSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (spanRef.current) {
      setSpanSize({
        width: spanRef.current.offsetWidth, // Récupère la largeur du span
        height: spanRef.current.offsetHeight, // Récupère la hauteur du span
      });
    }
  }, [name]);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col relative px-6 my-14 gap-12 items-center ${
          positionImg === "flex-row"
            ? "md:flex-row lg:flex-row xl:flex-row"
            : "md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse"
        }
        md:px-8 
        lg:px-24 
        xl:px-32 
      `}
    >
      <div
        className="
        relative w-full h-[25rem]
        md:w-1/2 
        "
      >
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
      <div
        className="
        relative flex flex-col text-[#1B2C51]
        md:w-1/2 
        "
      >
        <div className="inline-block text-fuchsia-900">
          <p
            ref={spanRef}
            style={{
              y: y2,
            }}
            className="
              px-5 py-4
              text-4xl font-medium mb-3
              lg:text-4xl
              inline-block      // Garde la largeur du contenu et permet le centrage
             "
          >
            <span>{name}</span>
            <span className="block text-base text-left text-[#1B2C51]">{title}</span>
          </p>
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
