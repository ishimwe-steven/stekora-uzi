import { apiRequest } from "./api";

export function getProducts() {
  return apiRequest("/products");
}

export function getProduct(id) {
  return apiRequest(`/products/${id}`);
}

export function createProduct(payload) {
  return apiRequest("/products", {
    method: "POST",
    body: payload instanceof FormData ? payload : JSON.stringify(payload)
  });
}

export function updateProduct(id, payload) {
  return apiRequest(`/products/${id}`, {
    method: "PUT",
    body: payload instanceof FormData ? payload : JSON.stringify(payload)
  });
}

export function deleteProduct(id) {
  return apiRequest(`/products/${id}`, {
    method: "DELETE"
  });
}
