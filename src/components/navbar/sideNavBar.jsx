
import React, { useEffect, useState } from "react";
import "../../styles/sidebar.css"; 
import { sectionIds } from "./sectionIds";

const SideNavBar = ({ activeLink, onScrollToSection }) => {


  // Actualiza el índice cuando activeLink cambia
  const currentIndex = sectionIds.indexOf(activeLink);


  const goToPrevious = () => {
    const currentIdx = sectionIds.indexOf(activeLink);
     console.log("Going to:", sectionIds[currentIdx - 1]); // 👈
    if (currentIdx > 0) {
      onScrollToSection(sectionIds[currentIdx - 1]);
    }
  };
  
  const goToNext = () => {
    const currentIdx = sectionIds.indexOf(activeLink);
    if (currentIdx < sectionIds.length - 1) {
      onScrollToSection(sectionIds[currentIdx + 1]);
    }
  };

  return (
    <div className="side-navbar">
      {/* Flecha arriba */}
      <button
        className="nav-arrow up"
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        aria-label="Previous Section"
      >
        ↑
      </button>

      <ul>
  {sectionIds.map((sectionId, i) => (
    <li key={i}>
      <span
        className={activeLink === sectionId ? "active" : ""}
        onClick={() => onScrollToSection(sectionId)}
      >
        {i === 0 ? (
          <img
            src="/icons/homeicon.png"
            alt="Home"
            className="home-icon"
          />
        ) : (
          i + 1
        )}
      </span>
    </li>
  ))}
</ul>


      {/* Flecha abajo */}
      <button
        className="nav-arrow down"
        onClick={goToNext}
        disabled={currentIndex === sectionIds.length - 1}
        aria-label="Next Section"
      >
        ↓
      </button>
    </div>
  );
};

export default SideNavBar;
