import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Educacion = () => {
  const educacionData = [
    {
      titulo: "Ingeniería Informática",
      periodo: "2019 - 2024",
      institucion: "Universidad Nacional José Faustino Sánchez Carrión",
      descripcion: [
        "Finalicé mis estudios en Ingeniería Informática en la Universidad Nacional José Faustino Sánchez Carrión en Diciembre del 2024, donde adquirí una sólida base en desarrollo de software.",
        "Esta formación me ha preparado para adaptarme y contribuir de manera eficiente en proyectos tecnológicos.",
        "Soy un ingeniero informático especializado en el desarrollo backend con Java Spring y frontend con React, combinando potencia y versatilidad para crear soluciones tecnológicas efectivas",
      ],
    },
  ];

  return (
    <section id="educacion" className="py-20 bg-[#0F1020] text-[#E0E1DD]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="text-center mb-10">
            <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
              <span className="text-[#457B9D]">Mí</span>{" "}
              <span className="text-[#E0E1DD]">Educación</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#457B9D] to-transparent"></div>
            </h2>
          </div>
          <p className="text-[#A8DADC] mt-3 max-w-2xl mx-auto text-lg">
            Aquí se destaca mi formación académica y los conocimientos
            adquiridos a lo largo de mi trayectoria educativa que han forjado mi
            perfil profesional.
          </p>
        </div>

        <div className="space-y-12">
          {educacionData.map((item, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1D3557] rounded-xl p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300 border-l-4 border-[#457B9D]"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-[#457B9D] bg-opacity-20 rounded-full p-4 mr-5 mb-4 md:mb-0 self-start">
                  <FaGraduationCap className="w-10 h-10 text-[#E0E1DD]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#E0E1DD]">
                    {item.titulo}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center mt-2 space-y-1 md:space-y-0 md:space-x-3">
                    <p className="text-[#457B9D] font-medium">{item.periodo}</p>
                    <span className="hidden md:block text-[#A8DADC]">•</span>
                    <p className="text-[#A8DADC]">{item.institucion}</p>
                  </div>
                </div>
              </div>

              <div className="pl-0 md:pl-16">
                <ul className="space-y-4">
                  {item.descripcion.map((desc, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="text-[#457B9D] mr-3 mt-1 text-xl group-hover:text-[#A8DADC] transition-colors">
                        •
                      </span>
                      <p className="text-[#A8DADC] group-hover:text-[#E0E1DD] transition-colors">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educacion;
