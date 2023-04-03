import React from "react";
import About from "./components/sections/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import RoofStyles from "./components/sections/RoofStyles";
import Contact from "./components/sections/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <RoofStyles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
