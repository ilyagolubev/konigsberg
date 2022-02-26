$(function () {
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

  $("[data-fancybox]").fancybox({
    thumbs: false,
    hash: false,
    loop: true,
    keyboard: true,
    toolbar: false,
    animationEffect: false,
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