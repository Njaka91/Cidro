import { Link } from "react-router-dom";
import logo from "../assets/images/cidroLogo.jpg";
import { Clock, EnvelopeSimple, HouseLine, Phone } from "@phosphor-icons/react";

const Stubborn = () => {
  return (
    <div
      className="hidden items-center justify-between md:flex md:flex-row md:px-8 lg:px-24 xl-px-32"
    >
      <div
        className="flex items-center md:gap-2 gl:gap-4"
      >
        <Link to="/">
          <img src={logo} alt="logo" className="mt-4 mb-4 md:w-40" />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center md:gap-2 lg:gap-3">
          <Phone
            className="md:w-6 md:h-8 lg:w-8 lg:h-14"
            color="#701a75"
            weight="bold"
          />
          <div
            className="flex flex-col md:text-xs lg:text-sm"
          >
            <span className=" font-semibold">Appelez-nous</span>
            <span>+261 34 02 267 27</span>
          </div>
        </div>

        <div className="flex flex-row items-center md:gap-2 lg:gap-3">
          <EnvelopeSimple
            className="md:w-6 md:h-8 lg:w-8 lg:h-14"
            color="#701a75"
            weight="bold"
          />
          <div
            className="flex flex-col md:text-xs lg:text-sm
          "
          >
            <span className=" font-semibold">Notre adresse e-mail</span>
            <span>Allain.razakatiana.mg@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center md:gap-2 lg:gap-3">
          <Clock
            className="md:w-6 md:h-8 lg:w-8 lg:h-14"
            color="#701a75"
            weight="bold"
          />
          <div
            className="flex flex-col md:text-xs lg:text-sm"
          >
            <span className="font-semibold">
              Heures d&apos;ouverture : 8h - 17h30
            </span>
            <span>Samedi : 8h - 15h30</span>
          </div>
        </div>
        <div className="flex flex-row items-center md:gap-2 lg:gap-3">
          <HouseLine
            className="md:w-6 md:h-8 lg:w-8 lg:h-14"
            color="#701a75"
            weight="bold"
          />
          <div
            className="flex flex-col md:text-xs lg:text-sm"
          >
            <span className=" font-semibold">Notre emplacement</span>
            <span>
              Lot IBF 5Bis Résidence &quot;Les Rosiers&quot; Antsahavola
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stubborn;
