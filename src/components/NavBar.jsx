import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="sticky bg-[#701a75] flex justify-center items-center gap-28 py-3 px-10 text-white z-10">
      <ul className="flex gap-16 items-center font-medium justify-center">
        <li className="cursor-pointer relative group">
          <Link to="/">Accueil</Link>
        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
          <Link to="/office">Le cabinet</Link>
        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
          <Link to="/team">Equipe</Link>
        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
          <Link to="/care">Nos soins</Link>
        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="cursor-pointer relative group">
          <Link to="/appointment">Prendre rendez-vous</Link>
        <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
