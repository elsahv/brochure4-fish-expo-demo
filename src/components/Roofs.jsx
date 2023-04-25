import React from "react";
import Gallery1 from "../images/gallery1.jpg";
import Gallery2 from "../images/gallery2.jpg";
import Gallery3 from "../images/gallery3.jpg";
import Gallery4 from "../images/gallery4.jpg";
import Gallery5 from "../images/gallery5.jpg";

const RoofStyles = () => {
  return (
    <section className="bg-red-200 ">
      <h2 className="flex justify-center p-5">
        We offer many styles for the roof that you need
      </h2>
      <div className="bg-red-300 flex justify-center">
        <div className="grid gap-4 grid-cols-2 py-5 my-5">
          {/* <div> */}
          <img src={Gallery1} alt="" width="400" height="200" />
          {/* </div> */}
          {/* <div> */}
          <img src={Gallery2} alt="" width="400" height="200" />
          {/* </div> */}
          {/* <div> */}
          <img src={Gallery3} alt="" width="400" height="200" />
          {/* </div> */}
          {/* <div> */}
          <img src={Gallery4} alt="" width="400" height="200" />
          {/* </div> */}
          {/* <div> */}
          <img src={Gallery5} alt="" width="400" height="200" />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default RoofStyles;
