const darkMode = document.getElementById("darkBtn");

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

const modal = document.getElementById("ageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const ageImg = document.getElementById("ageImg");
const hoursImg = document.getElementById("hoursImg");
const settingsImg = document.getElementById("settingsImg");

const visModal = document.getElementById("visModal");
const visModalImg = document.getElementById("img02");
const visCaption = document.getElementById("visCaption");
const currVis = document.getElementById("currVis");
const impVis = document.getElementById("impVis");

const span = document.getElementsByClassName("close")[0];
const spanVis = document.getElementsByClassName("close")[0];


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

function visModalImage(){
  visModal.style.display = "block";
  visModalImg.src = this.src;
  visCaption.innerHTML = this.alt;
}

function closeImage(){
  modal.style.display = "none";
}

function closeVisImage(){
  visModal.style.display = "none";
}

hamMenu.addEventListener("click", hamburgerMenu);
darkMode.addEventListener("click", toggleDark);

// ageImg.addEventListener("click", modalImage);
// hoursImg.addEventListener("click", modalImage);
// settingsImg.addEventListener("click", modalImage);
currVis.addEventListener("click", visModalImage);
impVis.addEventListener("click", visModalImage);

span.addEventListener("click", closeImage);
spanVis.addEventListener("click", closeVisImage);
