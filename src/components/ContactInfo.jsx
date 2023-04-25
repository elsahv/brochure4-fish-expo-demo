import React from "react";
import ContactImg from "../images/contactImg.jpg";

const Contact = () => {
  return (
    <section className="bg-sky-200 flex justify-center items-center">
      <div className="bg-black text-white mr-5 p-2">
        <ul>
          <li className="font-bold">Contact HoveyRoofing</li>
          <li>Office: 909-798-0807</li>
          <li>Cell: 951-218-6090</li>
          <li>Email: hoveyroofing@aol.com</li>
        </ul>
      </div>
      <div className="my-10">
        <img src={ContactImg} alt="" />
      </div>
    </section>
  );
};

export default Contact;
