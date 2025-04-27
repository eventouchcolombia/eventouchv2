import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const servicios = {
  photobot: {
    titulo: 'Photobooth',
    imagen: '/photobot.png',
    descripcion:
      '¡Haz que tu marca cobre vida con Photobooth! Un tótem interactivo con pantalla táctil que permite a tus usuarios tomarse selfies animadas con personajes famosos o elementos de tu marca, todo con filtros marcos, animaciones y accesorios que harán cada foto inolvidable.',
    beneficios: [
      'Aumenta el engagement',
      'Recopila datos valiosos como correos o nombres',
      'Genera contenido viral',
    ],
    incluciones: [
      'Tótem interactivo',
      'Técnico de software en sitio',
      'Desarrollo personalizado y a la medida',
      'Transporte y montaje',
      'impresora si es necesario *',
    ],
  },
  trivia: {
    titulo: 'Trivia',
    imagen: '/trivia.png',
    descripcion:
      'La Trivia interactiva digital es ideal para eventos y activaciones,  combina entretenimiento con recopilación de datos usando tecnologia. Los usuarios juegan mientras completan formularios, generando engagement y recordación de marca. Personalizable en diseño, preguntas y premios, es perfecta para ferias, talleres , lanzamientos y más.',
    beneficios: [
      'Personalizacion total',
      'Recopila datos valiosos como correos o nombres',
      'Recordacion de marca',
      'Mayor engagement',
    ],
    incluciones: [
      'Tótem interactivo',
      'Técnico de software en sitio',
      'Desarrollo personalizado y a la medida',
      'Transporte y montaje',
    ],
  },
  'speak-ia': {
    titulo: 'Talk IA',
    imagen: '/talkIA.png' ,
    descripcion:
      'Habla con tus clientes en tiempo real usando IA. Ideal para experiencias inmersivas.',
      beneficios: [
        'Interacción instantánea',
        'Experiencias inmersivas',
        'Eficiencia mejorada',
        'Personalización a escala ',
      ],
      incluciones: [
        'Tótem interactivo',
        'Técnico de software en sitio',
        'Desarrollo personalizado y a la medida',
        'Transporte y montaje',
      ],
      
  },
  desarrollos: {
    titulo: 'Desarrollos personalizados',
    imagen: '/desarrollosp.png',
    descripcion:
      'Desarrollos a la medida para eventos: experiencias únicas, funcionales, con tu marca y de alto impacto.',
      beneficios: [
        'Experiencias únicas',
        'Funcionalidades a medida',
        'Marca diferenciada',
        'Mayor impacto',
      ],
      incluciones: [
        'Tótem interactivo',
        'Técnico de software en sitio',
        'Desarrollo personalizado y a la medida',
        'Transporte y montaje',
      ],
  },
  ruleta: {
    titulo: 'Ruleta',
    imagen: '/ruleta.png',
    descripcion:
      'Mediante un juego interactivo con ruleta los usuarios se entretienen  y participan en promociones.',
    beneficios: [
      'Aumenta el engagement',
      'Recopila datos valiosos como correos o nombres',
       'atrae a los usuarios a tu stand',
    ],
    incluciones: [
      'Tótem interactivo',
      'Técnico de software en sitio',
      'Desarrollo personalizado y a la medida',]
  },
  popTouch: {
    titulo: 'PopTouch',
    imagen: '/poptouch.png',
    descripcion:
      'cada clic suma puntos y visibilidad para tu marca. ¡Interactúa y deja una impresión duradera con cada toque!',
      beneficios: [
        'Atención inmediata',
        'Participación activa',
        'Visibilidad aumentada',
        'Recuerdo positivo',
      ],
      incluciones: [
        'Tótem interactivo',
        'Técnico de software en sitio',
        'Desarrollo personalizado y a la medida',
        'Transporte y montaje',
      ],
  },
  registro: {
    titulo: 'Punto de registro',
    imagen: '/registro.png',
    descripcion:
      'Ideal para eventos en donde los usuarios pueden registrr su entrada y salida utilizando un codigo QR o correo electronico.',
      beneficios: [
        'Recopilacion de datos',
        'Control de asistentes',
        'Facilidad de uso',
        'Seguridad mejorada',
      ],
      incluciones: [
        'Tótem interactivo',
        'Técnico de software en sitio',
        'Desarrollo personalizado y a la medida',
        'Transporte y montaje',
      ],
  },
  catalogo: {
    titulo: 'Catalogo de productos',
    imagen: '/catalogo.png',
    descripcion:
      'Ofrecele a tus clientes un catalogo en Totem digital para ver todos los productos de tu tienda.',
      beneficios: [
        'Mejor experiencia para usuarios',
        'Mas engagement',
        'Facilidad de uso',
      ],
      incluciones: [
        'Tótem interactivo',
        'Técnico de software en sitio',
        'Desarrollo personalizado y a la medida',
        'Transporte y montaje',
      ],
  },
  rompecabezas: {
    titulo: 'Rompecabezas',
    imagen: '/rompe.png',
    descripcion:
      'Desafía a tus usuarios con un juego que estimula la mente y los mantiene conectados con tu marca.',
      beneficios: [
        'Engagement lúdico',
        'Memorabilidad de marca',
        'Contenido compartible',
        'Recuerdo duradero',
      ],
      incluciones: [
        'Tótem interactivo',
        'Técnico de software en sitio',
        'Desarrollo personalizado y a la medida',
        'Transporte y montaje',
      ],
  },
};

export const ServicioDetalle = () => {
  const { servicioId } = useParams();
  const navigate = useNavigate();
  const servicio = servicios[servicioId];

  if (!servicio)
    return (
      <p className="p-10 text-red-600 font-bold">Servicio no encontrado.</p>
    );

  return (
    <section className="w-screen min-h-screen md:h-screen">
      <div className="flex flex-col md:flex-row w-full md:h-screen">
        <div className="flex flex-col w-full md:w-2/3 justify-center px-6 md:pl-90 pl-12 md:pr-29 pr-12 pt-40 md:pt-20 gap-12 md:gap-10">
          <h2 className="md:text-5xl text-5xl font-bold text-left">
            {servicio.titulo}
          </h2>
          <p className="md:text-2xl text-3xl text-left">
            {servicio.descripcion}
          </p>

          {servicio.beneficios && (
            <div>
              <h3 className="text-2xl text-left font-bold mb-2">
                Beneficios
              </h3>
              <div className="flex flex-col gap-2 text-left text-xl">
                {servicio.beneficios.map((item, index) => (
                  <p key={index}>
                    <span className="text-purple-700 mr-2">•</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          {servicio.incluciones && (
            <div>
              <h3 className="text-2xl text-left font-bold mt-6 mb-2">
                Incluye
              </h3>
              <div className="flex flex-col gap-2 text-left text-xl">
                {servicio.incluciones.map((item, index) => (
                  <p key={index}>
                    <span className="text-purple-700 mr-2">•</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() =>
              navigate('/', { state: { scrollTo: 'Nuestros-Servicios' } })
            }
            className="bg-white text-[rgba(92,41,112,1)] rounded-full border border-[rgba(92,41,112,1)] px-6 py-4 text-2xl font-bold w-56 mt-6"
          >
            ← Volver
          </button>
        </div>

        {servicio.imagen && (
          <div className="w-full md:w-1/2  flex items-center justify-center bg-gray-200 p-6">
            <img
              src={servicio.imagen}
              alt={`Demostración de ${servicio.titulo}`}
              className="w-full h-full max-w-[500px]  shadow-xl rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};
