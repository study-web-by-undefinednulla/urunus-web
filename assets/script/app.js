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

// $('.newest__slider').find('.owl-nav').removeClass('disabled');
// $('.newest__slider').on('changed.owl.carousel', function (event) {
//     $(this).find('.owl-nav').removeClass('disabled');
// });