import TitleTexte from "./TitleTexte";
import slide_image from "../assets/images/accueil.jpg";
import CarousselImage from "./CarousselImage";

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
      <CarousselImage images ={images}/>
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
