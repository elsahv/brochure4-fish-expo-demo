import React from "react";
import ContactImg from "../images/contactImg.jpg";

const Contact = () => {
  return (
    <section className="h-screen md:flex flex-col justify-center items-center">
      <div className="mr-5 p-2">
        <ul className="text-2xl">
          <li className="font-bold text-3xl py-5">Contact HoveyRoofing</li>
          <li>Office: 909-798-0807</li>
          <li>Cell: 951-218-6090</li>
          <li>Email: hoveyroofing@aol.com</li>
        </ul>
      </div>
      <div className="my-10 drop-shadow-lg">
        <img src={ContactImg} alt="" className="universal-img" />
      </div>
    </section>
  );
};

export default Contact;
