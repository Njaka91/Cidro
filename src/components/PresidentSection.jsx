import dentiste from "../assets/images/dentiste.jpg";
import dent from "../assets/images/dent.png";
import { useScroll, useTransform, motion } from "framer-motion";

const PresidentSection = () => {
  const { scrollYProgress } = useScroll({
  });

  const imgY = useTransform(scrollYProgress, [0.15, 0.28], [200, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.28], [0.85, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0.17, 0.27], [1, 0.15]);
  const imgLine = useTransform(scrollYProgress, [0.28, 0.3], [0.5, 1]);

  const borderY = useTransform(scrollYProgress, [0.21, 0.28], [-6.3, 0]);
  const borderX = useTransform(scrollYProgress, [0.21, 0.28], [-7.5, 0]);

  const border2Y = useTransform(scrollYProgress, [0.21, 0.28], [7.5, 0]);
  const border2X = useTransform(scrollYProgress, [0.21, 0.28], [7.5, 0]);

  const textY = useTransform(scrollYProgress, [0.1, 0.3], [200, 0]);
  const TitleY = useTransform(scrollYProgress, [0, 0.22], [200, 0]);

  return (
    <div className="flex flex-row relative justify-between bg-slate-300 my-16 px-32">
      <div className="flex flex-col w-1/3 text-[#1B2C51] mt-24 z-10">
        <motion.div 
        style={{
          y: TitleY
        }}
        className="relative flex flex-col">
          <motion.div 
          className="absolute -bottom-1 -right-14 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-32 w-[450px]"
          style={{y: border2Y, x: border2X}}
          ></motion.div>
          <motion.div
            className="absolute -bottom-4 -right-[70px] bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-32 w-[450px]"
            style={{y : borderY, x: borderX}}></motion.div>
          <span className="text-4xl font-medium">Dr Allain</span>
          <span className="text-6xl font-medium">RAZAKATIANA</span>
        </motion.div>
        <motion.div
        style={{y: textY}}
        transition={{delay:2 }}>
        <p className="mt-4">
          Les évolutions technologiques du monde de la médecine actuelle ont fait des grands pas de géant,
          et les soins dentaires en particulier en ont énormément bénéficiés.
        </p>
        <p className="mt-2">
          Ainsi, la progression de la profession dentaire Malagasy
          n&apos;est plus à la traîne et notre cabinet accepte le défi d&apos;aller encore plus loin dans cette course à la technologie pour servir notre métier.
        </p>
        </motion.div>
      </div>
      <div className="relative w-1/2 my-16 z-10">
        <motion.div 
          className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
          style={{ y: imgY,  scale: imgScale }}>
          <img src={dentiste} alt="dentiste" className="object-cover w-full h-96" />
        </motion.div>
        <motion.div 
        className="absolute inset-0 bg-slate-900/70 overflow-hidden rounded-tr-3xl rounded-bl-3xl"
        style={{ y: imgY, opacity: imgOpacity, scale: imgScale }}/>
        <motion.span 
        style={{scale: imgLine}}
        className="absolute -bottom-6 left-[17%] transform -translate-x-1/2 bg-fuchsia-900 w-2/3 h-[5px] rounded-full"></motion.span>
      </div>
      <img src={dent} alt="dent" className="absolute bottom-10 left-10 object-cover w-3/6 h-52" />
      <span className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-slate-300 to-[#F5F5F5]"></span>
      <span className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-slate-300 to-[#F5F5F5]"></span>
    </div>
  );
}

export default PresidentSection;
