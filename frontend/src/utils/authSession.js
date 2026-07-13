const AUTH_EVENT = "stekora-auth-change";

function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;

    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return JSON.parse(window.atob(padded));
  } catch {
    return null;
  }
}

export function isTokenValid(token, expectedRole) {
  if (!token) return false;

  const payload = decodeToken(token);
  if (!payload) return false;

  if (expectedRole && payload.role !== expectedRole) return false;
  if (payload.exp && Date.now() >= payload.exp * 1000) return false;

  return true;
}

export function getAuthSession() {
  const adminToken = localStorage.getItem("token");
  const studentToken = localStorage.getItem("studentToken");

  if (isTokenValid(adminToken, "admin")) {
    return {
      isLoggedIn: true,
      role: "admin",
      token: adminToken,
      name: localStorage.getItem("adminName") || "Admin",
    };
  }

  if (isTokenValid(studentToken, "student")) {
    return {
      isLoggedIn: true,
      role: "student",
      token: studentToken,
      name: localStorage.getItem("studentName") || "Student",
    };
  }

  clearAuthSession(false);

  return {
    isLoggedIn: false,
    role: null,
    token: null,
    name: "",
  };
}

export function saveAdminSession(data) {
  clearAuthSession(false);
  localStorage.setItem("token", data.token);
  localStorage.setItem("adminName", data.user?.name || "Admin");
  notifyAuthChange();
}

export function saveStudentSession(data) {
  clearAuthSession(false);
  localStorage.setItem("studentToken", data.token);

  if (data.student?.full_name) {
    localStorage.setItem("studentName", data.student.full_name);
  }

  notifyAuthChange();
}

export function clearAuthSession(notify = true) {
  localStorage.removeItem("token");
  localStorage.removeItem("adminName");
  localStorage.removeItem("studentToken");
  localStorage.removeItem("studentName");
  localStorage.removeItem("studentCourseName");

  if (notify) notifyAuthChange();
}

export function notifyAuthChange() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function subscribeToAuthChanges(callback) {
  window.addEventListener(AUTH_EVENT, callback);
  window.addEventListener("storage", callback);
  window.addEventListener("focus", callback);

  return () => {
    window.removeEventListener(AUTH_EVENT, callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("focus", callback);
  };
}
