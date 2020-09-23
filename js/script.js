


// Количество карточек которые будут оборажаться в слайдере с ценами
let priceCardValue = 3;


// Адаптив

if(document.documentElement.clientWidth < 991){
    priceCardValue = 2;
    console.log(document.documentElement.clientWidth)
}
if(document.documentElement.clientWidth < 768){
    priceCardValue = 1;
    console.log(document.documentElement.clientWidth)
}



// Слайдер цен
$('.slider-wrapper').slick({
    slidesToShow: priceCardValue,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
});


// Меню

const menu = document.getElementById('modalMenu');
const btnOpenMenu = document.getElementById('openMenu');
const btnCloseMenu = document.getElementById('closeMenu');


const openMenu = () => {
    menu.style.right = '0px';
}
const closeMenu = () => {
    menu.style.right = '-5000px';
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);


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





// Плавный скролл 


// Якоря меню к секциям
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
    

// Якорь стрелки к след блоку
$(document).ready(function(){
    $("#arrow-down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



// Меню

$(document).ready(function(){
    $("#modalMenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        closeMenu();
    });
});




// Отправка формы

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


    
