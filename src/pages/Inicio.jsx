import SnowEffect from "../components/common/SnowEffect";
import "./Inicio.css";

function Inicio({ onEntrar }) {
  return (
    <main className="inicio-page">
      <SnowEffect />

      <section className="inicio-content">
        <div className="inicio-logo">
          <img src="/logo-colegio.png" alt="Logo Colegio Carlos Medinaceli" />
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
          Realizado por Roger Flores
        </p>
      </section>
    </main>
  );
}

export default Inicio;