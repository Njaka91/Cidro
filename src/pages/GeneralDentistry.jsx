import OfficeImg from "../components/OfficeImg"
import SmileCareTitle from "../components/SmileCareTitle"
import TitleTexte from "../components/TitleTexte"
import orthodontie_reneral from "../assets/images/Nos soins/Dentisterie générale/Odontoligia-geral.png";
import orthodontie_renerale from "../assets/images/Nos soins/Dentisterie générale/dentisterie_générale.png";
import protege from "../assets/images/Nos soins/Dentisterie générale/prothèse_dentaire.jpg";


export const GeneralDentistry = () => {
  return (
    <>
    <TitleTexte
        title="Retrouver le sourire"
        text="L'implantologie est une spécialité qui permet de restaurer vos dents manquantes de manière durable et esthétique. Chez CIDRO, nous proposons plusieurs types d'implants adaptés à vos besoins dentaires spécifiques"
      />

      <SmileCareTitle
      p="Dentisterie générale"
      description="La solution fiable pour un sourire éclatant et durable."
      /> 

      <OfficeImg
        img={orthodontie_reneral}
        nameFirstLine="Soins conservateurs"
        description="Notre équipe assure des soins conservateurs pour maintenir la santé de vos dents et gencives, en prévenant et traitant les caries avant qu'elles ne deviennent plus graves. Ces soins permettent de préserver la structure naturelle de vos dents et d'assurer leur longévité"
        positionImg="flex-row-reverse"
      />

      <OfficeImg
        img={orthodontie_renerale}
        nameFirstLine="Parodontologie"
        description="Nos services incluent également la parodontologie, se concentrant sur le soin des gencives et le traitement des maladies parodontales. En plus du détartrage, nous offrons des traitements avancés pour prévenir la perte osseuse et préserver la santé des gencives."
        positionImg="flex-row"
      />

      <OfficeImg
        img={protege}
        nameFirstLine="Prothèses dentaires"
        description="Enfin, nous proposons des prothèses dentaires pour remplacer les dents manquantes, qu'il s'agisse de prothèses amovibles ou fixées. Ces solutions restaurent la fonctionnalité et l'esthétique de votre sourire de manière durable."
        positionImg="flex-row-reverse"
      />

    </>
  )
}
