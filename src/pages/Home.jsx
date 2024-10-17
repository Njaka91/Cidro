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
        description1="Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book."
        description2="It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged."
        description3="It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus
PageMaker including versions of Lorem Ipsum."
        positionImg="flex-row"
      />
      <PresidentCart />
      <FirmHistory />
      <WelcomeSection/>

      {/* <Team/> */}
    </>
  );
};

export default Home;
