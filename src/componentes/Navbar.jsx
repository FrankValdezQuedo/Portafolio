import { useState, useEffect } from "react";
import "../assents/styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "inicio",
        "sobre-mi",
        "habilidades",
        "certificaciones",
        "educacion",
        "proyectos",
        "contacto",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "habilidades", label: "Habilidades" },
    { id: "certificaciones", label: "Certificaciones" },
    { id: "educacion", label: "Educación" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 h-16 transition-colors duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(29, 53, 87, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
            : "none",
        }}
      >
        <div className="container mx-auto px-6 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-xl font-bold relative group">
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, "inicio")}
                className="text-[#E0E1DD] group-hover:text-[#457B9D] transition-colors duration-300 flex items-center"
              >
                <span className="text-[#457B9D] mr-1">&lt;</span>
                Fran
                <span className="text-[#457B9D] ml-1">/&gt;</span>
              </a>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#457B9D] group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center w-full space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-4 py-2 mx-1 rounded-lg transition-all duration-300 font-medium text-base leading-6 ${
                    activeSection === item.id
                      ? "text-[#457B9D]"
                      : "text-[#A8DADC] hover:text-[#E0E1DD]"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#457B9D] rounded-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                className="focus:outline-none text-[#E0E1DD] w-10 h-10 relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                  style={{ top: "50%", left: "50%", marginLeft: "-12px" }}
                ></div>
                <div
                  className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ top: "50%", left: "50%", marginLeft: "-12px" }}
                ></div>
                <div
                  className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                  style={{ top: "50%", left: "50%", marginLeft: "-12px" }}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#0F1020]/95 backdrop-blur-md shadow-lg z-40 flex flex-col items-center">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium text-base leading-6 text-center ${
                  activeSection === item.id
                    ? "bg-[#1D3557]/80 text-[#457B9D]"
                    : "text-[#A8DADC] hover:bg-[#1D3557]/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
