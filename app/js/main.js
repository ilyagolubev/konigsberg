$(function () {
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
    mainClass: 'my-mfp-zoom-in'
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