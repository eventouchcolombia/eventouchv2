import { title } from 'framer-motion/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        'Home': 'Home',
        'Sobre Nosotros': 'About Us',
        'Innovacion Interactiva': 'Interactive Innovation',
        'Nuestros Servicios': 'Our Services',
        'VR Oculus': 'VR Oculus',
        'Casos de Exito': 'Success Stories',
        '¿Por Que Elegirnos?': 'Why Choose Us?',
        'Totem': 'Totem',
        'Contactanos': 'Contact Us',
        'Totem': 'Totem'
      },
      home: {
        hero: {
          title: 'Take your brand to the next level with interactive experiences that captivate your audience',
          subtitle: 'At EvenTouch, we turn traditional advertising into memorable experiences',
          cta: 'I want to innovate!'
        }
      },
      innovation: {
        title: 'We transform how brands connect with their audience',
        description: `We offer interactive advertising with dynamic ads that grab attention and generate greater impact.
        We create event experiences through totems and touch screens, allowing brands to leave a lasting impression
        while collecting valuable data for future strategies.`
      },
      services: {
        title: 'Services we offer',
        cta: 'I want to innovate!'
      },
      oculus: {
        title: 'Dive into Innovation with Virtual Reality Experiences',
        subtitle: `Can you imagine your brand not just being seen, but lived? With our interactive Oculus VR experiences, we take advertising and events to the next level.`,
        ctaExplore: 'Explore the Future',
        ctaBenefits: 'Benefits',
        ctaBack: 'Back',
        benefitsTitle: 'Benefits of Oculus for your Brand',
        benefit1: 'Total Immersion: Captivate your audience with experiences that transport them to another reality.',
        benefit2: 'Unique Interactivity: Offer new ways to engage and interact at your event.',
        benefit3: 'Unforgettable Sensations: Provide such an immersive and realistic experience that it leaves a lasting impression.'
      },
      success: {
        title: 'Data that Inspires',
        description: 'Discover how we’ve helped various brands transform their advertising and connect effectively with their audience.',
        cards: {
          card1: 'Increase in public interaction with interactive advertising',
          card2: 'Greater brand recall with innovative digital experiences.',
          card3: 'Event attendees prefer tech activations over traditional ads.',
          card4: 'Brands using interactive tech see growth in conversions and engagement.'
        }
      },
      choose: {
        title: 'Constant Innovation',
        description: `At EvenTouch, we transform how brands connect with their audience.
        We offer interactive advertising with dynamic ads that capture attention and generate greater impact.
        We also create event experiences through totems and touch screens, enabling brands to leave a lasting impression
        while collecting valuable data for analysis and future strategies.`
      },
      contact: {
        title: 'Take Your Brand to the Next Level',
        name: 'Full Name *',
        email: 'Email *',
        company: 'Company *',
        phone: 'Phone *',
        message: 'Message *',
        placeholder: 'Write here ...',
        send: 'Send',
        popup: {
          title: 'Email Sent Successfully!',
          text: 'Thank you for contacting us. We’ll get back to you soon.',
          close: 'Close'
        },
        location: 'Calle 123 #45-67; Bogotá, Colombia'
      },
      totem:{
        title: 'Make Everyone Interact!',
        description: 'Customize content, collect data, and captivate your guests. Ideal for activations, corporate events, and fairs.',
        ctaCotiza: 'Get a Quote',
      },
      servicesList: {
        photobot: {
          nombre: "Photobooth",
          descripcion: "We offer interactive advertising with dynamic ads that capture attention and generate greater impact.",
        },
        trivia: {
          nombre: "Trivia",
          descripcion: "Challenge your audience with personalized questions and measure their knowledge.",
        },
        speakIa: {
          nombre: "Talk AI",
          descripcion: "Real-time interaction with virtual assistants based on AI.",
        },
        desarrollos: {
          nombre: "Custom Developments",
          descripcion: "We create unique digital solutions tailored to your brand's needs.",
        },
        ruleta: {
          nombre: "Roulette",
          descripcion: "Gamification for events: attract, entertain, and reward your attendees.",
        },
        rompecabezas: {
          nombre: "Puzzle",
          descripcion: "Challenge your users’ minds with interactive tactile experiences.",
        },
        popTouch: {
          nombre: "Pop Touch",
          descripcion: "Touch screens for fast and memorable activations.",
        },
        registro: {
          nombre: "Registration Point",
          descripcion: "Manage event entries with an efficient digital experience.",
        },
        catalogo: {
          nombre: "Product Catalog",
          descripcion: "Showcase your products interactively using touchscreens.",
        }
      }
    }
  },
  es: {
    translation: {
      navbar: {
        'Home': 'Inicio',
        'Sobre Nosotros': 'Sobre Nosotros',
        'Innovacion Interactiva': 'Innovación Interactiva',
        'Nuestros Servicios': 'Nuestros Servicios',
        'VR Oculus': 'VR Oculus',
        'Casos de Exito': 'Casos de Éxito',
        '¿Por Que Elegirnos?': '¿Por Qué Elegirnos?',
        'Contactanos': 'Contáctanos',
      },
      home: {
        hero: {
          title: 'Lleva tu marca al siguiente nivel con experiencias interactivas que cautivan a tu audiencia',
          subtitle: 'En EvenTouch, transformamos la publicidad tradicional en experiencias memorables',
          cta: '¡Quiero innovar!'
        }
      },
      innovation: {
        title: 'Transformamos la forma en que las marcas se conectan con su audiencia',
        description: `Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.
        Creamos experiencias en eventos a través de tótems y pantallas touch, permitiendo que las marcas dejen una impresión duradera
        mientras recopilan datos valiosos para análisis y estrategias futuras.`
      },
      services: {
        title: 'Servicios que ofrecemos',
        cta: '¡Quiero innovar!'
      },
      oculus: {
        title: 'Sumérgete en la Innovación con Experiencias en Realidad Virtual',
        subtitle: `¿Te imaginas que tu marca no solo se vea, sino que se viva? Con nuestras Experiencias interactivas en Oculus VR, llevamos la publicidad y los eventos a otro nivel.`,
        ctaExplore: 'Explora el Futuro',
        ctaBenefits: 'Beneficios',
        ctaBack: 'Volver',
        benefitsTitle: 'Beneficios de Oculus para tu Marca',
        benefit1: 'Inmersión Total: Captura la atención de tu público con experiencias que lo transportan a otra realidad.',
        benefit2: 'Interactividad Única: Ofrece nuevas formas de participar y experimentar en tu evento.',
        benefit3: 'Sensaciones Inolvidables: Ofrece una vivencia tan inmersiva y realista que deja una marca duradera en la memoria.'
      },
      success: {
          title: 'Datos que Inspiran',
          description: 'Conoce cómo hemos ayudado a diversas marcas a transformar su publicidad y conectar de manera efectiva con su audiencia.',
          cards: {
          card1: 'Aumento en la interacción del público con publicidad interactiva',
          card2: 'Más recordación de marca con experiencias digitales innovadoras.',
          card3: 'De los asistentes a eventos prefieren activaciones tecnológicas sobre publicidad tradicional.',
          card4: 'De las marcas que usan tecnología interactiva ven un crecimiento en conversiones y engagement.'
        }
      },
      choose: {
        title: 'Innovación Constante',
        description: `En EvenTouch, transformamos la forma en que las marcas se conectan
        con su audiencia. Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.
        También creamos experiencias en eventos a través de tótems y pantallas touch,
        permitiendo que las marcas dejen una impresión duradera mientras recopilan datos valiosos para análisis y estrategias futuras.`
      },
      contact: {
        title: 'Lleva tu Marca al Siguiente Nivel',
        name: 'Nombres y apellidos *',
        email: 'Correo Electrónico *',
        company: 'Empresa *',
        phone: 'Teléfono *',
        message: 'Mensaje *',
        placeholder: 'Escribe aquí ...',
        send: 'Enviar',
        popup: {
          title: '¡Correo enviado exitosamente!',
          text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
          close: 'Cerrar'
        },
        location: 'Calle 123 #45-67; Bogotá, Colombia'
      },
      totem:{
        title: '¡Haz que todos interactuen!',
        description: 'Personaliza el contenido, recopila datos y cautiva a tus invitados. Ideal para activaciones, eventos corporativos y ferias.',
        ctaCotiza: '¡Cotiza con nosotros!',
      },
      servicesList: {
        photobot: {
          nombre: "Photobooth",
          descripcion: "Ofrecemos publicidad interactiva con anuncios dinámicos que captan la atención y generan mayor impacto.",
        },
        trivia: {
          nombre: "Trivia",
          descripcion: "Pon a prueba a tu audiencia con preguntas personalizadas y mide su conocimiento.",
        },
        speakIa: {
          nombre: "Talk IA",
          descripcion: "Interacción en tiempo real con asistentes virtuales basados en inteligencia artificial.",
        },
        desarrollos: {
          nombre: "Desarrollos personalizados",
          descripcion: "Creamos soluciones digitales únicas adaptadas a las necesidades de tu marca.",
        },
        ruleta: {
          nombre: "Ruleta",
          descripcion: "Gamificación para eventos: atrae, entretiene y premia a tus asistentes.",
        },
        rompecabezas: {
          nombre: "Rompecabezas",
          descripcion: "Desafía la mente de tus usuarios con experiencias táctiles interactivas.",
        },
        popTouch: {
          nombre: "Pop Touch",
          descripcion: "Pantallas táctiles para activaciones rápidas y memorables.",
        },
        registro: {
          nombre: "Punto de registro",
          descripcion: "Gestiona la entrada a tus eventos con una experiencia digital eficiente.",
        },
        catalogo: {
          nombre: "Catálogo de Productos",
          descripcion: "Muestra tus productos de forma interactiva con pantallas touch.",
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
