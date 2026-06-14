import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="card">
      <FontAwesomeIcon icon={Icon} />
      <h3>{title}</h3>
      <p>{text}</p>
      <button>Learn More</button>
    </article>
  );
}
