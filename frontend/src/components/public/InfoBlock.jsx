export default function InfoBlock({ title, text }) {
  return (
    <article className="info-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
