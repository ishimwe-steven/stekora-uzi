import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getProduct } from "../../services/productApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";
import MiniCartPopup from "../../components/public/MiniCartPopup";

export default function ProductDetails({ productId, addToCart, goTo }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError("");
        setProduct(await getProduct(productId));
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  return (
    <>
      <style>{`
        .product-details-page{min-height:100vh;background:#f5f5f5;padding:2.5rem 1rem;color:#003366}
        .product-details-container{max-width:68rem;margin:0 auto}
        .product-back{border:0;background:transparent;color:#003366;font-weight:800;cursor:pointer;margin-bottom:1rem}
        .product-details-card{display:grid;grid-template-columns:1fr;gap:2rem;background:#fff;border-radius:18px;padding:1.5rem;border:1px solid #e2e8f0;box-shadow:0 16px 36px rgba(15,23,42,.08)}
        .product-details-image{width:100%;height:360px;object-fit:contain;border-radius:14px;background:#f1f5f9}
        .product-details-badge{display:inline-block;background:#fff4dc;color:#92400e;border-radius:999px;padding:.4rem .75rem;font-size:.8rem;font-weight:800}
        .product-details-title{font-size:2rem;margin:.8rem 0 .5rem}
        .product-details-price{font-size:1.8rem;font-weight:900;margin:1rem 0}
        .product-details-text{color:#526175;line-height:1.75;white-space:pre-wrap}
        .product-details-stock{font-weight:800;margin:.8rem 0}
        .product-details-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.2rem}
        .product-details-actions button{border:0;border-radius:9px;padding:.8rem 1.1rem;font-weight:800;cursor:pointer}
        .product-add-cart{background:#003366;color:#fff}.product-contact{background:#e7f5f3;color:#0f766e}
        @media(min-width:760px){.product-details-card{grid-template-columns:1fr 1fr}.product-details-image{height:100%;min-height:420px}}
      `}</style>

      <MiniCartPopup product={popupProduct} goTo={goTo} onClose={() => setPopupProduct(null)} />

      <div className="product-details-page">
        <div className="product-details-container">
          <button className="product-back" onClick={() => goTo("/shop")}><FontAwesomeIcon icon={faArrowLeft} /> Back to shop</button>
          {loading && <p>Loading product...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && product && (
            <article className="product-details-card">
              <div>{product.image_url && <img className="product-details-image" src={resolveImageUrl(product.image_url)} alt={product.title} />}</div>
              <div>
                <span className="product-details-badge">{product.category || "Product"}</span>
                <h1 className="product-details-title">{product.title}</h1>
                <p className="product-details-text">{product.description}</p>
                <div className="product-details-price">{Number(product.price || 0).toFixed(2)} RWF</div>
                <div className="product-details-stock">Stock available</div>
                {product.full_description && <><h3>Full details</h3><p className="product-details-text">{product.full_description}</p></>}
                {product.specifications && <><h3>Specifications</h3><p className="product-details-text">{product.specifications}</p></>}
                <div className="product-details-actions">
                  <button
                    className="product-add-cart"
                    onClick={() => {
                      addToCart(product);
                      setPopupProduct(product);
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} /> Add to cart
                  </button>
                 
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </>
  );
}
