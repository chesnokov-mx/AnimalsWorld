$(function(){
    
    
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.your-class-arrow'),
            prevArrow: '<button id="prev" type="button"><img src="images/loc.svg" alt ="img"></button>',
            nextArrow: '<button id="next" type="button"><img src="images/loc.svg" alt ="img"></button>'
    });
    
    
    
});