import React from "react";
import content from "./data";
import { motion } from "framer-motion";

const RoofStyles = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      id="fish-gallery"
    >
      <h2 className="text-onyx flex justify-center text-2xl font-bold px-5">
        Many fishy sites to see!
      </h2>
      <div className="flex justify-center">
        <div className="2xl:px-[150px] px-5 grid gap-1 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                className="w-[650px] h-[350px] universal-img"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RoofStyles;
