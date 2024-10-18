"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Global.module.css";

export default function Home() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("explore");
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > servicesSection.offsetTop + 20) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const card_data = [
    {
      id: 1,
      logo: "/logo/lindungihutan.webp",
      title: "LindungiHutan",
      description:
        "Developed a mobile Progressive Web App using Vue.js/Nuxt.js with features including Donation Flow, Campaign Creation, Cart, User Profiles, Carbon Offset Calculator, Offline Monitoring, and Vouchers funcionalities.",
      stacks: ["Nuxt.js", "Scss/Sass", "Jest"],
      years: "2022 - 2024",
      url: "https://m.lindungihutan.com",
    },
    {
      id: 2,
      logo: "/logo/crown.jpeg",
      title: "Fashion Ecommerce",
      description:
        "Built a scalable e-commerce application using React, Redux, React Hooks, GraphQL, and Firebase, with efficient state management via Redux Thunk and Redux Saga. Converted class components to functional components, leveraging React Hooks to manage state and lifecycle methods efficiently.",
      stacks: ["React.js", "TypeScript", "Jest"],
      years: "2023",
      url: "https://heartfelt-dusk-40bc82.netlify.app/",
    },
    {
      id: 3,
      logo: "/logo/music-app.jpeg",
      title: "Music App",
      description:
        "Implemented a comprehensive music player application using Vue, Tailwind, Pinia, and Firebase. Conducted extensive testing with Vitest (unit, snapshot, and end-to-end testing) to ensure application reliability.",
      stacks: ["Vue.js", "Tailwind", "Vitest"],
      years: "2022",
      url: "https://github.com/rizqizyd/music-app",
    },
    {
      id: 4,
      logo: "/logo/face-detector.jpeg",
      title: "Face Detector",
      description:
        "Developed a real-time face detection application using React.js, Node.js, Express.js, and PostgreSQL, incorporating machine learning algorithms for accurate and efficient face recognition.",
      stacks: ["React.js", "Jacascript", "CSS"],
      years: "2021",
      url: "",
    },
    {
      id: 5,
      logo: "/logo/resystem.jpeg",
      title: "Resystem (Book Recommendation System)",
      description:
        "Developed a content-based filtering book recommendation system in Python using machine learning, TensorFlow and Flask, with a user-friendly web interface for personalized suggestions.",
      stacks: ["Flask", "Python", "TensorFlow"],
      years: "2021",
      url: "https://github.com/rizqizyd/resystem",
    },
  ];

  return (
    <main className="container mx-auto">
      <div className="about-me h-screen flex flex-col justify-center items-center relative">
        <div className="absolute top-0 flex justify-center items-center">
          <div
            className="text-sm rounded-bl-3xl rounded-br-3xl w-56 mt-[-20px] text-center py-2 bg-green-500 text-white"
            id="home"
          >
            Welcome!
          </div>
        </div>
        <div className="detail">
          <h2 className="sm:mb-5 mb-3">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-emerald-500 via-green-400 to-emerald-500 animate-text xs:text-[24px]">
              Muhammad Rizqi Az Zayyad
            </span>
          </h2>
          <p className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-md mb-4 sm:text-sm py-1 px-2 text-[12px]">
            Hi There! I am passionate about Software Engineering
          </p>
          <div
            className="relative flex justify-center items-center h-auto"
            id="explore"
          >
            <a
              href="#about"
              className="bg-white text-emerald-500 px-3 py-1 rounded-md z-10 sm:text-sm text-[12px] shadow-lg shadow-green-300/30"
            >
              Explore More
            </a>
            <span className="animate-ping absolute inline-flex h-[22px] w-[68px] rounded-md bg-emerald-400 opacity-75"></span>
          </div>
        </div>
      </div>
      <div className="section-one bg-green-500 mb-4" id="about">
        <h3 className="font-bold text-2xl text-center items-start mb-3">
          About
        </h3>
        <About />
      </div>
      <div className="section-two mb-4" id="about">
        <h3 className="font-normal text-[15px] text-center italic items-start text-emerald-500">
          “A society grows great when old men plant trees in whose shade they
          shall never sit.” — Greek Proverb
        </h3>
      </div>
      <div className="p-7 rounded-3xl bg-green-500 mb-4" id="project">
        <h3 className="font-bold text-2xl text-center items-start mb-3">
          Project
        </h3>
        <div className="grid gap-5">
          {card_data.map((items, index) => (
            <Card key={index} items={items} />
          ))}
        </div>
      </div>
      <Contact />
      <a
        href="#home"
        className={`${styles.navbar} ${
          isNavbarVisible ? styles.active : ""
        } arrow-up-icon fixed flex justify-center items-center bottom-5 right-5 w-12 h-12 rounded-full bg-white shadow-md`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </main>
  );
}
