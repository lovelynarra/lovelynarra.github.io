$(function(){
   var gnbA = $('#gnb > li');
   var sub = $('#gnb > li > ul');

   var headerMin = $('#headerBox').height();
   var headerMax = sub.innerHeight() + headerMin;

   var state = false;
   var speed = 150;
   
   //마우스오버
   gnbA.mouseenter(function(){
      if(!state){
         $('#headerBox').stop().animate({height:headerMax},speed,function(){
            sub.stop().fadeIn(speed);
         });
         state = true;
      }
      $(this).addClass('on');
      $(this).find(sub).addClass('on');
   }); //mouseenter end
   
   //마우스 아웃
   gnbA.mouseleave(function(){
      $(this).removeClass('on');
      $(this).find(sub).removeClass('on');
   });
   //마우스아웃 주메뉴 벗어날 때 페이드 효과와 높이 제어
   $('#gheader').mouseleave(function(){ //헤더박스의 위로올라가는 부드럽게 올라가는 설정해주려고
      sub.stop().fadeOut(speed,function(){
         $('#headerBox').stop().animate({height:headerMin},speed);
      });
      state = false;
   });
});