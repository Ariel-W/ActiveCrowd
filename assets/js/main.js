// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Demo counter animation
(function animateCounter() {
  const el = document.getElementById("demoCounter");
  if (!el) return;
  const start = 1234;
  const end = 1350;
  const duration = 1600;
  const startTime = performance.now();

  const fmt = (n) => n.toLocaleString("he-IL");

  function tick(now) {
    const p = Math.min(1, (now - startTime) / duration);
    const val = Math.round(start + (end - start) * p);
    el.textContent = fmt(val);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// Contact form handler (no network calls)
(function handleContact() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const thank = document.getElementById("thankYou");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // minimal inline validation
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const business = form.elements["business"].value.trim();
    if (!name || !email || !business) {
      alert("אנא מלאו שם, אימייל ושם עסק.");
      return;
    }
    // show thank you, reset, no storage
    if (thank) {
      thank.hidden = false;
      thank.setAttribute("tabindex", "-1");
      thank.focus?.();
    }
    form.reset();
  });
})();
