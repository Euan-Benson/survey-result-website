//hamburger menu
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

function hamburgerMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
}

hamMenu.addEventListener("click", hamburgerMenu);

//dark mode
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

//finds current theme setting. Local storage --> system settings --> light mode
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

//update button text and aria label (for icons)
// a ? x : y -- this is an if else statement (one line notation)
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

//update theme on html tag
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

function updateMode() {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", updateMode);

//modal image
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgExpand");
const captionText = document.getElementById("caption");
const img01 = document.getElementById("img01");
const img02 = document.getElementById("img02");
const img03 = document.getElementById("img03");
const img04 = document.getElementById("img04");

const span = document.getElementsByClassName("close")[0];

function modalImage() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

function closeImage() {
  modal.style.display = "none";
}

span.addEventListener("click", closeImage);

img01.addEventListener("click", modalImage);
img02.addEventListener("click", modalImage);
img03.addEventListener("click", modalImage);
img04.addEventListener("click", modalImage);
