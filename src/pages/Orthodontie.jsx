import OfficeImg from "../components/OfficeImg"
import SmileCareTitle from "../components/SmileCareTitle"
import TitleTexte from "../components/TitleTexte"
import gouttiere_invisible from "../assets/images/Nos soins/Orthodontie/gouttière_invisible.png";

export const Orthodontie = () => {
  return (
    <>
    <TitleTexte
        title="Retrouver le sourire"
        text="L'orthodontie est une spécialité qui corrige l'alignement de vos dents et de votre mâchoire, pour un sourire harmonieux et une meilleure santé bucco-dentaire. Chez CIDRO, nous offrons des solutions orthodontiques personnalisées, adaptées à chaque patient pour des résultats efficaces et durables."
    />


    <SmileCareTitle
      p="Orthodontie"
      description="Sourires alignés, confiance retrouvée."
    /> 

    <OfficeImg
        img={gouttiere_invisible}
        nameFirstLine="Gouttières invisibles"
        description="Pour les adultes, nous offrons des solutions d'alignement dentaire avec des gouttières transparentes amovibles, une alternative discrète aux appareils orthodontiques traditionnels. Ces gouttières invisibles permettent de corriger l'alignement des dents sans compromettre l'esthétique du sourire."
        description2="Ces appareils, fabriqués sur mesure à partir d'empreintes numériques, garantissent un ajustement parfait, assurant un traitement efficace et confortable. La technologie numérique permet une grande précision pour obtenir des résultats optimaux."
        positionImg="flex-row-reverse"
      />
    
    </>
  )
}
