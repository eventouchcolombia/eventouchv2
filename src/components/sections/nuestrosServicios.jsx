import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicios = [
  {
    nombre: 'Photobot',
    descripcion: 'Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.',
    boton: 'Ver más información',
    color: 'from-purple-800 to-fuchsia-600',
  },
  {
    nombre: 'Trivia',
    descripcion: 'Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.',
    boton: '¡Quiero Innovar!',
    color: 'from-blue-800 to-indigo-600',
  },
  {
    nombre: 'Speak IA',
    descripcion: 'Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.',
    boton: '¡Quiero Innovar!',
    color: 'from-gray-700 to-slate-500',
  },
  {
    nombre: 'Desarrollos personalizados',
    descripcion: 'Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.',
    boton: '¡Quiero Innovar!',
    color: 'from-yellow-900 to-orange-600',
  },
  {
    nombre: 'Ruleta',
    descripcion: 'Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.',
    boton: '¡Quiero Innovar!',
    color: 'from-red-700 to-pink-600',
  },
  {
    nombre: 'Rompecabezas',
    descripcion: 'Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.',
    boton: '¡Quiero Innovar!',
    color: 'from-purple-900 to-purple-600',
  },
];

export const NuestrosServicios = () => {
  const swiperRef = useRef(null);

  return (
    <section id="Nuestros-Servicios" className="w-screen h-screen">
      <div className="flex flex-col space-y-8 h-screen w-full pt-43 gap-30 md:gap-10">
        <h2 className="text-5xl font-bold text-center md:pl-80 text-left pl-[10%]">
          Servicios que <br/> Ofrecemos
        </h2>

        <div className="flex flex-col items-center w-full h-full gap-15">
          <div className="w-full  md:pl-80 pl-[10%]">
            <Swiper
              modules={[Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={1.2}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 5.2 },
              }}
              // pagination={{ clickable: true }}
              className="ml-auto"
            >
              {servicios.map((servicio, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`tt h-[450px] w-[270px] md:w-[200px] md:h-[310px]  rounded-2xl p-10 text-white bg-gradient-to-br ${servicio.color} shadow-lg hover:scale-105 transition-transform duration-300 justify-end flex flex-col items-center gap-10 md:gap-2 pb-10 md:pb-4`}
                  >
                    <h3 className="w-full text-4xl font-semibold text-left pb-10 ">
                      {servicio.nombre}
                    </h3>
                    <p className="text-3xl md:text-lg text-left pr-8 md:pr-9">{servicio.descripcion}</p>
                    <button className='w-full mx-auto  h-1/8 text-white bg-[#753E89] text-2xl font-semibold rounded-full hover:bg-purple-800 transition'>¡Quiero innovar!</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Flechas debajo del carrusel */}
          <div className="flex md:justify-end justify-center gap-10 mt-6 w-full md:pr-35">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-25 h-25 md:h-15 md:w-15 bg-gray-300 rounded-full hover:bg-gray-400 transition text-lg font-bold flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-25 h-25 md:h-15 md:w-15 bg-gray-300 rounded-full hover:bg-gray-400 transition text-lg font-bold flex items-center justify-center"
          >
            →
          </button>

          </div>
        </div>
      </div>
    </section>
  );
};
