import { apiRequest } from "./api";

export function verifyCertificate(certificateCode) {
  return apiRequest(`/final-exam/certificate/${certificateCode}`);
}
