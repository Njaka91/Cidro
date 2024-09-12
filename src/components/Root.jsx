import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Stubborn from "./Stubborn"
import NavBar from "./NavBar"
import StubbornImg from "./StubbornImg"

const Root = () => {
  return (
    <>
      <Stubborn/>
      <NavBar/>
      <StubbornImg/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root
