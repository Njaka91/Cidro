import image1 from "../../assets/images/Formation/image1.webp"
import image2 from "../../assets/images/Formation/image2.webp"
import image3 from "../../assets/images/Formation/image3.webp"
import image4 from "../../assets/images/Formation/image4.webp"
const FormationPicsTopDisplay = () => {
  const images = [image1, image2, image3, image4]
  return (
    <div className="flex flex-row gap-4 justify-center items-center mt-14 px-4 
    md:px-8 
    lg:px-24 
    xl:px-32">
     { images.map((src, key) => (
        <div key={key} className="h-72">
        <img  className="w-full h-full object-cover object-center rounded-2xl"  src={src} alt="Formation implantologie" />
        </div>))}
    </div>
  )
}

export default FormationPicsTopDisplay
