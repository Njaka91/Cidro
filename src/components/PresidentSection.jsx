import dentiste from "../assets/images/dr_Allain_Razakatiana.jpg";
import dent from "../assets/images/dent.png";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import KeyMetricsSection from "../components/KeyMetricsSection";
import SectionPinkTitle from "../components/SectionPinkTitle";
import initiateur from "../assets/images/drAllainRazakatiana2.jpg";
import PresidentCart from "../components/PresidentCart";

const PresidentSection = () => {
  const ref = useRef(null);

  // Use the useInView hook with triggerOnce set to false
  const isInView = useInView(ref, { margin: '0px', triggerOnce: false });

  const imgVariants = {
    hidden: { scale: 0.85, opacity: 0.5 },  // Start with lower opacity
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }  // Set opacity to 1 (clear image)
  };

  const textVariants = {
    hidden: { y: 300, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-slate-300">
      <div
        ref={ref}
        className="flex flex-col-reverse mt-8 relative py-14
    md:flex-row md:justify-between md:px-8 
    lg:my-16 lg:px-24
    xl:px-32"
      >
        <div
          className="relative flex flex-col mt-10 text-[#1B2C51] z-10 px-6
      md:w-1/2
      xl:mt-24"
        >
          <motion.div
            className="relative"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}  // Animate based on visibility
          >
            <div className="flex flex-col">
              <motion.div
                className="absolute w-72 h-24 -left-4 bottom-0 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl 
            lg:w-96 
            xl:h-32 xl:w-[450px] xl:-bottom-2 xl:-left-8"
              ></motion.div>
              <motion.div
                className="absolute w-72 h-24 -bottom-3 -left-2 bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl 
            lg:w-96
            xl:h-32 xl:w-[450px] xl:-bottom-6"
              ></motion.div>
              <span className="text-3xl font-medium">Dr Allain</span>
              <span
                className="font-semibold text-4xl
          lg:text-5xl lg:font-semibold
          xl:text-6xl xl:font-semibold"
              >
                RAZAKATIANA
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}  // Animate based on visibility
          >
            <p className="mt-8 text-justify md:w-4/5">
              Le titane, issu de l&apos;ilménite et du rutile, est une ressource
              clé pour la fabrication d&apos;implants dentaires. Madagascar
              possède trois sites d&apos;extraction (Fort Dauphin, Tuléar et
              Fénérive-Est), mais faute de transfert de technologie, ces
              minerais sont exportés en vrac.
            </p>
            <p className="mt-2 text-justify md:w-4/5">
              Le titane pur Ti40 est largement utilisé en implantologie dentaire
              en raison de sa dureté et de sa biocompatibilité. Il est
              ostéointégrable, avec un taux de succès de 97 %, et les 3 % 
              d&apos;échecs sont souvent dus à la santé du patient ou à des
              erreurs de diagnostic.
            </p>
            <p className="mt-2 text-justify md:w-4/5">
              Madagascar, malgré ses ressources naturelles, se voit contraint
              d&apos;importer les implants dentaires à un coût inaccessible pour
              beaucoup. Une production locale permettrait de rendre ces
              technologies plus abordables.
            </p>
          </motion.div>
        </div>

        <div
          className="relative z-10 w-full px-6 
      md:w-1/2 md:px-0
      xl:my-16 "
        >
          <motion.div
            className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full"
            variants={imgVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}  // Animate based on visibility
          >
            <img
              src={dentiste}
              alt="dentiste"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <img
          src={dent}
          alt="dent"
          className="absolute bottom-10 left-10 object-cover w-3/6 h-52"
        />
        <span className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-slate-300 to-[#F5F5F5]"></span>
      </div>

      <KeyMetricsSection />
      <SectionPinkTitle
        img={initiateur}
        title="Initiateur de cercles scientifiques"
        description1="Le Dr. Allain RAZAKATIANA est un pionnier de l'implantologie dentaire à Madagascar. Il a initié des cercles scientifiques pour favoriser l'échange de connaissances et l'innovation dans ce domaine."
        description2="Ces cercles rassemblent des experts en implantologie dentaire afin de partager les avancées technologiques et médicales, améliorant les pratiques et la formation continue des professionnels de santé."
        description3="Grâce à ses initiatives, Dr. Allain RAZAKATIANA a sensibilisé la communauté médicale à l'importance de l'ostéointégration et de l'utilisation du titane, contribuant à améliorer les soins dentaires à Madagascar."
        positionImg="flex-row"
      />
      <PresidentCart />
    </div>
  );
};

export default PresidentSection;
