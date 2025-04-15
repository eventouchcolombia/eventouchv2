import React, { useState } from "react";

export const HomeNavBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/totem.jpg",
    "/totem2.jpg",
    "/totem3.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollToContactanos = () => {
    const contactanosSection = document.getElementById("Contactanos");
    if (contactanosSection) {
      contactanosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-40 md:gap-16 px-4 md:px-0"
    >
      {/* Contenedor del texto */}
      <div className="text-center md:text-left flex flex-col  gap-10 md:pl-56">
        <h1 className="text-5xl  text-left md:text-6xl font-bold">
          lleva tu marca al siguiente
          <br />
          nivel con experiencias
          <br />
          interactivas que cautivan a <br />
          tu audiencia
        </h1>
        <p className="text-3xl text-left md:text-2xl mt-4">
          <br />
          En EvenTouch, transformamos la publicidad
          <br />
          tradicional en experiencias memorables
        </p>
        <button
  className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%]  md:w-56 h-20 md:h-16 rounded-full cursor-pointer"
  style={{ backgroundColor: "#753E89" }}
  onClick={scrollToContactanos}
>
  !quiero innovar¡
</button>
      </div>

      {/* Contenedor del carrusel */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-4xl object-cover"
        />

        {/* Contenedor de los botones */}
        <div className="flex gap-4 relative bottom-0 md:bottom-[-5px] left-1/2 transform -translate-x-1/2 items-center justify-center mt-4">
  <img
    src="/Boton izq.png"
    alt="Botón izquierdo"
    className="w-20 h-20 md:w-20 md:h-20 cursor-pointer"
    onClick={handlePrev}
  />
  <img
    src="/Boton der.png"
    alt="Botón derecho"
    className="w-20 h-20 md:w-20 md:h-20 cursor-pointer"
    onClick={handleNext}
  />
</div>
      </div>
    </section>
  );
};