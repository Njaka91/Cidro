import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Stubborn from "./Stubborn"
import NavBar from "./NavBar"
import StubbornImg from "./StubbornImg"
import AppointmentBottom from "./AppointmentBottom"

const Root = () => {
  return (
    <>
      <Stubborn/>
      <NavBar/>
      <StubbornImg/>
      <Outlet/>
      <AppointmentBottom/>
      <Footer/>
    </>
  )
}

export default Root
