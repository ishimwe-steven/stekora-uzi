import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ title, price, tag, rating }) {
  return (
    <article className="card product">
      <span>{tag}</span>
      <h3>{title}</h3>
      <p>Rating {rating}</p>
      <strong>{price}</strong>
      <div>
        <button>Details</button>
        <button className="icon-btn" aria-label="Cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </article>
  );
}
