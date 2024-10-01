import { useScroll, useTransform, motion } from "framer-motion";
import drRazakatiana from "../assets/images/drRazakatiana.jpg";
import doctorEquipe1 from "../assets/images/doctorEquipe1.jpg";
import { useRef } from "react";

const Team = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headScale = useTransform(scrollYProgress, [0, 0.45], [0.75, 1]);
  const headopacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  const borderY = useTransform(scrollYProgress, [0.47, 0.53], [-6.3, 0]);
  const borderX = useTransform(scrollYProgress, [0.47, 0.53], [-7.5, 0]);

  const border2Y = useTransform(scrollYProgress, [0.4, 0.53], [7.5, 0]);
  const border2X = useTransform(scrollYProgress, [0.4, 0.53], [7.5, 0]);

  const textY = useTransform(scrollYProgress, [0, 0.8], [300, 0]);
  const TitleY = useTransform(scrollYProgress, [0, 0.78], [200, 0]);

  const textY2 = useTransform(scrollYProgress, [0, 0.8], [300, 0]);
  const TitleY2 = useTransform(scrollYProgress, [0, 0.78], [200, 0]);

  return (
    <div
    ref={ref}
    className="flex flex-col">
      <div className="flex relative justify-center items-center py-2 mt-6">
        <motion.span
          style={{
            scale: headScale,
            opacity: headopacity,
          }}
          className="text-[#1B2C51] text-3xl font-medium"
        >
          Nos praticiens
        </motion.span>
        <motion.span
          style={{
            scale: headScale,
            opacity: headopacity,
          }}
          className="absolute h-1 w-32 -bottom-0 bg-fuchsia-900   rounded-full transform "
        />
      </div>

      <div
        className="flex flex-col-reverse relative justify-between mt-10 px-6
      md:flex-row md:px-8
      lg:px-24
      xl:px-32"
      >
        <div
          className="flex flex-col w-full justify-center text-[#1B2C51] z-10 
        md:w-2/5 md:px-0"
        >
          <div className="absolute border-4 h-1/2 w-1/2 right-0 top-1/4 bg-[#1ea06c] opacity-50 blur-[200px] shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          <motion.div
            style={{
              y: TitleY,
            }}
            className="relative flex flex-col mt-10
            md:mt-0"
          >
            <motion.div
              className="absolute -left-4 bottom-0 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-28 w-72
              lg:w-72
              xl:bottom-0 xl:-left-6"
              style={{ y: border2Y, x: border2X }}
            />
            <motion.div
              className="absolute w-72 -bottom-2 -left-2 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-28 
              lg:w-72
              xl:-bottom-3 xl:-left-3"
              style={{ y: borderY, x: borderX }}
            />
            <span className="text-4xl font-medium text-fuchsia-900">
              Dr Allain
            </span>
            <span className="text-4xl font-medium text-fuchsia-900">
              RAZAKATIANA
            </span>

            <span className="text-1xl font-medium">
              Docteur en chirurgie dentaire
            </span>
          </motion.div>
          <motion.div
            style={{ y: textY }}
            transition={{ delay: 2 }}
          >
            <ul className="mt-7 ml-11 list-disc">
              <li>
                Diplôme de l&apos;Université de Bordeaux Il en Biomatériaux et
                Système Implantable
              </li>
              <li>
                Attestation d&apos;Etudes de Recherches Approfondies en
                Implantologie Orale (AERAIO)
              </li>
              <li>Diplôme d&apos;Etat ESCD Mahajanga</li>
              <li>Membre associé de l&apos;Académie Malagasy</li>
            </ul>
          </motion.div>
        </div>

        <div
        ref={ref}
          className="relative z-10 w-full 
        md:w-[40%]  "
        >
          <motion.div
            className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
          >
            <img
              src={drRazakatiana}
              alt="dentiste"
              className="object-cover w-full h-96"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="flex flex-col-reverse relative justify-between   px-6
        md:flex-row-reverse md:px-8 md:mt-10
        lg:px-24
        xl:px-32"
      >
        <div className="flex flex-col w-full justify-center text-[#1B2C51] z-10
        md:w-2/5">
          <div className="absolute border-4 h-1/2 w-1/2 left-0 top-1/4 bg-fuchsia-900 opacity-50 blur-[200px] shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          <motion.div
            style={{
              y: TitleY2,
            }}
            className="relative flex flex-col mt-10
            md:mt-0"
          >
            <motion.div
              className="absolute -left-4 bottom-0 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-28 w-72
              lg:w-72
              xl:bottom-0 xl:-left-6"
            />
            <motion.div
              className="absolute w-72 -bottom-2 -left-2 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-28 
              lg:w-72
              xl:-bottom-3 xl:-left-3"
            />
            <span className="text-4xl font-medium text-fuchsia-900">
              Dr Lorem
            </span>
            <span className="text-4xl font-medium text-fuchsia-900">
              Ipsum
            </span>

            <span className="text-1xl font-medium">
              Docteur en chirurgie dentaire
            </span>
          </motion.div>
          <motion.div style={{ y: textY2 }} transition={{ delay: 2 }}>
            <ul className="mt-7 ml-11 list-disc">
              <li>
                Diplôme de l&apos;Université de Bordeaux Il en Biomatériaux et
                Système Implantable
              </li>
              <li>
                Attestation d&apos;Etudes de Recherches Approfondies en
                Implantologie Orale (AERAIO)
              </li>
              <li>Diplôme d&apos;Etat ESCD Mahajanga</li>
              <li>Membre associé de l&apos;Académie Malagasy</li>
            </ul>
          </motion.div>
        </div>
        <div className="relative w-full mt-10 z-10
        md:w-[40%] md:my-16 md:mt-0">
          <motion.div
            className="overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl h-full"
          >
            <img
              src={doctorEquipe1}
              alt="dentiste"
              className="object-cover w-full h-96"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
