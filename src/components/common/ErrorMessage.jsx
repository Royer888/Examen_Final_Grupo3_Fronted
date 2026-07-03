import "./ErrorMessage.css";

function ErrorMessage({ message = "Ocurrió un error al cargar la información." }) {
  return (
    <div className="error-message">
      <strong>Error</strong>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;