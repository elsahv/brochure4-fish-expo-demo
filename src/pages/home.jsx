import Hero from "../components/Hero";
import AboutContent from "../components/About";
import Gallery from "../components/Gallery";
import ContactInfo from "../components/ContactInfo";

const HomePage = () => {
  return (
    <div className="bg-parchment">
      <Hero />
      <AboutContent />
      <Gallery />
      <ContactInfo />
    </div>
  );
};

export default HomePage;
