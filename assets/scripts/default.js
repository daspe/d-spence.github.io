// Navbar Scripts
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

// Random Quote Script
const quotes = [
    '"When we speak without jargon, it frees us from hiding behind knowledge we don’t have."\n ―Richard Feynman',
    '"Never trust a computer you can\'t throw out a window."\n ―Steve Wozniak',
    '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."\n ―Linus Torvalds',
    '"When you do things right, people won\'t be sure you\'ve done anything at all."',
    '"If you can\'t explain it simply, you don\'t understand it well enough." ―Albert Einstein',
];

document.addEventListener('DOMContentLoaded', () => {
    const welcomeQuote = document.querySelector('.welcome-quote');
    welcomeQuote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
});
