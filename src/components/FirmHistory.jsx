import photeuil from "../assets/images/photeuill.jpg";
import { motion } from "framer-motion";
import firm from "../assets/images/firm.png";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useRef } from "react";

const FirmHistory = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const borderY = useTransform(scrollYProgress, [0.4, 0.42], [-9, 0]);
  const borderX = useTransform(scrollYProgress, [0.4, 0.42], [-7.5, 0]);

  const border2Y = useTransform(scrollYProgress, [0.38, 0.42], [6.3, 0]);
  const border2X = useTransform(scrollYProgress, [0.38, 0.42], [7.5, 0]);

  const titleY = useTransform(scrollYProgress, [0, 0.4], [150, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [200, 0]);

  const x = useTransform(scrollYProgress, [0, 0.45], [-200, 0]);
  const X1 = useTransform(scrollYProgress, [0, 0.45], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const x2 = useTransform(scrollYProgress, [0.25, 0.48], [-200, 0]);
  const X2 = useTransform(scrollYProgress, [0.25, 0.48], [200, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.37, 0.42], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col my-14 px-6 gap-10
      md:px-8 md:flex-row md:gap-12
      lg:px-24 lg:flex-row lg:gap-14
      xl:px-32 xl:flex-row xl:gap-20"
    >
      <div
        className="w-full h-full flex relative items-center rounded-tl-[60px] rounded-br-[60px]
      xl:w-1/2 xl:h-[550px]"
      >
        <motion.div className="w-full h-full overflow-hidden bg-black rounded-tl-[60px] rounded-br-[60px] z-40 shadow-lg">
          <img src={photeuil} alt="" className="object-cover  w-full" />
        </motion.div>
        <motion.div
          style={{
            y: border2Y,
            x: border2X,
          }}
          className="z-[39] absolute bg-none bottom-2 right-2 h-full w-full border-2 border-[#1B2C51] border-opacity-50 rounded-tl-[60px] rounded-br-[60px]"
        ></motion.div>
        <motion.div
          style={{
            y: borderY,
            x: borderX,
          }}
          className="z-[41] absolute bg-none top-2 left-2 h-full w-full border-2 border-fuchsia-900 border-opacity-50 rounded-tl-[60px] rounded-br-[60px]"
        ></motion.div>
      </div>
      <div
        className="flex flex-col z-10 w-full
      xl:w-1/2 "
      >
        <motion.h1
          style={{
            y: titleY,
          }}
          className="text-3xl font-semibold text-[#1B2C51] pb-5"
        >
          Historique du cabinet
        </motion.h1>
        <motion.p
          style={{
            y: textY,
          }}
          className="text-[#1B2C51] text-justify"
        >
          Lorem Ipsum IS simpy ummy text o t e printing an typesetting industry.
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
          <span className=" block pt-[10px]"> </span>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages.
        </motion.p>

        <div className="flex flex-col mt-8 overflow-hidden">
          <div className="flex flex-row mb-5 justify-between">
            <motion.div
              style={{
                x: x,
                opacity: opacity,
              }}
              className="flex flex-col items-center w-[47%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#701a75"
                className="w-8 lg:w-12 "
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 3c-.625 0-1.246.21-1.781.594L12.563 4.75L10.655 5h-.031l-.031.031A3.39 3.39 0 0 0 8.03 7.594L8 7.625v.031l-.25 1.938l-1.156 1.5l-.032.031v.031c-.699 1.117-.73 2.559.032 3.625l1.187 1.656l.313 1.72l-3.219 4.905l-1.031 1.532h4.781l1.156 2.687L10.5 29l1.031-1.563l3.156-4.75c.848.348 1.805.38 2.626 0l3.156 4.75L21.5 29l.719-1.719l1.156-2.687h4.781l-1.031-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.031v-.031c.699-1.117.73-2.528-.032-3.594L24.25 9.469l-.375-1.875h.031c-.004-.024-.027-.04-.031-.063c-.18-1.308-1.215-2.37-2.531-2.531h-.032l-1.875-.25l-1.656-1.156A3.07 3.07 0 0 0 16 3m0 2.031c.23 0 .457.07.625.188L18.406 6.5l.219.156l.25.032L21.063 7h.03c.45.05.762.363.813.813v.062l.407 2.219l.03.219l.157.187l1.281 1.781c.239.332.27.895-.031 1.375l-1.406 1.969l-.032.25L22 18.063v.03a1 1 0 0 1-.156.438l-.063.032v.03a.88.88 0 0 1-.593.313h-.063l-2.281.407l-.25.03l-.188.157l-1.781 1.281c-.332.239-.926.27-1.406-.031l-1.625-1.25l-.188-.156l-.281-.032L10.937 19h-.03a.89.89 0 0 1-.688-.438a1 1 0 0 1-.125-.375v-.062l-.406-2.281l-.032-.25l-.156-.188l-1.281-1.781c-.239-.332-.27-.926.031-1.406l1.25-1.625l.156-.188l.031-.281l.282-2.094c.004-.015.027-.015.031-.031a1.4 1.4 0 0 1 1-1c.016-.004.016-.027.031-.031l2.094-.282l.25-.03l.219-.157l1.781-1.281c.168-.117.395-.188.625-.188m6.906 15.219l1.532 2.344H22.03l-.25.625l-.687 1.593l-2.125-3.25l.468-.343l1.97-.344v.031c.023-.004.038-.027.062-.031a2.97 2.97 0 0 0 1.437-.625zm-13.812.031a2.85 2.85 0 0 0 1.562.719h.031l1.907.25l.437.344l-2.125 3.218l-.687-1.593l-.25-.625H7.563z"
                ></path>
              </svg>

              <p className="text-[#1B2C51] text-center">
                Qualité de nos équipements et produits aux normes les plus
                exigeantes
              </p>
            </motion.div>

            <motion.div
              style={{
                x: X1,
                opacity: opacity,
              }}
              className="flex flex-col items-center w-[47%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#701a75"
                className="w-8 lg:w-12 "
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.315 1.031a.5.5 0 0 0-.5.5v1.407H6.409a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.406v1.406a.5.5 0 0 0 .5.5H9.94a.5.5 0 0 0 .5-.5V5.563h1.406a.5.5 0 0 0 .5-.5V3.438a.5.5 0 0 0-.5-.5H10.44V1.53a.5.5 0 0 0-.5-.5zm-7.732 9.75l2.444 2.037a2 2 0 0 0 1.28.463h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.437"></path>
                  <path d="m3.583 9.781l.75.75a1.06 1.06 0 1 0 1.5-1.5L4.669 7.867a2 2 0 0 0-1.414-.586H.583"></path>
                </g>
              </svg>
              <p className="text-[#1B2C51] text-center">
                Travail en collaboratioin avec les entreprises d&apos;assurance
              </p>
            </motion.div>
          </div>

          <div className="flex flex-row justify-between">
            <motion.div
              style={{
                x: x2,
                opacity: opacity2,
              }}
              className="flex flex-col items-center w-[47%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#701a75"
                className="w-8 lg:w-12 "
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  color="currentColor"
                >
                  <path d="M20 22v-3c0-2.828 0-4.243-.879-5.121C18.243 13 16.828 13 14 13l-2 2l-2-2c-2.828 0-4.243 0-5.121.879C4 14.757 4 16.172 4 19v3m12-9v5.5"></path>
                  <path d="M8.5 13v4m0 0a2 2 0 0 1 2 2v1m-2-3a2 2 0 0 0-2 2v1m9-13.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0m1.25 12.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></path>
                </g>
              </svg>
              <p className="text-[#1B2C51] text-center">
                Personnel d&apos;appui hautement qualifié
              </p>
            </motion.div>

            <motion.div
              style={{
                x: X2,
                opacity: opacity2,
              }}
              className="flex flex-col items-center w-[47%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#701a75"
                className="w-8 lg:w-12 "
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M29 30H19a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-9-2h8v-8h-8zM8 30c-3.308 0-6-2.692-6-6s2.692-6 6-6s6 2.692 6 6s-2.692 6-6 6m0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m14-6H10a1 1 0 0 1-.857-1.515l6.002-10.003C15.338 2.16 15.669 2 16 2s.662.16.855.482l6.002 10.003A1 1 0 0 1 22 14m-10.234-2h8.468L16 4.944z"
                ></path>
              </svg>
              <p className="text-[#1B2C51] text-center">
                Large gamme de soins offerts
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={`absolute right-0 h-4/6 w-50 top-96
      md:top-0
      `}>
        <img src={firm} alt="" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default FirmHistory;
