/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importer le hook useInView


const SectionPinkTitle = ({
  title,
  description1,
  description2,
  description3,
  description4,
  img,
  positionImg,
}) => {
  

  // Utilisation de useInView pour suivre si l'élément est visible dans la vue
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // Permet de déclencher l'animation à chaque entrée/sortie
    threshold: 0.2,    // Se déclenche lorsque 20% de l'élément est visible
  });

  return (
    <div
      className="my-14 px-6 
          md:px-8 
          lg:px-24 
          xl:px-32 "
    >
      {title && (
        <span className="flex flex-col text-fuchsia-900 text-center pb-6">
          <motion.span
            className="text-4xl font-extrabold mb-3 lg:text-5xl"
            initial={{ opacity: 0, y: 100 }} // Initialement caché et déplacé en bas
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animation en fonction de la visibilité
            transition={{ duration: 0.8 }} // Durée de l'animation
          >
            {title}
          </motion.span>
        </span>
      )}

      <div
        ref={inViewRef} // Référence pour observer l'élément
        className={`flex flex-col relative items-center gap-12 ${
          positionImg === "flex-row"
            ? "md:flex-row lg:flex-row xl:flex-row"
            : "md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse"
        }`}
      >
        <div className="relative w-full h-[25rem] md:w-1/2">
          <motion.div
            initial={{ scale: 0.8 }} // État initial
            animate={{ scale: inView ? 1 : 0.8 }} // Animation du scale en fonction de inView
            transition={{ duration: 0.8 }} // Durée de la transition
            className="relative rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
          >
            <motion.div
              style={{ opacity: inView ? 0 : 1 }} // Variation d'opacité selon la visibilité
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
        <div className="relative flex w-full flex-col text-[#1B2C51] md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 200 }} // Opacité et position Y de départ
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }} // Animation en fonction de inView
            transition={{ duration: 0.8 }} // Durée de la transition
          >
            {description1 && (
              <p className="mt-4 text-justify">{description1}</p>
            )}
            {description2 && (
              <p className="mt-4 text-justify">{description2}</p>
            )}
            {description3 && (
              <p className="mt-4 text-justify">{description3}</p>
            )}
            {description4 && (
              <p className="mt-4 text-justify">{description4}</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionPinkTitle;
