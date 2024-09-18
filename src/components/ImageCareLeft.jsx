import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ImageCareLeft = ({ tilte, description, img, prix, modalId }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const opacityblur = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.8], [125, 0]);
  const y = useTransform(scrollYProgress, [0, 0.82], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.81], [0, 1]);

  return (
    <div className="flex flex-row relative px-32 my-14 gap-12">
      <div className="relative w-1/2 h-[25rem]">
        <motion.div
          ref={ref}
          style={{ scale: scale }}
          className="relative rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
        >
          <motion.div 
          ref={ref}
          style={{
            opacity: opacityblur,
          }}
          className="absolute overflow-hidden bg-slate-900/70 rounded-tr-3xl z-40 rounded-bl-3xl shadow-xl w-full h-full"/>
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
      <div className="relative flex w-1/2 flex-col text-[#1B2C51]">
        <span className="flex flex-col text-fuchsia-900">
          <motion.span
            ref={ref}
            style={{
              y: y2,
            }}
            className="text-5xl font-medium mb-3"
          >
            {tilte}
          </motion.span>
        </span>
        <motion.div
          ref={ref}
          style={{
            opacity: opacity,
            y: y
          }}
        >
          <p className="mt-4 text-justify line-h ">{description}</p>
        </motion.div>
        <div className="absolute bottom-14 w-full flex flex-row justify-center items-center h-4">
          <motion.div
            // style={{ scale: buttonScale, opacity: buttonOpacity }}
            onClick={() => document.getElementById(modalId).showModal()}
            className="btn relative bg-[#1B2C51] w-[38%] rounded-full shadow-xl border-0 text-white font-medium mt-14 group hover:bg-[#1B2C51]"
          >
            <span className="relative z-40">
              <span>Voir les prix</span>
            </span>
            <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
          </motion.div>
        </div>

        <dialog id={modalId} className="modal modal-bottoms sm:modal-middle">
          <div className="flex flex-col modal-box justify-center bg-[#F5F5F5] items-center">
            <div className="relative mb-4">
              <h3 className="font-bold text-2xl text-fuchsia-900">{tilte}</h3>
              <span className="absolute left-1/2 transform -translate-x-1/2 h-[6px] -bottom-2 w-3/5 bg-white rounded-full" />
            </div>
            <div className="p-4 w-[95%] rounded-xl bg-opacity-80 bg-[#faf9f9] shadow-md">
  <span>
    {prix && prix.
    // eslint-disable-next-line react/prop-types
    length > 0 ? (
      <div className="flex justify-between">
        {/* Première colonne */}
        <ul>
          {prix.
          // eslint-disable-next-line react/prop-types
          slice(0, Math.ceil(prix.length / 2)).map((item, index) =>
            Object.entries(item).map(([key, value]) => (
                <li key={`${index}-${key}`} className="flex w-full justify-between gap-4">
                <span><strong>{key} : </strong></span> <span>{value}</span>
              </li>
            ))
          )}
        </ul>

        {/* Deuxième colonne */}
        <ul>
          {prix.
          // eslint-disable-next-line react/prop-types
          slice(Math.ceil(prix.length / 2)).map((item, index) =>
            Object.entries(item).map(([key, value]) => (
                <li key={`${index}-${key}`} className="flex w-full justify-between gap-4">
                <span><strong>{key} : </strong></span> <span>{value}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    ) : (
      <li>Aucun prix disponible</li>
    )}
  </span>
</div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
            // style={{ scale: buttonScale, opacity: buttonOpacity }}
            className="btn relative bg-[#1B2C51] w-52 rounded-full shadow-xl border-0 text-white font-medium group hover:bg-[#1B2C51]"
          >
            <span className="relative z-40">
              <span>Fermer</span>
            </span>
            <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
          </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ImageCareLeft;
