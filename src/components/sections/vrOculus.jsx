import React, { useState } from "react";

export const VrOculus = () => {
  const [showAlternateView, setShowAlternateView] = useState(false);

  return (
    <section id="VR-Oculus" className="w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen">
        {!showAlternateView ? (
          <div className="Texto flex flex-col md:h-screen w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
            <h2 className="md:text-5xl text-5xl font-bold text-left">
              Sumérgete en la
              <br /> Innovación con <br />
              Experiencias en <br />
              Realidad Virtual
            </h2>
            <p className="md:text-2xl text-3xl text-left">
              <span className="font-semibold">
                ¿Te imaginas que tu marca no solo se vea, sino 
                que se viva?
              </span>{" "}
              Con nuestras Experiencias <br />
              interactivas en Oculus VR, llevamos la publicidad <br />y los
              eventos a otro nivel.
            </p>
            <div className="flex flex-col items-center md:flex-row gap-6 ">
              <button className="bg-[rgba(92,41,112,1)] text-white rounded-full px-6 py-4 text-2xl font-bold w-2/3 md:w-72">
                Explora el Futuro
              </button>
              <button
                className="bg-white text-[rgba(92,41,112,1)] rounded-full border border-[rgba(92,41,112,1)] px-6 py-4 text-2xl font-bold w-2/3 md:w-56"
                onClick={() => setShowAlternateView(true)}
              >
                Beneficios
              </button>
            </div>
          </div>
        ) : (
          <div className="TextBeneficios flex flex-col md:h-screen w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
            <h2 className="md:text-4xl text-5xl font-bold text-left">
              Beneficios de Oculus <br />
              para tu Marca
            </h2>
            <div className="flex items-center gap-4 md:text-2xl text-3xl text-left">
              <img
                src="/Polygon 1.png"
                alt="Viñeta"
                className="w-6 h-6 mr-4 flex-shrink-0"
              />
              <p>
                <span className="font-semibold">Inmersión Total:</span> Captura
                la atención de tu público con experiencias que lo transportan a
                otra realidad
              </p>
            </div>
            <div className="flex items-center gap-4 md:text-2xl text-3xl text-left">
              <img
                src="/Polygon 1.png"
                alt="Viñeta"
                className="w-6 h-6 mr-4 flex-shrink-0"
              />
              <p>
                <span className="font-semibold">Inmersión Total:</span> Captura
                la atención de tu público con experiencias que lo transportan a
                otra realidad
              </p>
            </div>
            <div className="flex items-center gap-4 md:text-2xl text-3xl text-left">
              <img
                src="/Polygon 1.png"
                alt="Viñeta"
                className="w-6 h-6 mr-4 flex-shrink-0"
              />
              <p>
                <span className="font-semibold">Inmersión Total:</span> Captura
                la atención de tu público con experiencias que lo transportan a
                otra realidad
              </p>
            </div>

            <div className="flex gap-6 mt-6">
              <button className="bg-[rgba(92,41,112,1)] text-white rounded-full px-6 py-4 text-2xl font-bold w-72">
                Explora el Futuro
              </button>
              <button
                className="bg-white text-[rgba(92,41,112,1)] rounded-full border border-[rgba(92,41,112,1)] px-6 py-4 text-2xl font-bold w-56"
                onClick={() => setShowAlternateView(false)}
              >
                Volver
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
