import KeyMetrics from "./KeyMetrics";
import { motion, useScroll, useTransform } from "framer-motion";

const KeyMetricsSection = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const yPosition = useTransform(scrollYProgress, [0.6, 0.7], [100, 0]);

  const metricsData = [
    { n: 40, texte: "Années dans le domaine de la dentisterie générale" },
    { n: 25, texte: "Années d'implantologie" },
  ];

  return (
    <motion.div
      className="flex flex-row flex-wrap justify-between px-6 py-4 text-[#1B2C51] text-2xl font-semibold
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
          className="flex flex-col items-center"
          style={{ y: yPosition, opacity }}
        >
          {metric.n.toString().length > 3 ? (
            <div className="flex justify-center items-center">
              <KeyMetrics n={metric.n} />
            </div>
          ) : (
            <KeyMetrics n={metric.n} />
          )}
          <span className="text-sm lg:text-lg font-medium w-60 text-center">
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
