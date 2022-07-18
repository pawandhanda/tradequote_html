// open mobile menu 
let navbarToggle = document.getElementById('navbar-toggler');
let mobileMenu = document.getElementById('mobile-navigation');
navbarToggle.addEventListener('click', function handleClick(event) {
  mobileMenu.classList.add('open');
});

// close mobile menu 
let mobileMenuButton = document.getElementById('mobile-menu-close');
mobileMenuButton.addEventListener('click', function handleClick(event) {
  mobileMenu.classList.remove('open');
});