$('.newest__slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rewindNav: true,
    navText: [$('.slider--next'), $('.slider--previous')],
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
