import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { useLocation } from "react-router-dom";

export const HomeNavBar = () => {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(1);
  

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

const videos = [
  { src: "/nike.mov", poster: "/nike.png" },
  { src: "/alpina.mov", poster: "/alpina.png" },
  { src: "/macdonals.mov", poster: "/macdonals.png" },
  { src: "/pacman.mov", poster: "/pacman.png" },
  { src: "/oldparr.mov", poster: "/oldparr.png" },
  { src: "/macdonals.mov", poster: "/macdonals.png" },
];

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === activeIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
       
        }
      }
    });
  }, [activeIndex]);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <section
      id="Home"
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-20 md:gap-16 px-4 md:px-0 !pt-40 md:!pt-50 "
    >
      {/* Texto a la izquierda */}
      <motion.div
        className="text-center md:text-left flex flex-col gap-5 md:pl-76 "
        variants={{
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
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 className="text-5xl text-left md:text-6xl font-bold">
          lleva tu marca al siguiente <br />
          nivel con experiencias <br />
          interactivas que cautivan a <br />
          tu audiencia
        </motion.h1>
        <motion.p className="text-3xl text-left md:text-2xl mt-4">
          <br />
          En EvenTouch, transformamos la publicidad <br />
          tradicional en experiencias memorables
        </motion.p>
        <motion.button
          className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%] md:w-56 h-20 md:h-16 rounded-full cursor-pointer bg-[#753E89]"
          onClick={() =>
            document.getElementById("Contactanos")?.scrollIntoView({ behavior: "smooth" })
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ¡Quiero innovar!
        </motion.button>
      </motion.div>

      {/* Carrusel a la derecha */}
      <motion.div
        className="relative max-w-[160vw] md:max-w-[47vw]"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
         
      >


  
        <Swiper
        initialSlide={1} 
          modules={[EffectCoverflow, Pagination, Mousewheel]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
            setTimeout(() => {
              swiper.update(); // 👈 solución aquí
            }, 100);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={10}
          slidesPerView={3.2}
          centeredSlides={true}
            style={{ paddingLeft: '20px', paddingRight: '20px' }}
          loop={true}
          loopedSlides={videos.length} // 👈 Añadir esto
          
          observer={true}
          observeParents={true}
            mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            thresholdDelta: 10,
            thresholdTime: 100,
          }}
          speed={500}
          pagination={{ clickable: true }}
          className="rounded-xl custom-swiper-pagination"
          
        >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            {index === activeIndex ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                className="rounded-4xl w-full h-[400px] object-cover shadow-lg"
                muted
                playsInline
                poster={video.poster}
                onEnded={() => {
                  const video = videoRefs.current[index];
                  if (video) {
                    video.currentTime = 0;
                    video.play();
                  }
                }}
              />
            ) : (
              <img
                src={video.poster}
                className="rounded-4xl w-full h-[400px] object-cover shadow-lg"
                alt="Preview"
              />
            )}
          </SwiperSlide>
        ))}

        </Swiper>

        {/* Botones de navegación */}
        <div className="absolute left-4 z-10 gap-4 hidden md:flex md:bottom-[14px] md:left-[-5px] sh">
          <img
            src="/Boton izq.png"
            alt="Botón izquierdo"
            className="w-25 h-25 md:w-16 md:h-16 cursor-pointer hover:bg-[rgba(117,62,137)] rounded-full bg-purple-200 transition shadow"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <img
            src="/Boton der.png"
            alt="Botón derecho"
            className="w-25 h-25 md:w-16 md:h-16 cursor-pointer hover:bg-[rgba(117,62,137)] rounded-full bg-purple-200 transition shadow"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </motion.div>
    </section>
  );
};
