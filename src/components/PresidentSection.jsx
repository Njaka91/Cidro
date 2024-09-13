import dentiste from "../assets/images/dentiste.jpg"
import dent from "../assets/images/dent.png"

const PresidentSection = () => {
  return (
    <div className="flex flex-row relative justify-between bg-slate-200 h-[550px] my-24 px-32">
      <div className="flex flex-col w-1/3 text-[#1B2C51] mt-[88px] z-10">
        <div className="relative flex flex-col">
          <div className=" absolute -bottom-1 -right-14 bg-none border-2 border-[#1B2C51] border-opacity-20 rounded-tl-3xl rounded-br-3xl h-32 w-[450px]"></div>
          <div className=" absolute -bottom-4 -right-[70px] bg-none border-2 border-fuchsia-900 border-opacity-20 rounded-tl-3xl rounded-br-3xl h-32 w-[450px]"></div>
          <span className="text-4xl font-medium">Dr Allain</span>
          <span className="text-6xl font-medium">RAZAKATIANA</span>
        </div>
        <p className="mt-4">
          Les évolutions technologiques du monde de la médecine actuelle ont fait des grands pas de géant,
          et les soins dentaires en particulier en ont énormement beneficiés.</p>
        <p className="mt-2">
          Ainsi, la progression de la profession dentaire Malagasy
          n&apos;est plus à la traine et notre cabinet accepte le defi d&apos;aller encore plus loin dans cette course à la technologie pour servir notre métier.
        </p>
      </div>
      <div className="relative w-2/4 my-16 z-10">
        <div className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-xl h-full">
          <img src={dentiste} alt="logo" className="object-cover w-full h-full" />
        </div>
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-fuchsia-900 w-2/3 h-[5px] rounded-full"></span>
      </div>
      <img src={dent} alt="logo" className=" absolute bottom-10 left-10 object-cover w-3/6 h-52" />
      <span className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-slate-200  to-[#F5F5F5]"></span>
      <span className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-slate-200  to-[#F5F5F5]"></span>
    </div>
  )
}

export default PresidentSection
