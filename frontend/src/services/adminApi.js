import { apiRequest } from "./api";

export function getAdminStudents() {
  return apiRequest("/admin/students");
}

export function updateAdminStudentStatus(studentId, status) {
  return apiRequest(`/admin/students/${studentId}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status })
  });
}
