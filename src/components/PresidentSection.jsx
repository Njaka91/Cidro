import dentiste from "../assets/images/dentiste.jpg";
import dent from "../assets/images/dent.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const PresidentSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0.15, 1], [0.5, 0]);
  const imgLine = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);

  const borderY = useTransform(scrollYProgress, [0.5, 1], [-7.5, 0]);
  const borderX = useTransform(scrollYProgress, [0.5, 1], [-7.5, 0]);

  const border2Y = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const border2X = useTransform(scrollYProgress, [0, 1], [8, 0]);

  const textY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const TitleY = useTransform(scrollYProgress, [0, 0.9], [200, 0]);

  return (
    <div
        ref={ref}

      className="flex flex-col-reverse bg-slate-300 mt-8 relative py-14
    md:flex-row md:justify-between md:px-8 
    lg:my-16 lg:px-24
    xl:px-32"
    >
      <div
        
        className=" relative flex flex-col mt-10 text-[#1B2C51] z-10 px-6
      md:w-1/2
      xl:mt-24"
      >
        <div className="relative ">
        <motion.div
          style={{
            y: TitleY,
          }}
          className=" flex flex-col "

        >
          <motion.div
            className="absolute w-72 h-24 -left-4 bottom-0 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl 
            lg:w-96 
            xl:h-32 xl:w-[450px] xl:-bottom-2 xl:-left-8"
            style={{ y: border2Y, x: border2X }}
          ></motion.div>
          <motion.div
            className="absolute w-72 h-24 -bottom-3 -left-2 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl 
            lg:w-96
            xl:h-32 xl:w-[450px] xl:-bottom-6"
            style={{ y: borderY, x: borderX }}
          ></motion.div>
          <span className="text-3xl font-medium">Dr Allain</span>
          <span
            className="font-semibold text-4xl
          lg:text-5xl lg:font-semibold
          xl:text-6xl xl:font-semibold"
          >
            RAZAKATIANA
          </span>
        </motion.div>
        </div>
        
        <motion.div style={{ y: textY }}>
          <p className="mt-4 text-justify md:w-4/5">
            Les évolutions technologiques du monde de la médecine actuelle ont
            fait des grands pas de géant, et les soins dentaires en particulier
            en ont énormément bénéficiés.
          </p>
          <p className="mt-2 text-justify md:w-4/5">
            Ainsi, la progression de la profession dentaire Malagasy n&apos;est
            plus à la traîne et notre cabinet accepte le défi d&apos;aller
            encore plus loin dans cette course à la technologie pour servir
            notre métier.
          </p>
        </motion.div>
      </div>
      <div
        className="relative z-10 w-full px-6 
      md:w-1/2 md:px-0
      xl:my-16 "
      >
        <motion.div
          className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
          style={{ scale: imgScale }}
        >
          <img
            src={dentiste}
            alt="dentiste"
            className="object-cover w-full h-96"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-slate-900/70 overflow-hidden rounded-tr-3xl mx-6 md:mx-0 rounded-bl-3xl"
          style={{ opacity: imgOpacity, scale: imgScale }}
        />
        <motion.span
          style={{ scale: imgLine }}
          className="hidden md:flex md:absolute -bottom-6 left-[17%] transform -translate-x-1/2 bg-fuchsia-900 w-2/3 h-[5px] rounded-full"
        ></motion.span>
      </div>
      <img
        src={dent}
        alt="dent"
        className="absolute bottom-10 left-10 object-cover w-3/6 h-52"
      />
      <span className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-slate-300 to-[#F5F5F5]"></span>
      <span className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-slate-300 to-[#F5F5F5]"></span>
    </div>
  );
};

export default PresidentSection;
