import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <div className="flex flex-col items-center md:flex-row md:gap-8 gap-8">
      <div className="relative w-[300px] h-[300px] flex-none">
        <div className="absolute inset-0 z-40 bg-navy top-8 left-8 w-[270px] h-[270px]"></div>
        <div className="absolute inset-0 z-40 bg-navy top-0 left-0 w-[30px] h-[30px]"></div>
        <img
          className="absolute p-3 w-full h-full object-cover z-50"
          src="/rizqi.webp"
          alt="photo"
        />
      </div>
      <div>
        <p className="text-justify text-navy mb-6 text-sm">
          With over three years of experience, I have worked on diverse projects
          including crowdfunding platforms, fashion e-commerce sites, music web
          apps, and recommendation systems. My expertise lies in developing
          visually engaging and interactive web applications, collaborating
          effectively with cross-functional teams, and enhancing functionality
          and user experience. I specialize in creating responsive, maintainable
          websites optimized for performance and seamless usability.
        </p>
        <Skills />
      </div>
    </div>
  );
}

export default About;
