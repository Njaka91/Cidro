import KeyMetrics from "./KeyMetrics";
import { motion } from "framer-motion";

const keyMetricVariants = {
    before: { opacity: 0, y: 20 },
    after: { opacity: 1, y: 0 }
  };

const MetricsVariants = {
before: { opacity: 0 },
after: {
    opacity: 1,
    transition: {
    staggerChildren: 0.08, 
    },
},
};

const KeyMetricsSection = () => {
  const metricsData = [
    {n: 55, texte: "Nombre de partenaires"},
    {n: 530, texte: "Projets achevés"},
    {n: 27, texte: "Nombre de collaborateurs"},
    {n: 1000, texte: "Clients satisfaits"},
]
  return (
    <motion.div 
    variants={MetricsVariants}
    initial="before"
    animate="after"
    className="flex justify-between items-center bg-[#1ea06c] gap-5 py-4 text-white font-semibold text-5xl">
      <div className="relative bg-fuchsia-900 h-[2px] w-32 ">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 bg-fuchsia-900 h-3 w-3 rounded-full" />
      </div>
      {metricsData.map((metric, index)=>(
        <motion.div 
        key={index} 
        className="flex flex-col items-center"
        variants={keyMetricVariants}
        >
        {metric.n.toString().length >3 ? <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"></path></svg>
        <KeyMetrics n={metric.n} /> 
        </div>
        : <KeyMetrics n={metric.n} />}
        <span className="text-lg font-medium">{metric.texte}</span>
      </motion.div>
      ))}
      <div className="relative bg-fuchsia-900 h-[2px] w-32 ">
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-fuchsia-900 h-3 w-3 rounded-full" />
      </div>
    </motion.div>
  );
};

export default KeyMetricsSection;
