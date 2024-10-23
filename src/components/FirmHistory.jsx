import photeuil from "../assets/images/Implatologie.jpeg";
import { motion } from "framer-motion";
import firm from "../assets/images/firm.png";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
          <img src={photeuil} alt="" className="object-cover  w-full h-full" />
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
          <p>
            Notre cabinet dentaire se distingue par une approche entièrement
            numérisée, offrant des soins de précision à chaque étape. Du
            diagnostic à la pose des implants, en passant par la radiologie et
            la fabrication de prothèses, nous assurons un service complet et
            personnalisé. En plus de l&apos;implantologie, nous proposons des
            traitements d’orthodontie, de chirurgie orale et de dentisterie
            générale.
          </p>
          <p className="mt-3">
            En partenariat avec{" "}
            <Link
              to="https://www.roottimplants.fr/"
              target="_blank"
              className="font-bold"
            >
              ROOTT Implants
            </Link>
            , un fabricant reconnu basé à Dubaï, nous utilisons des implants
            dentaires de haute qualité. Ce partenariat nous permet de garantir
            des résultats durables et esthétiques, répondant aux besoins
            spécifiques de chaque patient.
          </p>
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
                className="w-8 lg:w-12 "
                color="#701a75"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M13.5 30.815a1 1 0 0 1-.493-.13l-8.5-4.815A1 1 0 0 1 4 25V15a1 1 0 0 1 .507-.87l8.5-4.815a1 1 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 23 15v10a1 1 0 0 1-.507.87l-8.5 4.815a1 1 0 0 1-.493.13M6 24.417l7.5 4.249l7.5-4.249v-8.834l-7.5-4.248L6 15.583Z"
                />
                <path
                  fill="currentColor"
                  d="M28 17h-2V7.583l-7.5-4.248l-8.007 4.535l-.986-1.74l8.5-4.815a1 1 0 0 1 .986 0l8.5 4.815A1 1 0 0 1 28 7Z"
                />
              </svg>

              <p className="text-[#1B2C51] text-center">
                Cabinet entièrement numérisé
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
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M12 6.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M10.25 9.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" />
                  <path d="M12 2.25a7.25 7.25 0 0 0-6.063 11.226l-2.587 4.48a.75.75 0 0 0 .795 1.11l2.614-.514l.861 2.52a.75.75 0 0 0 1.36.133l2.58-4.468a7 7 0 0 0 .88 0l2.58 4.468a.75.75 0 0 0 1.36-.134l.858-2.526l2.616.52a.75.75 0 0 0 .796-1.11l-2.586-4.479A7.25 7.25 0 0 0 12 2.25M6.25 9.5a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0m3.734 6.966a7.24 7.24 0 0 1-3.027-1.757l-1.482 2.567l1.637-.322a.75.75 0 0 1 .854.493l.54 1.579zm5.508 2.556l-1.476-2.556a7.24 7.24 0 0 0 3.027-1.757l1.48 2.563l-1.638-.326a.75.75 0 0 0-.856.495z" />
                </g>
              </svg>
              <p className="text-[#1B2C51] text-center">
                Meilleure marque d&apos;implant dentaire
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
                <path
                  fill="currentColor"
                  d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-2-4l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9"
                />
              </svg>
              <p className="text-[#1B2C51] text-center">
                Travail en collaboratioin avec les entreprises d&apos;assurance
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
      <div
        className={`absolute right-0 h-4/6 w-50 top-96
      md:top-0
      `}
      >
        <img src={firm} alt="" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default FirmHistory;
