const darkMode = document.getElementById("darkBtn");

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

const expand = document.querySelector(".expand");

var modal = document.getElementById("ageDemo");
var img = document.getElementById("ageDemo");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var span = document.getElementById("close")[0];

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

function modalImage(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

function closeImage(){
  modal.style.display = "none";
}

hamMenu.addEventListener("click", hamburgerMenu);
darkMode.addEventListener("click", toggleDark);
expand.addEventListener("click", expandImage);
img.addEventListener("click", modalImage);
span.addEventListener("click", closeImage);
