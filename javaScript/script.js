localStorage.getItem("theme");
localStorage.setItem("theme", newTheme);
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("[data-theme-toggle]");

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgExpand");
const captionText = document.getElementById("caption");
const img01 = document.getElementById("img01");
const img02 = document.getElementById("img02");
const img03 = document.getElementById("img03");
const img04 = document.getElementById("img04");

const span = document.getElementsByClassName("close")[0];

function hamburgerMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
}

function calcSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function toggleDark() {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  const newCta =
    newTheme === "dark" ? "Change the light theme" : "Change to dark theme";
  button.innerText = newCta;

  //button.setAttribute("aria-label", newCta);

  document.querySelector("html").setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);

  currentThemeSetting = newTheme;
}

let currentThemeSetting = calcSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

function modalImage() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

function closeImage() {
  modal.style.display = "none";
}

hamMenu.addEventListener("click", hamburgerMenu);
button.addEventListener("click", toggleDark);

span.addEventListener("click", closeImage);

img01.addEventListener("click", modalImage);
img02.addEventListener("click", modalImage);
img03.addEventListener("click", modalImage);
img04.addEventListener("click", modalImage);
