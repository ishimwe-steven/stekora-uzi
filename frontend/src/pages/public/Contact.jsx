import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const wait = (milliseconds) =>
  new Promise((resolve) => window.setTimeout(resolve, milliseconds));

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_ADMIN_TEMPLATE_ID ||
      !EMAILJS_CUSTOMER_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setStatus({
        type: "error",
        message:
          "Email service is not fully configured. Add both the admin and customer template IDs."
      });
      return;
    }

    setSending(true);

    try {
      const requestId = `ST-${Date.now().toString(36).toUpperCase()}`;
      const submittedDate = new Date().toLocaleString("en-RW", {
        dateStyle: "medium",
        timeStyle: "short"
      });
      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim(),
        to_email: form.email.trim(),
        customer_email: form.email.trim(),
        customer_name: form.name.trim(),
        phone: form.phone.trim() || "Not provided",
        service: form.service,
        message: form.message.trim(),
        reply_to: form.email.trim(),
        request_id: requestId,
        submitted_date: submittedDate
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      let confirmationError = null;

      try {
        // Leave enough space between the two browser requests for EmailJS.
        await wait(2000);
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CUSTOMER_TEMPLATE_ID,
          templateParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } catch (error) {
        confirmationError = error;
        console.error("EmailJS customer confirmation failed", error);
      }

      if (confirmationError) {
        const confirmationMessage =
          confirmationError?.text ||
          confirmationError?.message ||
          "the confirmation template was rejected";

        setStatus({
          type: "warning",
          message: `Your request reached Stekora Tech, but customer template ${EMAILJS_CUSTOMER_TEMPLATE_ID} failed: ${confirmationMessage}`
        });
      } else {
        setStatus({
          type: "success",
          message: "Thank you! Your request was sent and a confirmation email is on its way."
        });
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS contact request failed", error);
      const emailError =
        error?.text ||
        error?.message ||
        "EmailJS rejected the request. Check the service and template settings.";

      setStatus({
        type: "error",
        message: `We could not send your request: ${emailError}`
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
          --yellow: #facc15;
        }

        .contact-page {
          background: var(--palegray);
          min-height: 100vh;
          padding: 3rem 1rem;
        }

        .contact-container {
          max-width: 60rem;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-header h1 {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--richblue);
          margin: 0;
        }

        .contact-header p {
          color: #555;
          max-width: 40rem;
          margin: 0.75rem auto 0;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .contact-card {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 2.5rem;
        }

        .form-grid {
          display: grid;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        @media (min-width: 640px) {
          .form-grid.two {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: var(--richblue);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.65rem 0.75rem;
          border-radius: 0.6rem;
          border: 1px solid var(--lightgray);
          font-size: 0.85rem;
          outline: none;
          background: #fff;
        }

        .form-group textarea {
          resize: none;
          min-height: 120px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--richblue);
          box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.12);
        }

        .submit-btn {
          margin-top: 0.5rem;
          background: var(--richblue);
          color: #fff;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 0.7rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          background: #00264d;
        }

        .submit-btn:disabled {
          cursor: wait;
          opacity: 0.68;
        }

        .contact-status {
          margin: 1rem 0 0;
          padding: 0.8rem 1rem;
          border-radius: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .contact-status.success {
          border: 1px solid #86efac;
          background: #dcfce7;
          color: #166534;
        }

        .contact-status.error {
          border: 1px solid #fca5a5;
          background: #fee2e2;
          color: #991b1b;
        }

        .contact-status.warning {
          border: 1px solid #facc15;
          background: #fef9c3;
          color: #854d0e;
        }

        .badge {
          display: inline-block;
          background: var(--yellow);
          color: #000;
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <span className="badge">Contact Us</span>
            <h1>Request a Project / Job</h1>
            <p>
              Need a website, mobile app, IoT system or custom IT solution?
              Fill in the form below and our team will get back to you.
            </p>
          </div>

          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid two">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="enter your email address"
                  />
                </div>
              </div>

              <div className="form-grid two">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" required value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>IoT / Embedded Systems</option>
                    <option>Automation & Integration</option>
                    <option>Networking / CCTV</option>
                    <option>Graphic Design</option>
                    <option>Other services</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Write a message</label>
                <textarea
                  name="message"
                  placeholder="write us a message..."
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button className="submit-btn" type="submit" disabled={sending}>
                <FontAwesomeIcon icon={faPaperPlane} />
                {sending ? "Sending..." : "Submit Request"}
              </button>

              {status.message && (
                <p className={`contact-status ${status.type}`} role="status">
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
