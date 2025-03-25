import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import SideNavBar from "./sideNavBar";
import { sectionIds } from "./sectionIds";

const normalizeId = (sectionId) => sectionId.replace(/\s+/g, "-");

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home");
  console.log(activeLink);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(normalizeId(sectionId));
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      
      smoothScrollTo(targetPosition);
    }
  };
  
  const smoothScrollTo = (target) => {
    const startPosition = window.scrollY;
    const distance = target - startPosition;
    const duration = 600; // Duración total en ms
    let startTime = null;
  
    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    requestAnimationFrame(animation);
  };
  
  // Función de suavizado (ease-in-out)
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };
  
  

useEffect(() => {
  const determineActiveSection = () => {
    let newActiveLink = "";
    let found = false;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(normalizeId(sectionIds[i]));
      if (section) {
        const rect = section.getBoundingClientRect();
        if (!found && rect.top <= 120 && rect.bottom >= 120) {
          newActiveLink = sectionIds[i];
          found = true;  // 🔹 Solo permite activar una sección
        }
      }
    }

    if (newActiveLink !== activeLink) {
      setActiveLink(newActiveLink);
    }
  };

  window.addEventListener("scroll", determineActiveSection);
  return () => window.removeEventListener("scroll", determineActiveSection);
}, [activeLink]);


  return (
    <>
      <NavBar activeLink={activeLink} onScrollToSection={scrollToSection} />
      <SideNavBar activeLink={activeLink} onScrollToSection={scrollToSection} />
    </>
  );
};


