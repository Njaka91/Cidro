import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const liVariants = {
  before: { opacity: 0, y: -20 },
  after: { opacity: 1, y: 0 },
};

const ulVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 bg-[#701a75] flex items-center justify-between mdIpohne:justify-center py-3 px-5 text-white z-50 mdIpohne:px-10">
      {/* Logo (centré) */}
      <div className="flex-1 mdIpohne:hidden"></div>
      <div className="text-lg mdIpohne:hidden justify-center items-center font-bold mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-9 bg-white rounded-lg" />
          </Link>
          <div className="font-bold text-3xl">
            <span className="text-white">Cidro</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end mdIpohne:hidden">
        {/* Mobile Menu Button (droite) */}
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Desktop Menu */}
      <motion.ul
        className="hidden mdIpohne:flex gap-8 lg:gap-16 items-center font-medium justify-center"
        variants={ulVariants}
        initial="before"
        animate="after"
      >
        {["Accueil", "Le cabinet", "Equipe", "Nos soins", "Prendre rendez-vous"].map((text, index) => (
          <motion.li key={index} className="cursor-pointer relative group" variants={liVariants}>
            <NavLink
              to={text === "Accueil" ? "/" : `/${text.toLowerCase().replace(/\s+/g, "")}`}
              className={({ isActive }) =>
                text === "Prendre rendez-vous"
                  ? "bg-white text-fuchsia-900 py-2 px-4 rounded-full font-semibold transition-colors duration-300 hover:bg-fuchsia-100 hover:text-fuchsia-950"
                  : isActive
                  ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:rounded-xl after:bg-white"
                  : "text-white relative group"
              }
            >
              {text}
              {text !== "Prendre rendez-vous" && (
                <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
              )}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }} // Départ en haut de l'écran
          animate={{ opacity: 1, y: 0 }} // Animation vers le bas
          transition={{ type: "tween", duration: 0.3 }} // Transition douce
          className="absolute mdIpohne:hidden top-full left-0 w-full bg-[#701a75] text-center py-5"
        >
          <ul className="flex flex-col gap-4">
            {["Accueil", "Le cabinet", "Equipe", "Nos soins", "Prendre rendez-vous"].map((text, index) => (
              <li key={index}>
                <NavLink
                  to={text === "Accueil" ? "/" : `/${text.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={toggleMenu}
                  className={
                    text === "Prendre rendez-vous"
                      ? "bg-white text-fuchsia-900 py-2 px-4 rounded-full font-semibold transition-colors duration-300 hover:bg-fuchsia-100 hover:text-fuchsia-950"
                      : "block text-white py-2"
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
