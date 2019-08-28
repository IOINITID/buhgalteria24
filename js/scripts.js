//Tabs init function
$(function () {
  $("#tabs").tabs();
});
//Tab-one actions
$(".tab-one").click(() => {
  $(".tab-one").addClass("active-tab");
  $(".tab-two").removeClass("active-tab");
  $(".tab-three").removeClass("active-tab");
});
//Tab-two actions
$(".tab-two").click(() => {
  $(".tab-two").addClass("active-tab");
  $(".tab-one").removeClass("active-tab");
  $(".tab-three").removeClass("active-tab");
});
//Tab-three actions
$(".tab-three").click(() => {
  $(".tab-three").addClass("active-tab");
  $(".tab-one").removeClass("active-tab");
  $(".tab-two").removeClass("active-tab");
});
