import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { Link } from "react-router-dom";
import { AnimatedSection } from "../animations/animationSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


export const HomeNavBar = () => {
  const swiperRef = useRef(null);
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Se activa cuando el 30% está visible
    triggerOnce: false, // ⚠️ Necesario para que se repita al entrar/salir
  });

  const images = [
    "/totem.jpg",
    "/totem2.1.png",
    "/totem3.jpg",
  ];

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const scrollToContactanos = () => {
    const contactanosSection = document.getElementById("Contactanos");
    if (contactanosSection) {
      contactanosSection.scrollIntoView({ behavior: "smooth" });
    }
  };


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


  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // pequeño delay para asegurar que el DOM esté listo
      }
    }
  }, [location.state]);

  return (
    <section
      id="Home"
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-20 md:gap-16 px-4 md:px-0 !pt-40 md:!pt-50 "
    >

      {/* Contenedor del texto */}
      <motion.div
        className="text-center md:w-2/3 md:text-left flex flex-col gap-10 md:pl-85  md:pt-10 "
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-5xl text-left md:text-6xl font-bold"
          variants={itemVariants}
        >
          {t('home.hero.title')}
        </motion.h1>
        <motion.p
          className="text-3xl text-left md:text-2xl mt-4"
          variants={itemVariants}
        >
        {t('home.hero.subtitle')}
        </motion.p>
        <motion.button
          className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%] md:w-56 h-20 md:h-16 rounded-full cursor-pointer bg-[#753E89]"
          onClick={() =>
            document.getElementById("Contactanos")?.scrollIntoView({ behavior: "smooth" })
          }
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('home.hero.cta')}
        </motion.button>
      </motion.div>

      {/* Contenedor del carrusel con botones dentro */}
      <motion.div
        className="relative max-w-[90vw] md:max-w-[35vw]"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Swiper
          modules={[Pagination, Mousewheel, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.start(); // 👈 ¡Aquí forzamos el autoplay al montar!
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="rounded-xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Totem ${index + 1}`}
                className="rounded-4xl w-full h-[450px] object-cover shadow-lg clipped-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación dentro de la imagen */}
        <div className="absolute  bottom-4 left-4 flex gap-4 z-10 ">
          <img
            src="/Boton izq.png"
            alt="Botón izquierdo"
            className="w-25 h-25 md:w-16 md:h-16 cursor-pointer hover:bg-[rgba(117,62,137)] rounded-full bg-purple-200 transition"
            onClick={handlePrev}
          />
          <img
            src="/Boton der.png"
            alt="Botón derecho"
            className="w-25 h-25 md:w-16 md:h-16 cursor-pointer hover:bg-[rgba(117,62,137)] rounded-full bg-purple-200 transition"
            onClick={handleNext}
          />
        </div>
      </motion.div>
    </section>
  );
};
