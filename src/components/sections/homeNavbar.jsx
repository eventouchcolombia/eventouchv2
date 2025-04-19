import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { Link } from "react-router-dom";

export const HomeNavBar = () => {
  const swiperRef = useRef(null);

  const images = [
    "/totem.jpg",
    "/totem2.jpg",
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

  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-40 md:gap-16 px-4 md:px-0"
    >
      {/* Contenedor del texto */}
      <div className="text-center md:text-left flex flex-col gap-10 md:pl-56">
        <h1 className="text-5xl text-left md:text-6xl font-bold">
          lleva tu marca al siguiente <br />
          nivel con experiencias <br />
          interactivas que cautivan a <br />
          tu audiencia
        </h1>
        <p className="text-3xl text-left md:text-2xl mt-4">
          <br />
          En EvenTouch, transformamos la publicidad <br />
          tradicional en experiencias memorables
        </p>
        <button
          className="mt-6 text-3xl md:text-2xl text-white font-semibold w-[100%] md:w-56 h-20 md:h-16 rounded-full cursor-pointer"
          style={{ backgroundColor: "#753E89" }}
          onClick={scrollToContactanos}
        >
          ¡Quiero innovar!
        </button>
      </div>

      {/* Contenedor del carrusel con botones dentro */}
      <div className="relative max-w-[90vw] md:max-w-[35vw]">
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
        <div className="absolute bottom-4 left-4 flex gap-4 z-10">
          <img
            src="/Boton izq.png"
            alt="Botón izquierdo"
            className="w-12 h-12 md:w-16 md:h-16 cursor-pointer bg-[rgba(117,62,137,0.2)] rounded-full hover:bg-gray-400 transition"  
            onClick={handlePrev}
          />
          <img
            src="/Boton der.png"
            alt="Botón derecho"
            className="w-12 h-12 md:w-16 md:h-16 cursor-pointer bg-[rgba(117,62,137,0.2)] rounded-full hover:bg-gray-400 transition" 
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
};
