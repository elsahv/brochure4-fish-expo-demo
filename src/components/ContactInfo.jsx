import React from "react";
import ContactImg from "../images/contactImg.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
      className="bg-parchment h-screen flex 2xl:flex-row flex-col justify-center
      items-center"
    >
      <div className="_textShadow text-parchment bg-onyx mr-5 md:p-5 p-1">
        <ul className="md:text-4xl text-2xl">
          <li className="font-bold md:text-5xl text-3xl pb-5">
            Contact HoveyRoofing
          </li>
          <li>Office: 909-798-0807</li>
          <li>Cell: 951-218-6090</li>
          <li>Email: hoveyroofing@aol.com</li>
        </ul>
      </div>
      <div className="my-10 drop-shadow-lg">
        <img src={ContactImg} alt="" className="universal-img" />
      </div>
    </motion.section>
  );
};

export default Contact;
