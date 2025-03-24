import React from "react";
import { motion } from "framer-motion";
import Java from "../images/Java.png";
import Sql from "../images/SQL.png";
import Scrum from "../images/Scrum.png";
import Springboot from "../images/Springboot.png";
import Docker from "../images/Docker.png";
import Ingles from "../images/Ingles.png";
import Scrum2 from "../images/Scrum2.png";
import Spring from "../images/Spring.png";

import "../assents/styles.css";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Java Fundamentos",
      issuer: "Platzi",
      date: "Marzo 2024",
      image: Java,
      category: "desarrollo",
      link: "https://platzi.com/p/frank24111999/",
    },
    {
      id: 5,
      title: "Scrum Foundation",
      issuer: "Certiprof",
      date: "Julio 2024",
      image: Scrum,
      category: "desarrollo",
      link: "https://free.certiprof.com/offers/NeyL8pGT/checkout",
    },
    {
      id: 2,
      title: "Base de datos con SQL",
      issuer: "Platzi",
      date: "Enero 2024",
      image: Sql,
      category: "datascience",
      link: "https://platzi.com/p/frank24111999/",
    },
    {
      id: 8,
      title: "Java Spring",
      issuer: "Platzi",
      date: "Marzo 2025",
      image: Spring,
      category: "desarrollo",
      link: "https://platzi.com/p/frank24111999/",
    },
    {
      id: 6,
      title: "Scrum Fundamentals",
      issuer: "Scrum Study",
      date: "Enero 2025",
      image: Scrum2,
      category: "marketing",
      link: "https://analytics.google.com/analytics/academy/certificate/123456",
    },
    {
      id: 4,
      title: "Docker Fundamentos",
      issuer: "Platzi",
      date: "Marzo 2025",
      image: Docker,
      category: "metodologias",
      link: "https://platzi.com/p/frank24111999/",
    },
    {
      id: 3,
      title: "Spring Boot Course",
      issuer: "ATL Academy",
      date: "Octubre 2024",
      image: Springboot,
      category: "cloud",
      link: "https://atl.academy/es/certification",
    },
    {
      id: 7,
      title: "Basic English Course",
      issuer: "Platzi",
      date: "Marzo 2025",
      image: Ingles,
      category: "marketing",
      link: "https://platzi.com/p/frank24111999/",
    },
  ];

  return (
    <section id="certificaciones" className="py-20 bg-[#0F1020] text-[#E0E1DD]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-14">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
              <span className="text-[#457B9D]">Mis</span>{" "}
              <span className="text-[#E0E1DD]">Certificaciones</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#457B9D] to-transparent"></div>
            </h2>
          </div>
          <p className="text-[#A8DADC] mt-3 max-w-xl mx-auto text-lg">
            He completado varias certificaciones para expandir mis conocimientos
            y habilidades en diferentes áreas de la tecnología.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1D3557] rounded-xl overflow-hidden shadow-lg hover:shadow-[#457B9D]/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6 border-b border-[#457B9D]/20 flex items-center justify-center h-60 bg-[#0F1020]/20">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-48 max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#E0E1DD] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-[#A8DADC] text-sm mb-4">
                    {cert.issuer} • {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center py-2 text-sm text-[#457B9D] border border-[#457B9D]/30 rounded-md hover:bg-[#457B9D]/10 hover:border-[#457B9D] transition-all duration-300"
                  >
                    Verificar Certificación
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
