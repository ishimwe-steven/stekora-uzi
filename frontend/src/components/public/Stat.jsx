export default function Stat({ label, value }) {
  return (
    <article className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
