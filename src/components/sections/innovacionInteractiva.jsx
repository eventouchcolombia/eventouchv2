import React, { useRef, useState } from "react";
import brandVideo from "../../utilities/images/brandVideo.mp4";
import playIcon from "../../utilities/images/play.png"; // Ruta del icono de play

export const InnovacionInteractiva = () => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="Innovacion-Interactiva" className="w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen p-6 lg:p-20">
        <div className="w-full h-auto md:w-2/3 md:h-screen flex flex-col items-center justify-center px-6 pt-50 md:pt-0 md:pl-70 md:pr-20 text-left gap-6 md:gap-10  md:pb-20 ">

          <h2 className="md:text-4xl text-5xl font-bold">
            Transformamos la forma en que las marcas se conectan con su audiencia
          </h2>
          <p className="md:text-2xl text-3xl">
            Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto. 
            Creamos experiencias en eventos a través de tótems y pantallas touch, permitiendo que las marcas dejen 
            una impresión duradera mientras recopilan datos valiosos para análisis y estrategias futuras.
          </p>
        </div>

        {/* Video con fondo gris y botón de Play */}
        <div className="md:w-1/2 w-full  h-screen md:pb-8 flex items-center justify-center ">
          <div 
            className="relative w-4/6 md:w-1/2 md:h-3/5 h-4/5 rounded-2xl overflow-hidden shadow-lg bg-gray-700"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video */}
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              src={brandVideo} 
              poster="URL_DE_LA_IMAGEN_AQUI"
              controls={showControls}
              onEnded={() => { 
                setShowControls(true);
                setIsPlaying(false);
              }} 
            />
            
            {/* Botón de Play (solo aparece si el video está pausado) */}
            {!isPlaying && (
              <button 
                className="absolute inset-0 flex items-center justify-center bg-gray bg-opacity-30"
                onClick={handlePlayPause}
              >
                <img src={playIcon} alt="Play" className="w-16 h-16" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
