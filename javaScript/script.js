const hidden = document.getElementById("hidden");
const darkMode = document.getElementById("darkBtn");
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

function hamburgerMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
}

function toggleDark() {
  var bodyDark = document.body;
  bodyDark.classList.toggle("darkMode");
  
  if(darkMode.textContent === "Dark Mode"){
    darkMode.textContent = "Light Mode";
  }else{
    darkMode.textContent = "Dark Mode";
  }
}

hamMenu.addEventListener("click", hamburgerMenu);
hidden.addEventListener("click", hideSection);
darkMode.addEventListener("click", toggleDark);
