$(function () {
  $('.phone').mask('+7(000)-000-00-00');
  $('.card').mask('0000-0000-0000-0000');
  $('.cvv').mask('00/00');
  $('.valid').mask('000');
  $('.buy__form-ticket-amount-input').mask('00');
  $(".reviews-form__stars-item").on('click', function(){
    $(".reviews-form__stars-rating").removeClass("reviews-form__stars-rating--active");
    $(this).on('click', function(){
      $(this).find(".reviews-form__stars-rating").addClass("reviews-form__stars-rating--active");
    });
  });
  $(".nav__list-link").on('click', function () {
    $(".nav__list").removeClass("nav__list--active");
    $(".logo").removeClass("logo--active");
    $(".nav__login").removeClass("nav__login--active");
    $(".nav__burger").removeClass("nav__burger--active");
  });
  $('.nav__list-link-item').on('click', function () {
    $('.nav__list').toggleClass('nav__list--activate');
    $('.nav__burger').toggleClass('nav__burger--activate');
    $('.nav__logo').toggleClass('nav__logo--activate');
  })
  $(".nav__list, .header__content, .about-quest__inner, .about-stations__item, .about-info__inner, .footer-top, .footer-nav__list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });
  $('.gallery__content-item-link').hover(function () {
    $('.gallery__content-item-link').toggleClass('gallery__content-item-link--active');
    $(this).removeClass('gallery__content-item-link--active');
  });
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
  })
  wow.init();
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  $('.nav__burger').on('click', function () {
    $('.nav__list').toggleClass('nav__list--active');
    $('.nav__burger').toggleClass('nav__burger--active');
    $('.nav__login').toggleClass('nav__login--active');
    $('.logo').toggleClass('logo--active');
  })
  $('.header__slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    fade: true,
    autoplaySpeed: 4000,
    speed: 2000,
    cssEase: 'linear',
    draggable: false,
  });
  $('.about-stations').slick({
    arrows: false,
    dots: true,
    autoplay: false,
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
    prevArrow: '<button type="button" class="reviews__slick-btn reviews__slick-prev"><img src="images/reviews/prev.svg" alt="Предыдущий слайд"></button>',
    nextArrow: '<button type="button" class="reviews__slick-btn reviews__slick-next"><img src="images/reviews/next.svg" alt="Следующий слайд"></button>',
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
  $(".video__play").fancybox({
    helpers: {
      media: true
    },
    youtube: {
      autoplay: 0,
      start: 47,
    }
  });
  $('.authorization__form-input, .registration__form-input, .reviews-form__input, .buy__form-input, .buy__form-ticket-amount-input, .question__form-input, .profile__form-input, textarea').on('mouseover', function () {
    $(this).addClass('input--active');
  });
  $('.authorization__form-input, .registration__form-input, .reviews-form__input, .buy__form-input, .buy__form-ticket-amount-input, .question__form-input, .profile__form-input, textarea').on('mouseout', function () {
    $(this).removeClass('input--active');
  });
  $('.buy__form-ticket-amount-input').styler();
  $(".reviews-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $.magnificPopup.open({
        type: 'inline',
        items: { src: '#question-thanks' },
        preloader: false,
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        midClick: false,
        removalDelay: 300,
        modal: false,
        mainClass: 'my-mfp-zoom-in',
      }); 
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $(".question__form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $.magnificPopup.open({
        type: 'inline',
        items: { src: '#question-thanks' },
        preloader: false,
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        midClick: false,
        removalDelay: 300,
        modal: false,
        mainClass: 'my-mfp-zoom-in',
      });
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  new AirDatepicker('#datepicker', {
    isMobile: true,
    autoClose: true,
    minDate: '2022/06/20',
    maxDate: '2022/06/26',
  });
})