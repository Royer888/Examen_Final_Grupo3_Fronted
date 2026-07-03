import api from "./api";

export const obtenerNoticias = () => {
    return api.get("/noticias");
};