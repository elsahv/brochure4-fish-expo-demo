import React from "react";
import content from "./data";

const RoofStyles = () => {
  return (
    <section className="">
      <h2 className="flex justify-center mt-5 pt-[70px] text-2xl font-bold">
        We offer many styles for the roof that you need
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
    </section>
  );
};

export default RoofStyles;
