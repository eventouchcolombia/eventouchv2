import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
    return (
      <section id="Nuestros-Servicios" className="w-screen h-screen ">
        <div className="flex flex-col  space-y-8 h-screen w-full md:pt-43 gap-30 ">
          <h2 className="text-5xl font-bold text-center text-left">
            Servicios que Ofrecemos
          </h2>
            <div className='flex justify-end w-full'>
                          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={5}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-2/3 ml-auto"
          >
            {servicios.map((servicio, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`w-[200px] h-[310px]  rounded-2xl p-6 text-white bg-gradient-to-br ${servicio.color} shadow-lg hover:scale-105 transition-transform duration-300 `}
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {servicio.nombre}
                  </h3>
                  <p className="mb-4 text-sm">{servicio.descripcion}</p>
                  {/* <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                    {servicio.boton}
                  </button> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>

        </div>
      </section>
    );
  };
  
