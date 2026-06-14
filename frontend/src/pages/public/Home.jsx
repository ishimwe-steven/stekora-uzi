import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../../services/productApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";
import bannerOne from "../../assets/banners/bunner1.png";
import bannerTwo from "../../assets/banners/banner3.png";
import heroImage from "../../assets/image/hero.jpg";
import fullstackImage from "../../assets/image/fullstack.jpg";
import iotImage from "../../assets/image/iot.jpg";

const banners = [bannerOne, bannerTwo];

const PRODUCT_IMAGES = [iotImage, fullstackImage, heroImage];

export default function Home({ goTo }) {
  const [current, setCurrent] = useState(0);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        const response = await getProducts();
        const productList = Array.isArray(response) ? response : response.products || [];
        setFeaturedItems(productList.slice(0, 3));
      } catch (error) {
        console.error(error);
        setFeaturedItems([]);
      } finally {
        setProductsLoading(false);
      }
    }

    loadFeaturedProducts();
  }, []);

  const previousBanner = () => {
    setCurrent((current - 1 + banners.length) % banners.length);
  };

  const nextBanner = () => {
    setCurrent((current + 1) % banners.length);
  };

  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
          --cyan: #22d3ee;
          --indigo: #6366f1;
          --blue: #3b82f6;
        }

        .home-page {
          background: var(--palegray);
          color: var(--richblue);
          min-height: 100vh;
        }

        .ad-slider {
          position: relative;
          width: 100vw;
          height: 140px;
          overflow: hidden;
          margin-left: calc(50% - 50vw);
          background: #dbeafe;
        }

        .ad-slide {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: none;
        }

        .ad-slide.active {
          display: block;
        }

        .ad-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          border: none;
          font-size: 1.5rem;
          padding: 0.3rem 0.6rem;
          cursor: pointer;
          border-radius: 50%;
          z-index: 5;
        }

        .ad-arrow.left {
          left: 1rem;
        }

        .ad-arrow.right {
          right: 1rem;
        }

        .ad-dots {
          position: absolute;
          bottom: 0.75rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.4rem;
        }

        .ad-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
        }

        .ad-dot.active {
          background: yellow;
        }

        .home-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .hero-section {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
          margin-bottom: 2.5rem;
          align-items: center;
        }

        .hero-pretitle {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
          font-size: 1.875rem;
          color: var(--cyan);
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
          color: var(--richblue);
        }

        .hero-description {
          margin-top: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--richblue);
        }

        .home-contact-btn {
          display: inline-block;
          margin-top: 1rem;
          background: var(--blue);
          color: #ffffff;
          font-weight: 500;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          text-decoration: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .home-contact-btn:hover {
          background: var(--richblue);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.14);
          transform: translateY(-1px);
        }

        .gradient-text {
          background: linear-gradient(to right, var(--cyan), var(--indigo));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-image {
          width: 100%;
          height: 220px;
          border-radius: 1rem;
          object-fit: cover;
          border: 1px solid var(--richblue);
        }

        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .featured-header h2 {
          margin: 0 0 0.35rem;
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--richblue);
        }

        .featured-header span {
          color: var(--richblue);
          font-size: 0.95rem;
        }

        .search-input {
          padding: 0.7rem 0.85rem;
          border-radius: 0.5rem;
          border: 1px solid var(--lightgray);
          font-size: 0.85rem;
          outline: none;
          width: 100%;
          max-width: 400px;
          cursor: pointer;
          background: #fff;
        }

        .search-input:focus {
          border-color: var(--richblue);
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .home-product-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .home-product-card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 0.75rem;
          border: 1px solid #dbe3ec;
        }

        .home-product-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          flex: 1;
        }

        .home-product-tag {
          display: inline-block;
          background: #fff4dc;
          color: #92400e;
          border-radius: 8px;
          padding: 6px 9px;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .home-product-title {
          margin: 0;
          font-size: 1.1rem;
          color: var(--richblue);
        }

        .home-product-description {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
          font-size: 0.9rem;
        }

        .home-product-meta {
          margin: 0;
          color: #57708f;
        }

        .home-product-price {
          font-size: 1.45rem;
          color: var(--richblue);
        }

        .home-product-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .home-product-actions button {
          background: #e7f5f3;
          color: #0f766e;
          border-radius: 8px;
          padding: 10px 12px;
          font-weight: 700;
        }

        .home-product-actions .cart-icon-btn {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          font-size: 1rem;
        }

        .no-products {
          font-size: 0.875rem;
          color: var(--lightgray);
          background: #dfe4ea;
          border: 1px dashed var(--richblue);
          border-radius: 0.75rem;
          padding: 1.5rem;
          grid-column: 1 / -1;
        }

        @media (min-width: 640px) {
          .ad-slider {
            height: 150px;
            width: 100%;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .ad-slider {
            height: 110px;
            width: 100%;
          }

          .hero-section {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-image {
            height: 320px;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 480px) {
          .home-container {
            padding-top: 1.5rem;
          }

          .hero-section {
            text-align: center;
            padding: 0 25px;
            margin-top: -0.5rem;
          }

          .hero-pretitle {
            font-size: 1.35rem;
          }

          .hero-title {
            font-size: 1.6rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-image {
            display: none;
          }

          .ad-slider {
            height: 110px;
            width: 100%;
          }

          .ad-arrow {
            font-size: 1.1rem;
            padding: 0.2rem 0.4rem;
          }

          .ad-dots {
            bottom: 0.4rem;
          }

          .ad-dot {
            width: 6px;
            height: 6px;
          }

          .featured-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .search-input {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="home-page">
        <div className="ad-slider">
          {banners.map((img, index) => (
            <img
              key={img}
              src={img}
              className={`ad-slide ${index === current ? "active" : ""}`}
              alt="Advertisement"
            />
          ))}

          <button className="ad-arrow left" onClick={previousBanner} aria-label="Previous banner">
            ‹
          </button>
          <button className="ad-arrow right" onClick={nextBanner} aria-label="Next banner">
            ›
          </button>

          <div className="ad-dots">
            {banners.map((img, index) => (
              <button
                key={img}
                className={`ad-dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="home-container">
          <section className="hero-section">
            <div>
              <p className="hero-pretitle">Stekora Tech</p>

              <h1 className="hero-title">
                Where ideas become <span className="gradient-text">digital solutions</span>
              </h1>

              <p className="hero-description">
                We are an IT services studio delivering web applications, embedded
                systems and automation. From concept to deployment, we help you
                design, build and manage reliable digital products.
              </p>

              <button className="home-contact-btn" onClick={() => goTo("/contact")}>
                Get in Touch
              </button>
            </div>

            <img src={heroImage} alt="Stekora Tech electronics workspace" className="hero-image" />
          </section>

          <section>
            <div className="featured-header">
              <div>
                <h2>Featured products & services</h2>
                <span>Good quality and reliability</span>
              </div>

              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value=""
                readOnly
                onClick={() => goTo("/shop")}
                onFocus={() => goTo("/shop")}
              />
            </div>

            <div className="products-grid">
              {productsLoading && <p className="no-products">Loading products...</p>}

              {!productsLoading &&
                featuredItems.map((item, index) => {
                  const name = item.name || item.title || "Product";
                  const price = item.price ? `R${item.price}` : "Contact us";
                  const image = item.image || (item.image_url ? resolveImageUrl(item.image_url) : "") || PRODUCT_IMAGES[index % PRODUCT_IMAGES.length];

                  return (
                    <div className="home-product-card" key={item.id || name}>
                      <img src={image} alt={name} />
                      <div className="home-product-body">
                        <span className="home-product-tag">{item.category || item.tag || "Product"}</span>
                        <h3 className="home-product-title">{name}</h3>
                        <p className="home-product-description">
                          {item.description || "Quality Stekora Tech product or service package."}
                        </p>
                        <p className="home-product-meta">Rating {item.rating || "4.8"}</p>
                        <strong className="home-product-price">{price}</strong>
                        <div className="home-product-actions">
                          <button>Details</button>
                          <button className="cart-icon-btn" aria-label={`Add ${name} to cart`}>
                            <FontAwesomeIcon icon={faCartShopping} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {!productsLoading && featuredItems.length === 0 && (
                <p className="no-products">No product posted yet. Please check the shop again soon.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
