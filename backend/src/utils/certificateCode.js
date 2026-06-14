export function createCertificateCode() {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `STK-${year}-${random}`;
}
