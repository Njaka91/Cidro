import { useScroll, useTransform, motion } from "framer-motion";
import drRazakatiana from "../assets/images/drRazakatiana.jpg";
import doctorEquipe1 from "../assets/images/doctorEquipe1.jpg";

const Team = () => {
  const { scrollYProgress } = useScroll({});
  const imgY = useTransform(scrollYProgress, [0.45, 0.63], [200, 0]);
  const img2Y = useTransform(scrollYProgress, [0.50, 0.73], [200, 0]);


  const headScale = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const headopacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);

  const borderY = useTransform(scrollYProgress, [0.47, 0.53], [-6.3, 0]);
  const borderX = useTransform(scrollYProgress, [0.47, 0.53], [-7.5, 0]);

  const border2Y = useTransform(scrollYProgress, [0.4, 0.53], [7.5, 0]);
  const border2X = useTransform(scrollYProgress, [0.4, 0.53], [7.5, 0]);

  const textY = useTransform(scrollYProgress, [0.1, 0.3], [200, 0]);
  const TitleY = useTransform(scrollYProgress, [0, 0.22], [200, 0]);

  return (
    <div className="flex flex-col">
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
        className="absolute h-1 w-32 -bottom-0 bg-fuchsia-900   rounded-full transform " />
      </div>
      <div className="flex flex-row relative justify-between  px-32 mt-10">
        <div className="flex flex-col w-2/5 justify-center items-center text-[#1B2C51]z-10">
          <div className="absolute border-4 h-1/2 w-1/2 right-0 top-1/4 bg-[#1ea06c] opacity-50 blur-[200px] shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          <motion.div
            style={{
              y: TitleY,
            }}
            className="relative flex flex-col"
          >
            <motion.div
              className="absolute bottom-0 -right-5 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-20 w-[450px]"
              style={{ y: border2Y, x: border2X }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -right-10 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-20 w-[450px]"
              style={{ y: borderY, x: borderX }}
            ></motion.div>
            <span className="text-4xl font-medium text-fuchsia-900">
              Dr Allain RAZAKATIANA
            </span>
            <span className="text-1xl font-medium">
              Docteur en chirurgie dentaire
            </span>
          </motion.div>
          <motion.div style={{ y: textY }} transition={{ delay: 2 }}>
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

        <div className="relative w-[40%] z-10">
          <motion.div
            className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
            style={{ y: imgY }}
          >
            <img
              src={drRazakatiana}
              alt="dentiste"
              className="object-cover w-full h-96"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row-reverse relative justify-between  px-32">
        <div className="flex flex-col w-2/5 justify-center text-[#1B2C51]z-10">
          <div className="absolute border-4 h-1/2 w-1/2 left-0 top-1/4 bg-fuchsia-900 opacity-50 blur-[200px] shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          <motion.div
            style={{
              y: TitleY,
            }}
            className="relative flex flex-col"
          >
            <motion.div
              className="absolute bottom-0 -left-6 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tr-3xl rounded-bl-3xl h-20 w-[250px]"
              style={{ y: border2Y, x: border2X }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -left-2 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tr-3xl rounded-bl-3xl h-20 w-[250px]"
              style={{ y: borderY, x: borderX }}
            ></motion.div>
            <span className="text-4xl font-medium text-fuchsia-900">
              Dr Allain
            </span>
            <span className="text-1xl font-medium">
              Docteur en chirurgie dentaire
            </span>
          </motion.div>
          <motion.div style={{ y: textY }} transition={{ delay: 2 }}>
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
        <div className="relative w-[40%] my-16 z-10">
          <motion.div
            className="overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-xl h-full"
            style={{ y: img2Y }}
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
