import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import whatsapp from "../../utilities/images/whatsapp.png";
import instagram from "../../utilities/images/instagram.png";
import linkedin from "../../utilities/images/linkedin.png";

export const Contactanos = () => {
  const form = useRef();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n7b3iqm", // Reemplaza con tu Service ID
        "template_w6mpabr", // Reemplaza con tu Template ID
        form.current,
        "tPy9UwyoXHw14yrhl" // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          setIsPopupVisible(true); // Mostrar el pop-up
        },
        (error) => {
          console.error("Error al enviar el correo:", error.text);
          alert("Hubo un error al enviar el correo. Inténtalo nuevamente.");
        }
      );
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Ocultar el pop-up
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <section id="Contactanos" className="w-screen h-full ">
      <div className="flex flex-col md:flex-row w-full h-full md:pl-70">
        {/* FORM */}
        <div className="md:w-1/2 p-12 md:px-24">
          <h2 className="text-5xl text-left font-bold mb-6">
            Lleva tu Marca al <br /> Siguiente Nivel
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-17"
          >
            <div className="flex flex-col gap-4">
              <label className="text-2xl font-semibold mb-1 text-left">
                Nombres y apellidos *
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Escribe aquí ..."
                className="text-2xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                title="Por favor, ingresa solo letras."
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(
                    /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,
                    ""
                  );
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-2xl font-semibold mb-1 text-left">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Escribe aquí ..."
                className="text-2xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Por favor, ingresa un correo electrónico válido (ejemplo: usuario@dominio.com)"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-2xl font-semibold mb-1 text-left">
                Empresa *
              </label>
              <input
                type="text"
                name="user_company"
                placeholder="Escribe aquí ..."
                className="text-2xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                title="Por favor, ingresa solo letras."
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(
                    /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,
                    ""
                  ); // Elimina caracteres no alfabéticos
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-2xl font-semibold mb-1 text-left">
                Teléfono *
              </label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Escribe aquí ..."
                className="text-2xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                pattern="[0-9]+"
                title="Por favor, ingresa solo números."
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Elimina caracteres no numéricos
                }}
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <label className="text-2xl font-semibold mb-1 text-left">
                Mensaje *
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Escribe aquí ..."
                className="text-xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center h-25 pt-12 mt-4">
              <button
                type="submit"
                className="bg-[#753E89] w-1/3 text-white text-xl font-semibold px-8 py-2 rounded-full hover:bg-purple-800 transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 gap-4">
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              className="p-2 bg-white rounded-3xl shadow-md hover:scale-105 transition cursor-pointer"
              onClick={() => window.open("https://wa.me/3508038010", "_blank")}
            >
              <img src={whatsapp} alt="whatsapp" />
            </button>
            <button
              className="p-2 bg-white rounded-3xl shadow-md hover:scale-105 transition cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/eventouchcolombia?igsh=bGp5NDBseW55ODhl",
                  "_blank"
                )
              }
            >
              <img src={instagram} alt="instagram" />
            </button>
            <button
              className="p-2 bg-white rounded-3xl shadow-md hover:scale-105 transition cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/eventouchcol",
                  "_blank"
                )
              }
            >
              <img src={linkedin} alt="linkedin" />
            </button>

            <div className="p-2 px-4 bg-white rounded-3xl shadow-md text-sm flex items-center gap-2">
              <span>Calle 123 #45-67, Bogotá, Colombia</span>
            </div>
          </div>

          {/* Placeholder: Image / Mapa / Contact Box */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4051.1404117921925!2d-74.05116689547783!3d4.765222389543011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1745115088283!5m2!1sen!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* POP-UP */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold ">
              ¡Correo enviado exitosamente!
            </h3>
            <p className="text-lg ">
              Gracias por contactarnos. Nos pondremos en contacto contigo
              pronto.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 bg-[#753E89] text-white px-6  text-xl  py-2 h-16 w-44 rounded-full hover:bg-purple-800 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
