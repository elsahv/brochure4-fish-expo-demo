import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/ContactInfo";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
