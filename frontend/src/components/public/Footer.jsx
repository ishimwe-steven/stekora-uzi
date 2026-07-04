import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/image/logoo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <div className="logo-area">
              <img src={logo} alt="Stekora Tech logo" className="footer-logo" />
              <div>
                <div className="footer-brand">Stekora Tech</div>
                <div className="tag">where ideas become digital solutions</div>
              </div>
            </div>

            <p className="desc">
              Stekora Tech provides modern IT services from custom web
              applications to automation and embedded systems helping businesses
              turn technical ideas into reliable digital products.
            </p>

            <div className="social">
              <span><FontAwesomeIcon icon={faFacebookF} /></span>
              <span><FontAwesomeIcon icon={faTwitter} /></span>
              <a href="https://instagram.com/stekoratech" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.tiktok.com/stekoratech" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li><FontAwesomeIcon icon={faPhone} /> Phone: <span>+250 799579034</span></li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Email: <span>stekoratech@gmail.com</span></li>
              <li><FontAwesomeIcon icon={faLocationDot} /> Location: <span>Musanze, Rwanda</span></li>
              <li className="social-text">Social: <span>LinkedIn, GitHub, Instagram</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li>Help & FAQs</li>
              <li>Project Support</li>
              <li>Service Level & Maintenance</li>
              <li>Contact Support: support@stekoratech.com</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Stekora Tech. All rights reserved.
        </div>
      </footer>

      <style>{`
        .footer {
          background: #1f2d3a;
          color: #d1d5db;
          margin-top: 40px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 50px 20px;
        }

        .footer-col h3 {
          color: white;
          margin: 0 0 15px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .footer-logo {
          height: 80px;
          width: 80px;
          border-radius: 40px;
          object-fit: contain;
        }

        .footer-brand {
          color: white;
          font-weight: bold;
        }

        .tag {
          font-size: 12px;
          color: #9ca3af;
        }

        .desc {
          font-size: 14px;
          margin: 15px 0;
          line-height: 1.6;
        }

        .social {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social span,
        .social a {
          background: white;
          color: black;
          padding: 10px;
          min-width: 46px;
          min-height: 46px;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          font-size: 25px;
          font-weight: 700;
        }

        .footer ul li svg {
          margin-right: 10px;
          color: #f59e0b;
        }

        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin-bottom: 10px;
          font-size: 14px;
          line-height: 1.5;
        }

        .footer ul li span {
          color: white;
        }

        .copyright {
          text-align: center;
          border-top: 1px solid #2c3e50;
          padding: 15px;
          font-size: 12px;
          color: #9ca3af;
          margin-left: 20px;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
