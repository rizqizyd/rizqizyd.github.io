import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:flex-row lg:gap-4 gap-4">
      <img
        className="max-w-xs lg:h-[100%] rounded-2xl custom-width xs:w-[100%]"
        src="/rizqi.webp"
        alt="photo"
      />
      <div className="flex flex-col justify-between">
        <p className="text-justify mb-6 text-[15px]">
          As a Frontend Developer with over three years of experience, I have
          worked on diverse projects, including crowdfunding platforms, fashion
          e-commerce sites, music web apps, and recommendation systems. My
          expertise lies in developing visually engaging and interactive web
          applications, collaborating effectively with cross-functional teams,
          and enhancing functionality and user experience. I specialize in
          creating responsive, maintainable websites optimized for performance
          and seamless usability.
          <br />
        </p>
        <Skills />
      </div>
    </div>
  );
}

export default About;
