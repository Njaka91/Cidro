import { CaretRight, Dot } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/cidroLogo.jpg";
import roott from "../assets/images/roott.png";

const menu = [
  {
    label: "Le cabinet",
    href: "/le-cabinet",
  },
  {
    label: "Nos soins",
    submenu: [
      {
        label: "Implatologie",
        href: "/implatologie",
      },
      {
        label: "Orthodentie",
        href: "/orthodentie",
      },
      {
        label: "Chirurgie orale",
        href: "/chirurgie-orale",
      },
      {
        label: "Implatologie",
        href: "/implatologie",
      },
    ],
  },
  {
    label: "Prendre rendez-vous",
    href: "/prendre-rendez-vous",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col  bg-slate-800">
      <div
        className="
      flex flex-row justify-between px-1 bg-slate-800 pt-10
      md:px-8 
      lg:px-24 
      xl:px-32
      "
      >
        <div className="flex flex-col ">
          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className=" h-[80px] md:h-[130px] mt-4 mb-4"
              />
            </Link>
          </div>
          <div className="text-white text-xs md:text-base flex flex-col gap-1 justify-center items-center">
            <div className="text-white flex flex-row items-start gap-4">
              <div className="flex flex-col justify-center items-center">
                <div>
                  Lot IBF 5Bis Résidence &quot;Les Rosiers&quot; Antsahavola
                </div>
                <div>Antananarivo 101 - Madagasikara</div>
              </div>
            </div>
            <div className="text-white flex flex-row gap-4">
              <div>+261 34 02 267 27</div>
            </div>
            <div className="text-white flex flex-row gap-4">
              <div>Allain.razakatiana.mg@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 text-xs md:text-base">
          <span className="text-lg font-semibold text-white">
            Informations légales
          </span>
          <div className="text-white flex flex-col gap-2 ">
            <Link className="text-white flex flex-row items-center gap-3 " to="/cgu">
              <Dot size={18} weight="fill" color="white" />
              <div>Conditions générales d&apos;utilisation</div>
            </Link>
            <Link className="text-white flex flex-row items-center gap-3" to="mentions-legales">
              <Dot size={18} weight="fill" color="white" />
              <div>Mentions légales</div>
            </Link>
            <Link className="text-white flex flex-row items-center gap-3" to="politique-de-confidentialite">
              <Dot size={18} weight="fill" color="white" />
              <div>Politiques de confidentialités et charte des cookies</div>
            </Link>
          </div>
        </div>
        <div className="flex-col gap-3 mt-3 hidden md:flex">
          <span className="text-lg font-semibold text-white">Liens</span>
          <div className="text-white flex flex-col gap-2 ">
            {menu.map((m, key) =>
              m.submenu ? (
                <div key={key}>
                  <div className="flex items-center gap-3">
                    <CaretRight size={12} color="white" weight="fill" />
                    <div>Nos soins</div>
                  </div>
                  <ul className="ml-5">
                    {m.submenu.map((sub, key) => (
                      <li key={key} className="mt-2">
                        <Link to={sub.href} className="flex items-center gap-3">
                          <Dot size={18} weight="fill" color="white" />
                          <span>{sub.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={key}
                  to={m.href}
                  className="text-white flex flex-row items-center gap-3"
                >
                  <CaretRight size={12} color="white" weight="fill" />
                  <div>{m.label}</div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-9 mb-9">
        <span className="w-2/3 h-[1px] rounded-full bg-fuchsia-900"></span>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-9 items-center mb-10 px-1 md:px-8 lg:px-24 xl:px-32">
        <span className="text-white text-sm md:text-base">
          © Le cabinet du Dr Allain Razakatiana, All Right Reserved.
        </span>
        <Link to="https://www.roottimplants.fr/" target="_blank">
          <img src={roott} alt="roott-logo" className="w-36 md:w-52" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
