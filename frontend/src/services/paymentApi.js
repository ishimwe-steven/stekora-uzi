import { apiRequest } from "./api";

export function getPaymentSettings() {
  return apiRequest("/payment-settings");
}