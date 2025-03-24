import React from "react";
import "../assents/styles.css";
import Foto from "../images/foto.jpeg";

const SobreMi = () => {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen bg-[#0F1020] text-[#E0E1DD] px-6 py-16 flex items-center justify-center relative"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#457B9D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#457B9D] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
            <span className="text-[#457B9D]">Sobre</span>{" "}
            <span className="text-[#E0E1DD]">Mí</span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#457B9D] to-transparent"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen con efectos visuales */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative group">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border-2 border-dashed border-[#457B9D]/50 rounded-lg transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>

              {/* Imagen principal */}
              <div className="relative overflow-hidden rounded-lg shadow-xl shadow-[#457B9D]/20">
                <img
                  src={Foto}
                  alt="Fran Valdez - Desarrollador Full Stack"
                  className="w-80 h-auto object-cover rounded-lg border-4 border-[#457B9D] transform transition duration-500 group-hover:scale-105"
                />
                {/* Overlay con gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1020]/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            </div>
          </div>

          {/* Texto con mejor formato */}
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="inline-block bg-[#1D3557]/20 px-4 py-2 rounded-full mb-2">
                <span className="text-[#457B9D] font-medium">Mi historia</span>
              </div>

              <p className="text-lg text-[#A8DADC] leading-relaxed">
                Soy Fran Luis Valdez Quedo, ingeniero informático apasionado por
                la tecnología y la programación desde temprana edad. Mi
                curiosidad por entender sistemas y aplicaciones me llevó a
                desarrollar habilidades en desarrollo de software, aplicaciones
                móviles y diseño de sistemas.
              </p>

              <div className="w-16 h-0.5 bg-[#457B9D] my-6"></div>

              <p className="text-lg text-[#A8DADC] leading-relaxed">
                A lo largo de mi experiencia, he aprendido a trabajar en equipo,
                adaptarme al cambio y enfrentar desafíos con responsabilidad e
                innovación. Mi objetivo es generar un impacto positivo en cada
                proyecto, aplicando mi conocimiento y pasión por crear
                soluciones que marquen la diferencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
