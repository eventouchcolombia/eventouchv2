import React from "react";

export const Navegacion = ({ goTo, activeSection }) => {
  return (
    <div className="flex justify-start gap-4 mb-8">
      <button
        onClick={() => goTo(0)}
        className={`px-5 py-2 rounded-full text-base  transition-colors duration-300 border ${
          activeSection === 0
            ? "bg-[#753E89] text-white border-transparent font-semibold"
            : "bg-transparent border-[#753E89] text-[#753E89] hover:bg-gray-100"
        }`}
      >
        Innovación interactiva
      </button>
      <button
        onClick={() => goTo(1)}
        className={`px-4 py-2 rounded-full text-base transition-colors duration-300 border ${
          activeSection === 1
            ? "bg-[#753E89] text-white border-transparent font-semibold"
            : "bg-transparent border-[#753E89] text-[#753E89] hover:bg-gray-100"
        }`}
      >
        Casos de Éxito
      </button>
      <button
        onClick={() => goTo(2)}
        className={`px-4 py-2 rounded-full text-base transition-colors duration-300 border ${
          activeSection === 2
            ? "bg-[#753E89] text-white border-transparent font-semibold"
            : "bg-transparent border-[#753E89] text-[#753E89] hover:bg-gray-100"
        }`}
      >
        ¿Por qué elegirnos?
      </button>
    </div>
  );
};