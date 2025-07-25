import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // ✅ Traducción
import { motion } from "framer-motion";

export const AlquilerTotem = () => {
  const [showAlternateView, setShowAlternateView] = useState(false);
  const { t } = useTranslation(); // ✅ Traducción

  return (
    <section id="Totem" className="w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen">
       
        <div className="Texto flex flex-col h-3/5 md:h-screen w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12  pr-12 pt-40 md:pt-20 gap-10 md:gap-10">
            <h2 className="md:text-5xl text-5xl font-bold text-left">
              {t("totem.title")}
            </h2>
            {/* <h2>
                Alquiler Totem
            </h2> */}
            <p className="md:text-2xl text-3xl text-left">
              {t("totem.description")}
            </p>
            <div className="specifications-container mt-8 w-full">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="specifications border-2 border-gray-200 rounded-2xl p-4 w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-[#753E89] text-left">Especificaciones</h3>
                  <ul className="text-lg text-left">
                    <li className="flex items-center before:content-['•'] before:text-xs before:mr-2">WIFI</li>
                    <li className="flex items-center before:content-['•'] before:text-xs before:mr-2">45 pulgadas</li>
                    <li className="flex items-center before:content-['•'] before:text-xs before:mr-2">En red</li>
                  </ul>
                </div>
                <div className="additional border-2 border-gray-200 rounded-2xl p-4 w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-[#753E89] text-left">Adicionales</h3>
                  <ul className="text-lg text-left">
                    <li className="flex items-center before:content-['•'] before:text-xs before:mr-2">Captación de datos</li>
                    <li className="flex items-center before:content-['•'] before:text-xs before:mr-2">Juegos</li>
                    <li className="flex items-center before:content-['•'] before:text-xs before:mr-2">Joystick</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-6 mt-8">
              <motion.button
                className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%] md:w-86 h-20 md:h-16 rounded-full cursor-pointer bg-[#753E89]"
                onClick={() =>
                  document.getElementById("Contactanos")?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("totem.ctaCotiza")}
              </motion.button>
            </div>
        </div>

        <div className="ImagenOculus md:w-4/10  w-full md:h-screen  flex-shrink-0 flex items-center justify-center">
            <img
                src="/alquilerTotem.png"
                alt="Alquiler Totem"
                className="max-w-full md:max-h-200 max-h-[300px] object-contain shake-on-hover"
                
            />
        </div>
      </div>
    </section>
  );
};
