import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../../services/productApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";
import bannerOne from "../../assets/banners/mukunzi.png";
import bannerTwo from "../../assets/banners/uzii.png";
import mobileBannerOne from "../../assets/banners/freightQ.png";
import mobileBannerTwo from "../../assets/banners/camera.png";
import heroImage from "../../assets/image/hero.jpg";
import iotImage from "../../assets/image/iot.jpg";

const desktopBanners = [bannerOne, bannerTwo];
const mobileBanners = [mobileBannerOne, mobileBannerTwo];
const PRODUCT_IMAGES = [iotImage, heroImage];
const HERO_TEXT = "Where ideas become digital solutions";

export default function Home({ goTo, addToCart }) {
  const [current, setCurrent] = useState(0);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 600 : false
  );

  const [featuredItems, setFeaturedItems] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [notice, setNotice] = useState("");

  const banners = isMobile ? mobileBanners : desktopBanners;

  useEffect(() => {
    const h = () => {
      setIsMobile(window.innerWidth <= 600);
      setCurrent(0);
    };

    window.addEventListener("resize", h);

    return () => window.removeEventListener("resize", h);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((i) => (i + 1) % banners.length),
      4000
    );

    return () => clearInterval(t);
  }, [banners.length]);

  useEffect(() => {
    let t;

    if (typingIndex < HERO_TEXT.length) {
      t = window.setTimeout(() => {
        setTypedText((v) => v + HERO_TEXT.charAt(typingIndex));
        setTypingIndex((i) => i + 1);
      }, 80);
    } else {
      t = window.setTimeout(() => {
        setTypedText("");
        setTypingIndex(0);
      }, 2000);
    }

    return () => window.clearTimeout(t);
  }, [typingIndex]);

  useEffect(() => {
    async function load() {
      try {
        const r = await getProducts();
        const list = Array.isArray(r) ? r : r.products || [];
        setFeaturedItems(list.slice(0, 3));
      } catch (e) {
        console.error(e);
        setFeaturedItems([]);
      } finally {
        setProductsLoading(false);
      }
    }

    load();
  }, []);

  const add = (item) => {
    addToCart(item);
    setNotice(`${item.title || "Product"} added to cart.`);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
          --blue: #3b82f6;
        }

        .home-page {
          background: var(--palegray);
          color: var(--richblue);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ad-slider {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
          background: #dbeafe;
        }

        .ad-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
        }

        .ad-slide.active {
          opacity: 1;
          z-index: 2;
        }

        .ad-slide img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: fill;
        }

        .ad-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          border: 0;
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
          z-index: 6;
        }

        .ad-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 0;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 0;
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
          color: var(--blue);
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
          color: var(--blue);
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
          color: #fff;
          font-weight: 500;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          border: 0;
          cursor: pointer;
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

        .search-input {
          padding: 0.7rem 0.85rem;
          border-radius: 0.5rem;
          border: 1px solid var(--lightgray);
          font-size: 0.85rem;
          width: 100%;
          max-width: 400px;
          background: #fff;
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
          object-fit: contain;
          border-radius: 0.75rem;
        }

        .home-product-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          flex: 1;
        }

        .home-product-tag {
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
        }

        .home-product-description {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
          font-size: 0.9rem;
        }

        .home-product-price {
          font-size: 1.45rem;
        }

        .home-product-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .home-product-actions button {
          background: #e7f5f3;
          color: #0f766e;
          border: 0;
          border-radius: 8px;
          padding: 10px 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .cart-icon-btn {
          width: 46px;
          height: 46px;
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

        .home-notice {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
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

        @media (max-width: 600px) {
          .ad-slider {
            height: 100px;
            background: var(--palegray);
            margin-bottom: -3.5rem;
          }

          .ad-slide img {
            background-size: 100% 100%;
            background-position: 100% top;
            width: 100%;
            margin-top: -12px;
            object-fit: contain;
          }

          .ad-arrow {
            font-size: 1rem;
            padding: 0.15rem 0.35rem;
            margin-top: -0.6rem;
          }

          .ad-arrow.left {
            left: 0.5rem;
          }

          .ad-arrow.right {
            right: 0.5rem;
          }

          .ad-dots {
            bottom: 0.45rem;
          }

          .ad-dot {
            width: 6px;
            height: 6px;
            margin-top: -1.8rem;
          }

          .home-container {
            padding: 2rem 1rem;
          }

          .hero-section {
            text-align: center;
            padding: 0 1rem;
            gap: 1.2rem;
          }

          .hero-pretitle {
            font-size: 1.35rem;
            letter-spacing: 5px;
          }

          .hero-title {
            font-size: 1.7rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-image {
            display: none;
          }

          .home-contact-btn {
            padding: 0.7rem 1.8rem;
          }

          .featured-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .search-input {
            max-width: 100%;
          }
        }

        @media (max-width: 400px) {
          .ad-slider {
            height: 100px;
            background: var(--palegray);
            margin-bottom: -3.5rem;
          }

          .ad-slide img {
            background-size: 100% 100%;
            background-position: 100% top;
            width: 100%;
            margin-top: -20px;
            object-fit: contain;
          }

          .ad-arrow {
            font-size: 1rem;
            padding: 0.15rem 0.35rem;
            margin-top: -1.3rem;
          }

          .ad-dot {
            width: 6px;
            height: 6px;
            margin-top: -2.8rem;
          }

          .hero-title {
            font-size: 1.55rem;
          }

          .hero-pretitle {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="home-page">
        <div className="ad-slider">
          {banners.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className={`ad-slide ${index === current ? "active" : ""}`}
            >
              <img
                src={img}
                alt={`Advertisement banner ${index + 1}`}
              />
            </div>
          ))}

          <button
            className="ad-arrow left"
            onClick={() =>
              setCurrent(
                (i) => (i - 1 + banners.length) % banners.length
              )
            }
          >
            ‹
          </button>

          <button
            className="ad-arrow right"
            onClick={() =>
              setCurrent((i) => (i + 1) % banners.length)
            }
          >
            ›
          </button>

          <div className="ad-dots">
            {banners.map((img, index) => (
              <button
                key={`${img}-dot-${index}`}
                className={`ad-dot ${
                  index === current ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>

        <div className="home-container">
          <section className="hero-section">
            <div>
              <p className="hero-pretitle">Stekora Tech</p>

              <h1 className="hero-title">
                {typedText}
                <span aria-hidden="true">|</span>
              </h1>

              <p className="hero-description">
                We are an IT services studio delivering web applications,
                embedded systems and automation. From concept to deployment,
                we help you design, build and manage reliable digital products.
              </p>

              <button
                className="home-contact-btn"
                onClick={() => goTo("/contact")}
              >
                Get in Touch
              </button>
            </div>

            <img
              src={heroImage}
              alt="Stekora Tech electronics workspace"
              className="hero-image"
            />
          </section>

          <section>
            {notice && (
              <div className="home-notice">
                {notice}
              </div>
            )}

            <div className="featured-header">
              <div>
                <h2>Product On Lowest Price</h2>
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
              {productsLoading && (
                <p className="no-products">
                  Loading products...
                </p>
              )}

              {!productsLoading &&
                featuredItems.map((item, index) => {
                  const name =
                    item.name || item.title || "Product";

                  const price = item.price
                    ? `${item.price} RWF`
                    : "Contact us";

                  const image =
                    item.image ||
                    (item.image_url
                      ? resolveImageUrl(item.image_url)
                      : "") ||
                    PRODUCT_IMAGES[
                      index % PRODUCT_IMAGES.length
                    ];

                  return (
                    <div
                      className="home-product-card"
                      key={item.id || name}
                    >
                      <img
                        src={image}
                        alt={name}
                      />

                      <div className="home-product-body">
                        <span className="home-product-tag">
                          {item.category || "Product"}
                        </span>

                        <h3 className="home-product-title">
                          {name}
                        </h3>

                        <p className="home-product-description">
                          {item.description ||
                            "Quality Stekora Tech product or service package."}
                        </p>

                        <p>
                          Rating {item.rating || "4.8"}
                        </p>

                        <strong className="home-product-price">
                          {price}
                        </strong>

                        <div className="home-product-actions">
                          <button
                            onClick={() =>
                              goTo(`/product/${item.id}`)
                            }
                          >
                            Details
                          </button>

                          <button
                            className="cart-icon-btn"
                            onClick={() => add(item)}
                            aria-label={`Add ${name} to cart`}
                          >
                            <FontAwesomeIcon
                              icon={faCartShopping}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {!productsLoading &&
                featuredItems.length === 0 && (
                  <p className="no-products">
                    No product posted yet. Please check the
                    shop again soon.
                  </p>
                )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}