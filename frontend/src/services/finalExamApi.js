import { apiRequest } from "./api";

export function getFinalExamQuestions(courseId) {
  return apiRequest(`/final-exam/questions/${courseId}`);
}

export function saveFinalExamQuestions(courseId, payload) {
  return apiRequest(`/final-exam/questions/${courseId}`, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function deleteFinalExamQuestion(questionId) {
  return apiRequest(`/final-exam/questions/${questionId}`, {
    method: "DELETE"
  });
}

export function getFinalExamSubmissions() {
  return apiRequest("/final-exam/submissions");
}

export function submitFinalExam(payload) {
  return apiRequest("/final-exam/submit", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function reviewFinalExamSubmission(submissionId, payload) {
  return apiRequest(`/final-exam/submissions/${submissionId}/review`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
}

export function assignFinalExamCertificate(submissionId) {
  return apiRequest(`/final-exam/submissions/${submissionId}/certificate`, {
    method: "POST",
    body: JSON.stringify({})
  });
}

export function verifyFinalExamCertificate(certificateCode) {
  return apiRequest(`/final-exam/certificate/${certificateCode}`);
}
