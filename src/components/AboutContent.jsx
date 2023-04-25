import React from "react";
import AboutImg from "../images/aboutImg.jpg";

const About = () => {
  return (
    <section className="bg-teal-500 py-5 px-4">
      <div className="flex">
        <div className="w-1/2 p-5 ml-5">
          <h2 className="font-bold mt-10">About Hovey Roofing</h2>
          <p>
            Hovey Roofing was established in 1988. Owner Glen Hovey has been in
            the roofing industry since 1979. Our employees take pride in every
            step of the project from installation to clean up.
          </p>
          <p>
            We enjoy doing unique projects, as well as standard applications. We
            treat every house as if it's our own, and focus on the small details
            that make every project excellent.
          </p>
          <button className="bg-red-900 text-white p-2">
            Find us on Yelp!
          </button>
        </div>
        <div>
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
