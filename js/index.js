//Show Answer:

const showButton = document.querySelector("[data-js=show-button]");

showButton.addEventListener("click", () => {
  document.getElementsByClassName("answer")[0].style.color = "black";
});

// Dark Mode

const darkMode = document.querySelector("[data-js=dark]");

//const mainElement = document.querySelector('[data-js="main"]');

darkMode.addEventListener("click", () => {
  document.getElementsByClassName("darkmain")[0].style.backgroundColor =
    "black";
});

//mainElement.classList.add('dark');//
//});
