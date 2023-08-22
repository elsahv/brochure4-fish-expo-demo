import React from "react";
import ContactImg from "../assets/shark.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className=" h-screen flex 2xl:flex-row flex-col justify-center
      items-center"
    >
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mr-5 md:p-5 p-1"
      >
        <ul id="contact" className="text-onyx text-2xl">
          <li className="text-black font-bold md:text-5xl text-3xl pb-5">
            Contact Fish Expo
          </li>
          {/* <li className="">instagram</li>
          <li className="">facebook</li> */}
          <li className="mb-2">Email: fishexpoexample@gmail.com</li>
          <li className="mb-2">Address: Madeup Site 3030, City, State</li>
          <li className="mb-2">Phone: 1-800-dial-a-fish</li>
        </ul>
      </motion.div>
      <motion.div className="my-10 drop-shadow-lg p-5">
        <motion.img
          initial={{
            x: 400,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={ContactImg}
          alt=""
          className="universal-img h-[700px] w-[500px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
