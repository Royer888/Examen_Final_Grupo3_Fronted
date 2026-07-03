import MenuButton from "../common/MenuButton";
import "./SideMenu.css";

function SideMenu({ activeSection, onChangeSection }) {
  return (
    <aside className="side-menu">
      <div className="side-menu-title">CARLOS MEDINACELI</div>

      <MenuButton
        active={activeSection === "contacto"}
        onClick={() => onChangeSection("contacto")}
      >
        Contacto
      </MenuButton>

      <MenuButton
        active={activeSection === "noticias"}
        onClick={() => onChangeSection("noticias")}
      >
        Noticias de Oro
      </MenuButton>

      <MenuButton
        active={activeSection === "docentes"}
        onClick={() => onChangeSection("docentes")}
      >
        Docentes
      </MenuButton>

      <MenuButton
        active={activeSection === "galeria"}
        onClick={() => onChangeSection("galeria")}
      >
        Galería
      </MenuButton>
    </aside>
  );
}

export default SideMenu;