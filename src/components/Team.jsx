import { useScroll, useTransform, motion } from "framer-motion";
import drRazakatiana from "../assets/images/drRazakatiana.jpg";
import doctorEquipe1 from "../assets/images/doctorEquipe1.jpg";

const Team = () => {
  const { scrollYProgress } = useScroll({});
  const imgY = useTransform(scrollYProgress, [0.15, 0.28], [200, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.28], [0.85, 1]);

  const borderY = useTransform(scrollYProgress, [0.21, 0.28], [-6.3, 0]);
  const borderX = useTransform(scrollYProgress, [0.21, 0.28], [-7.5, 0]);

  const border2Y = useTransform(scrollYProgress, [0.21, 0.28], [7.5, 0]);
  const border2X = useTransform(scrollYProgress, [0.21, 0.28], [7.5, 0]);

  const textY = useTransform(scrollYProgress, [0.1, 0.3], [200, 0]);
  const TitleY = useTransform(scrollYProgress, [0, 0.22], [200, 0]);

  return (
    <div className="flex flex-col">
      <div className="flex relative justify-center items-center bg-[#1B2C51] py-8">
        <span className="text-white text-5xl font-medium">
          Equipe
        </span>
        <span className="absolute h-[6px] w-40 bg-fuchsia-900 bottom-4  rounded-full left-1/2 transform -translate-x-1/2"/>
      </div>
      <div className="flex flex-row relative justify-between  px-32">
        <div className="flex flex-col w-2/5 text-[#1B2C51] mt-32 z-10">
          <div className="absolute border-4 h-1/2 w-1/2 right-0 top-1/4 bg-[#1ea06c] opacity-50 blur-[200px] shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          <motion.div
            style={{
              y: TitleY,
            }}
            className="relative flex flex-col"
          >
            <motion.div
              className="absolute -bottom-1 -right-[-25px] bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-20 w-[450px]"
              style={{ y: border2Y, x: border2X }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -right-[-9px] bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-20 w-[450px]"
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

        <div className="relative w-[40%] my-16 z-10">
          <motion.div
            className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
            style={{ y: imgY, scale: imgScale }}
          >
            <img
              src={drRazakatiana}
              alt="dentiste"
              className="object-cover w-full h-96"
            />
          </motion.div>
          
        </div>
      </div>

      <div className="flex flex-row relative justify-between pb-8 px-32">
        <div className="relative w-[40%] z-10">
          <div className=" absolute h-5/6 w-5/6 top-20 left-20  bg-[#df0baa] opacity-50 blur-[200px] shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
          <motion.div
            className="overflow-hidden rounded-tr-3xl rounded-bl-3xl  h-full "
            style={{ y: imgY, scale: imgScale }}
          >
            <img
              src={doctorEquipe1}
              alt="dentiste"
              className="object-cover w-full h-96"
            />
          </motion.div>
         
        </div>

        <div className="flex flex-col w-2/5 text-[#1B2C51] mt-16 z-10">
          <motion.div
            style={{
              y: TitleY,
            }}
            className="relative flex flex-col"
          >
            <motion.div
              className="absolute -bottom-1 -right-[-270px] bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-20 w-[200px]"
              style={{ y: border2Y, x: border2X }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -right-[-256px] bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-20 w-[200px]"
              style={{ y: borderY, x: borderX }}
            ></motion.div>
            <span className="text-4xl font-medium text-fuchsia-900">
              Dr Tsiaro
            </span>
            <span className="text-1xl font-medium">Docteur dentiste</span>
          </motion.div>
          <motion.div style={{ y: textY }} transition={{ delay: 2 }}>
            <ul className="mt-7 ml-11 list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium sapiente placeat explicabo ratione
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium sapiente placeat explicabo ratione
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laudantium sapiente placeat explicabo ratione
              </li>

              <li>Membre associé de l&apos;Académie Malagasy</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
