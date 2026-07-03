import SnowEffect from "../components/common/SnowEffect";
import "./Inicio.css";

function Inicio({ onEntrar }) {
  return (
    <main className="inicio-page">
      <SnowEffect />

      <section className="inicio-content">
        <div className="inicio-logo">
          <img
          src={`${import.meta.env.BASE_URL}Logo.jpg`}
          alt="Logo Colegio Carlos Medinaceli"
          />
        </div>

        <p className="inicio-subtitle">
          Sitio oficial del Colegio Carlos Medinaceli
        </p>

        <h1 className="inicio-title">BIENVENIDOS!!!</h1>

        <button
          type="button"
          className="inicio-button"
          onClick={onEntrar}
        >
          ENTRAR
        </button>

        <p className="inicio-credit">
          Roger Flores --- Aide Coro Mendo --- Jorge Roman Ochoa Saldaña
        </p>
      </section>
    </main>
  );
}

export default Inicio;