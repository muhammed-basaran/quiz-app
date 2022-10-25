const darkMode = document.querySelector('[data-js="darkmode"]');
const mainElement = document.querySelector('[data-js="main"]');

darkMode.addEventListener("click", () => {
  mainElement.classList.add("dark");
});
