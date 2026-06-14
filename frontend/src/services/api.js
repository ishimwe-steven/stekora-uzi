const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export async function apiRequest(path, options = {}) {
  const isFormData = options.body instanceof FormData;
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: isFormData
      ? { ...options.headers }
      : { "Content-Type": "application/json", ...options.headers }
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `API request failed: ${response.status}`);
  }

  return response.json();
}
