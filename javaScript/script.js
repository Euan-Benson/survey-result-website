const hidden = document.getElementById("hidden");
const darkMode = document.getElementById("darkMode");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

//hides section but cant unhide it
function hideSection() {
  if (hidden.style.display === "none") {
    hidden.style.display = "block";
  } else {
    hidden.style.display = "none";
  }
}

function toggleDark() {
  darkMode.classList.toggle("darkMode");
}
function hamburgerMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
}

hamMenu.addEventListener("click", hamburgerMenu);

hidden.addEventListener("click", hideSection);
darkMode.addEventListener("click", toggleDark);
