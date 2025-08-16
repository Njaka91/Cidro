import FormationPicsTopDisplay from "../common/FormationPicsTopDisplay"
import TitleTexte from "../TitleTexte"
import { images } from "../../data/FormationPics"


const FormationPics = () => {
  const pics = Object.entries(images)
  return (
    <div className="">
      <TitleTexte title="FORMATION COMPLÈTE EN IMPLANTOLOGIE ORALE" text="
      Collaboration entre CFCDA (Centre de Formation Continue Dentaire d'Antananarivo) et SMIRO (Société Malagasy d'Implantologie et de Réhabilitation Orale)"/>
      <FormationPicsTopDisplay pics={pics}/>
    </div>
  )
}

export default FormationPics
