import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpg"
import { Clock, EnvelopeSimple, HouseLine, Phone } from "@phosphor-icons/react"
const Stubborn = () => {
  return (
    <div className="flex flex-row items-center ml-32 mr-32 w-full">
      <div className="flex items-center gap-4">
        <Link to="/">
        <img src={logo} alt="logo" className="w-[75px] h-[75px] rounded-3xl mt-4 mb-4"/>
        </Link>
        <div className="text-xl font-semibold">Cabinet du <br/><span className="text-fuchsia-900 text-xl font-semibold">Dr Razakatiana</span></div>
      </div>
      <div className="flex flex-col ml-auto gap-2">
      <div className="flex flex-row items-center gap-3">
            <Phone size={33} color="#701a75" weight="bold" />
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Appelez-nous</span>
                <span className="text-sm">+261 38 08 500 00</span>
            </div>
        </div>
        
        <div className="flex flex-row items-center gap-3">
          <EnvelopeSimple size={33} color="#701a75" weight="bold" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Notre adresse e-mail</span>
            <span className="text-sm">Allain.razakatiana.mg@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-auto gap-2">
      <div className="flex flex-row items-center gap-3">
          <Clock size={33} color="#701a75" weight="bold" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Heures d&apos;ouverture : 8.00-20.00</span>
            <span className="text-sm">Samedi : 9.00-18h30</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
            <HouseLine size={33} color="#701a75" weight="bold" />
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Notre emplacement</span>
                <span className="text-sm">Lot IBF 5Bis Résidence &quot;Les Rosiers&quot; Antsahavola</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stubborn
