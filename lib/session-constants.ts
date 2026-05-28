export const SESSION_COOKIE_NAME = "workspace-session";
export const ADMIN_EMAIL = "admin@samung.com";

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
