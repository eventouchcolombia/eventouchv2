import React, { useState } from "react";
import { InnovacionInteractiva } from "./InnovacionInteractiva";
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
    <section id="SeccionesUnidas" className=" w-full h-screen  overflow-hidden ">
      <div
        className="flex transition-transform duration-500 ease-in-out w-[300vw] "
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
      >
        <div className="w-screen h-screen shrink-0">
          <InnovacionInteractiva goTo={goTo} />
        </div>
        <div className="w-screen h-screen shrink-0">
          <CasosDeExito goTo={goTo} />
        </div>
        <div className="w-screen h-screen shrink-0">
          <PorQueElegirnos goTo={goTo} />
        </div>
      </div>
    </section>
  );
};
