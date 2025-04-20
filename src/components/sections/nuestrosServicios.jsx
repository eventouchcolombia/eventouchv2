import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { servicios } from '../../utilities/servicesJson/servicesJson';

export const NuestrosServicios = () => {
  const swiperRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -180 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="Nuestros-Servicios" ref={ref} className="w-screen h-screen">
      <div className="flex flex-col space-y-8 h-screen w-full pt-60 md:pt-43 gap-30 md:gap-10">
        <h2 className="text-5xl font-bold text-center md:pl-80 text-left pl-12">
          Servicios que <br /> Ofrecemos
        </h2>

        <motion.div
          className="flex flex-col items-center w-full h-full gap-30 md:gap-15"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="w-full md:pl-80 pl-[10%]">
            <Swiper
              modules={[Pagination, Mousewheel]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
              }}
              spaceBetween={1.2}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 5.2 },
              }}
              className="ml-auto"
            >
              {servicios.map((servicio, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={itemVariants}
                    className={`tt h-[450px] w-[270px] md:w-[200px] md:h-[310px]  rounded-2xl p-10 text-white bg-gradient-to-br ${servicio.color} shadow-lg hover:scale-105 transition-transform duration-300 justify-end flex flex-col items-center gap-10 md:gap-2 pb-10 md:pb-4`}
                  >
                    <h3 className="w-full text-5xl md:text-3xl font-semibold text-left pb-10">
                      {servicio.nombre}
                    </h3>
                    <p className="text-3xl md:text-lg font-light text-left pr-8 md:pr-9">
                      {servicio.descripcion}
                    </p>
                    <Link
                      to={`/servicios/${servicio.id}`}
                      className="w-full mx-auto h-1/8 text-white bg-[#753E89] md:text-xl text-3xl font-semibold rounded-full hover:bg-purple-800 transition text-center pt-2 pb-2 items-center justify-center flex"
                    >
                      ¡Quiero innovar!
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex md:justify-end justify-center gap-10 mt-6 w-full md:pr-35">
            <img
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-25 h-25 md:h-15 md:w-15 bg-[rgba(117,62,137,0.2)] rounded-full hover:bg-gray-400 transition text-2xl font-bold flex items-center justify-center"
              src="/Boton izq.png"
            >
              
            </img>
            <img
              onClick={() => swiperRef.current?.slideNext()}
              className="w-25 h-25 md:h-15 md:w-15 bg-[rgba(117,62,137,0.2)] rounded-full hover:bg-gray-400 hover:text-white transition text-2xl font-bold flex items-center justify-center"
              src="/Boton der.png"
            >
              
            </img>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
