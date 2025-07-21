import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {  HomeNavBar } from "../components/sections/homeNavbar";
import { InnovacionInteractiva } from "../components/sections/innovacionInteractiva";
import { NuestrosServicios} from "../components/sections/nuestrosServicios";
import {  VrOculus } from "../components/sections/vrOculus";
import { CasosDeExito } from "../components/sections/CasosDeExito";
import { PorQueElegirnos } from "../components/sections/porQueElegirnos";
import { Contactanos } from "../components/sections/contactanos";
import { SeccionesUnidas } from "../components/sections/seccionesUnidas";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }
  }, [location.state]);
  return (
    <>
      <HomeNavBar />
      <SeccionesUnidas />
  
      <NuestrosServicios />
      <VrOculus />
      
      
      <Contactanos/>
    </>
  );
};
