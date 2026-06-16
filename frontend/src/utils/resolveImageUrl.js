export function resolveImageUrl(path) {
  if (!path) return "";

  // Already full URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Production API URL
  const API_URL =
    import.meta.env.VITE_API_URL || "https://stekoratech.com/api";

  // Remove extra leading slashes
  const cleanPath = path.replace(/^\/+/, "");

  return `${API_URL}/${cleanPath}`;
}