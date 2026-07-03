import api from "./api";

export const obtenerDocentes = () => {
  return api.get("/docentes");
};