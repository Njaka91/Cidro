import bgimg from "../assets/images/bgimg.jpeg"

const StubbornImg = () => {
  return (
    <div className="relative overflow-hidden h-[450px] bg-slate-600">
      <img src={bgimg} alt="logo" className="object-cover w-full h-full"/>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-4/5 w-4/5 rounded-full bg-teal-700 opacity-50 blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full bg-teal-700 opacity-20"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-7xl font-bold text-white">Cabinet du Dr Razakatiana</div>
      </div>
    </div>
  )
}

export default StubbornImg
