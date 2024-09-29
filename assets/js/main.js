
const navmenu = document.getElementById('nav-menu'),
    navtoggle = document.getElementById('nav-toggle'),
    navclose = document.getElementById('nav-close')

if (navtoggle) {
    navtoggle.addEventListener('click', () => {
        navmenu.classList.add('show-menu')
    })
}

if (navclose) {
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}

const navlink = document.querySelectorAll('.nav_link')

var swiper = new Swiper(".portfolio_container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


const linkaction = () => {
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListerner('click', linkaction))

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact_name'),
    contactEmail = document.getElementById('contact_email'),
    contactProject = document.getElementById('contact_project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'Write all the input fields'
    }
}

contactForm.addEventListener('submit', sendEmail)
