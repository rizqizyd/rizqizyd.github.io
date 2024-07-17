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
        <p className="text-justify mb-6">
          I hold a bachelor&apos;s degree and have over 2 years of experience as
          a frontend developer at a startup company. I have worked on various
          projects, including crowdfunding websites, e-commerce platforms, music
          streaming apps, and recommendation system. I create features to make
          web apps attractive and interactive, actively participate in
          discussions to improve the app, and collaborate closely with my team.
          My expertise allows me to build responsive, maintainable, and
          user-friendly applications, performance optimization, cross-browser
          compatibility, and seamless user experiences.
          <br />
        </p>
        <Skills />
      </div>
    </div>
  );
}

export default About;
