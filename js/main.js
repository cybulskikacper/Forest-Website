const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navItems = document.querySelectorAll('.nav__item')
const footerYear = document.querySelector('.footer__year')
const body = document.body

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	if (navMobile.classList.contains('nav-mobile--active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'auto'
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

navBtn.addEventListener('click', handleNav)

navItems.forEach(item => {
	item.addEventListener('click', () => {
		if (navMobile.classList.contains('nav-mobile--active')) {
			handleNav() // Zamknij nawigację
		}
	})
})
