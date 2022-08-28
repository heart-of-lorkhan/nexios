import { mobileMenu } from "./components/mobile-menu";
import { slider } from "./components/slider";
import { sliderThumbs } from "./components/sliderThumbs";
import { sliderProduct } from "./components/sliderProduct";

$(() => {
  mobileMenu.init();
  slider.init();
  sliderThumbs.init();
  sliderProduct.init();
});
