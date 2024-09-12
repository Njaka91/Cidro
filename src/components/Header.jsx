import NavBar from "./NavBar"
import Stubborn from "./Stubborn"
import StubbornImg from "./StubbornImg"

const Header = () => {
  return (
    <div className="flex flex-col ">
      <Stubborn/>
      <NavBar/>
      <StubbornImg/>
    </div>
  )
}

export default Header
