import OfficeImg from "../components/OfficeImg"
import SmileCareTitle from "../components/SmileCareTitle"
import TitleTexte from "../components/TitleTexte"
import ds_enclavee from "../assets/images/Nos soins/Chirurgie dentaire/dent-sagesse_enclavée.png";


export const OralSergery = () => {
  return (
    <>

      <TitleTexte
        title="Retrouver le sourire"
        text="La chirurgie orale est une spécialité qui traite les pathologies de la bouche, des dents et des mâchoires, pour rétablir votre santé bucco-dentaire. Chez CIDRO, nous réalisons divers types d'interventions chirurgicales, adaptées à vos besoins spécifiques, afin de garantir des résultats sûrs et durables."
      />

      <SmileCareTitle
      p="Chirurgie orale"
      description="Des soins précis pour un sourire en pleine santé."
      /> 

      <OfficeImg
        img={ds_enclavee}
        nameFirstLine="Interventions"
        nameSecondLine="chirurgicales"
        description="Spécialisée dans les interventions chirurgicales dentaires, notre clinique prend en charge les extractions dentaires complexes, notamment celles des dents incluses, pour prévenir les complications liées à leur croissance. Chaque procédure est réalisée dans des conditions optimales de sécurité et de confort."
        description2="Nous prenons en charge l'extraction des dents incluses, comme les canines et dents de sagesse, qui peuvent causer douleurs, infections ou déplacements dentaires. Ces extractions visent à préserver la santé bucco-dentaire à long terme."
        positionImg="flex-row-reverse"
      />
    </>
  )
}
