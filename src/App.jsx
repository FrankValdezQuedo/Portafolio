import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Habididades from "./componentes/Habilidades";
import Certificaciones from "./componentes/Certificaciones";
import Contacto from "./componentes/Contacto";
import Proyectos from "./componentes/Proyectos";
import Footer from "./componentes/Footer";
import Estudios from "./componentes/Estudios";

function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <SobreMi />
      <Habididades />
      <Certificaciones />
      <Estudios />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
