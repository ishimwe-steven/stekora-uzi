import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/image/logo.png";

function decodeTokenPayload(token) {
  try {
    const payloadPart = token.split(".")[1];

    if (!payloadPart) {
      return null;
    }

    const normalizedPayload = payloadPart
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const decodedPayload = decodeURIComponent(
      window
        .atob(normalizedPayload)
        .split("")
        .map(
          (character) =>
            `%${character
              .charCodeAt(0)
              .toString(16)
              .padStart(2, "0")}`
        )
        .join("")
    );

    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Failed to decode authentication token", error);
    return null;
  }
}

function isTokenValid(token) {
  if (!token) {
    return false;
  }

  const payload = decodeTokenPayload(token);

  if (!payload || !payload.exp) {
    return false;
  }

  const currentTimeInSeconds = Math.floor(Date.now() / 1000);

  return payload.exp > currentTimeInSeconds;
}

function clearAuthenticationStorage() {
  localStorage.removeItem("studentToken");
  localStorage.removeItem("studentName");
  localStorage.removeItem("studentCourseName");
  localStorage.removeItem("studentExpiresAt");

  localStorage.removeItem("token");
  localStorage.removeItem("adminName");
  localStorage.removeItem("adminExpiresAt");
}

function getAuthenticationStatus() {
  const studentToken = localStorage.getItem("studentToken");
  const adminToken = localStorage.getItem("token");

  const validStudentToken = isTokenValid(studentToken);
  const validAdminToken = isTokenValid(adminToken);

  if (studentToken && !validStudentToken) {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentCourseName");
    localStorage.removeItem("studentExpiresAt");
  }

  if (adminToken && !validAdminToken) {
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminExpiresAt");
  }

  return validStudentToken || validAdminToken;
}

export default function Navbar({
  route,
  goTo,
  menuOpen,
  setMenuOpen,
  cartCount = 0,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    getAuthenticationStatus()
  );

  const closeMenu = () => setMenuOpen(false);

  const handleNavigate = (path) => {
    goTo(path);
    closeMenu();
  };

  const handleLogout = () => {
    clearAuthenticationStorage();
    setIsLoggedIn(false);

    window.dispatchEvent(new Event("stekora-auth-changed"));

    handleNavigate("/");
  };

  useEffect(() => {
    const checkAuthentication = () => {
      setIsLoggedIn(getAuthenticationStatus());
    };

    checkAuthentication();

    window.addEventListener("storage", checkAuthentication);
    window.addEventListener("focus", checkAuthentication);
    window.addEventListener(
      "stekora-auth-changed",
      checkAuthentication
    );

    const authenticationTimer = window.setInterval(
      checkAuthentication,
      60000
    );

    return () => {
      window.removeEventListener("storage", checkAuthentication);
      window.removeEventListener("focus", checkAuthentication);
      window.removeEventListener(
        "stekora-auth-changed",
        checkAuthentication
      );

      window.clearInterval(authenticationTimer);
    };
  }, [route]);

  const links = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/study", "Courses"],
    ["/jobs", "Jobs"],
    ["/about", "About"],
    ["/contact", "Request a Service"],
  ];

  return (
    <>
      <style>{`
        :root { --richblue:#003366; --palegray:#f5f5f5; }
        .header{width:100%;background-color:var(--palegray);border-bottom:1px solid var(--richblue);position:sticky;top:0;z-index:50;font-family:'Inter',sans-serif}
        .header-container{max-width:72rem;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:.75rem 1rem;position:relative}
        .logo-button{display:flex;align-items:center;gap:.75rem;background:none;border:none;cursor:pointer;padding:0}
        .logo-button img{height:3.25rem;width:3.25rem;object-fit:contain;border-radius:.5rem;border:1px solid var(--richblue);background:var(--palegray)}
        .brand-name{font-weight:1000;color:var(--richblue);text-align:left; font-size:1.55rem;}.brand-tagline{font-size:10px;color:var(--richblue)}
        .header-links{display:flex;align-items:center;gap:1rem}
        .header-links button{font-size:.875rem;font-weight:500;color:var(--richblue);padding:.25rem .5rem;background:transparent;border:none;cursor:pointer}
        .header-links button.active{border-bottom:2px solid var(--richblue)}
        .header-links .shop-link{font-weight:600;border:1px solid var(--richblue);padding:.35rem .75rem;border-radius:999px}
        .header-links .shop-link.active{border-bottom:1px solid var(--richblue);background:rgba(0,51,102,.06)}
        .cart-nav-btn{position:relative;display:inline-flex!important;align-items:center;gap:.45rem}
        .cart-count{min-width:20px;height:20px;border-radius:999px;background:#ef4444;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:900;padding:0 .3rem}
        .mobile-menu-button{display:none;background:none;border:none;font-size:1.6rem;cursor:pointer;color:var(--richblue)}
        @media(max-width:768px){.mobile-menu-button{display:block}.header-links{display:${menuOpen ? "flex" : "none"};flex-direction:column;align-items:flex-start;position:absolute;top:100%;right:1rem;background:var(--palegray);border:1px solid var(--richblue);border-radius:.75rem;padding:.75rem;width:220px;gap:.75rem}.header-links button{width:100%;text-align:left}}
      `}</style>

      <header className="header">
        <div className="header-container">
          <button
            className="logo-button"
            onClick={() => handleNavigate("/")}
          >
            <img src={logo} alt="Stekora Tech logo" />

            <div>
              <div className="brand-name">Stekora Tech</div>

              <div className="brand-tagline">
                where ideas become digital solutions
              </div>
            </div>
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className="header-links">
            {links.map(([path, label]) => (
              <button
                key={path}
                className={route === path ? "active" : ""}
                onClick={() => handleNavigate(path)}
              >
                {label}
              </button>
            ))}

            <button
              className={`shop-link ${
                route === "/shop" ? "active" : ""
              }`}
              onClick={() => handleNavigate("/shop")}
            >
              Shop
            </button>

            <button
              className={`shop-link cart-nav-btn ${
                route === "/cart" ? "active" : ""
              }`}
              onClick={() => handleNavigate("/cart")}
            >
              <FontAwesomeIcon icon={faCartShopping} /> Cart

              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </button>

            {!isLoggedIn ? (
              <button
                className={`shop-link ${
                  route === "/login" ? "active" : ""
                }`}
                onClick={() => handleNavigate("/login")}
              >
                Login
              </button>
            ) : (
              <button
                className="shop-link"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}