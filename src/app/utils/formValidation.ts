/** Basic email format check (not full RFC validation). */
export function emailLooksValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Names should be letters, spaces, and common punctuation — no digits. */
export function nameLooksValid(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 2) return false;
  if (/\d/.test(trimmed)) return false;
  return /^[\p{L}\s'.-]+$/u.test(trimmed);
}

/** Accepts https://…, domain.tld, and www.domain.tld (e.g. www.joms.in). */
export function urlLooksValid(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withScheme);
    const host = url.hostname.replace(/^www\./, "");
    return host.includes(".") && host.length > 3;
  } catch {
    return false;
  }
}

export function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}
