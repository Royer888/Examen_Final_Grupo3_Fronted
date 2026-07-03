import { useState } from "react";
import PortalLayout from "../components/common/PortalLayout";
import SectionTitle from "../components/common/SectionTitle";
import InfoCard from "../components/common/InfoCard";
import Contacto from "./Contacto";
import Galeria from "./Galeria";
import Docentes from "./Docentes";
import "./InterfazPrincipal.css";

function InterfazPrincipal() {
  const [seccionActiva, setSeccionActiva] = useState("noticias");

  const titulos = {
    contacto: "CONTACTO",
    noticias: "NOTICIAS DE ORO",
    docentes: "DOCENTES",
    galeria: "GALERÍA",
  };

  const renderNoticias = () => {
    return (
      <div className="contenido-seccion">
        <SectionTitle
          title="Noticias de Oro"
          subtitle="En esta sección se mostrarán noticias, comunicados y avisos importantes del colegio."
        />

        <div className="contenido-grid">
          <InfoCard
            title="Noticia destacada"
            description="Aquí se mostrará una noticia o comunicado importante del colegio."
          />

          <InfoCard
            title="Comunicado"
            description="Espacio reservado para noticias cargadas desde el backend."
          />
        </div>

        <div className="contenido-aviso">
          Futuro endpoint: <strong>/api/noticias</strong>
        </div>
      </div>
    );
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
        return renderNoticias();
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