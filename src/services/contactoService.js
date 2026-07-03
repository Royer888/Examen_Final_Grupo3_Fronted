import api from "./api";

export const enviarMensajeContacto = (data) => {
    return api.post("/contactos", data);
};