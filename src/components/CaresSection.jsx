import ImageCareLeft from "./ImageCareLeft";
import img from "../assets/images/cabinet_dentaire.jpg";

const CaresSection = () => {
  const data = [
    {
      tilte: "Implants",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: img,
      prix: [
        { prix1: "20 000 Ariary" },
        { prix2: "300 000 ariary" },
        { prix3se: "400 000 ariary" },
        { prix: "40 000 ariary" },
        { prix32: "40 000 ariary" },
        { prix35: "40 000 ariary" },
        { prix312: "40 000 ariary" },
        { prix34: "40 000 ariary" },
        { prix3: "40 000 ariary" },
        { prix3d: "40 000 ariary" },
      ],
    },
    {
      tilte: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: img,
      prix: [
        { prix1: "20 000 Ariary" },
        { prix2: "30 000 ariary" },
        { prix3se: "40 000 ariary" },]
    },
    {
      tilte: "Implants dentaires",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: img,
      prix: [
        { prix1: "20 000 Ariary" },]
    },
    {
      tilte: "RAZAKATIANA",
      description: "Chirurgien dentiste",
      image: img,
      prix: [
        { prix1: "20 000 Ariary" },
        { prix2: "30 000 ariary" },
        { prix3se: "40 000 ariary" },
        { prix2: "30 000 ariary" },
        { prix3se: "40 000 ariary" },]
    },
  ];

  return (
    <>
       {data.map((item, index) => (
        <ImageCareLeft
          key={index}
          tilte={item.tilte}
          description={item.description}
          img={item.image}
          prix={item.prix}
          modalId={`modal-${index}`} 
        />
      ))}
    </>
  );
};

export default CaresSection;
