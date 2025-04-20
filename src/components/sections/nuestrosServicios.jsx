import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules'; // 👈 agrega Mousewheel
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel'; // 👈 opcional pero recomendado
import { servicios } from '../../utilities/servicesJson/servicesJson';

export const NuestrosServicios = () => {
  const swiperRef = useRef(null);

  return (
    <section id="Nuestros-Servicios" className="w-screen h-screen">
      <div className="flex flex-col space-y-8 h-screen w-full pt-60 md:pt-43 gap-30 md:gap-10">
        <h2 className="text-5xl font-bold text-center md:pl-80 text-left pl-12">
          Servicios que <br /> Ofrecemos
        </h2>

        <div className="flex flex-col items-center w-full h-full gap-30 md:gap-15">
          <div className="w-full md:pl-80 pl-[10%] ">
            <Swiper
              modules={[Pagination, Mousewheel]} // 👈 agrega Mousewheel aquí
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              mousewheel={{
                forceToAxis: true, // evita conflictos con scroll vertical de página
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
                  <div
                    className={`tt h-[450px] w-[270px] md:w-[200px] md:h-[310px]  rounded-2xl p-10 text-white bg-gradient-to-br ${servicio.color} shadow-lg  duration-300 justify-end flex flex-col items-center gap-10 md:gap-2 pb-10 md:pb-4`}
                  >
                    <h3 className="w-full text-5xl md:text-3xl font-semibold text-left pb-10  ">
                      {servicio.nombre}
                    </h3>
                    <p className="text-3xl md:text-lg font-light text-left pr-8 md:pr-9">{servicio.descripcion}</p>
                    <button
                      to={`/servicios/${servicio.id}`}
                      className='w-full mx-auto h-1/8 text-white !important  bg-[#753E89] md:text-xl text-3xl font-semibold rounded-full hover:bg-purple-800 transition text-center pt-2 pb-2 items-center justify-center flex'
                      style={{ color: 'white' }}
                    >
                      ¡Quiero innovar!
                    </button>
                  </div>
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
        </div>
      </div>
    </section>
  );
};
