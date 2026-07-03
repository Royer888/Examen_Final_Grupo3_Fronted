import { useState } from "react";
import Inicio from "./pages/Inicio";
import InterfazPrincipal from "./pages/InterfazPrincipal";
import "./App.css";

function App() {
  const [mostrarInterfaz, setMostrarInterfaz] = useState(false);

  return (
    <>
      {mostrarInterfaz ? (
        <InterfazPrincipal />
      ) : (
        <Inicio onEntrar={() => setMostrarInterfaz(true)} />
      )}
    </>
  );
}

export default App;