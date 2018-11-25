openBtn = document.querySelector(".btn-open");
closeBtn = document.querySelector(".btn-close");

function openSideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

openBtn.addEventListener("click", openSideMenu);
closeBtn.addEventListener("click", closeSideMenu);
