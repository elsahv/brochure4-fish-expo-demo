import Hero from "../components/Hero";
import AboutContent from "../components/About";
import Gallery from "../components/Gallery";
import ContactInfo from "../components/ContactInfo";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="2xl:pt-[900px] md:pt-[1200px] sm:pt-[1600px]">
        <AboutContent />
        <Gallery />
        <ContactInfo />
      </div>
    </div>
  );
};

export default HomePage;
