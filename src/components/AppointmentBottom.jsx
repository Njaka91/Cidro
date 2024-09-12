import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import accueil from "../assets/images/accueil.jpg";
import { Link } from "react-router-dom";

const AppointmentBottom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 }); // 'once: true' means it will trigger only once

  return (
    <div className="relative overflow-hidden h-[300px] bg-slate-600">
      <img src={accueil} alt="logo" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-4/5 w-4/5 rounded-full bg-[#1ea06c] opacity-50 blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full bg-[#1ea06c] opacity-20"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8" ref={ref}>
        <div className="btn relative bg-[#1B2C51] w-[15%] rounded-full shadow-xl border-0 text-white font-medium group hover:bg-[#1B2C51]">
          <span className="relative z-40">
            <Link to="/prendrerendez-vous">Prendre rendez-vous</Link>
          </span>
          <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
        </div>

        {isInView && (
          <>
            <motion.div
              className="text-5xl font-semibold text-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Contactez nous par téléphone
            </motion.div>

            <motion.div
              className="text-3xl font-semibold text-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              +261 38 08 500 00
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentBottom;
