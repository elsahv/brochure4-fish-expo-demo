import React from "react";
import { FaLinkedin, FaYelp } from "react-icons/fa";
const today = new Date();

const Footer = () => {
  return (
    <footer className="md:text-2xl text-md text-onyx flex justify-center items-center py-5 border border-t-onyx">
      <FaLinkedin className="" />
      <FaYelp className="" />
      <p className="pl-2 ml-5">Fish Expo &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
