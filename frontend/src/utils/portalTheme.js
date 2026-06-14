export const PORTAL_THEME_EVENT = "stekora-portal-theme-change";

export function getPortalTheme(accountType) {
  return localStorage.getItem(`stekora-${accountType}-theme`) || "light";
}

export function setPortalTheme(accountType, theme) {
  localStorage.setItem(`stekora-${accountType}-theme`, theme);
  window.dispatchEvent(
    new CustomEvent(PORTAL_THEME_EVENT, {
      detail: { accountType, theme }
    })
  );
}
