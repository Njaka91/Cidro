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
        <div className="text-white text-xs md:text-base flex flex-col gap-3 ">
          <span className="text-lg font-semibold text-white">
            <span className="border-b-2 border-fuchsia-900">Contacts</span>
          </span>
          <div className="flex flex-col">
            <div className="text-white flex flex-row items-start gap-4">
              <div className="flex flex-row items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                  ></path>
                </svg>
                <div className="flex flex-col">
                  <div>
                    Lot IBF 5Bis Résidence &quot;Les Rosiers&quot; Antsahavola
                  </div>
                  <div>Antananarivo 101 - Madagasikara</div>
                </div>
              </div>
            </div>
            <div className="text-white flex flex-row gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
                ></path>
              </svg>
              <div>+261 34 02 267 27</div>
            </div>
            <div className="text-white flex flex-row gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <rect width={20} height={16} x={2} y={4} rx={2}></rect>
                  <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <Link to="mailto:allainrazakatianad@gmail.com">
                allainrazakatianad@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xs md:text-base">
          <span className="text-lg font-semibold text-white ">
            <span className="border-b-2 border-fuchsia-900">
              Informations légales
            </span>
          </span>
          <div className="text-white flex flex-col">
            <ul className="list-disc">
              <li>
                <Link
                  className="text-white flex flex-row items-center gap-3 "
                  to="/cgu"
                >
                  <div>Conditions générales d&apos;utilisation</div>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white flex flex-row items-center gap-3"
                  to="mentions-legales"
                >
                  <div>Mentions légales</div>
                </Link>
              </li>

              <li>
                <Link
                  className="text-white flex flex-row items-center gap-3"
                  to="politique-de-confidentialite"
                >
                  <div>
                    Politiques de confidentialités et charte des cookies
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col gap-3 hidden md:flex">
          <span className="text-lg font-semibold text-white ">
            <span className="border-b-2 border-fuchsia-900">Liens</span>
          </span>
          <div className="text-white flex flex-col">
            {menu.map((m, key) =>
              m.submenu ? (
                <div key={key}>
                  <div className="flex items-center gap-3">
                    <CaretRight size={12} color="white" weight="fill" />
                    <div>Nos soins</div>
                  </div>
                  <ul className="ml-5">
                    {m.submenu.map((sub, key) => (
                      <li key={key} className="mt-1">
                        <Link to={sub.href} className="flex items-center">
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

      <div className="flex flex-col-reverse md:flex-row justify-between gap-9 items-center mb-5 px-1 md:px-8 lg:px-24 xl:px-32">
        <Link to="/">
          <img src={logo} alt="logo" className=" h-[80px] md:h-[100px]" />
        </Link>
        <span className="text-white text-sm md:text-base">
          ©2024 CIDRO, tous droits réservés.
        </span>
        <Link to="https://www.roottimplants.fr/" target="_blank">
          <img src={roott} alt="roott-logo" className="w-36 md:w-52" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
