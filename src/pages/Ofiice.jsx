
import OfficeImg from "../components/OfficeImg"
import { dataOffice } from "../data/DataOffice"

const Ofiice = () => {
  return (
    <>
      {dataOffice.map((office, index) => (
        <OfficeImg
          key={index}
          img={office.img}
          title={office.title}
          description={office.description}
          positionImg={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
        />
      ))}
    </>
    
  )
}

export default Ofiice
