import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/cidroLogo.jpg";
import "../assets/css/fontTitle.css";

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

const menu = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Le cabinet",
    href: "/le-cabinet",
  },
  {
    label: "Nos soins",
    submenu: [
      {
        label: "Implantologie",
        href: "/implantologie",
      },
      {
        label: "Orthodontie",
        href: "/orthodontie",
      },
      {
        label: "Chirurgie orale",
        href: "/chirurgie-orale",
      },
      {
        label: "Dentisterie générale",
        href: "/dentisterie-generale",
      },
    ],
  },
  {
    label: "Prendre rendez-vous",
    href: "/prendre-rendez-vous",
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 bg-[#701a75] flex items-center justify-between md:justify-center py-3 px-5 text-white z-50 md:px-10">
      <div className="flex-1 flex justify-start md:hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 bg-white" />
        </Link>
      </div>

      {/* Titre CIDRO (centre en mobile) */}
      <div className="flex-1 text-center text-white font-semibold text-2xl varela-font md:hidden">CIDRO</div>

      <div className="flex-1 flex justify-end md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu de bureau (Desktop Menu) */}
      <motion.ul
        className="hidden md:flex gap-8 lg:gap-16 items-center font-medium justify-center"
        variants={ulVariants}
        initial="before"
        animate="after"
      >
        {menu.map((m, index) => (
          <motion.li
            key={index}
            className="cursor-pointer relative"
            variants={liVariants}
          >
            {m.submenu ? (
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button">
                  {m.label}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#701a75] rounded-box z-[1] w-52 p-2 shadow"
                >
                  {m.submenu.map((sub, key) => (
                    <li key={key}>
                      <NavLink
                        to={sub.href}
                        className={({ isActive }) =>
                          isActive
                            ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:rounded-xl after:bg-white hover:bg-transparent rounded-none"
                            : "text-white relative group hover:bg-transparent rounded-none"
                        }
                      >
                        {sub.label}
                        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                to={m.href}
                className={({ isActive }) =>
                  m.label === "Prendre rendez-vous"
                    ? "bg-white text-fuchsia-900 py-2 px-4 rounded-full font-semibold transition-colors duration-300 hover:bg-fuchsia-100 hover:text-fuchsia-950"
                    : isActive
                    ? "text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:rounded-xl after:bg-white"
                    : "text-white relative group"
                }
              >
                {m.label}
                {m.label !== "Prendre rendez-vous" && (
                  <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </NavLink>
            )}
          </motion.li>
        ))}
      </motion.ul>

      {/* Menu mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }} // Départ en haut de l'écran
          animate={{ opacity: 1, y: 0 }} // Animation vers le bas
          transition={{ type: "tween", duration: 0.3 }} // Transition douce
          className="absolute md:hidden top-full left-0 w-full bg-[#701a75] text-center py-5"
        >
          <ul className="flex flex-col gap-2">
            {menu.map((m, index) => (
              <li key={index}>
                {m.submenu ? (
                  <div tabIndex={0} className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title ml-4">Nos soins</div>
                    <div className="collapse-content flex justify-end">
                      <ul className="w-1/2">
                        {m.submenu.map((sub, key) => (
                          <li key={key} className="text-start mb-4">
                            <NavLink to={sub.href} onClick={toggleMenu}>
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={m.href}
                    onClick={toggleMenu}
                    className={
                      m.label === "Prendre rendez-vous"
                        ? "bg-white text-fuchsia-900 py-2 px-4 rounded-full font-semibold transition-colors duration-300 hover:bg-fuchsia-100 hover:text-fuchsia-950"
                        : "block text-white py-2"
                    }
                  >
                    {m.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
