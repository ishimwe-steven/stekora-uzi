import { apiRequest } from "./api";

export function studentLogin(payload) {
  return apiRequest("/auth/student/login", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function adminLogin(payload) {
  return apiRequest("/auth/admin/login", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function changeAdminPassword(payload) {
  return apiRequest("/auth/admin/password", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`
    },
    body: JSON.stringify(payload)
  });
}

export function changeStudentPassword(payload) {
  return apiRequest("/auth/student/password", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("studentToken") || ""}`
    },
    body: JSON.stringify(payload)
  });
}
