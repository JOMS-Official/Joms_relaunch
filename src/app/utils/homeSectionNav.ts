export function getHomeSectionId(to: string): string | null {
  if (!to.startsWith("/#")) return null;
  const id = to.slice(2);
  return id.length > 0 ? id : null;
}

/** Fixed navbar offset so section labels (Contact, Vision, etc.) stay visible. */
const SCROLL_OFFSET_PX = 112;

export function scrollToElementById(id: string) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  });
}

/** @deprecated Use scrollToElementById — kept for home section hash links. */
export function scrollToHomeSection(id: string) {
  scrollToElementById(id);
}
