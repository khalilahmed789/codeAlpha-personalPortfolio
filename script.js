let sideBarToggle = document.querySelectorAll(".side-bar-toggle");
let sideBar = document.querySelector(".side-bar");
let outsiderBtn = document.querySelector(".outsider-btn");

sideBarToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideBar.classList.toggle("shown");
    outsiderBtn.classList.toggle("hidden");
  });
});

if (window.innerWidth >= 769) {
  sideBarToggle.removeEventListener("click");
}