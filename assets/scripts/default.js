const navbar = document.getElementById('navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');
const navbarMenu = navbar.querySelector('.navbar-menu');
const navbarLinksContainer = navbar.querySelector('.navbar-links');

const openMobileNavbar = () => {
    // Opens closed navbar when called
    navbar.classList.add('opened');
    navbarToggle.setAttribute('aria-label', 'Close navigation menu.');
}

const closeMobileNavbar = () => {
    // Closes opened navbar when called
    navbar.classList.remove('opened');
    navbarToggle.setAttribute('aria-label', 'Open navigation menu.');
}

navbarToggle.addEventListener('click', () => {
    // Toggle the expanded navbar view when on mobile/small screen devices
    if (navbar.classList.contains('opened')) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
});

navbarLinksContainer.addEventListener('click', (clickEvent) => {
    // Prevents issues caused by errant mouse clicks
    clickEvent.stopPropagation();
});

navbarMenu.addEventListener('click', closeMobileNavbar);
