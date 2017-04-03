$(function () {
    var isAnimation = false;
    $('.button').click(function () {
        if(isAnimation === false){
            $('.navi').slideDown(function() {
                isAnimation = true;
            });
        }else{
            $('.navi').slideUp(function() {
                isAnimation = false;
            });
        }
    });
});