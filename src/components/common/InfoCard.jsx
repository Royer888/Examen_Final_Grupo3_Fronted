import "./InfoCard.css";

function InfoCard({ title, description, imageUrl, children }) {
  return (
    <article className="info-card">
      {imageUrl && (
        <img className="info-card-image" src={imageUrl} alt={title} />
      )}

      <div className="info-card-body">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </article>
  );
}

export default InfoCard;