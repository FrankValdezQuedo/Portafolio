import React, { useState } from "react";
import { motion } from "framer-motion";
import Email from "../images/email.jpg";
import Unjfsc from "../images/unjfsc.png";
import Tienda from "../images/tienda.png";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Array de proyectos mejorado con más información
  const projects = [
    {
      id: 1,
      title: "Servicio de envío de Emails",
      description:
        "Plataforma para envío masivo de emails con plantillas personalizables y seguimiento de métricas. Implementado con Spring Boot y servicios RESTful.",
      tags: ["Spring Boot", "Java", "JavaMailSender", "API REST"],
      image: Email,
      link: "https://github.com/FrankValdezQuedo/Servicio-envio-de-email",
      year: "2023",
    },
    {
      id: 2,
      title: "Sistema de Gestión de Convenios UNJFSC",
      description:
        "Aplicación full-stack para la administración, seguimiento y renovación de convenios institucionales de la Universidad Nacional José Faustino Sánchez Carrión.",
      tags: ["React", "Spring Boot", "JPA", "MySQL", "JWT"],
      image: Unjfsc,
      link: "https://github.com/FrankValdezQuedo/proyecto-convenios",
      year: "2022",
    },
    {
      id: 3,
      title: "Sistema de administración de tienda",
      description:
        "Plataforma integral para gestión de inventario, ventas, pedidos y reportes para pequeños negocios, con panel administrativo y visualización de estadísticas.",
      tags: ["PHP", "Bootstrap", "CSS", "MySQL", "JavaScript"],
      image: Tienda,
      link: "https://github.com/FrankValdezQuedo/Proyecto2024",
      year: "2021",
    },
  ];

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="proyectos"
      className="py-20 bg-[#0F1020] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E0E1DD] mb-2 relative inline-block">
              <span className="text-[#457B9D]">Proyectos</span> Realizados
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#457B9D] to-transparent"></div>
            </h2>
          </div>
          <p className="text-[#A8DADC] mt-6 max-w-2xl mx-auto text-lg">
            Una selección de proyectos recientes en los que he trabajado,
            demostrando mis habilidades y experiencia en diferentes tecnologías.
          </p>
        </div>

        <div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              variants={itemVariants}
              className="bg-[#1D3557] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 border border-[#457B9D]/30 hover:border-[#457B9D]/50"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                {/* Año del proyecto como badge */}
                <div className="absolute top-4 right-4 bg-[#457B9D] text-[#E0E1DD] text-xs font-bold px-2 py-1 rounded-full z-10">
                  {project.year}
                </div>

                {/* Imagen del proyecto */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Overlay al hacer hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0F1020] via-[#0F1020]/70 to-transparent flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#457B9D] text-[#E0E1DD] font-medium rounded-lg hover:bg-[#457B9D]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E0E1DD] mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-[#A8DADC] mb-5 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Etiquetas de tecnologías */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#0F1020] text-[#457B9D] px-2 py-1 rounded-md hover:bg-[#1D3557] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más proyectos */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/FrankValdezQuedo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-[#457B9D] text-[#457B9D] font-medium hover:bg-[#457B9D] hover:text-[#E0E1DD] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group"
          >
            <span>Ver más proyectos en GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
