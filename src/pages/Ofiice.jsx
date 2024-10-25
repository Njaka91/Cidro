import OfficeImg from "../components/OfficeImg";
import SectionPinkTitle from "../components/SectionPinkTitle";
import blocOpperatoire from "../assets/images/bloc_operatoire.jpg";
import photeiull from "../assets/images/photeuillRazakatiana.jpg";
import radioPanoramique from "../assets/images/Radio_panoramique.jpg";
import SitrakaImg from "../assets/images/RazakatianaSitraka.jpg";
import { dataOffice } from "../data/DataOffice";
import { ddlmData } from "../data/ddlmData";

import TitleTexte from "../components/TitleTexte";
import EquipementImage from "../components/EquipementImage";
import { surgeryRoomData } from "../data/surgeryRoomData";
import { DentistryRoomData } from "../data/DentistryRoomData";
import CarousselImage from "../components/CarousselImage";
import { ddlmImageData } from "../data/ddlmImageData";

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

      <EquipementImage data={surgeryRoomData} />

      <SectionPinkTitle
        img={photeiull}
        title="Salle de dentisterie générale"
        description1="Notre salle de dentisterie générale est conçue pour offrir des soins courants avec une grande précision et en toute sécurité. La stérilisation des instruments est assurée grâce à deux autoclaves de classe B, garantissant une hygiène parfaite."
        description2="Nous utilisons une machine de nettoyage et de lubrification pour les pièces à main dentaires, comme les turbines, afin de garantir leur bon fonctionnement et leur durabilité tout en respectant des normes d'hygiène strictes."
        description3="La salle est équipée d'un endomoteur, un appareil utilisé pour les traitements des racines dentaires. II permet un contrôle précis du mouvement et de la force, garantissant des interventions sûres et efficaces."
        description4="Un appareil de radiographie rétro-alvéolaire (radio RVG) est également disponible, permettant de prendre des images précises directement au fauteuil, ce qui facilite des diagnostics rapides et fiables sans besoin de déplacer le patient."
        positionImg="flex-row-reverse"
      />

      <EquipementImage data={DentistryRoomData} />

      <SectionPinkTitle
        img={radioPanoramique}
        title="Salle de Radiographie panoramique CCBT"
        description1="Notre salle de radiographie panoramique est spécialement équipée pour réaliser des examens d'imagerie complète de la mâchoire et des structures dentaires. Cet espace est conçu pour offrir un diagnostic précis et rapide, tout en garantissant le confort du patient."
        description2="Le dispositif de radiographie panoramique permet de capturer des images détaillées des dents, des mâchoires et des sinus, en une seule prise. Cette technologie avancée est particulièrement utile pour planifier des traitements tels que l'implantologie, l'orthodontie ou encore la chirurgie dentaire. Grâce à cette vue d'ensemble, nos praticiens peuvent évaluer l'état des dents et des os maxillaires avec une précision exceptionnelle."
        description3="L'examen est rapide, non-invasif, et offre des résultats immédiats, permettant ainsi un diagnostic rapide et une prise en charge efficace des soins."
        positionImg="flex-row"
      />

      <TitleTexte
        title="DDLM"
        text="Le cabinet CIDRO collabore étroitement avec le laboratoire Digital Dental Lab Madagasikara, un laboratoire de prothèse dentaire entièrement numérique"
      />

      <SectionPinkTitle
        img={SitrakaImg}
        title="Laboratoire de prothèse dentaire"
        description1="Dirigé par M. Sitraka Razakatiana, gérant du DDLM reconnu pour son expertise et son savoir-faire. Spécialisé dans la fabrication de prothèses dentaires de haute qualité, le DDLM utilise des technologies de pointe pour créer des produits en 100% Zircone, un matériau reconnu pour sa durabilité, sa résistance et son esthétique naturelle."
        description2="Grâce à cette collaboration, nous sommes en mesure de proposer à nos patients des solutions prothétiques précises et adaptées, alliant confort et excellence esthétique. Le processus entièrement digitalisé du DDLM garantit une fabrication rapide et précise, assurant ainsi des résultats de qualité supérieure pour chaque patient."
        positionImg="flex-row"
      />

      <EquipementImage data={ddlmData} />

      <div className="pt-10 text-center
      md:px-32 
      ">
        <h1 className="text-2xl font-extrabold mb-3 md:text-5xl text-fuchsia-900">Esthétique, Confort et Discrétion</h1>
        <p>Prothèses Dentaires 100% Zircone, Gouttières Invisibles et Gouttières de Blanchiment</p>
      </div>

      <CarousselImage images={ddlmImageData} />
    </>
  );
};

export default Ofiice;
