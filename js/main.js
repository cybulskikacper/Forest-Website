const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navItems = document.querySelectorAll('.nav__item')

const scrollSpySections = document.querySelectorAll('.section')

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

navItems.forEach(item => {
	item.addEventListener('click', () => {
		if (navMobile.classList.contains('nav-mobile--active')) {
			handleNav()
		}
	})
})

const handleScrollSpy = () => {
    scrollSpySections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const scrollPos = window.scrollY

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const activeSection = document.querySelector(`[href*="${section.id}"]`)

            console.log(`Sekcja: ${section.id}, znaleziony link: ${activeSection}`); // Dodaj to

            navItems.forEach(item => item.classList.remove('is-active'))
            if (activeSection) {
                activeSection.classList.add('is-active')
            } else {
                console.warn(`Nie znaleziono linku nawigacyjnego dla sekcji z id: ${section.id}`)
            }
        }
    })
}


navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleScrollSpy)
