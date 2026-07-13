import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const money = (value) =>
  `${Number(value || 0).toLocaleString("en-RW")} RWF`;

export default function Cart({
  cart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  goTo,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  return (
    <>
      <style>{`
        .cart-page{min-height:100vh;background:#f5f5f5;padding:2.5rem 1rem;color:#003366}
        .cart-container{max-width:72rem;margin:0 auto}
        .cart-head{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem}
        .cart-head h1{margin:0;font-size:2rem}
        .cart-clear{border:0;border-radius:8px;background:#fee2e2;color:#991b1b;padding:.7rem 1rem;font-weight:800;cursor:pointer}
        .cart-grid{display:grid;gap:1rem}
        .cart-item{display:grid;grid-template-columns:90px 1fr auto;gap:1rem;align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:1rem}
        .cart-item img{width:90px;height:75px;object-fit:contain;border-radius:10px;background:#f1f5f9}
        .cart-item h2{font-size:1rem;margin:0 0 .35rem}
        .cart-price{font-weight:900}
        .cart-controls{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;justify-content:flex-end}
        .cart-controls button{border:0;border-radius:8px;width:36px;height:36px;cursor:pointer;background:#e7f5f3;color:#0f766e}
        .cart-controls .remove{background:#fee2e2;color:#991b1b}
        .cart-summary{margin-top:1.5rem;background:#fff;border-radius:14px;padding:1.25rem;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
        .cart-total{font-size:1.35rem;font-weight:900}
        .cart-checkout{border:0;background:#003366;color:white;border-radius:8px;padding:.8rem 1.2rem;font-weight:800;cursor:pointer}
        .cart-empty{background:#fff;border:1px dashed #94a3b8;border-radius:14px;padding:2rem;text-align:center}
        @media(max-width:620px){.cart-item{grid-template-columns:70px 1fr}.cart-item img{width:70px;height:65px}.cart-controls{grid-column:1/-1;justify-content:flex-start}}
      `}</style>

      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-head">
            <h1>Your Cart</h1>

            {cart.length > 0 && (
              <button className="cart-clear" onClick={clearCart}>
                Clear cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <h2>Your cart is empty</h2>

              <button
                className="cart-checkout"
                onClick={() => goTo("/shop")}
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-grid">
                {cart.map((item) => (
                  <article className="cart-item" key={item.id}>
                    {item.image_url ? (
                      <img
                        src={resolveImageUrl(item.image_url)}
                        alt={item.title}
                      />
                    ) : (
                      <div />
                    )}

                    <div>
                      <h2>{item.title}</h2>
                      <div className="cart-price">
                        {money(item.price)}
                      </div>
                    </div>

                    <div className="cart-controls">
                      <button
                        type="button"
                        aria-label="Reduce quantity"
                        onClick={() =>
                          updateCartQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          updateCartQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>

                      <button
                        type="button"
                        className="remove"
                        aria-label="Remove product"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-total">
                  Total: {money(total)}
                </div>

                <button
                  className="cart-checkout"
                  type="button"
                  onClick={() => goTo("/checkout")}
                >
                  Request order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}