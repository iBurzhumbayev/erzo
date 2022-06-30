$(document).ready(function(){
    $('.room__carousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        arrows: false
    });
  });

  $('.office_button').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow').css('display','flex');
  });
  $('.event_button').on('click', function() {
    $('.overlay, #event').fadeIn('slow').css('display','flex');
  });
  $('.trading_button').on('click', function() {
    $('.overlay, #trading').fadeIn('slow').css('display','flex');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #event, #trading').fadeOut('slow');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__active');
        })
    })
})