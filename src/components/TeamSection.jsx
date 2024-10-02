import { dataTeam } from "../data/DataTeam";
import ImageTeam from "../components/ImageTeam";

const TeamSection = () => {
  return (
    <div>
      {dataTeam.map((team, index) => (
        <ImageTeam 
          key={index} 
          name={team.name}
          lastName={team.lastName}
          profession={team.profession}
          description={team.description}
          img={team.image}
          positionImg={index % 2 !== 0 ? "flex-row" : "flex-row-reverse"}
        />
      ))}
    </div>
  );
};

export default TeamSection;
