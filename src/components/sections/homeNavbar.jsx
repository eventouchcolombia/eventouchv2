import React from "react";

export const HomeNavBar = () => {
  return (
    <section
      id="Home"
      className="flex items-start justify-center min-h-screen gap-16 "
    >
      {/* Contenedor del texto */}
      <div className="text-left pl-56">
        {" "}
        {/* Asegura alineación izquierda */}
        <h1 className="text-6xl font-bold">
          lleva tu marca al siguiente
          <br />
          nivel con experiencias
          <br />
          interactivas que cautivan a <br />
          tu audiencia
        </h1>
        <p className="text-2xl mt-4">
          <br />
          En EvenTouch, transformamos la publicidad
          <br />
          tradicional en experiencias memorables
        </p>
        <button
          className="mt-6 text-2xl text-white font-semibold w-56 h-16 rounded-full"
          style={{ backgroundColor: "#753E89" }}
        >
          quiero innovar
        </button>
      </div>

      {/* Contenedor del cuadrado */}
      <div className="relative">
      <img 
          src="/Subtract.png" 
          alt="Imagen decorativa" 
          className="w-[450px] h-[450px]"
        /> 
        
         {/* Contenedor de los botones */}
         <div className="flex gap-4 absolute bottom-[-5px] left-20 transform -translate-x-1/2">
          <img
            src="/Boton izq.png"
            alt="Botón izquierdo"
            className="w-20 h-20 cursor-pointer"
          />
          <img
            src="/Boton der.png"
            alt="Botón derecho"
            className="w-20 h-20 cursor-pointer"
          />
        </div>

      </div>
      
    </section>
  );
};
