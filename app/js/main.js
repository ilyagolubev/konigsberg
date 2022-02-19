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
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date('08.01.2022');
  initializeClock('timer', deadline);
})