
import React, { useEffect, useState } from "react";
import "../../styles/sidebar.css"; 
import { sectionIds } from "./sectionIds";

const SideNavBar = ({ activeLink, onScrollToSection }) => {
  const [currentIndex, setCurrentIndex] = useState(sectionIds.indexOf(activeLink));

  // Actualiza el índice cuando activeLink cambia
  useEffect(() => {
    setCurrentIndex(sectionIds.indexOf(activeLink));
  }, [activeLink]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onScrollToSection(sectionIds[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < sectionIds.length - 1) {
      onScrollToSection(sectionIds[currentIndex + 1]);
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
              {i + 1}
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
