document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1300)
}

// Анимация в блоке основого контента
document.addEventListener('DOMContentLoaded', function(){
    var someText = anime({
        targets: 'h2',
        scale: 1.2,
        delay: 1800
    });
})