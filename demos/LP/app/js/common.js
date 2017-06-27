$(document).ready(function() {
  $('.makePhone').hover(
       function(){ $(this).addClass('animated bounce') },
       function(){ $(this).removeClass('bounce') }
  );
  $('.iphone').hover(
       function(){ $(this).addClass('animated tada') },
       function(){ $(this).removeClass('tada') }
  );
});
