import "./Loading.css";

function Loading({ text = "Cargando información..." }) {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default Loading;