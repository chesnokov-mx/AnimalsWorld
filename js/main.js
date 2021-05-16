$(function(){
    
    
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendArrows: $('.your-class-arrow'),
            prevArrow: '<button id="prev" type="button"><img src="images/loc.svg" alt ="img"></button>',
            nextArrow: '<button id="next" type="button"><img src="images/loc.svg" alt ="img"></button>'
    });
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });
    $('.button__buy').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });
    
});