const darkMode = document.getElementById("darkBtn");

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgExpand");
const captionText = document.getElementById("caption");
const img01 = document.getElementById("img01");
const img02 = document.getElementById("img02");
const img03 = document.getElementById("img03");

const span = document.getElementsByClassName("close")[0];

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

span.addEventListener("click", closeImage);

img01.addEventListener("click", modalImage);
img02.addEventListener("click", modalImage);
img03.addEventListener("click", modalImage);
