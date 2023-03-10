const togglesElement = document.querySelectorAll(".faq-toggle");

togglesElement.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
