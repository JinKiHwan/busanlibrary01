$(document).ready(function () {

  $(".depth2").hide();
  $(".gnb>li").mouseenter(function () {
    $(this).find(".depth2").stop().slideDown(300);
  });
  $(".gnb>li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(300);
  });

  $(".btn p").click(function () {
    $(this).addClass("on");
    $(this).parent().siblings(".btn").find("p").removeClass("on");
  });


  $('.mgnb_wrap').hide();
  $('.ham').click(function () {
    $('.mgnb_wrap').fadeIn();
  });
  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').fadeOut();
  });

  $(".mdepth2").hide();

  $(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });


  AOS.init();

  $(".search").hide();
  $(".util li:nth-child(1)").click(function () {
    $(".search").fadeIn();
  });

  $("#section").click(function () {
    $(".search").fadeOut();
  });

  $("#footer").click(function () {
    $(".search").fadeOut();
  });


  $(".pagenation>li").click(function(){
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });

  $(".filter>li").click(function(){
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });

  $(".content_btn>li").click(function(){
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });


  $(".event_list02").hide();
  $(".content_btn>li:nth-child(1)").click(function(){
    $(".event_list").fadeIn();
    $(".event_list02").fadeOut();
  });

  $(".content_btn>li:nth-child(2)").click(function(){
    $(".event_list02").fadeIn();
    $(".event_list").fadeOut();
  });

  $(".event_list03").hide();
  $(".more").click(function(){
    $(".event_list03").fadeIn();
    $(".more").fadeOut();
  });



  $(".report").hide();
  $(".community").hide();
  $(".newsletter").hide();
  

  $(".community_btn>li").click(function(){
    $(this).addClass("on");
    $(this).siblings("li").removeClass("on");
  });

  $(".community_btn>li:nth-child(1)").click(function(){
    $(".lnb>li:nth-child(2)").addClass("on");
    $(".lnb>li:nth-child(2)").siblings("li").removeClass("on");
    $(".notice").fadeIn();
    $(".notice").siblings(".content_area").hide();
  });

  $(".community_btn>li:nth-child(2)").click(function(){
    $(".lnb>li:nth-child(3)").addClass("on");
    $(".lnb>li:nth-child(3)").siblings("li").removeClass("on");
    $(".report").fadeIn();
    $(".report").siblings(".content_area").hide();
  });

  $(".community_btn>li:nth-child(3)").click(function(){
    $(".lnb>li:nth-child(4)").addClass("on");
    $(".lnb>li:nth-child(4)").siblings("li").removeClass("on");
    $(".community").fadeIn();
    $(".community").siblings(".content_area").hide();
  });

  $(".community_btn>li:nth-child(4)").click(function(){
    $(".lnb>li:nth-child(5)").addClass("on");
    $(".lnb>li:nth-child(5)").siblings("li").removeClass("on");
    $(".newsletter").fadeIn();
    $(".newsletter").siblings(".content_area").hide();
  });








});