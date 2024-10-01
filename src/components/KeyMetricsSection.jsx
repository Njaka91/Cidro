import KeyMetrics from "./KeyMetrics";
import { motion, useScroll, useTransform } from "framer-motion";

const KeyMetricsSection = () => {
  const { scrollYProgress } = useScroll(
    {offset: ["start end", "center center"]}
  );

  const opacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]); 
  const yPosition = useTransform(scrollYProgress, [0.60, 0.70], [100, 0]);

  const metricsData = [
    { n: 55, texte: "Nombre de partenaires" },
    { n: 530, texte: "Projets achevés" },
    { n: 27, texte: "Nombre de collaborateurs" },
    { n: 1000, texte: "Clients satisfaits" },
  ];

  return (
    <motion.div
      className="flex flex-row flex-wrap justify-between items-center bg-[#1ea06c] px-6 py-4 text-white text-2xl font-semibold
      md:px-0 
      md:text-4xl"
    >
      <div className="hidden md:flex md:relative bg-fuchsia-900 h-[2px] 
      md:w-8
      lg:w-24
      xl:w-32 ">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 bg-fuchsia-900 h-3 w-3 rounded-full" />
      </div>

      {metricsData.map((metric, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          style={{ y: yPosition, opacity }} 
        >
          {metric.n.toString().length > 3 ? (

            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                ></path>
              </svg>
              <KeyMetrics n={metric.n} />
            </div>
          ) : (
            <KeyMetrics n={metric.n} />
          )}
          <span className="text-sm lg:text-lg font-medium">{metric.texte}</span>
        </motion.div>
      ))}

      <div className="hidden md:flex md:relative bg-fuchsia-900 h-[2px] 
      md:w-8
      lg:w-24
      xl:w-32">
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-fuchsia-900 h-3 w-3 rounded-full" />
      </div>
    </motion.div>
  );
};

export default KeyMetricsSection;
