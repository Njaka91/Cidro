import { useInView } from "react-intersection-observer";
import Video from "../common/Video"
import { motion } from "framer-motion";
import { videos } from "../../data/FormationVideos";

const FormationVideos = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, // Permet de déclencher l'animation à chaque entrée/sortie
        threshold: 0.2,    // Se déclenche lorsque 20% de l'élément est visible
      });
  return (
    <div className="mt-14">
    <span
      ref={ref}
      className="flex flex-col text-fuchsia-900 text-center mb-12">
          <motion.span
            className="text-3xl font-extrabold mb-3 lg:text-5xl"
            initial={{ opacity: 0, y: 100 }} // Initialement caché et déplacé en bas
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animation en fonction de la visibilité
            transition={{ duration: 0.8 }} // Durée de l'animation
          >
            Moments de partage avec l’équipe
          </motion.span>
        </span>
      <Video videos={videos}/>
    </div>
  )
}

export default FormationVideos
