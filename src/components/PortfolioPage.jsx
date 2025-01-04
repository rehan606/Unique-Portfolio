import React from "react";
import profileImage from "../assets/images/profile.jpeg";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl md:w-6/12 lg:w-8/12 ">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed text-justify">
            Hello! I’m Rehan. A professional 🌟 Front-End Developer skilled in React, JavaScript, Tailwind CSS, Node.js. Express.js and MongoDB. I craft error-free, user-friendly, responsive websites focused on client satisfaction.
            My focus is on
            making web development faster, easier, and accessible to all
            developers. Currently, I’m expanding into backend development to
            grow as a full-stack developer and create seamless, dynamic web
            applications. 
          </p>
        </div>
        <div className="image-container md:w-6/12 lg:w-4/12 flex justify-center items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
