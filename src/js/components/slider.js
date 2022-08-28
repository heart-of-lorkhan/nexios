import Swiper from "swiper/bundle";

export const slider = (function () {
  const init = function () {
    const $swiper = new Swiper(".customer-slider", {
      slidesPerView: 1.2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
      navigation: false,
      centeredSlides: true,
      breakpoints: {
        1024: {
          loop: false,
          centeredSlides: false,
          slidesPerView: 1,
          centeredSlides: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: true,
          spaceBetween: 0,
        },
      },
    });
  };

  return {
    init,
  };
})();
