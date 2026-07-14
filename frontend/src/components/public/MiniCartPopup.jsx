import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const money = (value) =>
  `${Number(value || 0).toLocaleString("en-RW")} RWF`;

export default function MiniCartPopup({
  product,
  goTo,
  onClose,
  autoCloseDelay = 3500,
}) {
  useEffect(() => {
    if (!product) return undefined;

    const timer = window.setTimeout(onClose, autoCloseDelay);
    return () => window.clearTimeout(timer);
  }, [product, onClose, autoCloseDelay]);

  if (!product) return null;

  const productName = product.title || product.name || "Product";
  const productImage = product.image_url
    ? resolveImageUrl(product.image_url)
    : product.image || "";

  const navigateTo = (path) => {
    onClose();
    goTo(path);
  };

  return (
    <>
      <style>{`
        .mini-cart-popup-layer{position:fixed;inset:0;z-index:120;pointer-events:none}
        .mini-cart-popup{position:absolute;top:82px;right:18px;width:min(340px,calc(100vw - 32px));background:#fff;border:1px solid #dbe3ec;border-radius:14px;box-shadow:0 18px 45px rgba(15,23,42,.2);padding:.85rem;color:#003366;pointer-events:auto;animation:miniCartSlideIn .22s ease-out}
        .mini-cart-popup-head{display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-bottom:.7rem}
        .mini-cart-popup-title{display:inline-flex;align-items:center;gap:.5rem;font-size:.88rem;font-weight:900;color:#166534}
        .mini-cart-popup-close{width:30px;height:30px;border:0;border-radius:999px;background:#f1f5f9;color:#475569;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
        .mini-cart-popup-product{display:grid;grid-template-columns:66px minmax(0,1fr);gap:.75rem;align-items:center}
        .mini-cart-popup-image,.mini-cart-popup-placeholder{width:66px;height:58px;border-radius:9px;background:#f8fafc;border:1px solid #e2e8f0}
        .mini-cart-popup-image{object-fit:contain}
        .mini-cart-popup-placeholder{display:inline-flex;align-items:center;justify-content:center;color:#94a3b8}
        .mini-cart-popup-name{margin:0 0 .25rem;font-size:.9rem;font-weight:850;line-height:1.35;color:#003366;overflow-wrap:anywhere}
        .mini-cart-popup-price{font-size:.83rem;font-weight:900;color:#0f766e}
        .mini-cart-popup-actions{display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin-top:.8rem}
        .mini-cart-popup-actions button{border:0;border-radius:8px;padding:.62rem .7rem;font-size:.78rem;font-weight:850;cursor:pointer}
        .mini-cart-view-btn{background:#e7f5f3;color:#0f766e}
        .mini-cart-checkout-btn{background:#003366;color:#fff}
        @keyframes miniCartSlideIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:600px){
          .mini-cart-popup{top:72px;right:8px;width:min(300px,calc(100vw - 16px));padding:.72rem;border-radius:12px}
          .mini-cart-popup-product{grid-template-columns:56px minmax(0,1fr);gap:.6rem}
          .mini-cart-popup-image,.mini-cart-popup-placeholder{width:56px;height:50px}
          .mini-cart-popup-name{font-size:.82rem}
          .mini-cart-popup-price{font-size:.76rem}
          .mini-cart-popup-actions{gap:.45rem;margin-top:.65rem}
          .mini-cart-popup-actions button{padding:.55rem .6rem;font-size:.72rem}
        }
      `}</style>

      <div className="mini-cart-popup-layer" aria-live="polite">
        <aside className="mini-cart-popup">
          <div className="mini-cart-popup-head">
            <div className="mini-cart-popup-title">
              <FontAwesomeIcon icon={faCartShopping} />
              Added to cart
            </div>

            <button
              type="button"
              className="mini-cart-popup-close"
              onClick={onClose}
              aria-label="Close cart notification"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="mini-cart-popup-product">
            {productImage ? (
              <img
                src={productImage}
                alt={productName}
                className="mini-cart-popup-image"
              />
            ) : (
              <div className="mini-cart-popup-placeholder">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            )}

            <div>
              <p className="mini-cart-popup-name">{productName}</p>
              <div className="mini-cart-popup-price">
                {money(product.price)}
              </div>
            </div>
          </div>

          <div className="mini-cart-popup-actions">
            <button
              type="button"
              className="mini-cart-view-btn"
              onClick={() => navigateTo("/cart")}
            >
              View cart
            </button>

            <button
              type="button"
              className="mini-cart-checkout-btn"
              onClick={() => navigateTo("/checkout")}
            >
              Checkout
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
