$(".main").onepage_scroll({
  sectionContainer: "section",
  easing: "ease",
  animationTime: 700,
  pagination: false,
  updateURL: false,
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "vertical"
});

new WOW().init();

setInterval(function(){
  if($(".sect2, .sect4").hasClass("active")){
    $(".socials li").css("color", "#000");
  }
  else{
    $(".socials li").css("color", "#fff");
  }
}, 1000);

$(".c2, .c3, .c4").hide();

$(".b1").click(function(){
  $(".c2,.c3,.c4").fadeOut();
  $(".c1").fadeToggle();
});

$(".b2").click(function(){
  $(".c1,.c3,.c4").fadeOut();
  $(".c2").fadeToggle();
});

$(".b3").click(function(){
  $(".c2,.c1,.c4").fadeOut();
  $(".c3").fadeToggle();
});

$(".b4").click(function(){
  $(".c2,.c3,.c1").fadeOut();
  $(".c4").fadeToggle();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
