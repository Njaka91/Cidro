import OfficeImg from "../components/OfficeImg";
import SectionPinkTitle from "../components/SectionPinkTitle";
import blocOpperatoire from "../assets/images/bloc_operatoire.jpg";
import { dataOffice } from "../data/DataOffice";

import TitleTexte from "../components/TitleTexte";

const Ofiice = () => {
  return (
    <>
      <TitleTexte
        title="Rencontrez nos praticiens"
        text="Chez CIDRO, nous avons réuni une équipe de praticiens passionnés et hautement qualifiés, chacun apportant une expertise unique
pour vous offrir des soins de la plus haute qualité. Leur engagement et leur expérience vous garantissent une prise en charge
personnalisée et des traitements adaptés à vos besoins."
      />
      {dataOffice.map((office, index) => (
        <OfficeImg
          key={index}
          img={office.img}
          nameFirstLine={office.nameFirstLine}
          nameSecondLine={office.nameSecondLine}
          title={office.title}
          diplome={office.diplome}
          description={office.description}
          positionImg={index % 2 !== 0 ? "flex-row" : "flex-row-reverse"}
        />
      ))}
      <TitleTexte
        title="Nos espaces de soins"
        text="Chez CIDRO, nous mettons à votre disposition des salles de soins modernes et spécialisées, chacune conçue pour offrir un environnement optimal en fonction des traitements."
      />
      <SectionPinkTitle
        img={blocOpperatoire}
        title="Salle de chirurgie (Bloc opératoire)"
        description1="Notre bloc opératoire est conçu pour réaliser des interventions chirurgicales complexes dans un environnement stérile et parfaitement contrôlé. Équipé des dernières technologies, il garantit à nos patients des soins sûrs et précis."
        description2="L'une de nos principales technologies est le Piezosurgery, un appareil de chirurgie ultrasonique utilisé pour des interventions osseuses délicates, notamment en implantologie et en parodontologie. Grâce à ses ultrasons, il permet des coupes précises dans l'os tout en minimisant les risques de dommages aux tissus mous environnants, améliorant ainsi la sécurité et le confort du patient."
        description3="Nous utilisons également un moteur d'implantologie de pointe, essentiel pour la pose d'implants dentaires. Cet équipement permet un contrôle précis de la vitesse et du couple pendant l'intervention, assurant une installation optimale et durable des implants, avec un maximum de confort pour le patient."
        positionImg="flex-row"
      />
    </>
  );
};

export default Ofiice;
