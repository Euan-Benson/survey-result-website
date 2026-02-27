//hamburger menu
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

function hamburgerMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
}

hamMenu.addEventListener("click", hamburgerMenu);

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
