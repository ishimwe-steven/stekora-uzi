import { useState } from "react";
import logo from "../../assets/image/logo.png";

export default function Navbar({ route, goTo, menuOpen, setMenuOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("studentToken") || localStorage.getItem("token"))
  );

  const closeMenu = () => setMenuOpen(false);

  const handleNavigate = (path) => {
    goTo(path);
    closeMenu();
  };

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentCourseName");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    handleNavigate("/");
  };

  const links = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/study", "Courses"],
    ["/jobs", "Jobs"],
    ["/about", "About"],
    ["/contact", "Contact"]
  ];

  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
        }

        .header {
          width: 100%;
          background-color: var(--palegray);
          border-bottom: 1px solid var(--richblue);
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: 'Inter', sans-serif;
        }

        .header-container {
          max-width: 72rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          position: relative;
        }

        .logo-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .logo-button img {
          height: 3.25rem;
          width: 3.25rem;
          object-fit: contain;
          border-radius: 0.5rem;
          border: 1px solid var(--richblue);
          background: var(--palegray);
        }

        .brand-name {
          font-weight: 600;
          color: var(--richblue);
          text-align: left;
        }

        .brand-tagline {
          font-size: 10px;
          color: var(--richblue);
        }

        .header-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-links button {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--richblue);
          text-decoration: none;
          padding: 0.25rem 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .header-links button.active {
          border-bottom: 2px solid var(--richblue);
        }

        .header-links .shop-link {
          font-weight: 600;
          border: 1px solid var(--richblue);
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
        }

        .header-links .shop-link.active {
          border-bottom: 1px solid var(--richblue);
          background: rgba(0, 51, 102, 0.06);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          font-size: 1.6rem;
          cursor: pointer;
          color: var(--richblue);
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }

          .header-links {
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            top: 100%;
            right: 1rem;
            background: var(--palegray);
            border: 1px solid var(--richblue);
            border-radius: 0.75rem;
            padding: 0.75rem;
            width: 220px;
            gap: 0.75rem;
          }

          .header-links button {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          <button className="logo-button" onClick={() => handleNavigate("/")}>
            <img src={logo} alt="Stekora Tech logo" />
            <div>
              <div className="brand-name">Stekora Tech</div>
              <div className="brand-tagline">where ideas become digital solutions</div>
            </div>
          </button>

          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className="header-links">
            {links.map(([path, label]) => (
              <button key={path} className={route === path ? "active" : ""} onClick={() => handleNavigate(path)}>
                {label}
              </button>
            ))}

            <button className={`shop-link ${route === "/shop" ? "active" : ""}`} onClick={() => handleNavigate("/shop")}>
              Shop
            </button>

            {!isLoggedIn ? (
              <button className={`shop-link ${route === "/login" ? "active" : ""}`} onClick={() => handleNavigate("/login")}>
                Login
              </button>
            ) : (
              <button className="shop-link" onClick={handleLogout}>
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
