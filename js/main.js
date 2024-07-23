const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const body = document.body

const handleNav = () => {
	navToggle.classList.toggle('is-active')
	navMenu.classList.toggle('show')

	if (navMenu.classList.contains('show')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'auto'
	}
}
navToggle.addEventListener('click', handleNav)
