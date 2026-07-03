import { useState } from "react";
import PortalLayout from "../components/common/PortalLayout";
import Contacto from "./Contacto";
import Galeria from "./Galeria";
import Docentes from "./Docentes";
import Noticias from "./Noticias";
import "./InterfazPrincipal.css";

function InterfazPrincipal() {
  const [seccionActiva, setSeccionActiva] = useState("noticias");

  const titulos = {
    contacto: "CONTACTO",
    noticias: "NOTICIAS DE ORO",
    docentes: "DOCENTES",
    galeria: "GALERÍA",
  };

  const renderContenido = () => {
    switch (seccionActiva) {
      case "contacto":
        return <Contacto />;

      case "docentes":
        return <Docentes />;

      case "galeria":
        return <Galeria />;

      case "noticias":
      default:
        return <Noticias />;
    }
  };

  return (
    <PortalLayout
      activeSection={seccionActiva}
      onChangeSection={setSeccionActiva}
      title={titulos[seccionActiva]}
    >
      {renderContenido()}
    </PortalLayout>
  );
}

export default InterfazPrincipal;