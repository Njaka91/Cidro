import TitleTexte from "../components/TitleTexte";
import OfficeImg from "../components/OfficeImg";
import implant_unitaire from "../assets/images/Nos soins/Implantologie/Implant-unitaire.png";
import implant_plural from "../assets/images/Nos soins/Implantologie/Bridge-dentaire.png";
import implant_all from "../assets/images/Nos soins/Implantologie/All-on-6-dental-Implants.png";
import SmileCareTitle from "../components/SmileCareTitle";

const Implantology = () => {
  return (
    <>
      <TitleTexte
        title="Retrouver le sourire"
        text="L'implantologie est une spécialité qui permet de restaurer vos dents manquantes de manière durable et esthétique. Chez CIDRO, nous proposons plusieurs types d'implants adaptés à vos besoins dentaires spécifiques"
      />

      <SmileCareTitle
      p="implantologie"
      description="La solution fiable pour un sourire éclatant et durable."
      /> 

      <OfficeImg
        img={implant_unitaire}
        nameFirstLine="Implant Unitaire"
        description="Un implant unitaire est utilisé pour remplacer une seule dent manquante. L'implant en titane sert de racine artificielle, sur laquelle est fixée une couronne en céramique ou en porcelaine, ajustée à votre sourire naturel."
        description2="Ce type d'implant offre une solution esthétique et fonctionnelle, vous permettant de retrouver une dentition harmonieuse et solide."
        positionImg="flex-row-reverse"
      />

      <OfficeImg
        img={implant_plural}
        nameFirstLine="Implant Plural"
        description="Pour les patients ayant plusieurs dents manquantes, nous proposons des solutions avec implants pluraux, De 2 à 1O implants peuvent être posés pour supporter un bridge dentaire, une structure remplaçant plusieurs dents adjacentes. Cette méthode permet de restaurer une partie de la dentition avec moins d'implants que S'il fallait un implant pour chaque dent."
        positionImg="flex-row"
      />

      <OfficeImg
        img={implant_all}
        nameFirstLine="All-on-4 ou All-on-6"
        description="Les solutions All-on-4 ou All-on-6 sont idéales pour les patients ayant perdu toutes leurs dents sur une mâchoire. Ces techniques impliquent la pose de 4 ou 6 implants pour soutenir une prothèse dentaire complète. Ces systèmes offrent une solution fixe et durable, restaurent entièrement la fonction masticatoire et l'esthétique du sourire."
        diplome={[
            "All-on-4 : 4 implants suffisent pour soutenir une prothèse complète pour une mâchoire.",
            "All-on-6 : Cette option utilise 6 implants pour plus de stabilité. Offrant une solution plus robuste pour un soutien accru."]}
        positionImg="flex-row-reverse"
      />
    </>
  );
};

export default Implantology;
