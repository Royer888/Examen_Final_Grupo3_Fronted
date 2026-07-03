import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import ErrorMessage from "../components/common/ErrorMessage";
import { enviarMensajeContacto } from "../services/contactoService";
import "./Contacto.css";

function Contacto() {
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: "",
        estado: "PENDIENTE",
    });

    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    const manejarCambio = (event) => {
        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    const validarFormulario = () => {
        if (!formulario.nombre.trim()) {
            return "El nombre es obligatorio.";
        }

        if (!formulario.correo.trim()) {
            return "El correo electrónico es obligatorio.";
        }

        if (!formulario.asunto.trim()) {
            return "El asunto es obligatorio.";
        }

        if (!formulario.mensaje.trim()) {
            return "El mensaje es obligatorio.";
        }

        return "";
    };

    const enviarFormulario = async (event) => {
        event.preventDefault();

        setMensajeExito("");
        setMensajeError("");

        const error = validarFormulario();

        if (error) {
            setMensajeError(error);
            return;
        }

        try {
            setCargando(true);

            await enviarMensajeContacto(formulario);

            setMensajeExito("Mensaje enviado correctamente.");
            setFormulario({
                nombre: "",
                correo: "",
                asunto: "",
                mensaje: "",
                estado: "PENDIENTE",
            });
        } catch {
            setMensajeError(
                "No se pudo enviar el mensaje. Verifique la conexión con el backend."
            );
        } finally {
            setCargando(false);
        }
    };

    return (
        <section className="contacto-page">
            <SectionTitle
                title="Contacto"
                subtitle="Envíanos tu consulta, sugerencia o mensaje. El colegio recibirá la información enviada desde este formulario."
            />

            <form className="contacto-form" onSubmit={enviarFormulario}>
                <div className="contacto-form-group">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        placeholder="Ingrese su nombre completo"
                    />
                </div>

                <div className="contacto-form-group">
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formulario.correo}
                        onChange={manejarCambio}
                        placeholder="ejemplo@gmail.com"
                    />
                </div>

                <div className="contacto-form-group">
                    <label htmlFor="asunto">Asunto</label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formulario.asunto}
                        onChange={manejarCambio}
                        placeholder="Motivo del mensaje"
                    />
                </div>

                <div className="contacto-form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                        placeholder="Escriba su mensaje"
                        rows="5"
                    ></textarea>
                </div>

                {mensajeError && <ErrorMessage message={mensajeError} />}

                {mensajeExito && (
                    <div className="contacto-success">
                        {mensajeExito}
                    </div>
                )}

                <button
                    type="submit"
                    className="contacto-button"
                    disabled={cargando}
                >
                    {cargando ? "Enviando..." : "Enviar mensaje"}
                </button>
            </form>
        </section>
    );
}

export default Contacto;