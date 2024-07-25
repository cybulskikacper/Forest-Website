const navBtn = document.querySelector('.hamburger') // Przycisk hamburgera
const navMenu = document.querySelector('#nav-menu') // Nawigacja
const body = document.body // Ciało dokumentu

const handleNav = () => {
	// Dodaj lub usuń klasy do przycisku i menu
	navBtn.classList.toggle('is-active')
	navMenu.classList.toggle('nav--mobile')
	navMenu.classList.toggle('nav--active')

	// Zablokuj przewijanie, gdy menu jest aktywne
	if (navMenu.classList.contains('nav--active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'auto'
	}
}

// Dodaj nasłuchiwanie kliknięcia na przycisk hamburgera
navBtn.addEventListener('click', handleNav)
