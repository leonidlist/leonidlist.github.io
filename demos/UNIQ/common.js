document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000)
}

// Анимация в блоке основого контента
document.onreadystatechange = function(){
    // var someText = anime({
    //     targets: 'h2',
    //     scale: 0.9,
    //     delay: 1800
    // });

    // var logo = anime({
    //     targets: '.logo',
    //     translateX: 300,
    //     delay: 2000
    // })
};