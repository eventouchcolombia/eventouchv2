import React, { useState } from "react";
import { InnovacionInteractiva } from "./innovacionInteractiva";
import { CasosDeExito } from "./CasosDeExito";
import { PorQueElegirnos } from "./porQueElegirnos";

export const SeccionesUnidas = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    if (index >= 0 && index < 3) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="Sobre-Nosotros" className=" w-full h-screen  overflow-hidden ">
      <div
        className="flex transition-transform duration-500 ease-in-out w-[300vw] "
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
      >
        <div className="w-screen h-screen shrink-0">
          <InnovacionInteractiva goTo={goTo} activeSection={activeIndex} />
        </div>
        <div className="w-screen h-screen shrink-0">
          <CasosDeExito goTo={goTo} activeSection={activeIndex} />
        </div>
        <div className="w-screen h-screen shrink-0">
          <PorQueElegirnos goTo={goTo} activeSection={activeIndex} />
        </div>
      </div>
    </section>
  );
};
