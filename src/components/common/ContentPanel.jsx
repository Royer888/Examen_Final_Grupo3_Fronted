import "./ContentPanel.css";

function ContentPanel({ title, children }) {
  return (
    <section className="content-panel">
      <div className="content-panel-header">
        {title}
      </div>

      <div className="content-panel-body">
        {children}
      </div>
    </section>
  );
}

export default ContentPanel;