const darkMode = document.getElementById("darkBtn");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const expand = document.querySelector(".expand");

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
function expandImage(){
  expand.classList.toggle("expand-image");
}

hamMenu.addEventListener("click", hamburgerMenu);
darkMode.addEventListener("click", toggleDark);
expand.addEventListener("click", expandImage);
