const darkMode = document.getElementById("darkBtn");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

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
darkMode.addEventListener("click", toggleDark);
