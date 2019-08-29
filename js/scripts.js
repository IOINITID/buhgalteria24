// Tabs init function
$(function () {
  $("#tabs").tabs();
});
// Tab-one actions
$(".tab-one").click(() => {
  $(".tab-one").addClass("active-tab");
  $(".tab-two").removeClass("active-tab");
  $(".tab-three").removeClass("active-tab");
});
// Tab-two actions
$(".tab-two").click(() => {
  $(".tab-two").addClass("active-tab");
  $(".tab-one").removeClass("active-tab");
  $(".tab-three").removeClass("active-tab");
});
// Tab-three actions
$(".tab-three").click(() => {
  $(".tab-three").addClass("active-tab");
  $(".tab-one").removeClass("active-tab");
  $(".tab-two").removeClass("active-tab");
});
// Slider one
$('.first-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: true,
  responsive: [{
    breakpoint: 576,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: false
    }
  }]
});
// Slider two
$('.second-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 576,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: false
    }
  }]
});
