const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    3000: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
