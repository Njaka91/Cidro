import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Stubborn from "./Stubborn";
import NavBar from "./NavBar";
import StubbornImg from "./StubbornImg";
import AppointmentBottom from "./AppointmentBottom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import bgimg from "../assets/images/photeuillRazakatiana - Copie.jpg";
import implant from "../assets/images/Nos soins/Implantologie/implant_dentaire.png";
import orthodont from "../assets/images/Nos soins/Orthodontie/orthodontie_cidro.png";
import chirurgieOrale from "../assets/images/Nos soins/Chirurgie dentaire/Chir_orale.png";
import dentisterieGenerale from "../assets/images/Nos soins/Dentisterie générale/dentisterie_CIDRO.jpg";
import Button from "./Button"


const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let imgBg = bgimg

  switch (pathname) {
    case "/" : imgBg = bgimg; break;
    case "/implantologie" : imgBg = implant; break;
    case "/orthodontie" : imgBg = orthodont; break;
    case "/chirurgie-orale" : imgBg = chirurgieOrale; break;
    case "/dentisterie-generale" : imgBg = dentisterieGenerale; break;
    default : imgBg = bgimg; break;
  }

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
