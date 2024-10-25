import smiro from "../assets/images/smiro.jpg";
import sosm from "../assets/images/sosm.jpg";
import cfca from "../assets/images/cfca.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importation de useInView

const PresidentCart = () => {
  const [refSmiro, inViewSmiro] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [refSosm, inViewSosm] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [refCfca, inViewCfca] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative">
      <div
        className="flex flex-row flex-wrap justify-around pb-16
      md:px-8 
      lg:px-24 
      xl:px-32"
      >
        {/* SMIRO Section */}
        <motion.div
          ref={refSmiro}
          className="w-48 flex flex-col items-center pb-10 md:pb-1"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{
            y: inViewSmiro ? 0 : 100,
            opacity: inViewSmiro ? 1 : 0,
            scale: inViewSmiro ? 1.05 : 1, // Zoom quand l'élément est dans la vue
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#1B2C51] text-center font-extrabold">
            Président fondateur de la SMIRO
          </span>
          <span className="text-[#1B2C51] text-center pb-2">
            (Société Malagasy d&apos;Implantogogie et de Réhabilitation Orale)
          </span>
          <motion.div className="overflow-hidden shadow-xl">
            <motion.img
              src={smiro}
              alt="smiro"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }} // Pas de zoom initial
              animate={{ scale: inViewSmiro ? 1.05 : 1 }} // Zoom léger à l'entrée
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* SOSM Section */}
        <motion.div
          ref={refSosm}
          className="w-48 flex flex-col items-center pb-10 md:pb-1"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{
            y: inViewSosm ? 0 : 100,
            opacity: inViewSosm ? 1 : 0,
            scale: inViewSosm ? 1.05 : 1, // Zoom à l'entrée
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#1B2C51] text-center font-extrabold">
            Président de la SOSM
          </span>
          <span className="text-[#1B2C51] text-center pb-2">
            (Société d&apos;Odonto-Stomatologie de Madagascar)
          </span>
          <motion.div className="overflow-hidden shadow-xl h-44">
            <motion.img
              src={sosm}
              alt="sosm"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: inViewSosm ? 1.05 : 1 }} // Zoom léger à l'entrée
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* CFCDA Section */}
        <motion.div
          ref={refCfca}
          className="w-48 flex flex-col items-center pb-10 md:pb-1"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{
            y: inViewCfca ? 0 : 100,
            opacity: inViewCfca ? 1 : 0,
            scale: inViewCfca ? 1.05 : 1, // Zoom à l'entrée
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#1B2C51] text-center font-extrabold">
            Président fondateur du CFCDA
          </span>
          <span className="text-[#1B2C51] text-center pb-2">
            (Centre de Formation Continue Dentaire d&apos;Antananarivo)
          </span>
          <motion.div className="overflow-hidden shadow-xl h-36">
            <motion.img
              src={cfca}
              alt="CFCDA"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: inViewCfca ? 1.05 : 1 }} // Zoom léger à l'entrée
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
      <span className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-slate-300 to-[#F5F5F5]"></span>

    </div>
  );
};

export default PresidentCart;
