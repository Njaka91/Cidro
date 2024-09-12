import {
  CaretRight,
  Dot,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className="flex flex-col  bg-slate-800">
      <div className="flex flex-row justify-between px-32 bg-slate-800 m-0 pt-10">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold text-white">Adresse</span>
          <div className="text-white flex flex-col gap-3 ">
            <div className="text-white flex flex-row items-start gap-4">
              <MapPin size={18} color="white" weight="bold" className="mt-1"/>
              <div>
                <div>
                  Lot IBF 5Bis Résidence &quot;Les Rosiers&quot;
                  <br /> Antsahavola
                </div>
                <div>Antananarivo 101 - Madagasikara</div>
              </div>
            </div>
            <div className="text-white flex flex-row gap-4">
              <Phone size={18} color="white" weight="bold" className="mt-1" />
              <div>+261 38 08 500 00</div>
            </div>
            <div className="text-white flex flex-row gap-4">
              <EnvelopeSimple size={18} color="white" weight="bold" className="mt-1"/>
              <div>Allain.razakatiana.mg@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
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
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold text-white">Liens</span>
          <div className="text-white flex flex-col gap-2 ">
            <Link to="/lecabinet" className="text-white flex flex-row items-center gap-3">
              <CaretRight size={12} color="white" weight="fill" />
              <div>Le cabinet</div>
            </Link>
            <Link to="/equipe" className="text-white flex flex-row items-center gap-3">
              <CaretRight size={12} color="white" weight="fill" />
              <div>Equipe </div>
            </Link>
            <Link to="/nossoins" className="text-white flex flex-row items-center gap-3">
              <CaretRight size={12} color="white" weight="fill" />
              <div>Nos soins</div>
            </Link>
            <Link to="/prendrerendez-vous" className="text-white flex flex-row items-center gap-3">
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
        <span className="text-white">© Le cabinet du Dr Allain Razakatiana, All Right Reserved.</span>
      </div>


    </div>
  );
};

export default Footer;
