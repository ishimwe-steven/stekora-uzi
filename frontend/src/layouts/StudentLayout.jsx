import { useEffect, useState } from "react";
import StudentSidebar from "../components/student/StudentSidebar";
import { getPortalTheme, PORTAL_THEME_EVENT } from "../utils/portalTheme";

export default function StudentLayout({ title, children }) {
  const [theme, setTheme] = useState(() => getPortalTheme("student"));

  useEffect(() => {
    const handleThemeChange = (event) => {
      if (event.detail?.accountType === "student") {
        setTheme(event.detail.theme);
      }
    };

    window.addEventListener(PORTAL_THEME_EVENT, handleThemeChange);
    return () => window.removeEventListener(PORTAL_THEME_EVENT, handleThemeChange);
  }, []);

  return (
    <>
      <style>{`
        .student-portal {
          min-height: 100vh;
          display: flex;
          background: #f4f6f9;
          color: #10243f;
        }

        .student-sidebar {
          width: 250px;
          flex: 0 0 250px;
          background: #1f334d;
          color: #ffffff;
        }

        .student-sidebar-brand {
          min-height: 82px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.15rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .student-sidebar-brand span:last-child {
          display: grid;
          gap: 0.15rem;
        }

        .student-sidebar-brand small {
          color: #b8c8dc;
          font-size: 0.72rem;
        }

        .student-sidebar-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #22d3ee;
          color: #003366;
          font-weight: 900;
        }

        .student-sidebar-nav {
          display: grid;
          gap: 0.35rem;
          padding: 1rem 0.8rem;
        }

        .student-sidebar-nav button {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.8rem;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          text-align: left;
          font-weight: 700;
        }

        .student-sidebar-nav button.active,
        .student-sidebar-nav button:hover {
          background: rgba(255,255,255,0.14);
        }

        .student-portal-main {
          min-width: 0;
          flex: 1;
        }

        .student-portal-topbar {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 2rem;
          background: #ffffff;
          border-bottom: 1px solid #d9e1ea;
        }

        .student-portal-topbar h1 {
          margin: 0;
          color: #10243f;
          font-size: 1.3rem;
        }

        .student-portal-role {
          color: #64748b;
          font-size: 0.85rem;
        }

        .student-portal-content {
          padding: 1.8rem;
        }

        .student-portal.dark-mode {
          background: #0f172a;
          color: #e5edf7;
        }

        .student-portal.dark-mode .student-portal-main,
        .student-portal.dark-mode .student-portal-content,
        .student-portal.dark-mode [class$="-page"],
        .student-portal.dark-mode [class$="-container"] {
          background-color: #0f172a !important;
          color: #e5edf7;
        }

        .student-portal.dark-mode .student-portal-topbar,
        .student-portal.dark-mode .modal,
        .student-portal.dark-mode form,
        .student-portal.dark-mode article,
        .student-portal.dark-mode [class*="panel"],
        .student-portal.dark-mode [class*="card"],
        .student-portal.dark-mode [class*="modal"] {
          background-color: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .student-portal.dark-mode h1,
        .student-portal.dark-mode h2,
        .student-portal.dark-mode h3,
        .student-portal.dark-mode label {
          color: #e5edf7 !important;
        }

        .student-portal.dark-mode input,
        .student-portal.dark-mode select,
        .student-portal.dark-mode textarea {
          background: #111c2e !important;
          color: #f8fafc !important;
          border-color: #475569 !important;
        }

        .student-portal.dark-mode input::placeholder,
        .student-portal.dark-mode textarea::placeholder {
          color: #94a3b8;
        }

        .student-portal.dark-mode .student-settings-section {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
          box-shadow: none !important;
        }

        .student-portal.dark-mode .student-settings-heading h2,
        .student-portal.dark-mode .student-theme-options strong {
          color: #e5edf7 !important;
        }

        .student-portal.dark-mode .student-settings-heading p,
        .student-portal.dark-mode .student-theme-options small {
          color: #a9b8cc !important;
        }

        .student-portal.dark-mode .student-theme-options button {
          background: #111c2e !important;
          color: #e5edf7 !important;
          border-color: #475569 !important;
        }

        .student-portal.dark-mode .student-theme-options button.selected {
          background: #123047 !important;
          border-color: #22d3ee !important;
        }

        .student-portal.dark-mode .student-password-field {
          background: #111c2e !important;
          border-color: #475569 !important;
        }

        .student-portal.dark-mode table,
        .student-portal.dark-mode table thead tr,
        .student-portal.dark-mode table thead th,
        .student-portal.dark-mode table tbody tr,
        .student-portal.dark-mode table tbody td {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .student-portal.dark-mode table tbody tr:nth-child(even),
        .student-portal.dark-mode table tbody tr:nth-child(even) td {
          background: #111c2e !important;
        }

        @media (max-width: 760px) {
          .student-portal {
            flex-direction: column;
          }

          .student-sidebar {
            width: 100%;
            flex-basis: auto;
          }

          .student-sidebar-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .student-portal-topbar,
          .student-portal-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <div className={`student-portal ${theme === "dark" ? "dark-mode" : ""}`}>
        <StudentSidebar />
        <main className="student-portal-main">
          <header className="student-portal-topbar">
            <h1>{title}</h1>
            <span className="student-portal-role">{localStorage.getItem("studentName") || "Student"}</span>
          </header>
          <div className="student-portal-content">{children}</div>
        </main>
      </div>
    </>
  );
}
