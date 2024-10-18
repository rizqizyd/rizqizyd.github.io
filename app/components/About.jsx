import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:flex-row lg:gap-4 gap-4">
      <img
        className="max-w-xs lg:h-[100%] rounded-2xl custom-width xs:w-[100%]"
        src="/rizqi-photo.png"
        alt="photo"
      />
      <div className="flex flex-col justify-between">
        <p className="text-justify mb-6 text-[15px]">
          I hold a bachelor&apos;s degree in computer science and have over two
          years of experience as a frontend developer at a startup. I’ve worked
          on projects like crowdfunding websites, e-commerce platforms, music
          streaming apps, and recommendation systems. I focus on creating
          attractive and interactive web apps, actively participating in
          discussions to enhance them, and collaborating closely with my team.
          My expertise enables me to build responsive, maintainable websites
          with optimized performance and seamless user experiences.
          <br />
        </p>
        <Skills />
      </div>
    </div>
  );
}

export default About;
