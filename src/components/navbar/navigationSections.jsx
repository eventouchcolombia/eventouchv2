import React from "react";

export const Navegacion = ({ goTo }) => (
  <div className="flex justify-start gap-4 mb-8">
    <button onClick={() => goTo(0)} className="bg-purple-600 h-10 text-sm text-white px-4 py-2 rounded-full">
      Innovación
    </button>
    <button onClick={() => goTo(1)} className="bg-purple-600 text-sm text-white px-4 py-2 rounded-full">
      Datos
    </button>
    <button onClick={() => goTo(2)} className="bg-purple-600 text-sm text-white px-4 py-2 rounded-full">
      ¿Por qué?
    </button>
  </div>
);
