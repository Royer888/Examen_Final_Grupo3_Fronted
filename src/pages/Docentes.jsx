import { useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import InfoCard from "../components/common/InfoCard";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";
import { obtenerDocentes } from "../services/docenteService";
import "./Docentes.css";

function Docentes() {
  const [docentes, setDocentes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    const cargarDocentes = async () => {
      try {
        setCargando(true);
        setMensajeError("");

        const respuesta = await obtenerDocentes();

        setDocentes(respuesta.data);
      } catch {
        setMensajeError(
          "No se pudo cargar la información de docentes. Verifique la conexión con el backend."
        );
      } finally {
        setCargando(false);
      }
    };

    cargarDocentes();
  }, []);

  const obtenerNombreCompleto = (docente) => {
    const nombre = docente.nombre || "";
    const apellido = docente.apellido || "";

    return `${nombre} ${apellido}`.trim() || "Docente";
  };

  return (
    <section className="docentes-page">
      <SectionTitle
        title="Docentes"
        subtitle="Información del plantel docente del Colegio Carlos Medinaceli."
      />

      {cargando && <Loading text="Cargando docentes..." />}

      {mensajeError && <ErrorMessage message={mensajeError} />}

      {!cargando && !mensajeError && docentes.length === 0 && (
        <div className="docentes-empty">
          No existen docentes registrados por el momento.
        </div>
      )}

      {!cargando && !mensajeError && docentes.length > 0 && (
        <div className="docentes-grid">
          {docentes.map((docente) => (
            <InfoCard
              key={docente.id}
              title={obtenerNombreCompleto(docente)}
              description={docente.materia || "Materia no registrada"}
              imageUrl={docente.imagenUrl}
            >
              <div className="docente-info">
                <p>
                  <strong>Cargo:</strong> {docente.cargo || "No registrado"}
                </p>

                <p>
                  <strong>Correo:</strong> {docente.correo || "No registrado"}
                </p>

                <p>
                  <strong>Teléfono:</strong>{" "}
                  {docente.telefono || "No registrado"}
                </p>
              </div>
            </InfoCard>
          ))}
        </div>
      )}
    </section>
  );
}

export default Docentes;