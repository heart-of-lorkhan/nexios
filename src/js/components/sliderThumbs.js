import Swiper from "swiper/bundle";

export const sliderThumbs = (function () {
  const init = function () {
    const $swiperThumbs = document.querySelectorAll(".slider-thumbs");
    const $swiperThumbsNav = document.querySelectorAll(".slider-thumbs-nav");

    for (let i = 0; i < $swiperThumbs.length; i++) {
      $swiperThumbs[i].classList.add(`slider-thumbs-${i}`);
      $swiperThumbsNav[i].classList.add(`slider-thumbs-nav-${i}`);

      const $galleryThumbs = new Swiper(`.slider-thumbs-nav-${i}`, {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            pagination: false,
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });

      const $gallerySwiper = new Swiper(`.slider-thumbs-${i}`, {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".slider-thumbs-pagination",
          clickable: "true",
          type: "bullets",
          bulletElement: "button",
        },
        thumbs: {
          swiper: $galleryThumbs,
        },
      });
    }
  };

  return {
    init,
  };
})();
