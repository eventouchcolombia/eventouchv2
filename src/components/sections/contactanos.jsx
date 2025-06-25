import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import whatsapp from "../../utilities/images/whatsapp.png";
import instagram from "../../utilities/images/instagram.png";
import linkedin from "../../utilities/images/linkedin.png";

export const Contactanos = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_n7b3iqm", "template_w6mpabr", form.current, "tPy9UwyoXHw14yrhl")
      .then(
        () => setIsPopupVisible(true),
        (error) => {
          console.error("Error al enviar el correo:", error.text);
          alert("Hubo un error al enviar el correo. Inténtalo nuevamente.");
        }
      );
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    form.current?.reset();
  };

  return (
    <>
      <section id="Contactanos" className="w-screen h-full">
        <div className="flex flex-col md:flex-row w-full h-full md:pl-70">
          {/* FORM */}
          <div className="md:w-1/2 p-12 md:px-24">
            <h2 className="text-5xl text-left font-bold mb-6">{t("contact.title")}</h2>
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-17">
              {[
                { name: "user_name", label: t("contact.name"), type: "text", pattern: "[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+" },
                { name: "user_email", label: t("contact.email"), type: "email", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" },
                { name: "user_company", label: t("contact.company"), type: "text", pattern: "[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+" },
                { name: "user_phone", label: t("contact.phone"), type: "tel", pattern: "[0-9]+" },
              ].map((field, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <label className="text-2xl font-semibold mb-1 text-left">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={t("contact.placeholder")}
                    pattern={field.pattern}
                    required
                    onInput={(e) => {
                      if (field.type === "text") {
                        e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
                      } else if (field.type === "tel") {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }
                    }}
                    className="text-2xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
              ))}

              <div className="md:col-span-2 flex flex-col gap-4">
                <label className="text-2xl font-semibold mb-1 text-left">{t("contact.message")}</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder={t("contact.placeholder")}
                  className="text-xl placeholder:text-2xl p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2 flex justify-center h-25 pt-12 mt-4">
                <button
                  type="submit"
                  className="bg-[#753E89] w-1/3 text-white text-xl font-semibold px-8 py-2 rounded-full hover:bg-purple-800 transition"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>

          {/* SOCIAL + MAP */}
          <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 gap-4">
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                { icon: whatsapp, link: "https://wa.me/3508038010" },
                { icon: instagram, link: "https://www.instagram.com/eventouchcolombia?igsh=bGp5NDBseW55ODhl" },
                { icon: linkedin, link: "https://www.linkedin.com/company/eventouchcol" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="p-2 bg-white rounded-3xl shadow-md hover:scale-105 transition cursor-pointer"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img src={item.icon} alt="icon" />
                </button>
              ))}

              <div className="p-2 px-4 bg-white rounded-3xl shadow-md text-sm flex items-center gap-2">
                <span>{t("contact.location")}</span>
              </div>
            </div>

            <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4051.1404117921925!2d-74.05116689547783!3d4.765222389543011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1745115088283!5m2!1sen!2sco"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* POP-UP */}
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold">{t("contact.popup.title")}</h3>
              <p className="text-lg">{t("contact.popup.text")}</p>
              <button
                onClick={closePopup}
                className="mt-4 bg-[#753E89] text-white px-6 text-xl py-2 h-16 w-44 rounded-full hover:bg-purple-800 transition"
              >
                {t("contact.popup.close")}
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
