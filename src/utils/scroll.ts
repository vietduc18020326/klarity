export function scrollToElement(id: string, path?: string) {
  const element = document.getElementById(id);

  if (element) {
    // If element exists on current page, scroll to it with smooth animation to center
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (path) {
    // Navigate to target page and setup scroll after navigation
    const targetUrl = `${path}#${id}`;

    // Navigate to target page
    window.location.href = targetUrl;
  }
}
