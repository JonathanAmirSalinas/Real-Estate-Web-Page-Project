
const sidebarMenu = document.querySelector(".sidenav");
const menuBtn = document.querySelector(".header-action-bar-btn");
const closeSidebar = document.querySelector(".close-sidenav");

menuBtn.addEventListener('click', () => {
  sidebarMenu.style.width = "250px";
  sidebarMenu.style.display = "flex";
});


closeSidebar.addEventListener('click', () => {
  sidebarMenu.style.width = "0px";
  sidebarMenu.style.display = "none";
});