/* eslint-disable react/prop-types */
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CardEquipementImage = ({image,description}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permet de déclencher l'animation à chaque entrée/sortie
    threshold: 0.2, // Se déclenche lorsque 20% de l'élément est visible
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }} // Valeur initiale d'opacité
        animate={{ opacity: inView ? 1 : 0 }} // Animer l'opacité en fonction de inView
        transition={{ duration: 0.5 }} // Durée de la transition
        className="w-64 h-60 shadow-xl overflow-hidden rounded-xl transform transition-transform hover:scale-110"
      >
        <img
          src={image}
          alt={description}
          className="w-full h-full object-cover"
        />
        <div className="pb-3 text-center absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-100 hover:opacity-0 transition-opacity">
          <h2 className="text-white text-2xl font-bold ">{description}</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default CardEquipementImage;
