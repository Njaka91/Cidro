import KeyMetrics from "./KeyMetrics";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importer useInView

const KeyMetricsSection = () => {
  // Utilisation de useInView pour suivre la visibilité de la section
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // Animation à l'entrée et à la sortie
    threshold: 0.2, // Déclencher quand 20% de l'élément est visible
  });

  const metricsData = [
    { n: 40, texte: "Années dans le domaine de la dentisterie générale" },
    { n: 25, texte: "Années d'implantologie" },
  ];

  return (
    <motion.div
      ref={inViewRef} // Référence pour observer cette section
      className="flex flex-row justify-center md:justify-between px-6 py-4 text-[#1B2C51] text-2xl font-semibold
      md:px-0 
      md:text-4xl"
    >
      <div className="md:flex md: items-center">
        <div
          className="hidden md:flex md:relative bg-fuchsia-900 h-[2px] 
      md:w-8
      lg:w-24
      xl:w-32 "
        >
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 bg-fuchsia-900 h-3 w-3 rounded-full" />
        </div>
      </div>

      {metricsData.map((metric, index) => (
        <motion.div
          key={index}
          className="flex flex-col"
          initial={{ y: 100, opacity: 0 }} // Position et opacité de départ
          animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }} // Animation selon la visibilité
          transition={{ duration: 0.8 }} // Durée de la transition
        >
          {metric.n.toString().length > 3 ? (
            <div className="flex justify-center items-center">
              <KeyMetrics n={metric.n} />
            </div>
          ) : (
            <div className="text-fuchsia-900 text-4xl md:text-6xl">
              <KeyMetrics n={metric.n} />
            </div>
          )}
          <span className="text-sm lg:text-lg font-medium w-36 md:w-60 text-center">
            {metric.texte}
          </span>
        </motion.div>
      ))}

      <div className="md:flex md: items-center">
        <div
          className="hidden md:flex md:relative bg-fuchsia-900 h-[2px] 
      md:w-8
      lg:w-24
      xl:w-32"
        >
          <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-fuchsia-900 h-3 w-3 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default KeyMetricsSection;
