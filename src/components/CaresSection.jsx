import ImageCareLeft from "./ImageCareLeft";
import ImagesCareRight from "./ImagesCareRight";
import img from "../assets/images/cabinet_dentaire.jpg";

const CaresSection = () => {
  const dataRight = [
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
  ];

  const dataLeft = [
    {
      tilteLeft: "Implants dentaires",
      descriptionLeft:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: img,
      prix: [
        { prix1: "20 000 Ariary" },]
    },
    {
      tilteLeft: "RAZAKATIANA",
      descriptionLeft: "Chirurgien dentiste",
      image: img,
      prix: [
        { prix1: "20 000 Ariary" },
        { prix2: "30 000 ariary" },
        { prix3se: "40 000 ariary" },
        { prix2: "30 000 ariary" },
        { prix3se: "40 000 ariary" },]
    },
  ];

  const maxLength = Math.max(dataRight.length, dataLeft.length);

  return (
    <div>
      {Array.from({ length: maxLength }).map((_, index) => {
        return (
          <div key={index}>
            {/* Composant à droite */}
            {index < dataRight.length && (
              <div>
                <ImageCareLeft
                  tilte={dataRight[index].tilte}
                  description={dataRight[index].description}
                  img={dataRight[index].image}
                  prix={dataRight[index]?.prix}
                  modalId={`modal_right_${index}`}
                />
              </div>
            )}

            {/* Composant à gauche */}
            {index < dataLeft.length && (
              <div>
                <ImagesCareRight
                  tilteLeft={dataLeft[index].tilteLeft}
                  descriptionLeft={dataLeft[index].descriptionLeft}
                  imgLeft={dataLeft[index].image}
                  prix={dataLeft[index]?.prix}
                  modalId={`modal_left_${index}`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CaresSection;
