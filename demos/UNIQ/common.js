document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
            
        }
        console.log('Done');
    }, 1000);
    setTimeout(function(){
        document.getElementById('logo').classList.add('logo-anim');
        console.log('Done class');
    }, 1500);
}