import Swiper from "swiper/bundle";

export const sliderBlogs = (function () {
  const init = function () {
    const $swiper = new Swiper(".blogs-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: false,
      navigation: false,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        1024: {
          centeredSlides: false,
          spaceBetween: 0,
        },
      },
    });
  };

  return {
    init,
  };
})();
