import React from "react";
import content from "./data";
import { motion } from "framer-motion";

const RoofStyles = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className=""
      id="roof-styles"
    >
      <h2 className="text-onyx flex justify-center text-2xl font-bold px-5">
        We offer many styles for the roof that you need!
      </h2>
      <div className="flex justify-center">
        <div className="2xl:px-[150px] px-5 grid gap-10 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                className="universal-img"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RoofStyles;
