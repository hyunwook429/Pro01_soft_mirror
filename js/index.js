$(document).ready(function(){
  // #header 네비게이션 호버된 li에 배경색 변경, 자식요소 애니매이션 추가
  $(".sub_inner").hide();
  $("#header nav .left > ul > li").on('mouseenter', function() {
    $(this).parents("#header").addClass('header');
    $(".sub_inner").not($(this).children(".sub_inner")).hide();
    $(this).children(".sub_inner").show();
  })
  
  $("#header").on('mouseleave', function() {
    $(this).removeClass('header');
  })
  // #header nav .left > ul > li > a 마우스호버시 Toggle class해서 color:#5c44ff 시키기
  $("#header nav .left ul li a").hover(function(){
    $(this).addClass('active');
  }, function(){
    $(this).removeClass('active');
  })

  // 푸터 group보기
  $("footer .top .dropbox button").on("click", function(){
    $(this).parent().toggleClass("active");
  })
  console.log("에러도 안뜨고, 실행도 안돼요ㅠㅠ")

  $(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);
    if(scrollTop > "700" && scrollTop < "1600"){
      $(".main-tech li:eq(0) .contents").css({opacity:1})
      $(".main-tech li:eq(0) .motion_cover").css({opacity: 0})
      $(".main-tech li:eq(0) .motion-obj img").css({opacity:1})
    } else {
      $(".main-tech li:eq(0) .contents").css({opacity:0})
      $(".main-tech li:eq(0) .motion_cover").css({opacity:1})
      $(".main-tech li:eq(0) .motion-obj img").css({opacity:0})
    }
    if(scrollTop > "1300" && scrollTop < "2200"){
      $(".main-tech li:eq(1) .contents").css({opacity: 1})
      $(".main-tech li:eq(1) .motion_cover").css({opacity: 0})
      $(".main-tech li:eq(1) .motion-obj img").css({opacity: 1, left: 0, top: 0})
    } else {
      $(".main-tech li:eq(1) .contents").css({opacity: 0})
      $(".main-tech li:eq(1) .motion_cover").css({opacity: 1})
      $(".main-tech li:eq(1) .motion-obj img").css({opacity: 0})
      $(".main-tech li:eq(1) .motion-obj img:eq(1)").css({opacity: 0, left: 300, top: "-100px"})
      $(".main-tech li:eq(1) .motion-obj img:eq(3)").css({opacity: 0, left: "-300px", top: 200})
    }
    if(scrollTop > "2100" && scrollTop < "3000"){
      $(".main-tech li:eq(2) .contents").css({opacity: 1})
      $(".main-tech li:eq(2) .motion_cover").css({opacity: 0})
      $(".main-tech li:eq(2) .motion-obj img").css({opacity: 1})
    } else {
      $(".main-tech li:eq(2) .contents").css({opacity: 0})
      $(".main-tech li:eq(2) .motion_cover").css({opacity: 1})
      $(".main-tech li:eq(2) .motion-obj img").css({opacity: 0})
    }
    if(scrollTop > "2700" && scrollTop < "3600"){
      $(".main-tech li:eq(3) .contents").css({opacity: 1})
      $(".main-tech li:eq(3) .motion_cover").css({opacity: 0})
      $(".main-tech li:eq(3) .motion-obj img").css({opacity: 1})
    } else {
      $(".main-tech li:eq(3) .contents").css({opacity: 0})
      $(".main-tech li:eq(3) .motion_cover").css({opacity: 1})
      $(".main-tech li:eq(3) .motion-obj img").css({opacity: 0})
    }
  })

});
