import React from "react";

const Habilidades = () => {
  // Datos estructurados para todas las categorías
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: "java" },
        { name: "Spring Boot", icon: "spring" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Python", icon: "python" },
        { name: "Swagger", icon: "swagger" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "SQL Server", icon: "microsoftsqlserver" },
        { name: "Docker", icon: "docker" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "TailwindCSS", icon: "tailwindcss" },
        { name: "Boostrap", icon: "bootstrap" },
        { name: "Vite", icon: "vite" },
      ],
    },
    {
      title: "Otros",
      skills: [
        { name: "AWS", icon: "amazonwebservices" },
        { name: "Google Cloud", icon: "googlecloud" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "Postman", icon: "postman" },
        { name: "VSCode", icon: "vscode" },
        { name: "Ansible", icon: "ansible" },
      ],
    },
  ];

  // Renderizar un item de habilidad individual
  const renderSkillItem = (skill, index) => (
    <div key={index} className="group">
      <div className="bg-[#1D3557] border border-[#457B9D]/30 rounded p-3 transition-all duration-300 hover:border-[#457B9D] hover:shadow hover:shadow-[#457B9D]/10 hover:-translate-y-1 flex flex-col items-center h-full">
        <div className="flex items-center justify-center mb-2 h-12">
          <i
            className={`devicon-${skill.icon.toLowerCase()}-plain text-2xl text-[#457B9D] group-hover:text-[#A8DADC] transition-colors duration-300`}
          ></i>
        </div>
        <span className="text-sm text-[#A8DADC] text-center group-hover:text-[#E0E1DD] transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="habilidades"
      className="py-12 bg-[#0F1020] text-[#E0E1DD] px-4"
    >
      {/* Encabezado de la sección */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold relative">
            <span className="text-[#457B9D]">Mis</span>{" "}
            <span className="text-[#E0E1DD]">Habilidades</span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#457B9D] to-transparent"></div>
          </h2>
        </div>
        <p className="text-[#A8DADC] mt-3 max-w-xl mx-auto text-lg">
          Dominio integral de tecnologías y herramientas modernas para el
          desarrollo de aplicaciones robustas, eficientes y escalables,
          abarcando backend, frontend, DevOps y más.
        </p>
      </div>

      {/* Contenedor principal de habilidades */}
      <div className="max-w-4xl mx-auto">
        {/* Mapeamos cada categoría */}
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8">
            {/* Encabezado de categoría */}
            <div className="relative mb-4">
              <div className="flex items-center">
                <h3 className="text-xl font-bold text-[#457B9D] bg-[#0F1020] pr-4 relative z-10">
                  {category.title}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-r from-[#457B9D] to-transparent"></div>
              </div>
            </div>

            {/* Grid de habilidades con responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, skillIndex) =>
                renderSkillItem(skill, skillIndex)
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
