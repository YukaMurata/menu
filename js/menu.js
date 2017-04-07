$(function () {
    var isAnimation = false;
    $('.button').click(function () {
        if(isAnimation === false){
            $('.navi').slideDown(function() {
                $('.button').children('img').attr('src','/menu/images/menu_on.png');
                isAnimation = true;
            });
        }else{
            $('.navi').slideUp(function() {
                $('.button').children('img').attr('src','/menu/images/menu.png');
                isAnimation = false;
            });
        }
    });
});