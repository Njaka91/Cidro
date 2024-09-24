import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const Button = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0], [0.75, 1]);

  return (
    <div className="fixed flex items-center justify-center bottom-10 right-8 z-50">
      <Link
      to= "/prendrerendez-vous">
      <motion.div
      ref={ref}
      style= {{
        opacity: opacity,
        scale: scale,
      }}
        className="join group overflow-hidden cursor-pointer bg-fuchsia-900 rounded-full"
      >
        <div
          className="w-0 h-12 text-center opacity-0  flex items-center justify-center invisible group-hover:w-44
          group-hover:visible group-hover:opacity-100
          transition-all duration-[300ms] ease-in-out 
  "
        >
          <span
            className="flex items-center justify-center opacity-0 ml-3 w-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:w-40 group-hover:h-14 text-white font-medium 
           transition-opacity duration-[800ms] ease-in-out delay-[150ms]"
          >
            Prendre rendez-vous
          </span>
        </div>
        <button 
        
        className="flex items-center justify-center px-3 text-white rounded-full bg-fuchsia-900 border-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.47 8.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17z"
            ></path>
          </svg>
        </button>
      </motion.div>
      </Link>
      
    </div>
  );
};

export default Button;
