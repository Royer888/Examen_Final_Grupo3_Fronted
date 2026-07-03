import api from "./api";

export const obtenerGaleria = () => {
    return api.get("/galeria");
};

export const obtenerGaleriaPorCategoria = (categoria) => {
    return api.get(`/galeria/categoria/${categoria}`);
};