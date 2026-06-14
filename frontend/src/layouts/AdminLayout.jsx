import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopbar from "../components/admin/AdminTopbar";
import { getPortalTheme, PORTAL_THEME_EVENT } from "../utils/portalTheme";

export default function AdminLayout({ title, children }) {
  const [theme, setTheme] = useState(() => getPortalTheme("admin"));

  useEffect(() => {
    const handleThemeChange = (event) => {
      if (event.detail?.accountType === "admin") {
        setTheme(event.detail.theme);
      }
    };

    window.addEventListener(PORTAL_THEME_EVENT, handleThemeChange);
    return () => window.removeEventListener(PORTAL_THEME_EVENT, handleThemeChange);
  }, []);

  return (
    <>
      <style>{`
        .admin-portal {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          background: #f4f6f9;
          color: #10243f;
        }

        .portal .admin-sidebar {
          min-height: 100vh;
          padding: 0;
          gap: 0;
          overflow-y: auto;
          background: #1f334d;
          color: #ffffff;
        }

        .admin-sidebar-brand {
          min-height: 82px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.15rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .admin-sidebar-brand > span:last-child {
          min-width: 0;
          display: grid;
          gap: 0.15rem;
        }

        .admin-sidebar-brand strong {
          color: #ffffff;
          font-size: 0.98rem;
        }

        .admin-sidebar-brand small {
          color: #b8c8dc;
          font-size: 0.72rem;
        }

        .admin-sidebar-mark {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #22d3ee;
          color: #003366;
          font-weight: 900;
        }

        .admin-sidebar-nav {
          display: grid;
          gap: 0.25rem;
          padding: 0.8rem;
        }

        .admin-sidebar-item {
          display: grid;
          gap: 0.3rem;
        }

        .admin-sidebar-group {
          padding: 0.85rem 0.75rem 0.3rem;
          color: #8fb3dc;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .portal .admin-sidebar-nav button {
          width: 100%;
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0 0.75rem;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #ffffff;
          text-align: left;
          font-weight: 700;
          transition: background 0.18s ease, color 0.18s ease;
        }

        .portal .admin-sidebar-nav button:hover,
        .portal .admin-sidebar-nav button.active {
          background: rgba(255,255,255,0.14);
        }

        .portal .admin-sidebar-nav button.active {
          box-shadow: inset 3px 0 #22d3ee;
        }

        .admin-sidebar-icon {
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          display: grid;
          place-items: center;
          border-radius: 6px;
          background: rgba(255,255,255,0.09);
          color: #bcecf5;
        }

        .admin-sidebar-nav button.active .admin-sidebar-icon {
          background: #22d3ee;
          color: #003366;
        }

        .admin-sidebar-logout {
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .admin-portal-main {
          min-width: 0;
          padding: 0;
        }

        .admin-portal-main .topbar {
          min-height: 82px;
          margin: 0;
          padding: 0 2rem;
          background: #ffffff;
          border-bottom: 1px solid #d9e1ea;
        }

        .admin-portal-main .topbar h1 {
          margin: 0;
          font-size: 1.3rem;
        }

        .admin-portal-content {
          padding: 1.8rem;
        }

        .admin-portal.dark-mode {
          background: #0f172a;
          color: #e5edf7;
        }

        .admin-portal.dark-mode .admin-portal-main,
        .admin-portal.dark-mode .admin-portal-content,
        .admin-portal.dark-mode [class$="-page"],
        .admin-portal.dark-mode [class$="-container"] {
          background-color: #0f172a !important;
          color: #e5edf7;
        }

        .admin-portal.dark-mode .topbar,
        .admin-portal.dark-mode .modal,
        .admin-portal.dark-mode form,
        .admin-portal.dark-mode .table,
        .admin-portal.dark-mode article,
        .admin-portal.dark-mode [class*="panel"],
        .admin-portal.dark-mode [class*="card"],
        .admin-portal.dark-mode [class*="modal"] {
          background-color: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode h1,
        .admin-portal.dark-mode h2,
        .admin-portal.dark-mode h3,
        .admin-portal.dark-mode label,
        .admin-portal.dark-mode th,
        .admin-portal.dark-mode td {
          color: #e5edf7 !important;
        }

        .admin-portal.dark-mode p,
        .admin-portal.dark-mode small,
        .admin-portal.dark-mode span {
          border-color: #334155;
        }

        .admin-portal.dark-mode input,
        .admin-portal.dark-mode select,
        .admin-portal.dark-mode textarea {
          background: #111c2e !important;
          color: #f8fafc !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode input::placeholder,
        .admin-portal.dark-mode textarea::placeholder {
          color: #94a3b8;
        }

        .admin-portal.dark-mode .table tr,
        .admin-portal.dark-mode .table td,
        .admin-portal.dark-mode .table th {
          background-color: #182337 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode .settings-section,
        .admin-portal.dark-mode [class*="-table-wrap"] {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
          box-shadow: none !important;
        }

        .admin-portal.dark-mode .settings-heading h2,
        .admin-portal.dark-mode .settings-heading p,
        .admin-portal.dark-mode .theme-options strong,
        .admin-portal.dark-mode .theme-options small {
          color: #e5edf7 !important;
        }

        .admin-portal.dark-mode .settings-heading p,
        .admin-portal.dark-mode .theme-options small {
          color: #a9b8cc !important;
        }

        .admin-portal.dark-mode .theme-options button {
          background: #111c2e !important;
          color: #e5edf7 !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode .theme-options button.selected {
          background: #123047 !important;
          border-color: #22d3ee !important;
        }

        .admin-portal.dark-mode .password-field {
          background: #111c2e !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode table,
        .admin-portal.dark-mode table[class*="-table"] {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode table thead tr,
        .admin-portal.dark-mode table thead th {
          background: #202b3a !important;
          color: #f8fafc !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode table tbody tr,
        .admin-portal.dark-mode table tbody tr:nth-child(odd),
        .admin-portal.dark-mode table tbody tr:nth-child(even),
        .admin-portal.dark-mode table tbody td {
          background: #182337 !important;
          color: #dce6f3 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode table tbody tr:nth-child(even),
        .admin-portal.dark-mode table tbody tr:nth-child(even) td {
          background: #111c2e !important;
        }

        .admin-portal.dark-mode table tbody tr:hover,
        .admin-portal.dark-mode table tbody tr:hover td {
          background: #22334b !important;
        }

        @media (max-width: 760px) {
          .admin-portal {
            grid-template-columns: 1fr;
          }

          .portal .admin-sidebar {
            min-height: auto;
          }

          .admin-sidebar-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .admin-sidebar-group {
            display: none;
          }

          .admin-sidebar-logout {
            margin-top: 0;
            padding-top: 0;
            border-top: 0;
          }

          .admin-portal-main .topbar,
          .admin-portal-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <div className={`portal admin-portal ${theme === "dark" ? "dark-mode" : ""}`}>
        <AdminSidebar />
        <section className="portal-main admin-portal-main">
          <AdminTopbar title={title} />
          <div className="admin-portal-content">{children}</div>
        </section>
      </div>
    </>
  );
}
