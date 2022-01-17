$('.newest__slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rewindNav: true,
    navText: [$('.slider--previous'), $('.slider--next')],
    responsive: {
        0: {
            items: 1
        }
    }
})

$('.companies').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    rewindNav: true,
    navText: [$('.companies__slider--previous'), $('.companies__slider--next')],
    responsive: {
        0: {
            items: 1
        }
    }
})

// button toggle navication 
const buttonNavication = document.getElementById('button--togle--mobile'),
    elementLinks = document.getElementById('navication__links')

buttonNavication.addEventListener('click', () => {
    // elementLinks.
})

window.onload = function () {
    const widthWindow = window.innerWidth
    const companies = document.getElementById('companies__slider')

    if (widthWindow > 500) {
        companies.classList.remove('owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag')
        companies.innerHTML = `<div class="companies__item">
                <img src="./assets/images/companies/icon1.svg" alt="">
            </div>
            <div class="companies__item">
                <img src="./assets/images/companies/icon2.svg" alt="">
            </div>
            <div class="companies__item">
                <img src="./assets/images/companies/icon3.svg" alt="">
            </div>
            <div class="companies__item">
                <img src="./assets/images/companies/icon4.svg" alt="">
            </div>
            <div class="companies__item">
                <img src="./assets/images/companies/icon5.svg" alt="">
            </div>
            <div class="companies__item">
                <img src="./assets/images/companies/icon6.svg" alt="">
            </div>`
    }
};