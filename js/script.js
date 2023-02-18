let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
}

window.onscroll = () => {
  navbar.classList.remove("active");
}

let myBox = document.querySelectorAll(".faq .box");
let myTitle = document.querySelectorAll(".contact .faq .box h3");

myTitle.forEach(myBox => {
  myBox.onclick = () => {
    myBox.parentElement.classList.toggle("active");
  }
});



var swiper = new Swiper(".home-slider", {
  loop:true,
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".gallery-slider", {
  loop:true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



var swiper = new Swiper(".reviews-slider", {
  loop:true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
  },
});