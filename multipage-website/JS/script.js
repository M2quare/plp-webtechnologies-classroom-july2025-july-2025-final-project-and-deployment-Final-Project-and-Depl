// Toggle mobile menu
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.querySelector(".nav-links")?.classList.toggle("show");
});

// Contact form validation
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! ✅");
});
