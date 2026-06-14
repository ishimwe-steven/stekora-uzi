export default function Section({ title, action, onAction, children }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        {action && <button onClick={onAction}>{action}</button>}
      </div>
      {children}
    </section>
  );
}
