import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { getPaymentSettings } from "../../services/paymentApi";
import mtnphoto from "../../assets/image/MTN_logo.jpg";

const money = (value) =>
  `${Number(value || 0).toLocaleString("en-RW")} RWF`;

export default function Checkout({ cart, goTo }) {
  const [paymentSettings, setPaymentSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const [customer, setCustomer] = useState({
    full_name: "",
    phone: "",
    location: "",
    delivery_method: "pickup",
  });

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) =>
          sum +
          Number(item.price || 0) *
            Number(item.quantity || 1),
        0
      ),
    [cart]
  );

  useEffect(() => {
    async function loadPaymentSettings() {
      try {
        setLoading(true);
        setError("");

        const response = await getPaymentSettings();
        setPaymentSettings(response);
      } catch (err) {
        console.error(err);
        setError(
          err.message || "Failed to load payment information"
        );
      } finally {
        setLoading(false);
      }
    }

    loadPaymentSettings();
  }, []);

  const paymentCode = paymentSettings
    ? `*182*1*1*${paymentSettings.momo_number}*${Math.round(
        total
      )}#`
    : "";

  const orderItemsMessage = cart
    .map(
      (item) =>
        `- ${item.title} x${item.quantity}: ${money(
          Number(item.price || 0) * item.quantity
        )}`
    )
    .join("\n");

  const whatsappMessage = `
Hello Stekora Tech,

I have paid for the following order:

${orderItemsMessage}

Total: ${money(total)}

Customer name: ${customer.full_name || "Not provided"}
Phone: ${customer.phone || "Not provided"}
Location: ${customer.location || "Not provided"}
Delivery method: ${
    customer.delivery_method === "delivery"
      ? "Delivery"
      : "Pickup"
  }

I will attach the Mobile Money payment screenshot here.
`.trim();

  const whatsappUrl = paymentSettings
    ? `https://wa.me/${
        paymentSettings.whatsapp_number
      }?text=${encodeURIComponent(whatsappMessage)}`
    : "#";

  async function copyPaymentCode() {
    try {
      await navigator.clipboard.writeText(paymentCode);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy payment code", err);
      alert(`Copy this payment code: ${paymentCode}`);
    }
  }

  function handleCustomerChange(event) {
    setCustomer((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function openWhatsApp() {
    if (!customer.full_name.trim()) {
      alert("Please enter your full name");
      return;
    }

    if (!customer.phone.trim()) {
      alert("Please enter your phone number");
      return;
    }

    if (
      customer.delivery_method === "delivery" &&
      !customer.location.trim()
    ) {
      alert("Please enter your delivery location");
      return;
    }

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  if (cart.length === 0) {
    return (
      <div
        style={{
          minHeight: "70vh",
          padding: "3rem 1rem",
          background: "#f5f5f5",
          textAlign: "center",
          color: "#003366",
        }}
      >
        <h1>Your cart is empty</h1>

        <button
          type="button"
          onClick={() => goTo("/shop")}
          style={{
            border: 0,
            borderRadius: "8px",
            padding: "0.8rem 1.2rem",
            background: "#003366",
            color: "#ffffff",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Return to shop
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .checkout-page {
          min-height: 100vh;
          background: #f5f5f5;
          color: #003366;
          padding: 2.5rem 1rem;
        }

        .checkout-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .checkout-title {
          margin: 0 0 1.5rem;
          font-size: 2rem;
        }

        .checkout-layout {
          display: grid;
          gap: 1.5rem;
        }

        .checkout-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.4rem;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07);
        }

        .checkout-card h2 {
          margin: 0 0 1rem;
          font-size: 1.15rem;
        }

        .payment-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mtn-payment-logo {
          width: 48px;
          height: 34px;
          object-fit: contain;
          border-radius: 6px;
          background: #ffcc00;
          border: 1px solid #f2b900;
          padding: 0.15rem;
          flex-shrink: 0;
        }

        .checkout-items {
          display: grid;
          gap: 0.75rem;
        }

        .checkout-item {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.75rem;
        }

        .checkout-total {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 1rem;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .checkout-form {
          display: grid;
          gap: 1rem;
        }

        .checkout-field {
          display: grid;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .checkout-field input,
        .checkout-field select {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          font: inherit;
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
        }

        .checkout-field input:focus,
        .checkout-field select:focus {
          border-color: #003366;
          box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
        }

        .payment-box {
          background: #eefbfe;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          padding: 1rem;
          display: grid;
          gap: 0.8rem;
        }

        .payment-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .payment-label {
          color: #64748b;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .payment-value {
          color: #003366;
          font-weight: 900;
        }

        .payment-code {
          background: #003366;
          color: #ffffff;
          border-radius: 10px;
          padding: 1rem;
          font-size: 1.05rem;
          font-weight: 900;
          word-break: break-all;
          text-align: center;
        }

        .copy-payment-btn {
          border: 0;
          border-radius: 8px;
          background: #e7f5f3;
          color: #0f766e;
          padding: 0.75rem 1rem;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.55rem;
        }

        .copy-payment-btn:hover {
          background: #d3eeea;
        }

        .checkout-note {
          margin-top: 1rem;
          background: #fff8dc;
          border: 1px solid #f2d56b;
          border-left: 5px solid #f59e0b;
          border-radius: 10px;
          padding: 1rem;
          color: #713f12;
          line-height: 1.7;
          font-size: 0.9rem;
        }

        .checkout-note-title {
          display: flex;
          gap: 0.55rem;
          align-items: center;
          font-weight: 900;
          margin-bottom: 0.45rem;
        }

        .whatsapp-btn {
          width: 100%;
          margin-top: 1rem;
          border: 0;
          border-radius: 10px;
          padding: 0.9rem 1rem;
          background: #16a34a;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 900;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
        }

        .whatsapp-btn:hover {
          background: #15803d;
        }

        .checkout-status {
          background: #ffffff;
          border: 1px dashed #94a3b8;
          border-radius: 12px;
          padding: 1rem;
        }

        @media (min-width: 850px) {
          .checkout-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(320px, 0.8fr);
          }
        }

        @media (max-width: 480px) {
          .checkout-page {
            padding: 2rem 0.8rem;
          }

          .checkout-card {
            padding: 1rem;
          }

          .checkout-title {
            font-size: 1.55rem;
          }

          .payment-title {
            align-items: flex-start;
          }

          .mtn-payment-logo {
            width: 44px;
            height: 32px;
          }

          .checkout-item {
            flex-direction: column;
            gap: 0.35rem;
          }

          .payment-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}</style>

      <div className="checkout-page">
        <div className="checkout-container">
          <h1 className="checkout-title">
            Complete Your Order
          </h1>

          <div className="checkout-layout">
            <div>
              <section className="checkout-card">
                <h2>Customer information</h2>

                <div className="checkout-form">
                  <label className="checkout-field">
                    Full name
                    <input
                      type="text"
                      name="full_name"
                      value={customer.full_name}
                      onChange={handleCustomerChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </label>

                  <label className="checkout-field">
                    Phone number
                    <input
                      type="tel"
                      name="phone"
                      value={customer.phone}
                      onChange={handleCustomerChange}
                      placeholder="Example: 0780000000"
                      required
                    />
                  </label>

                  <label className="checkout-field">
                    How will you receive the product?
                    <select
                      name="delivery_method"
                      value={customer.delivery_method}
                      onChange={handleCustomerChange}
                    >
                      <option value="pickup">
                        I will pick it up
                      </option>

                      <option value="delivery">
                        Deliver it to me
                      </option>
                    </select>
                  </label>

                  {customer.delivery_method ===
                    "delivery" && (
                    <label className="checkout-field">
                      Delivery location
                      <input
                        type="text"
                        name="location"
                        value={customer.location}
                        onChange={handleCustomerChange}
                        placeholder="District, sector or clear address"
                        required
                      />
                    </label>
                  )}
                </div>
              </section>

              <section
                className="checkout-card"
                style={{ marginTop: "1.5rem" }}
              >
                <h2>Your order</h2>

                <div className="checkout-items">
                  {cart.map((item) => (
                    <div
                      className="checkout-item"
                      key={item.id}
                    >
                      <span>
                        {item.title} × {item.quantity}
                      </span>

                      <strong>
                        {money(
                          Number(item.price || 0) *
                            item.quantity
                        )}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="checkout-total">
                  <span>Total</span>
                  <span>{money(total)}</span>
                </div>
              </section>
            </div>

            <section className="checkout-card">
              <h2 className="payment-title">
                <img
                  src={mtnphoto}
                  alt="MTN Mobile Money logo"
                  className="mtn-payment-logo"
                />

                <span>MTN Mobile Money Payment</span>
              </h2>

              {loading && (
                <div className="checkout-status">
                  Loading payment information...
                </div>
              )}

              {error && (
                <div className="checkout-status">
                  {error}
                </div>
              )}

              {!loading &&
                !error &&
                paymentSettings && (
                  <>
                    <div className="payment-box">
                      <div className="payment-row">
                        <span className="payment-label">
                          Mobile Money Number
                        </span>

                        <span className="payment-value">
                          {
                            paymentSettings.momo_number
                          }
                        </span>
                      </div>

                      <div className="payment-row">
                        <span className="payment-label">
                          Registered Number Name
                        </span>

                        <span className="payment-value">
                          {
                            paymentSettings.momo_account_name
                          }
                        </span>
                      </div>

                      <div className="payment-row">
                        <span className="payment-label">
                          Amount To Pay
                        </span>

                        <span className="payment-value">
                          {money(total)}
                        </span>
                      </div>

                      <div className="payment-code">
                        {paymentCode}
                      </div>

                      <button
                        type="button"
                        className="copy-payment-btn"
                        onClick={copyPaymentCode}
                      >
                        <FontAwesomeIcon icon={faCopy} />

                        {copied
                          ? "Payment code copied"
                          : "Copy payment code"}
                      </button>
                    </div>

                    <div className="checkout-note">
                      <div className="checkout-note-title">
                        <FontAwesomeIcon
                          icon={
                            faTriangleExclamation
                          }
                        />
                        NOTE:
                      </div>

                      After completing the payment,
                      immediately send the payment screenshot
                      to Stekora Tech through WhatsApp using
                      the button below.
                      <br />
                      <br />
                      You may pick up the product from Stekora
                      Tech, or we can deliver it to your
                      location. The customer is responsible
                      for paying the delivery fee.
                    </div>

                    <button
                      type="button"
                      className="whatsapp-btn"
                      onClick={openWhatsApp}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      Send payment screenshot on WhatsApp
                    </button>
                  </>
                )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}