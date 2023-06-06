import React from "react";
import { FaLinkedin, FaYelp } from "react-icons/fa";
const today = new Date();

const Footer = () => {
  return (
    <footer className="text-white bg-onyx text-2xl bg-black flex justify-center items-center py-5">
      <FaLinkedin className="bg-onyx" />
      <FaYelp className="bg-onyx" />
      <p className="_textShadow pl-2 bg-onyx text-parchment ml-5">
        HoveyRoofing Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
