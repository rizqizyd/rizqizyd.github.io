import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  CallCalling,
  Home3,
  Icon,
  ProfileCircle,
  TaskSquare,
} from "iconsax-react";
import styles from "../styles/globals.module.css";
import "../styles/globals.css";

function NavbarButtion({ icon, onClick, isActive, href, section }) {
  const baseClass =
    "w-20 h-14 flex flex-col gap-2 justify-center items-center rounded-md text-xs transition-all";
  const activeClass = isActive
    ? "bg-navy text-beige"
    : "bg-gray-200 text-black";

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${activeClass}`}>
        {icon}
        <p className={`text-xs font-medium ${activeClass}`}>{section}</p>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${activeClass}`}>
      {icon}
      <p className={`text-xs font-medium ${activeClass}`}>{section}</p>
    </button>
  );
}

function Navbar({ handleScrollTo }) {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const sections = ["home", "projects", "notes", "contact", "about"];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionInView = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      });
      if (sectionInView) setActiveSection(sectionInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("explore");
      const scrollPosition = window.scrollY || window.pageYOffset;
      const bottomThreshold = 35;

      // Check if user has scrolled past the section
      if (servicesSection && scrollPosition > servicesSection.offsetTop + 20) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      // Hide navbar if near the bottom of the page
      if (
        window.innerHeight + scrollPosition >=
        document.body.offsetHeight - bottomThreshold
      ) {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full flex justify-center bottom-0 xs:bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`${styles.navbar} ${
          isNavbarVisible ? styles.active : ""
        } flex w-full xs:w-fit justify-center items-center xs:rounded-md bg-white shadow-md p-1`}
      >
        <NavbarButtion
          icon={<Home3 size={20} />}
          onClick={() => handleScrollTo("home")}
          isActive={activeSection === "home"}
          section="Home"
        />
        <NavbarButtion
          icon={<TaskSquare size={20} />}
          onClick={() => handleScrollTo("projects")}
          isActive={activeSection === "projects"}
          section="Projects"
        />
        <NavbarButtion
          icon={<Icon size={20} />}
          onClick={() => handleScrollTo("notes")}
          isActive={activeSection === "notes"}
          section="Notes"
        />
        <NavbarButtion
          icon={<CallCalling size={20} />}
          onClick={() => handleScrollTo("contact")}
          isActive={activeSection === "contact"}
          section="Contact"
        />
        <NavbarButtion
          icon={<ProfileCircle size={20} />}
          onClick={() => handleScrollTo("about")}
          isActive={activeSection === "about"}
          section="About"
        />
      </div>
    </div>
  );
}

export default Navbar;
