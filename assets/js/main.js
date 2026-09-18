document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal-on-scroll for section headers, cards and the growth chart
const revealTargets = document.querySelectorAll(
  ".about__content, .about__media, .section-head, .timeline__card, .experience__media, .projects__media, .project-card, .edu-item, .achievement-item, .contact__content, .contact__media, .growth, .stats"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const counters = document.querySelectorAll("[data-count-to]");

function animateCount(el) {
  if (prefersReducedMotion) {
    el.textContent = `${el.dataset.countTo}${el.dataset.suffix || ""}`;
    return;
  }
  const target = parseFloat(el.dataset.countTo);
  const suffix = el.dataset.suffix || "";
  const isDecimal = String(target).includes(".");
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = `${isDecimal ? value.toFixed(1) : Math.round(value)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.classList.contains("stats")) {
            counters.forEach(animateCount);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
  counters.forEach(animateCount);
}
