import React from "react";
// import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Contactanos = () => {
  return (
    <section id="Contactanos" className="w-screen h-full  ">
      <div className="flex flex-col md:flex-row w-full h-full md:pl-70 ">
        
        {/* FORM */}
        <div className="md:w-1/2  md:px-24    ">
          <h2 className="text-5xl  text-left font-bold mb-6 ">Lleva tu Marca al <br /> Siguiente Nivel</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-17">
            <div className="flex flex-col gap-4">
            <label className="text-2xl font-semibold mb-1 text-left">Nombres y apellidos *</label>
            <input
                type="text"
                placeholder="Escribe aquí ..."
                className="text-4xl p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            </div>

            <div className="flex flex-col gap-4">
            <label className="text-2xl font-semibold mb-1 text-left">Correo Electrónico *</label>
            <input
                type="email"
                placeholder="Escribe aquí ..."
                className="text-4xl p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            </div>

            <div className="flex flex-col gap-4">
            <label className="text-2xl font-semibold mb-1 text-left">Empresa *</label>
            <input
                type="text"
                placeholder="Escribe aquí ..."
                className="text-4xl p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            </div>

            <div className="flex flex-col gap-4">
            <label className="text-2xl font-semibold mb-1 text-left">Teléfono *</label>
            <input
                type="tel"
                placeholder="Escribe aquí ..."
                className="text-4xl p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
            <label className="text-2xl font-semibold mb-1 text-left">Mensaje *</label>
            <textarea
                rows="4"
                placeholder="Escribe aquí ..."
                className="text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center h-15 pt-14 mt-4">
            <button
                type="submit"
                className="bg-[#753E89] w-1/3  text-white text-base font-semibold px-8 py-2 rounded-full hover:bg-purple-800 transition"
            >
                Enviar
            </button>
            </div>
        </form>
        </div>

        {/* CONTACT INFO */}
        <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 gap-4">
          <div className="flex flex-wrap gap-3 mb-4">
            <button className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition">
              {/* <FaWhatsapp className="text-green-500 text-xl" /> */}
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition">
              {/* <FaInstagram className="text-pink-500 text-xl" /> */}
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition">
              {/* <FaLinkedin className="text-blue-600 text-xl" /> */}
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition">
              {/* <FaEnvelope className="text-gray-600 text-xl" /> */}
            </button>
            <div className="p-2 px-4 bg-white rounded-md shadow-md text-sm flex items-center gap-2">
              {/* <FaMapMarkerAlt className="text-purple-600" /> */}
              <span>Calle 123 #45-67, Bogotá, Colombia</span>
            </div>
          </div>

          {/* Placeholder: Image / Mapa / Contact Box */}
          <div className="w-full h-60 md:h-80 bg-gray-300 rounded-md shadow-inner"></div>
        </div>
      </div>
    </section>
  );
};
