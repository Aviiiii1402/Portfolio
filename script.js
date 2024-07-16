function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
}
// script.js
function scrollToExperience() {
  document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
}

function scrollTocontact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToprojects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
