$(document).ready(function () {


   // $("#hamburger").click(function() {
   //    $(this).toggleClass("active");
   //    $(".sidenav").toggleClass("active-nav");
   // })

   $("#hamburger").click(function () {
      $(".sidenav").toggleClass("active-nav");
   })

   $("#showsidenav").click(function () {
      $(".sidenav").toggleClass("active-nav");
   })



   $(".nav-item").click(function () {
      // $(this).children(".dropdown-menus").toggleClass("'active-drop'");
      $(this).siblings(".fal").toggleClass('active-fal');
   });



   function checkWidth() {
      var windowSize = $(window).width();
      if (windowSize > 974) {
         $('#navigration .dropdown > .nav-link').removeClass('enabled').addClass('disabled');
         $('#navigration .dropdown-2 > .dropdown-item').removeClass('enabled').addClass('disabled');
      } else {
         $('#navigration .dropdown > .nav-link').removeClass('disabled').addClass('enabled');
         $('#navigration .dropdown-2 > .dropdown-item').removeClass('disabled').addClass('enabled');
      }
   }
   // Execute on load
   checkWidth();
   // Bind event listener
   $(window).resize(checkWidth);



   $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > 10) {
         $("#navigration").css({
            background: "#222429"
         });
      } else {
         $("#navigration").css({
            background: "none"
         });
      }
   });




   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });


   var owl = $('#homeSection .owl-carousel');
   owl.owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      nav: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
         0: {
            items: 1
         }
      }
   });


   // PORTFOLIO SECTION
   var mixer = mixitup('#portfolio');
   $(".indicator > span").click(function () {
      $(".indicator > span").removeClass("active");
      $(this).addClass("active");
   });



   // $('#portfolio').magnificPopup({
   //    type:'image',
   //    delegate: ".img-box > a",
   //    gallery: { enabled: true }
   // });





   var owl2 = $('#testimonialSection .owl-carousel');
   owl2.owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      nav: false,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         }
      }
   });



   var owl3 = $('#specialFeature .owl-carousel');
   owl3.owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      nav: false,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         },
         1024: {
            items: 3
         }
      }
   });



   var wow = new WOW({
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
         // the callback is fired every time an animation is started
         // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
   });
   wow.init();


   $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
   });


   /*-- SCROLL UP --*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function () {
      $("html").animate({ scrollTop: 0 }, 1000);
      return false;
   });




});




// All Skill Circle

$(window).on('load', function (event) {
   if ($(".circle-skill").length > 0) {
      var ast1 = true;
      $('.circle-skill').appear();
      $('.circle-skill').on('appear', function () {
         if (ast1 == true) {
            $(".circle-skill").each(function () {
               var pint = $(this).attr('data-skills');
               var decs = pint * 100;
               var grs = $(this).attr('data-gradientstart');
               var gre = $(this).attr('data-gradientend');
               var bg = $(this).attr('data-bg');

               $(this).circleProgress({
                  value: pint,
                  startAngle: -Math.PI / 3 * 1,
                  fill: { gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 2 },
                  lineCap: 'square',
                  thickness: 9,
                  animation: { duration: 1800 },
                  size: 165,
                  emptyFill: bg
               }).on('circle-animation-progress', function (event, progress) {
                  $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
               });
            });
            ast1 = false;
         }
      });
   }
   if ($(".circle-skill-2").length > 0) {
      var ast2 = true;
      $('.circle-skill-2').appear();
      $('.circle-skill-2').on('appear', function () {
         if (ast2 == true) {
            $(".circle-skill-2").each(function () {
               var pint = $(this).attr('data-skills');
               var decs = pint * 100;
               var grs = $(this).attr('data-gradientstart');
               var gre = $(this).attr('data-gradientend');
               var bg = $(this).attr('data-bg');

               $(this).circleProgress({
                  value: pint,
                  startAngle: -Math.PI / 2 * 1,
                  fill: { gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 1 },
                  lineCap: 'square',
                  thickness: 20,
                  animation: { duration: 2000 },
                  size: 195,
                  emptyFill: bg
               }).on('circle-animation-progress', function (event, progress) {
                  $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
               });
            });
            ast2 = false;
         }
      });
   }
   if ($(".cs-in").length > 0) {
      var csin = true;
      $('.cs-in').appear();
      $('.cs-in').on('appear', function () {
         if (csin == true) {
            $(".cs-in").each(function () {
               var pint = $(this).attr('data-skills');
               var decs = pint * 100;
               var grd = $(this).attr('data-gradient');
               var bg = $(this).attr('data-bg');

               $(this).circleProgress({
                  value: pint,
                  startAngle: -Math.PI / 2 * 1,
                  fill: grd,
                  lineCap: 'round',
                  thickness: 2,
                  animation: { duration: 2000 },
                  size: 176,
                  emptyFill: bg
               }).on('circle-animation-progress', function (event, progress) {
                  $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
               });
            });
            csin = false;
         }
      });
   }
   if ($(".skill-item-3").length > 0) {
      var ast3 = true;
      $('.skill-item-3').appear();
      $('.skill-item-3').on('appear', function () {
         if (ast3 == true) {
            $(".skill-item-3").each(function () {
               var pint = $(this).attr('data-skills');
               var decs = pint * 100;
               var grs = $(this).attr('data-gradientstart');
               var gre = $(this).attr('data-gradientend');
               var bg = $(this).attr('data-bg');

               $(this).circleProgress({
                  value: pint,
                  startAngle: -Math.PI / 100,
                  fill: { gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 1 },
                  lineCap: 'round',
                  thickness: 8,
                  animation: { duration: 2000 },
                  size: 116,
                  radius: 50,
                  emptyFill: bg
               }).on('circle-animation-progress', function (event, progress) {
                  $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
               });
            });
            ast3 = false;
         }
      });
   }
});


if ($(".sk-item").length > 0) {
   $('.sk-item').appear();
   $('.sk-item').on('appear', loadSkills);
}
var coun = true;
function loadSkills() {
   $(".sk-item").each(function () {
      var datacount = $(this).attr("data-limit");
      $(".skillbar", this).animate({ 'width': datacount + '%' }, 3000);
      $(".rounds", this).animate({ 'left': datacount + '%' }, 3000);
      if (coun) {
         $(this).find('.parcent').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: datacount }, {
               duration: 3000,
               easing: 'swing',
               step: function () {
                  $this.text(Math.ceil(this.Counter) + '%');
               }
            });
         });

      }
   });
   coun = false;
}
