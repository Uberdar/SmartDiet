var a = document.getElementById("js_burger_btn");
var s = document.getElementById("js_menu_flow");

var burgerBtn = document.getElementById("js_burger_btn");
burgerBtn.addEventListener("click", function (e) {
  e.stopPropagation(); 
  magicHappens();
});
function magicHappens() {
  a.classList.toggle("burger_rotation");
  s.classList.toggle("flowing_navigation");
}

document.addEventListener("click", function (e) {
  a.classList.remove("burger_rotation");
  s.classList.remove("flowing_navigation");
});

$(document).ready(function () {
  $(".diet__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
     arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dotsClass: "custom-dots",
    prevArrow: "<button class='prev'></button>",
    nextArrow: "<button class='next'></button>",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider__prof-mob").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  });
});



// $(document).ready(function () {
//   $(".slider__prof-mob").slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,
//     autoplay: true,
//     autoplaySpeed: 1000,
//   });
// });