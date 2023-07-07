import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/ContactInfo";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
