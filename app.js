
$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $('.anime').each(function(){
        if(windowTop > $(this).offset().top - 600){
            $(this).addClass('anime-ini');
        } else {
            $(this).removeClass('anime-ini');
        }
    });
});
