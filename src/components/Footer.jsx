import React from "react";
import { FaLinkedin, FaYelp } from "react-icons/fa";
const today = new Date();

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-teal-700 p-2">
      <FaLinkedin />
      <FaYelp />
      <p className="pl-2">
        HoveyRoofing Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
