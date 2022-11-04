//Show Answer:

function buttonText() {
  if ((item.classList = "hidden")) {
    item.innerText = "Show Answer";
  }
}

const showButton = document.querySelector('[data-js="show-button"]');

showButton.addEventListener("click", () => {
  const item = document.querySelector('[data-js="answer"]');

  item.toggleAttribute("hidden");
});

const doBookmark = document.querySelector('[data-js="card-ookmark-icon"]');

doBookmark.addEventListener("click", () => {
  doBookmark.setAttribute("src", "./assets/gebookmared.png");
});
