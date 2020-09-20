
// Количество карточек которые будут оборажаться в слайдере с ценами
let priceCardValue = 3;


// Слайдер цен
$('.slider-wrapper').slick({
    slidesToShow: priceCardValue,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  });


  