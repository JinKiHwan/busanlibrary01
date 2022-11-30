$(document).ready(function () {

  $(".depth2").hide();
  $(".gnb>li").mouseenter(function(){
    $(this).find(".depth2").stop().slideDown(300);
  });
  $(".gnb>li").mouseleave(function(){
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


  // swiper-btn
  $(".bookstory_slide02").hide();
  $(".bookstory_slide03").hide();

  $(".newbook").click(function () {
    $(".bookstory_slide01").hide();
    $(".bookstory_slide03").hide();
    $(".bookstory_slide02").show();
  });

  $(".recommend").click(function () {
    $(".bookstory_slide02").hide();
    $(".bookstory_slide03").hide();
    $(".bookstory_slide01").show();
  });

  $(".popularity").click(function () {
    $(".bookstory_slide01").hide();
    $(".bookstory_slide02").hide();
    $(".bookstory_slide03").show();
  });



  const culture_swiper = new Swiper('.culture_swiper', {
    // 옵션
    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,  // 슬라이드 동작 속도
    loop: true,  // 슬라이드 반복 여부

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const bookstory_slide01 = new Swiper('.bookstory_slide01', {
    // 옵션
    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    slidesPerView: '1',
    centeredSlides: true,
    spaceBetween: 20,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 4,
      },
    }

  });

  const bookstory_slide02 = new Swiper('.bookstory_slide02', {
    // 옵션
    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    slidesPerView: '1',
    centeredSlides: true,
    spaceBetween: 20,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 4,
      },
    }
  });

  const bookstory_slide03 = new Swiper('.bookstory_slide03', {
    // 옵션
    autoplay: {
      delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    slidesPerView: '1',
    centeredSlides: true,
    spaceBetween: 20,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 4,
      },
    }
  });

  const gallery_swiper = new Swiper('.gallery_swiper', {
    // 옵션
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
    spaceBetween: 20,  // 슬라이드 사이 여백
    speed: 1000,  // 슬라이드 동작 속도
    slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
    }
  });


  const sponsor = new Swiper('.sponsor', {
    // 옵션
    autoplay: {
      delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,  // 슬라이드 동작 속도
    loop: true,  // 슬라이드 반복 여부
    slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
    spaceBetween: 0,  // 슬라이드 사이 여백
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 6,
      },
      1920: {
        slidesPerView: 9,
      },
    }

  });


  AOS.init();

  $(".search").hide();
  $(".util li:nth-child(1)").click(function () {
    $(".search").fadeIn();
  });

  $(".section").click(function () {
    $(".search").fadeOut();
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
    ]


  });


  new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

    navigation:true,
    navigationPosition:screenLeft,
    responsiveWidth: 1200,
    autoScrolling: true,

    afterLoad: function (section, origin, destination, direction, trigger) {
      var section = this;


      if (origin.anchor == 'firstPage') {
        $("#header").css({ "background": "rgba(0,0,0,0)" });
      }

      if (origin.anchor == 'secondPage') {
        $("#header").css({ "background": "rgba(22,95,231,0.9)" });
      }

      if (origin.anchor == 'thirdPage') {
        $("#header").css({ "background": "rgba(22,95,231,0.9)" });
      }

      if (origin.anchor == 'fourthPage') {
        $("#header").css({ "background": "rgba(22,95,231,0.9)" });
      }

      if (origin.anchor == 'lastPage') {
        $("#header").css({ "background": "rgba(22,95,231,0.9)" });
      }
    }
  });

  document.querySelector('.show-content').addEventListener('click', showContent);

  function showContent() {
    document.querySelector('.extra-content').classList.toggle('active');
  };


});