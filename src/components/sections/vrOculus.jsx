import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // ✅ Traducción
import { motion } from "framer-motion";

export const VrOculus = () => {
  const [showAlternateView, setShowAlternateView] = useState(false);
  const { t } = useTranslation(); // ✅ Traducción

  return (
    <section id="VR-Oculus" className="w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen">
        {!showAlternateView ? (
          <div className="Texto flex flex-col md:h-screen w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
            <h2 className="md:text-5xl text-5xl font-bold text-left">
              {t("oculus.title")}
            </h2>
            <p className="md:text-2xl text-3xl text-left">
              {t("oculus.subtitle")}
            </p>
            <div className="flex flex-col items-center md:flex-row gap-6 ">
              <motion.button
                className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%] md:w-56 h-20 md:h-16 rounded-full cursor-pointer bg-[#753E89]"
                onClick={() =>
                  document.getElementById("Contactanos")?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("oculus.ctaExplore")}
              </motion.button>
              <button
                className="bg-white text-[rgba(92,41,112,1)] rounded-full border border-[rgba(92,41,112,1)] px-6 py-4 text-2xl font-bold w-2/3 md:w-56"
                onClick={() => setShowAlternateView(true)}
              >
                {t("oculus.ctaBenefits")}
              </button>
            </div>
          </div>
        ) : (
          <div className="TextBeneficios flex flex-col md:h-screen w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
            <h2 className="md:text-4xl text-5xl font-bold text-left">
              {t("oculus.benefitsTitle")}
            </h2>

            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-4 md:text-2xl text-3xl text-left">
                <img
                  src="/Polygon 1.png"
                  alt="Viñeta"
                  className="w-6 h-6 mr-4 flex-shrink-0"
                />
                <p>{t(`oculus.benefit${num}`)}</p>
              </div>
            ))}

            <div className="flex gap-6 mt-6">
              <motion.button
                className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%] md:w-56 h-20 md:h-16 rounded-full cursor-pointer bg-[#753E89]"
                onClick={() =>
                  document.getElementById("Contactanos")?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("oculus.ctaExplore")}
              </motion.button>
              <button
                className="bg-white text-[rgba(92,41,112,1)] rounded-full border border-[rgba(92,41,112,1)] px-6 py-4 text-2xl font-bold w-56"
                onClick={() => setShowAlternateView(false)}
              >
                {t("oculus.ctaBack")}
              </button>
            </div>
          </div>
        )}
        <div className="ImagenOculus md:w-1/2 h-1/2 w-full md:h-screen flex-shrink-0 flex items-center justify-center">
          <img
            src="/oculus.png"
            alt="Oculus VR"
            className="max-w-full max-h-full object-contain shake-on-hover"
          />
        </div>
      </div>
    </section>
  );
};
