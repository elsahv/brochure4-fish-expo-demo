import React from "react";
import AboutImg from "../images/aboutImg.jpg";

const About = () => {
  return (
    <section className="2xl:h-screen sm:h-[100%] py-5 px-4 mt-1000 ">
      <div className="flex 2xl:flex-row sm:flex-col justify-center  mt-[150px] bg-test">
        <div className="w-1/2 2xl:px-[150px] sm:px-1 ml-5 text-lg">
          <h2 className="font-bold text-4xl my-5 ">About Hovey Roofing</h2>
          <p>
            Hovey Roofing was established in 1988. Owner Glen Hovey has been in
            the roofing industry since 1979. Our employees take pride in every
            step of the project from installation to clean up.
          </p>
          <br />
          <p>
            We enjoy doing unique projects, as well as standard applications. We
            treat every house as if it's our own, and focus on the small details
            that make every project excellent.
          </p>
          <button className="text-white p-2 my-5">Find us on Yelp!</button>
        </div>
        <div>
          <img src={AboutImg} alt="" className="universal-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
