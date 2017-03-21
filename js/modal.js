$(function () {
    var isAnimation = false;
   $('.button').click(function(){

       if(isAnimation == false){
           isAnimation = true;
           $('.navi').slideToggle();
       }
       isAnimation = false;
   });
});