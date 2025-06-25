import React, { useRef, useState } from "react";
import brandVideo from "../../utilities/images/brandVideo.mp4";
import fondoBrand from "../../utilities/images/fondoBrand.png";
import playIcon from "../../utilities/images/play.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // ✅ Importa hook de traducción

export const InnovacionInteractiva = () => {
  const { t } = useTranslation(); // ✅ Inicializa traducción

  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
    <section id="Innovacion-Interactiva" ref={ref} className="w-full h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen p-6 lg:p-20">
        <motion.div
          className="w-full h-auto md:w-2/3 md:h-screen flex flex-col items-center justify-center px-6 pt-50 md:pt-0 md:pl-70 md:pr-20 text-left gap-6 md:gap-10 md:pb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="md:text-4xl text-5xl font-bold">
            {t('innovation.title')}
          </h2>
          <p className="md:text-2xl text-3xl">
            {t('innovation.description')}
          </p>
        </motion.div>

        {/* Video con fondo gris y botón de Play */}
        <div className="md:w-1/2 w-full h-screen md:pb-8 flex items-center justify-center">
          <div
            className="relative w-4/6 md:w-1/2 md:h-3/5 h-4/5 rounded-2xl overflow-hidden shadow-lg bg-gray-700"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={brandVideo} 
              poster="/logoEventouch.jpeg"
              controls={showControls}
              onEnded={() => {
                setShowControls(true);
                setIsPlaying(false);
              }}
            />
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
