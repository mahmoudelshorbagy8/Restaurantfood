$(document).ready(function(){
 $('.fa-bars').click(function(){
   $(this).toggleClass('fa-times');
   $('.navbar').toggleClass('navTog');
 });
 $(window).on('scroll load', function() {
 
   $('.fa-bars').removeClass('fa-times');
   $('.navbar').removeClass('navTog');
   });
   //// slaider home
   $('.box-itmes').owlCarousel({
     items: 1,
     nav: true,
     dots: false,
     autoplay: true,
     autoplayTimeout: 9000,
     loop: true
   
   });
   //////click meun
   $('#menu .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    let src = $(this).attr('data-src')
    $('#meun-img').attr('src', src);
   });
   ////scroll windw
   $(window).scroll(function(){
     if($(window).scrollTop() >= 200){
       $('.scrol').show();
     }else{
       $('.scrol').hide();
     }
   });
});
