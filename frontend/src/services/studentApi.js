import { apiRequest } from "./api";

function studentRequest(path, options = {}) {
  const token = localStorage.getItem("studentToken");

  return apiRequest(path, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers
    }
  });
}

export function registerStudent(payload) {
  return apiRequest("/students/register", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function getStudentDashboard() {
  return studentRequest("/students/dashboard");
}

export function startStudentCourse(courseId) {
  return studentRequest(`/students/courses/${courseId}/start`, {
    method: "POST",
    body: JSON.stringify({})
  });
}

export function getStudentModule(courseId, moduleId) {
  return studentRequest(`/students/courses/${courseId}/modules/${moduleId}`);
}

export function completeStudentModule(moduleId) {
  return studentRequest(`/students/modules/${moduleId}/complete`, {
    method: "POST",
    body: JSON.stringify({})
  });
}

export function getStudentAssessment(moduleId) {
  return studentRequest(`/students/modules/${moduleId}/assessment`);
}

export function submitStudentAssessment(moduleId, answers) {
  return studentRequest(`/students/modules/${moduleId}/assessment`, {
    method: "POST",
    body: JSON.stringify({ answers })
  });
}

export function getStudentFinalExam(courseId) {
  return studentRequest(`/students/courses/${courseId}/final-exam`);
}

export function submitStudentFinalExam(courseId, answers) {
  return studentRequest(`/students/courses/${courseId}/final-exam`, {
    method: "POST",
    body: JSON.stringify({ answers })
  });
}

export function getStudentCertificates() {
  return studentRequest("/students/certificates");
}
