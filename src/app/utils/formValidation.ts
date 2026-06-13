/** Basic email format check (not full RFC validation). */
export function emailLooksValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

type NameValidationOptions = {
  minLength?: number;
};

/** Names should be letters, spaces, and common punctuation — no digits. */
export function nameLooksValid(value: string, options: NameValidationOptions = {}): boolean {
  const minLength = options.minLength ?? 2;
  const trimmed = value.trim();
  if (trimmed.length < minLength) return false;
  if (/\d/.test(trimmed)) return false;
  return /^[\p{L}\s'.-]+$/u.test(trimmed);
}

export function nameValidationMessage(value: string, options: NameValidationOptions = {}): string {
  const minLength = options.minLength ?? 2;
  const trimmed = value.trim();
  if (!trimmed) return "This field is required.";
  if (trimmed.length < minLength) {
    return minLength === 1
      ? "Enter at least one letter."
      : `Enter at least ${minLength} characters.`;
  }
  if (/\d/.test(trimmed)) return "Use letters only (no numbers).";
  if (!/^[\p{L}\s'.-]+$/u.test(trimmed)) return "Use letters only.";
  return "";
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
