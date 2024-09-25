import { CaretRight, Dot } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col  bg-slate-800">
      <div className="flex flex-row justify-between px-32 bg-slate-800 pt-10">
        <div className="flex flex-col ">
          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[75px] h-[75px] rounded-3xl mt-4 mb-4"
              />
            </Link>
            <div className="text-5xl font-bold">
              <span className="text-white">Cidro</span>
            </div>
          </div>
          <div className="text-white flex flex-col gap-1 justify-center items-center">
            <div className="text-white flex flex-row items-start gap-4">
              <div className="flex flex-col justify-center items-center">
                <div>
                  Lot IBF 5Bis Résidence &quot;Les Rosiers&quot; Antsahavola
                </div>
                <div>Antananarivo 101 - Madagasikara</div>
              </div>
            </div>
            <div className="text-white flex flex-row gap-4">
              <div>+261 38 08 500 00</div>
            </div>
            <div className="text-white flex flex-row gap-4">
              <div>Allain.razakatiana.mg@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <span className="text-lg font-semibold text-white">
            Heures d&apos;ouverture
          </span>
          <div className="text-white flex flex-col gap-2 ">
            <div className="text-white flex flex-row items-center gap-3 ">
              <Dot size={18} weight="fill" color="white" />
              <div>Lundi - Vendredi 8.00-20.OO</div>
            </div>
            <div className="text-white flex flex-row items-center gap-3">
              <Dot size={18} weight="fill" color="white" />
              <div>Samedi 9.00-18.30</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <span className="text-lg font-semibold text-white">Liens</span>
          <div className="text-white flex flex-col gap-2 ">
            <Link
              to="/lecabinet"
              className="text-white flex flex-row items-center gap-3"
            >
              <CaretRight size={12} color="white" weight="fill" />
              <div>Le cabinet</div>
            </Link>
            <Link
              to="/equipe"
              className="text-white flex flex-row items-center gap-3"
            >
              <CaretRight size={12} color="white" weight="fill" />
              <div>Equipe </div>
            </Link>
            <Link
              to="/nossoins"
              className="text-white flex flex-row items-center gap-3"
            >
              <CaretRight size={12} color="white" weight="fill" />
              <div>Nos soins</div>
            </Link>
            <Link
              to="/prendrerendez-vous"
              className="text-white flex flex-row items-center gap-3"
            >
              <CaretRight size={12} color="white" weight="fill" />
              <div>Prendre rendez-vous</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-9 mb-9">
        <span className="w-2/3 h-[1px] rounded-full bg-fuchsia-900"></span>
      </div>

      <div className="mb-10 px-32">
        <span className="text-white">
          © Le cabinet du Dr Allain Razakatiana, All Right Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
