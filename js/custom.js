$(function(){
//banner slider
$('.banner-conten-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    
});




$('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    
});


// mixitup
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl);

//counter js
$('.counter').counterUp({
    delay: 14,
    time: 2000
});


$('.blog-main').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode:true,
    centerPadding:false,
    
});


$('.brand-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    
});





});