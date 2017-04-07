$(function(){
   var navi = $('.navi');

    $('.button').click(function(){
        if((navi.is(':hidden'))){
            slideOpen();
        }else{
            slideClose();
        }
    });

    function slideOpen(){
        navi.slideDown();
        $('.button').addClass('on');
    }

    function slideClose(){
        navi.slideUp();
        $('.button').removeClass('on');
    }

});