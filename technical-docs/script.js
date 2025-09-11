const body = document.body;
const sidebar = document.getElementById("sidebar");

function toggleTheme() {
  body.classList.toggle("dark");
}

function toggleSidebar() {
  sidebar.classList.toggle("active");
}
