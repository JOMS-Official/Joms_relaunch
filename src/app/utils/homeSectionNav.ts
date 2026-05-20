export function getHomeSectionId(to: string): string | null {
  if (!to.startsWith("/#")) return null;
  const id = to.slice(2);
  return id.length > 0 ? id : null;
}

export function scrollToHomeSection(id: string) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
