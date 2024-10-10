$(window).on("load", function () {
  $(".preloader").fadeOut();

  // Gallery Swiper

  const gallerySwiper = new Swiper(".gallery .swiper", {
    loop: true,
    draggable: true,
    // autoplay: true,
    speed: 800,
    pagination: {
      el: ".gallery .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Testimonials Swiper

  const testimonialSwiper = new Swiper(" .testimonials .swiper", {
    loop: true,
    // autoplay: true,
    draggable: true,
    speed: 800,

    pagination: {
      el: ".testimonials .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

$(document).ready(function () {


  // Trip path

  $(".main-question").on("click", function () {
    $(this).children(".question-answer").slideToggle(300);
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".question-answer")
      .not($(this).children(".question-answer"))
      .slideUp(300);
  });

  if ($(window).width() < 992) {
    $(".big-menu > li > a").on("click", function () {
      $(".navigation").removeClass("open-sidebar");
      $("body").removeClass("overflow-hidden");
    });
  }

  /**************************************************************************************************** */

  // open and close sideBar

  $(".open-nav-btn").click(function () {
    $(".navigation").addClass("open-sidebar");
    $("body").addClass("overflow-hidden");
  });
  $(".close-nav-btn").click(function () {
    $(".navigation").removeClass("open-sidebar");
    $("body").removeClass("overflow-hidden");
  });

  /*************************************************************************************************


  /************************************************************************************************** */

  // totop Button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  /************************************************************************************************** */

  // nav nested menu

  // if ($(window).width() <= 992) {
  //   $(".menu-item-has-children").click(function () {
  //     $(this).children(".sub-menu").slideToggle(300);
  //     $(this).children("a").toggleClass("icon-rotate");
  //     $(".menu-item-has-children")
  //       .not($(this))
  //       .children(".sub-menu")
  //       .slideUp(300);
  //     $(".menu-item-has-children")
  //       .not($(this))
  //       .children("a")
  //       .removeClass("icon-rotate");
  //   });
  // }

  /************************************************************************************************** */

  // fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("fixed-header");
    }
    if ($(window).scrollTop() == 0) {
      $("header").removeClass("fixed-header");
    }
  });

  /************************************************************************************************** */

  //  nested menus in footer

  if ($(window).width() < 768) {
    $(".footer-title").click(function () {
      $(this).next(".quick-drop").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".quick-drop").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }
}); // End document ready
