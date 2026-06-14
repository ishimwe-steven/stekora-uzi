import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBookOpen,
  faBoxOpen,
  faClipboardCheck,
  faFileLines,
  faGaugeHigh,
  faGear,
  faGraduationCap,
  faInbox,
  faLayerGroup,
  faRightFromBracket,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const items = [
  ["Overview", "/admin", faGaugeHigh, "Main"],
  ["Courses", "/admin/courses", faBookOpen, "Learning"],
  ["Modules", "/admin/modules", faLayerGroup, "Learning"],
  ["Materials", "/admin/materials", faFileLines, "Learning"],
  ["Assessments", "/admin/assessments", faClipboardCheck, "Learning"],
  ["Final Exam", "/admin/final-exam", faGraduationCap, "Learning"],
  ["Submissions", "/admin/exam-submissions", faInbox, "Management"],
  ["Students", "/admin/students", faUsers, "Management"],
  ["Products", "/admin/products", faBoxOpen, "Shop"],
  ["Certificates", "/admin/certificates", faAward, "Management"],
  ["Settings", "/admin/settings", faGear, "System"]
];

function currentRoute() {
  return window.location.hash.replace("#", "") || "/admin";
}

export default function AdminSidebar() {
  const route = currentRoute();

  const navigate = (path) => {
    window.location.hash = path;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    window.location.hash = "/login";
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <span className="admin-sidebar-mark">ST</span>
        <span>
          <strong>Stekora Tech</strong>
          <small>Admin Account</small>
        </span>
      </div>

      <nav className="admin-sidebar-nav">
        {items.map(([label, path, icon, group], index) => {
          const previousGroup = index > 0 ? items[index - 1][3] : null;

          return (
            <div className="admin-sidebar-item" key={label}>
              {group !== previousGroup && (
                <span className="admin-sidebar-group">{group}</span>
              )}
              <button
                type="button"
                className={route === path ? "active" : ""}
                onClick={() => navigate(path)}
              >
                <span className="admin-sidebar-icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span>{label}</span>
              </button>
            </div>
          );
        })}

        <div className="admin-sidebar-item admin-sidebar-logout">
          <button type="button" onClick={logout}>
            <span className="admin-sidebar-icon">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
