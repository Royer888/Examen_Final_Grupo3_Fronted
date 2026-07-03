import { useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import InfoCard from "../components/common/InfoCard";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";
import {
    obtenerGaleria,
    obtenerGaleriaPorCategoria,
} from "../services/galeriaService";
import "./Galeria.css";

function Galeria() {
    const [imagenes, setImagenes] = useState([]);
    const [categoriaActiva, setCategoriaActiva] = useState("TODOS");
    const [cargando, setCargando] = useState(true);
    const [mensajeError, setMensajeError] = useState("");

    const categorias = [
        { id: "TODOS", label: "Todos" },
        { id: "BANDA_EX_ALUMNOS", label: "Banda Ex Alumnos" },
        { id: "SURIS", label: "Fraternidad Suris" },
        { id: "PROMOCIONES", label: "Promociones" },
        { id: "DEPORTES", label: "Deportes" },
    ];

    useEffect(() => {
        cargarGaleria("TODOS");
    }, []);

    const cargarGaleria = async (categoria) => {
        try {
            setCargando(true);
            setMensajeError("");
            setCategoriaActiva(categoria);

            const respuesta =
                categoria === "TODOS"
                    ? await obtenerGaleria()
                    : await obtenerGaleriaPorCategoria(categoria);

            setImagenes(respuesta.data);
        } catch {
            setMensajeError(
                "No se pudo cargar la galería. Verifique la conexión con el backend."
            );
        } finally {
            setCargando(false);
        }
    };

    const formatearFecha = (fecha) => {
        if (!fecha) {
            return "Fecha no disponible";
        }

        return new Date(fecha).toLocaleDateString("es-BO");
    };

    const obtenerNombreCategoria = (categoria) => {
        const categoriaEncontrada = categorias.find((item) => item.id === categoria);

        return categoriaEncontrada ? categoriaEncontrada.label : "General";
    };

    return (
        <section className="galeria-page">
            <SectionTitle
                title="Galería"
                subtitle="Imágenes de actividades, promociones, deportes, fraternidad Suris y banda de ex alumnos del Colegio Carlos Medinaceli."
            />

            <div className="galeria-filtros">
                {categorias.map((categoria) => (
                    <button
                        key={categoria.id}
                        type="button"
                        className={
                            categoriaActiva === categoria.id
                                ? "galeria-filtro active"
                                : "galeria-filtro"
                        }
                        onClick={() => cargarGaleria(categoria.id)}
                    >
                        {categoria.label}
                    </button>
                ))}
            </div>

            {cargando && <Loading text="Cargando galería..." />}

            {mensajeError && <ErrorMessage message={mensajeError} />}

            {!cargando && !mensajeError && imagenes.length === 0 && (
                <div className="galeria-empty">
                    No existen imágenes registradas para esta categoría.
                </div>
            )}

            {!cargando && !mensajeError && imagenes.length > 0 && (
                <div className="galeria-grid">
                    {imagenes.map((imagen) => (
                        <InfoCard
                            key={imagen.id}
                            title={imagen.titulo}
                            description={imagen.descripcion}
                            imageUrl={imagen.imagenUrl}
                        >
                            <div className="galeria-info">
                                <span>{obtenerNombreCategoria(imagen.categoria)}</span>
                                <small>{formatearFecha(imagen.fecha)}</small>
                            </div>
                        </InfoCard>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Galeria;