import CardEquipementImage from "./CardEquipementImage";


/* eslint-disable react/prop-types */
const EquipementImage = ({ data }) => {
    

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {data.map((item, index) => (
                <CardEquipementImage
                    key={index}
                    image={item.img}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default EquipementImage;
