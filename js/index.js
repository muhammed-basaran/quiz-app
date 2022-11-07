//Show Answer:

function buttonText() {
  if (answerTag.classList.contains("answer-hidden")) {
    showButton.innerText = "SHOW";
  } else {
    showButton.innerText = "HIDE";
  }
}

const answerTag = document.querySelector('[data-js="answer"]');
const showButton = document.querySelector('[data-js="show-button"]');

showButton.addEventListener("click", () => {
  answerTag.classList.toggle("answer-hidden");
  buttonText();
});

const imageElement = document.querySelector('[data-js="card-bookmark-icon"]');

let toggle = true;

imageElement.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    imageElement.src = "./assets/gebookmared.png";
  } else {
    imageElement.src = "./assets/bookmark.png";
  }
});
