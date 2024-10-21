import PresidentSection from "../components/PresidentSection";
import FirmHistory from "../components/FirmHistory";
import KeyMetricsSection from "../components/KeyMetricsSection";
import SectionPinkTitle from "../components/SectionPinkTitle";
import initiateur from "../assets/images/initiateur.jpg";
import PresidentCart from "../components/PresidentCart";
import WelcomeSection from "../components/WelcomeSection";

// import Team from "../components/Team"

const Home = () => {
  return (
    <>
      <PresidentSection />
      <KeyMetricsSection />
      <SectionPinkTitle
        img={initiateur}
        title="Initiateur des cercles scientifiques"
        description1="Le Dr. Allain RAZAKATIANA est un pionnier de l'implantologie dentaire à Madagascar. Il a initié des cercles scientifiques pour favoriser l'échange de connaissances et l'innovation dans ce domaine."
        description2="Ces cercles rassemblent des experts en implantologie dentaire afin de partager les avancées technologiques et médicales, améliorant les pratiques et la formation continue des professionnels de santé."
        description3="Grâce à ses initiatives, le Dr. Allain RAZAKATIANA a sensibilisé la communauté médicale à l'importance de l'ostéointégration et de l'utilisation du titane, contribuant à améliorer les soins dentaires à Madagascar."
        positionImg="flex-row"
      />
      <PresidentCart />
      <FirmHistory />
      <WelcomeSection />

      {/* <Team/> */}
    </>
  );
};

export default Home;
