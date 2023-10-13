const toggleButton = document.getElementById("toggleButton");
const navElement = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  navElement.classList.toggle("active");
});
