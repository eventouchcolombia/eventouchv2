import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import SideNavBar from "./sideNavBar";
import { sectionIds } from "./sectionIds";

const normalizeId = (sectionId) => sectionId.replace(/\s+/g, "-");

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(normalizeId(sectionId));
    const container = document.querySelector(".App");

    if (element && container) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const container = document.querySelector(".App");

    const determineActiveSection = () => {
      let newActiveLink = "";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(normalizeId(sectionIds[i]));
        if (section) {
          const rect = section.getBoundingClientRect();
          const containerTop = container.getBoundingClientRect().top;
          const top = rect.top - containerTop;

          if (top <= 120 && rect.bottom - containerTop >= 120) {
            newActiveLink = sectionIds[i];
            break;
          }
        }
      }

      if (newActiveLink && newActiveLink !== activeLink) {
        setActiveLink(newActiveLink);
      }
    };

    container.addEventListener("scroll", determineActiveSection);
    return () => container.removeEventListener("scroll", determineActiveSection);
  }, [activeLink]);

  return (
    <>
      <NavBar activeLink={activeLink} onScrollToSection={scrollToSection} />
      <SideNavBar activeLink={activeLink} onScrollToSection={scrollToSection} />
    </>
  );
};
