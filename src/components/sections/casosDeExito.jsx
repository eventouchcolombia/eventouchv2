import React, { useEffect, useRef, useState } from "react";
import { Navegacion } from "../navbar/navigationSections";
// Hook para animar número desde 'start' hasta 'target'
const useCounter = (target, start, duration, active) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!active) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    setCount(start); // Reinicia al entrar de nuevo
    requestAnimationFrame(step);
  }, [target, start, duration, active]);

  return count;
};

// Componente para animar números con formato
const AnimatedNumber = ({ value, duration = 1000 }) => {
  const [active, setActive] = useState(false);
  const ref = useRef();

  // Detectar visibilidad en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const animatedValue = useCounter(numericValue, 0, duration, active);

  const suffix = value.match(/[%X]/)?.[0] || "";
  const prefix = value.startsWith("+") ? "+" : "";

  return (
    <h2 ref={ref} className="text-6xl font-bold">
      {prefix}{animatedValue}{suffix}
    </h2>
  );
};

// Componente principal
export const CasosDeExito = ({goTo}) => {
  return (
    <section id="Casos-de-Exito" className="w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen">
        {/* Texto a la izquierda */}
        <div className="flex flex-col w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
          <h2 className="md:text-5xl text-5xl font-bold text-left">
            Datos que <br /> Inspiran
          </h2>
          <p className="md:text-2xl text-3xl text-left">
            Conoce cómo hemos ayudado a diversas marcas a transformar su publicidad y conectar de manera efectiva con su audiencia.
          </p>
            <div className="pt-2">
                  <Navegacion goTo={goTo} />
            </div>
        </div>

        {/* Tarjetas con datos a la derecha */}
        <div className="md:w-1/2 w-full h-screen flex md:items-center items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-6/7 h-7/8 md:w-full md:h-full gap-6 md:pt-78 md:pl-20 md:pl-10 md:pr-35 md:pb-55">
            
            {/* Tarjeta 1 */}
            <div className="bg-[rgba(28,15,33,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
              <AnimatedNumber value="+80%" />
              <p className="md:text-sm text-2xl text-center">Aumento en la interacción del público con publicidad interactiva</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[rgba(92,41,112,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
              <AnimatedNumber value="3X" />
              <p className="md:text-sm text-2xl text-center">Más recordación de marca con experiencias digitales innovadoras.</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[rgba(92,41,112,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
              <AnimatedNumber value="+70%" />
              <p className="md:text-sm text-2xl text-center">De los asistentes a eventos prefieren activaciones tecnológicas sobre publicidad tradicional.</p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-[rgba(28,15,33,1)] rounded-3xl flex flex-col items-center justify-center text-white p-12">
              <AnimatedNumber value="90%" />
              <p className="md:text-sm text-2xl text-center">De las marcas que usan tecnología interactiva ven un crecimiento en conversiones y engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
