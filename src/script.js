const menuLink = document.querySelectorAll('.menu a[href^="#"]');

function scroolToSection(event) {
  event.preventDefault();
}

menuLink.forEach((link) => {
  link.addEventListener('click', scroolToSection);
});
