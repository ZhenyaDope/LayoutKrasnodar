
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



// Модальное окно

const btnOpenModal = document.getElementById('openModal');
const btnCloseModal = document.getElementById('closeModal');
const modalWindow = document.getElementById('modalForm');

const openModal = () => {
    modalWindow.style.left = '0px';
}

const closeModal = () => {
    modalWindow.style.left = '-5000px';
}


btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click',closeModal);
