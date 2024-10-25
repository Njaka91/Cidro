import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

const AppointmentBottom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="flex flex-col relative justify-center items-center gap-5 overflow-hidden mt-8 md:px-32 pb-14 
    md:mt-0"
    >
      <motion.div
        ref={ref}
        className="text-3xl text-center font-semibold text-[#1B2C51]"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        Contactez nous :
      </motion.div>
      <div
        className=" inset-0 flex flex-row items-center justify-center gap-8
        md:gap-14"
        ref={ref}
      >
        <Link to="tel:+261340226727">
          <motion.div
            ref={ref}
            initial={{ x: 200, rotate: 270, opacity: 0 }}
            animate={
              isInView
                ? { x: 0, rotate: 0, opacity: 1 }
                : { x: 200, rotate: 270, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            className="flex items-center justify-center relative bg-black h-12 w-12 rounded-full shadow-xl border-0 text-white font-medium group hover:bg-black"
          >
            <span className="relative z-40 group inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
                ></path>
              </svg>
              <span
                className="invisible opacity-0 -translate-y-2 text-center group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 
               transition-all duration-[400ms] ease-in-out bg-black 
               left-1/2 transform -translate-x-1/2 -bottom-14 rounded-full p-2  absolute w-40"
              >
                +261 34 02 267 27
              </span>
              <span
                className="invisible opacity-0 -translate-y-2 text-center group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 
       transition-all duration-[400ms] ease-in-out bg-black  
       left-1/2 transform -translate-x-1/2 -bottom-5 h-2 w-2 absolute rotate-45"
              />
            </span>
          </motion.div>
        </Link>

        <Link to="https://wa.me/+261340226727" target="_blank">
          <motion.div
            ref={ref}
            initial={{ x: 250, rotate: 270, opacity: 0 }}
            animate={
              isInView
                ? { x: 0, rotate: 0, opacity: 1 }
                : { x: 250, rotate: 270, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            className="flex items-center justify-center relative bg-[#1b8755] hover:bg-[#146640] h-12 w-12 rounded-full shadow-xl border-0 text-white font-medium group"
          >
            <span className="relative z-40 group inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                ></path>
              </svg>
              <span
                className="invisible opacity-0 -translate-y-2 text-center group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 
               transition-all duration-[400ms] ease-in-out bg-[#146640] 
               left-1/2 transform -translate-x-1/2 -bottom-14 rounded-full p-2  absolute w-40"
              >
                +261 34 02 267 27
              </span>
              <span
                className="invisible opacity-0 -translate-y-2 text-center group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 
       transition-all duration-[400ms] ease-in-out bg-[#146640]   
       left-1/2 transform -translate-x-1/2 -bottom-5 h-2 w-2 absolute rotate-45"
              />
            </span>
          </motion.div>
        </Link>

        <Link to="mailto:allainrazakatianad@gmail.com">
          <motion.div
            ref={ref}
            initial={{ x: 350, rotate: 270, opacity: 0 }}
            animate={
              isInView
                ? { x: 0, rotate: 0, opacity: 1 }
                : { x: 350, rotate: 270, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: 0.16,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            className="flex items-center justify-center relative bg-[#1B2C51] hover:bg-[#101e3b] h-12 w-12 rounded-full shadow-xl border-0 text-white font-medium group "
          >
            <span className="relative z-40 group inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                ></path>
              </svg>
              <span
                className="invisible opacity-0 -translate-y-2 text-center group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 
               transition-all duration-[400ms] ease-in-out bg-[#101e3b] 
               left-1/2 transform -translate-x-1/2 -bottom-14 rounded-full p-2  absolute w-72"
              >
                allainrazakatianad@gmail.com
              </span>
              <span
                className="invisible opacity-0 -translate-y-2 text-center group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 
       transition-all duration-[400ms] ease-in-out bg-[#101e3b]   
       left-1/2 transform -translate-x-1/2 -bottom-5 h-2 w-2 absolute rotate-45"
              />
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentBottom;
