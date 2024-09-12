import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// Variantes pour les éléments individuels de la liste
const liVariants = {
  before: { opacity: 0, y: -20 },
  after: { opacity: 1, y: 0 }
};

// Variantes pour le container UL (staggerChildren pour le délai entre les enfants)
const ulVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Délai entre l'animation des enfants
    },
  },
};

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-[#701a75] flex justify-center items-center gap-28 py-3 px-10 text-white z-50">
      <motion.ul 
        className="flex gap-16 items-center font-medium justify-center"
        variants={ulVariants}
        initial="before"
        animate="after"
      >
        {["Accueil", "Le cabinet", "Equipe", "Nos soins", "Prendre rendez-vous"].map((text, index) => (
          <motion.li key={index} className="cursor-pointer relative group" variants={liVariants}>
            <NavLink
              to={text === "Accueil" ? "/" : `/${text.toLowerCase().replace(/\s+/g, '')}`}
              className={({ isActive }) =>
                isActive
                  ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:rounded-xl after:bg-white"
                  : "text-white relative group"
              }
            >
              {text}
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default NavBar;
