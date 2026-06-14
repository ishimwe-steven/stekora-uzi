import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBookOpen, faGaugeHigh, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const items = [
  ["Dashboard", "/student", faGaugeHigh],
  ["My Courses", "/student", faBookOpen],
  ["Certificates", "/student/certificates", faAward],
  ["Settings", "/student/settings", faGear]
];

function currentRoute() {
  return window.location.hash.replace("#", "") || "/student";
}

export default function StudentSidebar() {
  const route = currentRoute();

  function navigate(path) {
    window.location.hash = path;
  }

  function logout() {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentCourseName");
    window.location.hash = "/login";
  }

  return (
    <aside className="student-sidebar">
      <div className="student-sidebar-brand">
        <span className="student-sidebar-mark">ST</span>
        <span>
          <strong>Stekora Tech</strong>
          <small>Student Account</small>
        </span>
      </div>

      <nav className="student-sidebar-nav">
        {items.map(([label, path, icon]) => (
          <button
            key={label}
            type="button"
            className={route === path || (path === "/student" && route.startsWith("/student/course/")) ? "active" : ""}
            onClick={() => navigate(path)}
          >
            <FontAwesomeIcon icon={icon} />
            {label}
          </button>
        ))}
        <button type="button" onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
