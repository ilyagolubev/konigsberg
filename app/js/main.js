$(function () {
  $('.header__bg-video').bgVideo({
    fullScreen: false,
    fadeIn: 500,
    pauseAfter: 120,
    fadeOnPause: false,
    fadeOnEnd: true,
    showPausePlay: false,
  });
     $(".nav__list-link").on('click', function() {
         $(".nav__list").removeClass("nav__list--active");
           $(".logo").removeClass("logo--active");
             $(".nav__login").removeClass("nav__login--active");
               $(".nav__burger").removeClass("nav__burger--active");
               });
                 	$(".nav__list, .header__content, .about-quest__inner, .about-stations__item, .about-info__inner, .footer-top, .footer-nav__list").on("click","a", function (event) {
                  	event.preventDefault();
                    	var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
  $('.gallery__content-item-link').hover(function(){
    $('.gallery__content-item-link').toggleClass('gallery__content-item-link--active');
    $(this).removeClass('gallery__content-item-link--active');
  });
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  })
  new WOW().init();
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  $('.nav__burger').on('click', function(){
    $('.nav__list').toggleClass('nav__list--active');
    $('.nav__burger').toggleClass('nav__burger--active');
    $('.nav__login').toggleClass('nav__login--active');
    $('.logo').toggleClass('logo--active');
  })
  $('.about-stations').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
  });
  $('.reviews__items').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    appendArrows: '.reviews__arrows',
    prevArrow: '<button type="button" class="reviews__slick-btn reviews__slick-prev"><img src="images/reviews/prev.svg" alt="???????????????????? ??????????"></button>',
    nextArrow: '<button type="button" class="reviews__slick-btn reviews__slick-next"><img src="images/reviews/next.svg" alt="?????????????????? ??????????"></button>',
  });
  $('.nav__login, .authorization__form-signup,.reviews__btn').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
  });
  $("[data-fancybox]").fancybox({
    thumbs: false,
    hash: false,
    loop: true,
    keyboard: true,
    toolbar: true,
    animationEffect: true,
    arrows: true,
    clickContent: false,
  });
/*   const picker = datepicker('.datapicker', {
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString()
      input.value = value
    },
    maxDate: new Date(2022, 07, 31),
    minDate: new Date(2022, 06, 4),
    startDate: new Date(2022, 06, 4),
    respectDisabledReadOnly: false
    }); */
    $('.buy__form-ticket-amount-input').styler();
})  