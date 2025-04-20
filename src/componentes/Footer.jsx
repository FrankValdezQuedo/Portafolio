import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1020] py-8">
      <div className="container mx-auto px-6">
        {/* Sección principal */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h3 className="text-[#E0E1DD] text-lg font-semibold mb-2">
            Fran Valdez
          </h3>
          <p className="text-[#A8DADC] text-sm">
            <span className="text-[#457B9D]">✉</span>{" "}
            fran.valdez.quedo@gmail.com
          </p>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[#1D3557] my-4"></div>

        {/* Sección inferior */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#A8DADC] text-sm mb-2">
            © {currentYear} Fran Valdez - Todos los derechos reservados
          </p>
          <div className="text-[#457B9D] text-xs">
            Diseñado y desarrollado con{" "}
            <span className="text-[#457B9D]">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
