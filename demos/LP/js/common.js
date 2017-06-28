$(document).ready(function() {
  $('.makePhone').hover(
       function(){ $(this).addClass('animated bounce') },
       function(){ $(this).removeClass('bounce') }
  );
  $('.iphone').hover(
       function(){ $(this).addClass('animated tada') },
       function(){ $(this).removeClass('tada') }
  );
  $('.submitButton').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('pulse') }
  );
  $('.sendButton input').hover(
       function(){ $(this).addClass('animated jello') },
       function(){ $(this).removeClass('jello') }
  );
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        }
      }
  });
});
