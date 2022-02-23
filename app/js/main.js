$(function () {
  $('.about-stations').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
  });
  $('.gallery__content-items').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    appendArrows: '.gallery__arrows',
    prevArrow: '<button type="button" class="gallery__slick-btn gallery__slick-prev"><img src="images/gallery/prev.svg" alt="Предыдущий слайд"></button>',
    nextArrow: '<button type="button" class="gallery__slick-btn gallery__slick-next"><img src="images/gallery/next.svg" alt="Следующий слайд"></button>',
  });
})