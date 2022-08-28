import Swiper from "swiper/bundle";

var sliderProduct = (function () {
  var init = function () {
    var $swiperProduct = document.querySelectorAll(".slider-product");
    var $swiperProductNav = document.querySelectorAll(".slider-product-nav");

    for (let i = 0; i < $swiperProduct.length; i++) {
      $swiperProduct[i].classList.add(`slider-product-${i}`);
      $swiperProductNav[i].classList.add(`slider-product-nav-${i}`);

      var $galleryProductNav = new Swiper(`.slider-product-nav-${i}`, {
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
          },
        },
      });

      var $galleryProduct = new Swiper(`.slider-product-${i}`, {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
          clickable: "true",
          type: "bullets",
          bulletElement: "button",
        },
        thumbs: {
          swiper: $galleryProductNav,
        },
      });
    }
  };

  return {
    init,
  };
})();
