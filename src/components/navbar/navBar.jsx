import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../../styles/navbar.css";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";
import Logo from "../../utilities/images/Logo.png";
import LogoDarkMode from "../../utilities/images/LogoDarkMode.png";
import whatsapp from "../../utilities/images/whatsapp.png";
import instagram from "../../utilities/images/instagram.png";
import linkedin from "../../utilities/images/linkedin.png";

const NavBar = ({ activeLink, onScrollToSection }) => {
   const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <div className="logo flex flex-row gap-30">
          <img src={darkMode ? LogoDarkMode : Logo} className='logo h-2/3 w-3/6'  alt="Logo" />
                    {/* Botón Dark Mode */}
                    <div className="flex  items-center">
          <button
              onClick={toggleDarkMode}
              className="dark-mode-toggle pl-4"
              aria-label="Toggle Dark Mode"
              title={darkMode ? "Light Mode" : "Dark Mode"}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
              }}
            >
              <img
                src={darkMode ? "/moon.png" : "/sun.png"}
                alt={darkMode ? "Modo Oscuro" : "Modo Claro"}
                style={{ width: "22px", height: "22px" }}
              />
            </button>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              style={{ marginLeft: "1rem", padding: "4px", borderRadius: "4px" }}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
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
                  {t('navbar.' + sectionId)}
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

