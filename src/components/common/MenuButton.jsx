import "./MenuButton.css";

function MenuButton({ children, active = false, onClick }) {
  return (
    <button
      type="button"
      className={active ? "menu-button active" : "menu-button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MenuButton;