"use client";

import React from "react";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Icon } from "iconsax-react";
import Link from "next/link";

export default function Home() {
  const card_data = [
    {
      id: 1,
      logo: "/logo/bank-sinarmas.webp",
      title: "Bank Sinarmas",
      description:
        "Built and maintained internal banking dashboards using React.js/Next.js, implementing reusable components, authentication, and performance optimizations. Integrated dynamic API versioning and wrote unit tests with Jest to ensure functional reliability.",
      stacks: ["Next.js", "Typescript", "Tailwind", "Jest"],
      years: "2024 - Present",
      url: "",
    },
    {
      id: 1,
      logo: "/logo/lindungihutan.webp",
      title: "LindungiHutan",
      description:
        "Developed a mobile crowdfunding Progressive Web App using Vue.js/Nuxt.js, utilizing Vuex Store for state management and featuring seamless donation workflows, campaign creation tools, cart and user profile management, a carbon offset calculator, offline monitoring, and voucher integration.",
      stacks: ["Nuxt.js", "Scss/Sass", "Jest"],
      years: "2022 - 2024",
      url: "https://m.lindungihutan.com",
    },
    {
      id: 2,
      logo: "/logo/crown.webp",
      title: "Fashion Ecommerce",
      description:
        "Built a scalable e-commerce application using React, Redux, React Hooks, GraphQL, and Firebase, with efficient state management via Redux Thunk and Redux Saga. Converted class components to functional components, leveraging React Hooks to manage state and lifecycle methods efficiently.",
      stacks: ["React.js", "TypeScript", "Jest"],
      years: "2023",
      url: "https://heartfelt-dusk-40bc82.netlify.app/",
    },
    {
      id: 3,
      logo: "/logo/music-app.webp",
      title: "Music App",
      description:
        "Implemented a comprehensive music player application using Vue, Tailwind, Pinia, and Firebase. Conducted extensive testing with Vitest (unit, snapshot, and end-to-end testing) to ensure application reliability.",
      stacks: ["Vue.js", "Tailwind", "Vitest"],
      years: "2022",
      url: "https://github.com/rizqizyd/music-app",
    },
    {
      id: 4,
      logo: "/logo/face-detector.webp",
      title: "Face Detector",
      description:
        "Developed a real-time face detection application using React.js, Node.js, Express.js, and PostgreSQL, incorporating machine learning algorithms for accurate and efficient face recognition.",
      stacks: ["React.js", "Jacascript", "CSS"],
      years: "2021",
      url: "",
    },
    {
      id: 5,
      logo: "/logo/resystem.webp",
      title: "Resystem (Book Recommendation System)",
      description:
        "Developed a content-based filtering book recommendation system in Python using machine learning, TensorFlow and Flask, with a user-friendly web interface for personalized suggestions.",
      stacks: ["Flask", "Python", "TensorFlow"],
      years: "2021",
      url: "https://github.com/rizqizyd/resystem",
    },
  ];

  const handleScrollTo = id => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === "notes" ? 300 : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="mx-auto">
      <div
        className="about-me h-screen flex flex-col bg-navy justify-center items-center relative"
        id="home"
      >
        <div className="detail">
          <h2 className="sm:mb-5 mb-3">
            <span className="text-beige">Muhammad Rizqi Az Zayyad</span>
          </h2>
          <p className="bg-beige rounded-sm text-navy mb-4 sm:text-sm py-1 px-2 text-xs">
            Hi There! I am passionate about Software Engineering
          </p>
          <div
            className="relative flex justify-center items-center h-auto"
            id="explore"
          >
            <button
              onClick={() => handleScrollTo("about")}
              className="bg-navy text-beige px-3 py-1 rounded-sm z-10 sm:text-sm text-xs shadow-lg"
            >
              Explore More
            </button>
            <span className="animate-ping absolute inline-flex h-[22px] w-[68px] rounded-sm bg-beige-light opacity-75"></span>
          </div>
        </div>
      </div>
      <div className="bg-beige">
        <div className="px-6 py-8 lg:p-32" id="about">
          <h3 className="text-navy font-bold text-2xl text-center items-start mb-5">
            About
          </h3>
          <About />
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-normal text-sm text-center italic items-start text-navy">
          “A society grows great when old men plant trees in whose shade they
          shall never sit.” <br />— Greek Proverb
        </h3>
      </div>
      <div className="px-6 py-8 lg:p-32 bg-navy" id="projects">
        <h3 className="font-bold text-2xl text-center items-start mb-5">
          Projects
        </h3>
        {card_data.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
      <div
        className="text-navy flex items-center gap-4 font-semibold p-7 bg-white text-center"
        id="notes"
      >
        <hr className="border-t border-navy w-full" />
        <Link
          href="/notes"
          className="border border-navy py-3 px-5 shadow-sm flex gap-3 items-center justify-center rounded"
        >
          <Icon /> Notes
        </Link>
        <hr className="border-t border-navy w-full" />
      </div>
      <Contact id="contact" />
      <div className="bg-navy p-4">
        <div className="flex justify-center gap-3 py-1">
          <p className="text-sm">Made with ❤️</p>
        </div>
      </div>
      <Navbar handleScrollTo={handleScrollTo} />
    </main>
  );
}
