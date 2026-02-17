const darkMode = document.getElementById("darkBtn");

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

const modal = document.getElementById("ageModal");
const ageImg = document.getElementById("ageImg");
const hoursImg = document.getElementById("hoursImg");
const settingsImg = document.getElementById("settingsImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

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
ageImg.addEventListener("click", modalImage);
hoursImg.addEventListener("click", modalImage);
settingsImg.addEventListener("click", modalImage);

span.addEventListener("click", closeImage);
