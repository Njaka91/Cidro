import LightGallery from "lightgallery/react"
import lgZoom from "lightgallery/plugins/zoom"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

import { images } from "../../data/FormationPics"

const FormationPicsTopDisplay = () => {
  const pics = Object.entries(images)

  return (
    <div className="mt-14 px-4 md:px-8 lg:px-24 xl:px-32">
      {pics.map(([key, data]) => (
        <LightGallery
          key={key}
          plugins={[lgZoom]}
          elementClassNames="flex flex-col gap-4 mt-6 justify-center items-center 
            h-auto 
            md:flex-row md:h-40 
            xl:h-72"
        >
          {Object.entries(data).map(([imageKey, src]) => (
           
              <img
              key={imageKey}
                className="
                  w-full max-w-xs sm:max-w-52 
                  lg:max-w-72 xl:max-w-96 
                  h-48 md:h-full 
                  object-cover object-center rounded-2xl
                  cursor-pointer
                "
                src={src}
                alt="Formation implantologie"
              />
            
          ))}
        </LightGallery>
      ))}
    </div>
  )
}

export default FormationPicsTopDisplay
