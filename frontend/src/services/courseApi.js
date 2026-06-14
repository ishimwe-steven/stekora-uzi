import { apiRequest } from "./api";

export function getCourses() {
  return apiRequest("/courses");
}

export function getCourseModules(courseId) {
  return apiRequest(`/courses/${courseId}/modules`);
}

export function createCourse(payload) {
  return apiRequest("/courses", {
    method: "POST",
    body: payload instanceof FormData ? payload : JSON.stringify(payload)
  });
}

export function updateCourse(courseId, payload) {
  return apiRequest(`/courses/${courseId}`, {
    method: "PUT",
    body: payload instanceof FormData ? payload : JSON.stringify(payload)
  });
}

export function deleteCourse(courseId) {
  return apiRequest(`/courses/${courseId}`, {
    method: "DELETE"
  });
}

export function createCourseModule(courseId, payload) {
  return apiRequest(`/courses/${courseId}/modules`, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function deleteCourseModule(moduleId) {
  return apiRequest(`/courses/modules/${moduleId}`, {
    method: "DELETE"
  });
}

export function getModuleMaterials(moduleId) {
  return apiRequest(`/courses/modules/${moduleId}/materials`);
}

export function createModuleMaterial(moduleId, payload) {
  return apiRequest(`/courses/modules/${moduleId}/materials`, {
    method: "POST",
    body: payload instanceof FormData ? payload : JSON.stringify(payload)
  });
}

export function updateModuleMaterial(materialId, payload) {
  return apiRequest(`/courses/materials/${materialId}`, {
    method: "PUT",
    body: payload instanceof FormData ? payload : JSON.stringify(payload)
  });
}

export function deleteModuleMaterial(materialId) {
  return apiRequest(`/courses/materials/${materialId}`, {
    method: "DELETE"
  });
}

export function getModuleQuiz(moduleId) {
  return apiRequest(`/courses/modules/${moduleId}/quiz`);
}

export function saveModuleQuiz(moduleId, payload) {
  return apiRequest(`/courses/modules/${moduleId}/quiz`, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function deleteQuizQuestion(questionId) {
  return apiRequest(`/courses/quiz/${questionId}`, {
    method: "DELETE"
  });
}
