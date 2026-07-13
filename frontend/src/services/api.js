import { clearAuthSession } from "../utils/authSession";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export async function apiRequest(path, options = {}) {
  const requestPath = path.startsWith("/") ? path : `/${path}`;
  const isFormData = options.body instanceof FormData;

  const headers = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_URL}${requestPath}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    if (response.status === 401) {
      clearAuthSession();

      const currentRoute = window.location.hash.replace("#", "") || "/";
      const isProtectedRoute =
        currentRoute.startsWith("/admin") || currentRoute.startsWith("/student");

      if (isProtectedRoute) {
        window.location.hash = "/login";
      }
    }

    const message =
      typeof data === "object" && data?.message
        ? data.message
        : typeof data === "string" && data
          ? data
          : `API request failed: ${response.status}`;

    throw new Error(message);
  }

  return data;
}
