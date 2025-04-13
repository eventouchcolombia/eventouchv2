import { useParams, useNavigate } from 'react-router-dom';

const servicios = {
  photobot: {
    titulo: 'Photobot',
    descripcion: 'Photobot es una solución innovadora que permite captar atención mediante experiencias fotográficas interactivas.',
  },
  trivia: {
    titulo: 'Trivia',
    descripcion: 'Trivia combina entretenimiento y publicidad mediante preguntas y recompensas.',
  },
  'speak-ia': {
    titulo: 'Speak IA',
    descripcion: 'Habla con tus clientes en tiempo real usando IA. Ideal para experiencias inmersivas.',
  },
  desarrollos: {
    titulo: 'Desarrollos personalizados',
    descripcion: 'Creamos soluciones interactivas a medida según las necesidades de tu marca.',
  },
  ruleta: {
    titulo: 'Ruleta',
    descripcion: 'Una experiencia interactiva que mezcla suerte, premios y engagement.',
  },
  rompecabezas: {
    titulo: 'Rompecabezas',
    descripcion: 'Desafía a tus usuarios con un juego que estimula la mente y los mantiene conectados con tu marca.',
  },
};

export const ServicioDetalle = () => {
  const { servicioId } = useParams();
  const navigate = useNavigate();
  const servicio = servicios[servicioId];

  if (!servicio) return <p className="p-10 text-red-600 font-bold">Servicio no encontrado.</p>;

//   return (
//     <section className="w-screen h-screen ">
//       <button
//         onClick={() => navigate('/', { state: { scrollTo: 'Nuestros-Servicios' } })}
//         className="text-purple-700 font-bold underline text-left"
//       >
//         ← Volver a servicios
//       </button>

//       <h2 className="text-5xl font-bold">{servicio.titulo}</h2>
//       <p className="text-xl max-w-3xl">{servicio.descripcion}</p>
//     </section>
//   );
// };

return(
    <section id="Casos-de-Exito" className="w-screen h-screen ">
        
    <div className="flex flex-col  md:flex-row w-full h-screen ">
        
        <div className=" flex flex-col   md:h-screen w-full md:w-2/3 justify-center  px-6   md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-16 md:gap-10   ">

            <h2 className="md:text-5xl text-5xl  font-bold  text-left ">
            {servicio.titulo}
            </h2>
            <p className="md:text-2xl text-3xl text-left">
            {servicio.descripcion}
            </p>
            <button
         onClick={() => navigate('/', { state: { scrollTo: 'Nuestros-Servicios' } })}
          className="bg-white text-[rgba(92,41,112,1)] rounded-full border border-[rgba(92,41,112,1)] px-6 py-4 text-2xl font-bold w-56"
       >
         ← Volver 
       </button> 
        </div>
        <div className="md:w-1/2 w-full h-screen flex md:items-center items-center justify-center bg-gray-200">

            
        </div>
    </div>
    </section>
) 
}