import { useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import InfoCard from "../components/common/InfoCard";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";
import { obtenerNoticias } from "../services/noticiaService";
import "./Noticias.css";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    let componenteActivo = true;

    const cargarNoticias = async () => {
      try {
        const respuesta = await obtenerNoticias();

        if (componenteActivo) {
          setNoticias(respuesta.data);
        }
      } catch {
        if (componenteActivo) {
          setMensajeError(
            "No se pudieron cargar las noticias. Verifique la conexión con el backend."
          );
        }
      } finally {
        if (componenteActivo) {
          setCargando(false);
        }
      }
    };

    cargarNoticias();

    return () => {
      componenteActivo = false;
    };
  }, []);

  const formatearFecha = (fecha) => {
    if (!fecha) {
      return "Fecha no disponible";
    }

    return new Date(fecha).toLocaleDateString("es-BO");
  };

  return (
    <section className="noticias-page">
      <SectionTitle
        title="Noticias de Oro"
        subtitle="Últimas noticias, comunicados y avisos importantes del Colegio Carlos Medinaceli."
      />

      {cargando && <Loading text="Cargando noticias..." />}

      {mensajeError && <ErrorMessage message={mensajeError} />}

      {!cargando && !mensajeError && noticias.length === 0 && (
        <div className="noticias-empty">
          No existen noticias registradas por el momento.
        </div>
      )}

      {!cargando && !mensajeError && noticias.length > 0 && (
        <div className="noticias-grid">
          {noticias.map((noticia) => (
            <InfoCard
              key={noticia.id}
              title={noticia.titulo || "Noticia"}
              description={noticia.descripcion || "Sin descripción"}
              imageUrl={noticia.imagenUrl}
            >
              <div className="noticia-info">
                <span>{noticia.categoria || "General"}</span>
                <small>{formatearFecha(noticia.fecha)}</small>
              </div>
            </InfoCard>
          ))}
        </div>
      )}
    </section>
  );
}

export default Noticias;