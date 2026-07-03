import { useState } from "react";
import PortalLayout from "../components/common/PortalLayout";
import SectionTitle from "../components/common/SectionTitle";
import InfoCard from "../components/common/InfoCard";
import "./InterfazPrincipal.css";
import Contacto from "./Contacto";

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
                return (
                    <div className="contenido-seccion">
                        <SectionTitle
                            title="Docentes"
                            subtitle="En esta sección se mostrará la información de los docentes del colegio."
                        />

                        <div className="contenido-grid">
                            <InfoCard
                                title="Docente"
                                description="Aquí se mostrará el nombre, materia, cargo y datos del docente."
                            />
                            <InfoCard
                                title="Docente"
                                description="Espacio reservado para información de docentes desde el backend."
                            />
                        </div>

                        <div className="contenido-aviso">
                            Futuro endpoint: <strong>/api/docentes</strong>
                        </div>
                    </div>
                );

            case "galeria":
                return (
                    <div className="contenido-seccion">
                        <SectionTitle
                            title="Galería"
                            subtitle="Aquí se mostrarán imágenes de actividades, promociones, deportes, fraternidad Suris y banda de ex alumnos."
                        />

                        <div className="contenido-grid">
                            <InfoCard
                                title="Banda Ex Alumnos"
                                description="Espacio para fotografías de la banda de ex alumnos."
                            />
                            <InfoCard
                                title="Fraternidad Suris"
                                description="Espacio para fotografías de la fraternidad Suris."
                            />
                            <InfoCard
                                title="Promociones"
                                description="Espacio para fotografías de promociones del colegio."
                            />
                            <InfoCard
                                title="Deportes"
                                description="Espacio para fotografías de actividades deportivas."
                            />
                        </div>

                        <div className="contenido-aviso">
                            Futuro endpoint: <strong>/api/galeria</strong>
                        </div>
                    </div>
                );

            case "noticias":
            default:
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