import React, { useState, useEffect } from "react";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";
import Logo from "../../utilities/images/Logo.png";
import LogoDarkMode from "../../utilities/images/LogoDarkMode.png";
import whatsapp from "../../utilities/images/whatsapp.png";
import instagram from "../../utilities/images/instagram.png";
import linkedin from "../../utilities/images/linkedin.png";

const NavBar = ({ activeLink, onScrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className={`scrolled ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="logo">
          <img src={darkMode ? LogoDarkMode : Logo} alt="Logo" />
          </div>

          {/* Botón Dark Mode */}
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="w-15 h-9 bg-gray-200 peer-focus:outline-none  dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
          </div>

          {/* Botón de menú hamburguesa */}
          <button className="menu-toggle " onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>



          {/* Menú de navegación */}
          <ul className={`menu-bar ${menuOpen ? "show" : ""}`}>
            {sectionIds.map((sectionId, i) => (
              <li key={i}>
                <Link
                  className={activeLink === sectionId ? "active" : ""}
                  onClick={() => {
                    onScrollToSection(sectionId);
                    setMenuOpen(false);
                  }}
                >
                  {sectionId}
                </Link>
              </li>
            ))}
            <div className="social-icons">
              <img src={whatsapp} alt="whatsapp" />
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

