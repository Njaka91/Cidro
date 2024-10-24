import TitleTexte from "./TitleTexte";
import slide_image1 from "../assets/images/Image caroussel/Dr_Allain_patient.jpg"
import slide_image2 from "../assets/images/Image caroussel/Dr_Allain.jpg"
import slide_image3 from "../assets/images/Image caroussel/Dr_Tsiaro1.jpg"
import slide_image4 from "../assets/images/Image caroussel/Dr_Tsiaro.jpg"
import slide_image5 from "../assets/images/Image caroussel/Poste_Dr_Allain.png"
import slide_image6 from "../assets/images/Image caroussel/Post_Dr_Tsiaro.jpg"
import slide_image7 from "../assets/images/Image caroussel/Deco_cidro.jpg"
import slide_image8 from "../assets/images/Image caroussel/Implantologie_cidro.jpg"
import slide_image9 from "../assets/images/Image caroussel/Le_cabinet.jpg"
import CarousselImage from "./CarousselImage";

const WelcomeSection = () => {
  const images = [
    {src : slide_image1 , alt : "Dr Allain patient"},
    {src : slide_image2 , alt : "Dr Allain"},
    {src : slide_image3 , alt : "Dr Tsiaro1"},
    {src : slide_image4 , alt : "Dr Tsiaro"},
    {src : slide_image5 , alt : "Poste dr Allain"},
    {src : slide_image6 , alt : "Post dr tsiaro"},
    {src : slide_image7 , alt : "Cidro deco mural"},
    {src : slide_image8 , alt : "implantologie cidrot"},
    {src : slide_image9 , alt : "cidro et ddlm"},
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
