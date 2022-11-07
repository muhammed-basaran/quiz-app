const darkButton = document.querySelector(".button-dark-mode");
const backG = document.querySelector(".dark-body");

darkButton?.addEventListener("click", () => {
  backG.classList.toggle("darkmode");
});
