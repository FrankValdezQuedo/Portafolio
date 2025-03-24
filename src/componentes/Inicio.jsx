import React from "react";
import Perfil from "../images/perfile.jpeg";
import {
  Github,
  Linkedin,
  Download,
  Code,
  Database,
  Server,
} from "lucide-react";
import "../assents/styles.css";

const Inicio = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#0F1020] flex items-center justify-center text-[#E0E1DD] px-6 py-16 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <Code className="absolute text-[#457B9D] top-20 left-20" size={80} />
        <Database
          className="absolute text-[#457B9D] bottom-20 right-20"
          size={80}
        />
        <Server
          className="absolute text-[#457B9D] top-1/3 right-1/4"
          size={60}
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        {/* Información y texto */}
        <div className="flex-1 text-left md:pr-8">
          <div className="inline-block bg-[#1D3557]/20 px-4 py-2 rounded-full mb-4">
            <span className="text-[#457B9D] font-medium">
              Desarrollador Full Stack
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#E0E1DD]">
            Hola, soy <span className="text-[#457B9D]">Fran Valdez</span>
          </h1>

          <p className="text-lg text-[#A8DADC] mb-8 leading-relaxed">
            Graduado en la carrera de{" "}
            <span className="text-[#457B9D] font-medium">
              Ingeniería Informática
            </span>{" "}
            con experiencia en diseño, desarrollo y gestión de sistemas.
            Apasionado por crear soluciones tecnológicas innovadoras que
            integren creatividad, eficiencia y mejores prácticas para generar
            proyectos escalables y de alto rendimiento.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/fran-valdez-a304012a7/"
              className="flex items-center gap-2 bg-[#457B9D] hover:bg-[#1D3557] text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/FrankValdezQuedo"
              className="flex items-center gap-2 bg-[#1D3557] hover:bg-[#457B9D] text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#1D3557] hover:bg-[#457B9D] text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              Descargar CV
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-16 h-1 bg-[#457B9D] rounded"></div>
            <span className="text-[#A8DADC] font-medium">Tecnologías</span>
          </div>
          <div className="mt-4 flex gap-6">
            <div className="flex flex-col items-center">
              <Code size={32} className="text-[#A8DADC] mb-2" />
              <span className="text-sm text-[#A8DADC]">Frontend</span>
            </div>
            <div className="flex flex-col items-center">
              <Database size={32} className="text-[#A8DADC] mb-2" />
              <span className="text-sm text-[#A8DADC]">Backend</span>
            </div>
            <div className="flex flex-col items-center">
              <Server size={32} className="text-[#A8DADC] mb-2" />
              <span className="text-sm text-[#A8DADC]">DevOps</span>
            </div>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className="relative flex-shrink-0">
          {/* Círculo decorativo */}
          <div className="absolute inset-0 bg-[#1D3557]/20 rounded-full -m-6"></div>

          <div className="relative">
            <img
              src={Perfil}
              alt="Fran Valdez - Desarrollador Full Stack"
              className="w-64 h-64 object-cover rounded-full border-4 border-[#457B9D] shadow-xl"
            />

            {/* Círculo decorativo */}
            <div className="absolute top-0 left-0 w-full h-full border-8 border-dashed border-[#1D3557] rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
