import "./Inicio.css";

function Inicio() {
  return (
    <main className="inicio-page">
      <div className="nieve">
        <span className="nieve-1">*</span>
        <span className="nieve-2">*</span>
        <span className="nieve-3">*</span>
        <span className="nieve-4">*</span>
        <span className="nieve-5">*</span>
        <span className="nieve-6">*</span>
        <span className="nieve-7">*</span>
        <span className="nieve-8">*</span>
        <span className="nieve-9">*</span>
        <span className="nieve-10">*</span>
        <span className="nieve-11">*</span>
        <span className="nieve-12">*</span>
        <span className="nieve-13">*</span>
        <span className="nieve-14">*</span>
        <span className="nieve-15">*</span>
        <span className="nieve-16">*</span>
        <span className="nieve-17">*</span>
        <span className="nieve-18">*</span>
        <span className="nieve-19">*</span>
        <span className="nieve-20">*</span>
      </div>

      <section className="inicio-content">
        <div className="inicio-logo">
          <img src="/logo-colegio.png" alt="Logo Colegio Carlos Medinaceli" />
        </div>

        <p className="inicio-subtitle">
          Sitio oficial del Colegio Carlos Medinaceli
        </p>

        <h1 className="inicio-title">BIENVENIDOS!!!</h1>

        <a className="inicio-button" href="#historia">
          ENTRAR
        </a>

        <p className="inicio-credit">
          Realizado por Roger Flores
        </p>
      </section>
    </main>
  );
}

export default Inicio;