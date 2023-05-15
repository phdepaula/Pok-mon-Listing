const buttonChangeTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const imageButtonSwapTheme = document.querySelector(".button-image");

buttonChangeTheme.addEventListener("click", () => {
  const darkmodeIsActive = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkmodeIsActive) {
    imageButtonSwapTheme.setAttribute("src", "./src/images/sun.png");
  } else {
    imageButtonSwapTheme.setAttribute("src", "./src/images/moon.png");
  }
});
