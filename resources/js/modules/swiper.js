import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  on: {
    init: function (swiper) {
      updateCaption(swiper);
    },
    slideChange: function (swiper) {
      updateCaption(swiper);
    },
  },
});

function updateCaption(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const img = activeSlide.querySelector('img');
  const caption = document.querySelector('.swiper-caption');
  if (caption && img) {
    caption.textContent = img.getAttribute('alt') || '';
  }
}