import TitleTexte from "./TitleTexte";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_image from "../assets/images/accueil.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/bullet.css"

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const WelcomeSection = () => {
  const images = [
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
    slide_image,
  ];
  const title = "Bienvenue chez CIDRO";
  const text =
    "Notre équipe vous accueille dans un cadre moderne et chaleureux, combinant expertise et technologie pour offrir des soins de qualité, du contrôle de routine aux traitements complexes.";

  return (
    <div>
      <TitleTexte title={title} text={text} />
      <div
        className="relative py-10 px-6 xl:px-32 
      mx-auto md:px-8 
      lg:px-24 "
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 250,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className=" "
          breakpoints={{
            640: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} >
              <img
                src={image}
                alt="slide_image"
                className="rounded-2xl object-cover w-[720px] h-[24rem]"
              />
            </SwiperSlide>
          ))}

         

        </Swiper>

        <div className="custom-prev bg-fuchsia-900 text-white p-3 bg-opacity-50 md:bg-opacity-100  rounded-full absolute top-1/2 left-1 md:left-4 lg:left-10 xl:left-16 z-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
              ></path>
            </svg>
          </div>
          <div className="custom-next bg-fuchsia-900 text-white p-3 rounded-full bg-opacity-50 md:bg-opacity-100 absolute top-1/2 right-1 md:right-4 lg:right-10 xl:right-16 z-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
              ></path>
            </svg>
          </div>
          <div className="swiper-pagination z-10"></div>

      </div>
      <div
        className="flex flex-col text-center text-[#1B2C51]
      md:px-8 
      lg:px-24 
      xl-px-32"
      >
        <span className="text-xl font-extrabold mt-6">
          Nos heures d&apos;ouverture
        </span>
        <div className="flex flex-row md:gap-12 justify-center mt-4 mb-10">
          <span>Du lundi au vendredi : 8h à 17h30</span>
          <span>Samedi : 8h à 15h30</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
