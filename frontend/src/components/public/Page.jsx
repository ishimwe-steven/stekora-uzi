export default function Page({ title, text, children }) {
  return (
    <section className="page">
      <div className="page-head">
        <p className="eyebrow">Stekora Tech Academy</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {children}
    </section>
  );
}
