import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import totemImage1 from "../../utilities/images/totemImage1.png";
import totemImage2 from "../../utilities/images/totemImage2.png";
import totemImage3 from "../../utilities/images/totemImage3.png";
import totemImage4 from "../../utilities/images/totemImage4.png";
import totemImage5 from "../../utilities/images/totemImage5.jpg";
import totemImage6 from "../../utilities/images/totemImage6.jpg";
import totemImage7 from "../../utilities/images/totemImage7.jpg";
import totemImage8 from "../../utilities/images/totemImage8.jpg";

const imageVariants = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  top: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  bottom: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  },
};



export const PorQueElegirnos = () => {
    const AnimatedImage = ({ direction, url }) => (
        <motion.div
         
          className="h-full w-full rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${url})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants[direction]}
        />
      );
    const { ref, inView } = useInView({
        threshold: 0.3, // Se activa cuando el 30% está visible
        triggerOnce: false, // ⚠️ Necesario para que se repita al entrar/salir
      })
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
  return (
    
    <section id="¿Por-Que-Elegirnos?"
            ref={ref}
             className="w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        {/* TEXTO */}
        <div className="flex flex-col md:h-screen md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
          <h2 className="md:text-5xl text-5xl font-bold text-left">
            Innovación <br /> Constante
          </h2>
          <p className="md:text-2xl text-3xl text-left">
            En EvenTouch, transformamos la forma en que las marcas se conectan
            con su audiencia. Ofrecemos publicidad interactiva con anuncios
            dinámicos que captan la atención y generan mayor impacto. También
            creamos experiencias en eventos a través de tótems y pantallas
            touch, permitiendo que las marcas dejen una impresión duradera
            mientras recopilan datos valiosos para análisis y estrategias
            futuras.
          </p>
        </div>

        {/* IMÁGENES */}
        <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 w-6/7 h-7/8 md:w-full md:h-full gap-6 md:pt-60 md:pl-10 md:pr-35 md:pb-35">
            <div className="grid grid-cols-2 gap-6">
              <AnimatedImage direction="left" url={"/oldparrEvento.jpeg"} />
              <AnimatedImage direction="right" url={"/oldparrEvento.2.jpeg"} />
            </div>

            <div
              id="dataCardWhite"
              className="w-full h-full bg-[rgba(92,41,112,1)] rounded-3xl hidden md:flex"
            ></div>

            <div className="grid grid-cols-2 gap-6 hidden md:grid">
              <AnimatedImage direction="top" url={totemImage3} />
              <AnimatedImage direction="bottom" url={totemImage4} />
            </div>

            <div className="grid grid-cols-2 gap-6 hidden md:grid">
              <AnimatedImage direction="left" url={totemImage5} />
              <AnimatedImage direction="right" url={totemImage6} />
            </div>

            <div
              id="dataCard"
              className="w-full h-full bg-[rgba(28,15,33,1)] rounded-3xl hidden md:flex"
            ></div>

            <div className="grid grid-cols-2 gap-6">
              <AnimatedImage direction="top" url={totemImage7} />
              <AnimatedImage direction="bottom" url={totemImage8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import totemImage1 from "../../utilities/images/totemImage1.png";
// import totemImage2 from "../../utilities/images/totemImage2.png";
// import totemImage3 from "../../utilities/images/totemImage3.png";
// import totemImage4 from "../../utilities/images/totemImage4.png";
// import totemImage5 from "../../utilities/images/totemImage5.jpg";
// import totemImage6 from "../../utilities/images/totemImage6.jpg";
// import totemImage7 from "../../utilities/images/totemImage7.jpg";
// import totemImage8 from "../../utilities/images/totemImage8.jpg";

// const imageVariants = {
//   left: {
//     hidden: { x: -100, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
//   },
//   right: {
//     hidden: { x: 100, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
//   },
//   top: {
//     hidden: { y: -100, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
//   },
//   bottom: {
//     hidden: { y: 100, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
//   },
// };

// const AnimatedImage = ({ direction, url, inView }) => (
//   <motion.div
//     className="h-full w-full rounded-3xl bg-cover bg-center"
//     style={{ backgroundImage: `url(${url})` }}
//     initial="hidden"
//     animate={inView ? "visible" : "hidden"}
//     variants={imageVariants[direction]}
//   />
// );

// export const PorQueElegirnos = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: false, // para que se active múltiples veces
//   });

//   return (
//     <section id="¿Por-Que-Elegirnos?" className="w-screen h-screen" ref={ref}>
//       <div className="flex flex-col md:flex-row w-full h-screen">
//         {/* TEXTO */}
//         <div className="flex flex-col md:h-screen md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10">
//           <h2 className="md:text-5xl text-5xl font-bold text-left">
//             Innovación <br /> Constante
//           </h2>
//           <p className="md:text-2xl text-3xl text-left">
//             En EvenTouch, transformamos la forma en que las marcas se conectan
//             con su audiencia. Ofrecemos publicidad interactiva con anuncios
//             dinámicos que captan la atención y generan mayor impacto. También
//             creamos experiencias en eventos a través de tótems y pantallas
//             touch, permitiendo que las marcas dejen una impresión duradera
//             mientras recopilan datos valiosos para análisis y estrategias
//             futuras.
//           </p>
//         </div>

//         {/* IMÁGENES */}
//         <div className="md:w-1/2 w-full h-screen flex items-center justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 w-6/7 h-7/8 md:w-full md:h-full gap-6 md:pt-60 md:pl-10 md:pr-35 md:pb-35">
//             <div className="grid grid-cols-2 gap-6">
//               <AnimatedImage direction="left" url={totemImage1} inView={inView} />
//               <AnimatedImage direction="right" url={totemImage2} inView={inView} />
//             </div>

//             <div id="dataCardWhite" className="w-full h-full bg-[rgba(92,41,112,1)] rounded-3xl hidden md:flex" />

//             <div className="grid grid-cols-2 gap-6 hidden md:grid">
//               <AnimatedImage direction="top" url={totemImage3} inView={inView} />
//               <AnimatedImage direction="bottom" url={totemImage4} inView={inView} />
//             </div>

//             <div className="grid grid-cols-2 gap-6 hidden md:grid">
//               <AnimatedImage direction="left" url={totemImage5} inView={inView} />
//               <AnimatedImage direction="right" url={totemImage6} inView={inView} />
//             </div>

//             <div id="dataCard" className="w-full h-full bg-[rgba(28,15,33,1)] rounded-3xl hidden md:flex" />

//             <div className="grid grid-cols-2 gap-6">
//               <AnimatedImage direction="top" url={totemImage7} inView={inView} />
//               <AnimatedImage direction="bottom" url={totemImage8} inView={inView} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
