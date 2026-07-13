import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../../services/productApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

export default function Shop({ goTo, addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await getProducts();

        const productList = Array.isArray(response)
          ? response
          : response.products || [];

        setProducts(productList);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const name = product.name || product.title || "";
    const description = product.description || "";
    const term = searchTerm.trim().toLowerCase();

    return (
      name.toLowerCase().includes(term) ||
      description.toLowerCase().includes(term)
    );
  });

  const handleAddToCart = (product) => {
    if (typeof addToCart !== "function") {
      setNotice("Cart is currently unavailable.");
      window.setTimeout(() => setNotice(""), 2200);
      return;
    }

    addToCart(product);

    setNotice(`${product.title || product.name || "Product"} added to cart.`);

    window.setTimeout(() => {
      setNotice("");
    }, 2200);
  };

  const openProductDetails = (productId) => {
    if (typeof goTo === "function") {
      goTo(`/product/${productId}`);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        }

        .shop-page {
          min-height: 100vh;
          background-color: var(--palegray);
          color: var(--richblue);
        }

        .shop-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .shop-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem;
        }

        .shop-search-input {
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid var(--lightgray);
          background: #ffffff;
          color: var(--richblue);
          font-size: 0.85rem;
          outline: none;
          width: 100%;
          max-width: 400px;
          margin-bottom: 2rem;
          box-sizing: border-box;
        }

        .shop-search-input:focus {
          border-color: var(--richblue);
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .shop-product-card {
          background: #ffffff;
          border: 1px solid rgba(0, 51, 102, 0.14);
          border-radius: 0.75rem;
          padding: 1.25rem;
          box-shadow: 0 10px 24px rgba(0, 51, 102, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 0;
          overflow: hidden;
        }

        .shop-product-image-wrapper {
          width: 100%;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 0.75rem;
          border: 1px solid #dbe3ec;
          background: #f8fafc;
          padding: 0.75rem;
          box-sizing: border-box;
        }

        .shop-product-image {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
          border-radius: 0.5rem;
        }

        .shop-product-image-placeholder {
          width: 100%;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.75rem;
          border: 1px dashed #cbd5e1;
          background: #f8fafc;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .shop-product-badge {
          align-self: flex-start;
          background: #fff4dc;
          color: #92400e;
          border-radius: 999px;
          padding: 0.35rem 0.65rem;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .shop-product-title {
          margin: 0;
          color: var(--richblue);
          font-size: 1.1rem;
          overflow-wrap: anywhere;
        }

        .shop-product-desc {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .shop-product-price {
          color: var(--richblue);
          font-size: 1.4rem;
        }

        .shop-product-actions {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }

        .shop-product-actions button {
          border: 0;
          background: #e7f5f3;
          color: #0f766e;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          font-weight: 800;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background-color 0.2s ease;
        }

        .shop-product-actions button:hover {
          background: #d5efeb;
          transform: translateY(-1px);
        }

        .shop-product-actions .cart-btn {
          width: 42px;
          height: 42px;
          padding: 0;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .status-text {
          font-size: 0.9rem;
          color: var(--lightgray);
          text-align: center;
          margin-top: 2rem;
        }

        .shop-notice {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .shop-empty-panel {
          background: #dfe4ea;
          border: 1px dashed var(--richblue);
          border-radius: 0.75rem;
          padding: 2rem;
          color: var(--richblue);
        }

        .shop-empty-panel h2 {
          margin-top: 0;
        }

        .shop-no-results {
          font-size: 0.9rem;
          color: var(--lightgray);
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 900px) {
          .products-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .shop-container {
            padding: 2rem 0.8rem;
          }

          .shop-product-card {
            padding: 1rem;
          }

          .shop-product-image-wrapper,
          .shop-product-image-placeholder {
            height: 210px;
          }

          .shop-product-actions {
            width: 100%;
          }

          .shop-product-actions > button:first-child {
            flex: 1;
          }
        }
      `}</style>

      <div className="shop-page">
        <div className="shop-container">
          <h1 className="shop-title">Shop</h1>

          <input
            type="text"
            className="shop-search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {notice && <div className="shop-notice">{notice}</div>}

          {loading && (
            <p className="status-text">Loading products...</p>
          )}

          {error && <p className="status-text">{error}</p>}

          {!loading && !error && filteredProducts.length > 0 && (
            <div className="products-grid">
              {filteredProducts.map((product) => {
                const name =
                  product.name || product.title || "Product";

                const price =
                  product.price !== undefined &&
                  product.price !== null &&
                  product.price !== ""
                    ? `${Number(product.price).toLocaleString("en-RW", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} RWF`
                    : "Contact us";

                const image = product.image_url
                  ? resolveImageUrl(product.image_url)
                  : "";

                return (
                  <article
                    className="shop-product-card"
                    key={product.id || name}
                  >
                    {image ? (
                      <div className="shop-product-image-wrapper">
                        <img
                          className="shop-product-image"
                          src={image}
                          alt={name}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                            event.currentTarget.parentElement.innerHTML =
                              '<span style="color:#94a3b8;font-size:0.85rem;">Image unavailable</span>';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="shop-product-image-placeholder">
                        No product image
                      </div>
                    )}

                    <span className="shop-product-badge">
                      {product.category || "Product"}
                    </span>

                    <h2 className="shop-product-title">{name}</h2>

                    <p className="shop-product-desc">
                      {product.description ||
                        "Quality Stekora Tech product or service package."}
                    </p>

                    <strong className="shop-product-price">
                      {price}
                    </strong>

                    <div className="shop-product-actions">
                      <button
                        type="button"
                        onClick={() => openProductDetails(product.id)}
                      >
                        Details
                      </button>

                      <button
                        type="button"
                        className="cart-btn"
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${name} to cart`}
                        title="Add to cart"
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="shop-empty-panel">
              <h2>No product posted yet</h2>

              <p>
                We're preparing products and services for the shop.
                Please check back soon.
              </p>

              <span>Email: info@stekoratech.com</span>
            </div>
          )}

          {!loading &&
            !error &&
            products.length > 0 &&
            filteredProducts.length === 0 && (
              <p className="shop-no-results">
                No matching products found for{" "}
                <span style={{ color: "#003366" }}>
                  {searchTerm}
                </span>
              </p>
            )}
        </div>
      </div>
    </>
  );
}