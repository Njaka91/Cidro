import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Stubborn from "./Stubborn";
import NavBar from "./NavBar";
import StubbornImg from "./StubbornImg";
import AppointmentBottom from "./AppointmentBottom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import bgimg from "../assets/images/photeuillRazakatiana - Copie.jpg";
import bgimg2 from "../assets/images/cabinet_dentaire.jpg";
import Button from "./Button"


const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const imgBg = pathname === "/" ? bgimg : bgimg2;

  return (
    <>
      <Stubborn />
      <NavBar />
      <StubbornImg imgBg={imgBg} />
      <Outlet />
      {pathname !== "/prendre-rendez-vous" && <AppointmentBottom />}
      {pathname !== "/prendre-rendez-vous" && <Button/>}
      <Footer />
    </>
  );
};

export default Root;
