$(function() {
	//Your js here
})

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var bar1 = new ProgressBar.Circle(container1, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#047378', width: 1 },
  to: { color: '#19bd9a', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

var bar2 = new ProgressBar.Circle(container2, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#047378', width: 1 },
  to: { color: '#19bd9a', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

var bar3 = new ProgressBar.Circle(container3, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#047378', width: 1 },
  to: { color: '#19bd9a', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

var bar4 = new ProgressBar.Line(container4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar5 = new ProgressBar.Line(container5, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar6 = new ProgressBar.Line(container6, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar7 = new ProgressBar.Line(container7, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar8 = new ProgressBar.Line(container8, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar9 = new ProgressBar.Line(container9, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar10 = new ProgressBar.Line(container10, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar11 = new ProgressBar.Line(container11, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

var bar12 = new ProgressBar.Line(container12, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#19bd9a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '5px'}
});

bar1.text.style.fontFamily = 'OpenSansREG, Helvetica, sans-serif';
bar1.text.style.fontSize = '25px';

bar1.animate(0.8);  // Number from 0.0 to 1.0

bar2.text.style.fontFamily = 'OpenSansREG, Helvetica, sans-serif';
bar2.text.style.fontSize = '25px';

bar2.animate(0.75);  // Number from 0.0 to 1.0

bar3.text.style.fontFamily = 'OpenSansREG, Helvetica, sans-serif';
bar3.text.style.fontSize = '25px';

bar3.animate(0.6);  // Number from 0.0 to 1.0

bar4.animate(0.8);

bar5.animate(0.65);

bar6.animate(0.75);

bar7.animate(0.43);

bar8.animate(0.78);

bar9.animate(0.64);

bar10.animate(0.3);

bar11.animate(0.93);

bar12.animate(0.99);

$('.map').hide();

$('.mapSwitch').click(function(){
	// $('.mapToggle').removeClass('fa-chevron-down');
	// $('.mapToggle').addClass('fa-chevron-up');
	// $('.map').slideToggle();
	var map = $('.map');
	if(map.css('display')=='none'){
		$('.mapToggle').removeClass('fa-chevron-down');
		$('.mapToggle').addClass('fa-chevron-up');
		$('.map').slideDown();
	}
	else {
		$('.mapToggle').removeClass('fa-chevron-up');
		$('.mapToggle').addClass('fa-chevron-down');
		$('.map').slideUp();
	}
})

if($(window).width() < '992'){
	$('.servBtnList').addClass('list-inline')
}

if($(window).width() < '992'){
	$('.tibWrap').css('background-image','none')
}

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
		}, false);
	});
}

$('.mobile-menu').hide();

$('.hamburger').click(function(){
	$('.mobile-menu').slideToggle();
})

$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	  	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
    }
	  return false; // выключаем стандартное действие
});
