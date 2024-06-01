import React from "react";

import Card from "../components/Card";
import Link from "next/link";
import Skills from "../components/Skills";

export default function Portfolio() {
  const card_data = [
    {
      id: 1,
      title: "LindungiHutan",
      description:
        "Crowdfunding Progressive Web Application for mobile devices",
      stacks: ["Nuxt.js", "Javascript", "Sass"],
      url: "https://m.lindungihutan.com",
    },
    {
      id: 2,
      title: "Fashion Ecommerce",
      description: "An eCommerce website",
      stacks: ["React.js", "TypeScript", "Jest"],
      url: "https://heartfelt-dusk-40bc82.netlify.app/",
    },
    {
      id: 3,
      title: "Music App",
      description:
        "An app for playing, uploading, and saving your favorite music",
      stacks: ["Vue.js", "Tailwind", "Vitest"],
      url: "https://github.com/rizqizyd/music-app",
    },
    {
      id: 4,
      title: "Face Detector",
      description: "An app for detecting faces in photos",
      stacks: ["React.js", "Jacascript", "CSS"],
      url: "",
    },
    {
      id: 5,
      title: "Robofriends App",
      description: "Robofriends searching app",
      stacks: ["React.js", "Javascript", "CSS"],
      slug: "/robofriends-pwa/",
    },
    {
      id: 6,
      title: "Resystem",
      description: "Book recommendation system (content-based filtering)",
      stacks: ["Flask", "Python", "TensorFlow"],
      url: "https://github.com/rizqizyd/resystem",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center py-4 sm:py-12 w-full max-w-[400px] sm:max-w-screen-2xl mx-auto px-4 sm:px-16">
      <div className="socials mb-4 inline-flex">
        <Link href="/" className="py-3">
          Back
        </Link>
      </div>
      <div className="section-one mb-4">
        <p>
          As a front-end engineer with a passion for technological innovation, I
          excel in creating outstanding websites through tailored design,
          optimized functionality, and ongoing system maintenance. My skills in
          self-management ensure efficient project execution, while my
          enthusiasm for teamwork drives successful collaboration.
        </p>
      </div>
      <div className="section-one mb-4">
        <h3 className="font-bold text-2xl items-start mb-3">Work Experience</h3>
        <h3>&rarr; Frontent Developer at LindungiHutan (2021 - Present)</h3>
      </div>
      <div className="section-one mb-4">
        <h3 className="font-bold text-2xl items-start mb-3">Project</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {card_data.map((items, index) => (
            <Card key={index} items={items} />
          ))}
        </div>
      </div>
      <div className="section-one mb-4">
        <Skills />
      </div>
      <div className="section-one mb-4">
        <h3 className="font-bold text-2xl items-start mb-3">Contact</h3>
        {/* <p className="mb-2">
          You can reach me via email or WhatsApp. See you there! ✨️
          <span className="px-2 py-1 bg-slate-200 text-zinc-950 rounded-full">
            +6282314016044
          </span>{" "}
          <span>muhammadrizqiaz@gmail.com</span>
        </p> */}
        <div className="flex flex-wrap gap-3">
          <h3>+6282314016044</h3>
          <h3>muhammadrizqiaz@gmail.com</h3>
        </div>
      </div>
      <div className="section-one mb-4">
        <h3 className="font-bold text-2xl items-start mb-3">Resume</h3>
        <button className="hover:shadow-lg py-2 px-4 font-bold rounded-lg ease-in-out duration-300 flex items-center bg-green-600 hover:shadow-green-500/50 text-white text-sm">
          <a
            href="/public/CV - Muhammad Rizqi Az Zayyad.pdf"
            target="_blank"
            download
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}
