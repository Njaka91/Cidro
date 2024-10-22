import OfficeImg from "../components/OfficeImg";
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
          name={office.name}
          title={office.title}
          description={office.description}
          positionImg={index % 2 !== 0 ? "flex-row" : "flex-row-reverse"}
        />
      ))}
    </>
  );
};

export default Ofiice;
