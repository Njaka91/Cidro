import PresidentSection from "../components/PresidentSection";
import FirmHistory from "../components/FirmHistory";
import KeyMetricsSection from "../components/KeyMetricsSection";
import OfficeImg from "../components/OfficeImg";
import initiateur from "../assets/images/initiateur.jpg";
import WelcomeSection from "../components/WelcomeSection";

// import Team from "../components/Team"

const Home = () => {
  return (
    <>
      <PresidentSection />
      <KeyMetricsSection />
      <OfficeImg
        img={initiateur}
        title="Initiateur des cercles scientifiques"
        description="Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book."
        positionImg="flex-row"
      />
      <FirmHistory />
      <WelcomeSection/>

      {/* <Team/> */}
    </>
  );
};

export default Home;
