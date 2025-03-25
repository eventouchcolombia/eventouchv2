import React from "react";
import {  HomeNavBar } from "../components/sections/homeNavbar";
import {  InnovacionInteractiva } from "../components/sections/innovacionInteractiva";
import { NuestrosServicios} from "../components/sections/nuestrosServicios";
import {  VrOculus } from "../components/sections/vrOculus";
import { CasosDeExito } from "../components/sections/casosDeExito";
import { PorQueElegirnos } from "../components/sections/porQueElegirnos";
import { Contactanos } from "../components/sections/contactanos";


export const Home = () => {
  return (
    <>
      <HomeNavBar />
      <InnovacionInteractiva/>
      <NuestrosServicios />
      <VrOculus />
      <CasosDeExito/>
      <PorQueElegirnos/>
      <Contactanos/>
    </>
  );
};
