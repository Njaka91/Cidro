import ImageTeam from "./ImageTeam";
import ImageTeamLeft from "./ImageTeamLeft";
import img from "../assets/images/Dr Allain.png";
import img3 from "../assets/images/Dr2.jpg";
import img2 from "../assets/images/Dr3.jpg";
import img4 from "../assets/images/Dr4.jpg";


const TeamSection = () => {
  const dataRight = [
    {
      name: "Dr Allain",
      lastName: "RAZAKATIANA",
      profession: "Chirurgien dentiste",
      description:
        "Chirurgien dentiste diplômé de l'Université de Bordeaux II en biomateriaux et système implantable, spécialiste et pionnier de l'implantologie à Madagascar depuis 22 ans",
      image: img,
    },
    {
      name: "Dr Bernard",
      lastName: "ANDRIANA",
      profession: "Cardiologue",
      description: "Cardiologue spécialisé dans les maladies coronariennes.",
      image: img2,
    },
  ];

  const dataLeft = [
    {
      nameLeft: "Dr Marie",
      lastNameLeft: "RAZANAMANANA",
      professionLeft: "Pédiatre",
      descriptionLeft:
        "Pédiatre spécialiste des soins intensifs pour enfants.",
      image: img3,
    },
    {
      nameLeft: "Dr Michel",
      lastNameLeft: "RAMANANA",
      professionLeft: "Psychologue",
      descriptionLeft:
        "Psychologue clinicien, spécialisé en psychothérapie pour adolescents.",
      image: img4,
    },
  ];

  // Longueur maximale pour parcourir les deux tableaux
  const maxLength = Math.max(dataRight.length, dataLeft.length);

  return (
    <div>
      {/* Boucle pour alterner entre les composants de droite et de gauche */}
      {Array.from({ length: maxLength }).map((_, index) => {

        return (
          <div key={index}>
            {/* Composant à droite */}
            {index < dataRight.length && (
              <div>
                <ImageTeam
                  name={dataRight[index].name}
                  lastName={dataRight[index].lastName}
                  profession={dataRight[index].profession}
                  description={dataRight[index].description}
                  img={dataRight[index].image}
                />
              </div>
            )}

            {/* Composant à gauche */}
            {index < dataLeft.length && (
              <div>
                <ImageTeamLeft
                  nameLeft={dataLeft[index].nameLeft}
                  lastNameLeft={dataLeft[index].lastNameLeft}
                  professionLeft={dataLeft[index].professionLeft}
                  descriptionLeft={dataLeft[index].descriptionLeft}
                  imgLeft={dataLeft[index].image}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamSection;
