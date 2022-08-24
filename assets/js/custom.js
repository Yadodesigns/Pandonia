(function ($) {
  "use strict";
  var GLOB = {};
  $.fn.exists = function () {
    return this.length > 0;
  };

  /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
  // GLOB.PreLoad = function () {
  //   document.getElementById("preloader").style.display = "none";
  // };

  /*--------------------
    * Owl Carousel Gallery
    ----------------------*/
    GLOB.OwlGallery = function () {
      $("#owl-gallery").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [
          `<svg width="60" height="60" style="transform: rotate(180deg);" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_41)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0006 6.28131C12.9872 7.93046 13.5999 9.5233 14.7149 10.7385L32.9378 29.9985L14.7363 49.2585C13.6198 50.47 13 52.0573 13 53.7049C13 55.3525 13.6198 56.9397 14.7363 58.1513C15.2703 58.734 15.9196 59.1992 16.643 59.5175C17.3664 59.8357 18.1481 60.0001 18.9385 60.0001C19.7288 60.0001 20.5105 59.8357 21.2339 59.5175C21.9573 59.1992 22.6066 58.734 23.1406 58.1513L45.542 34.4427C46.6632 33.2361 47.2864 31.6499 47.2864 30.0027C47.2864 28.3556 46.6632 26.7694 45.542 25.5627L23.1406 1.84559C22.6066 1.26295 21.9573 0.79772 21.2339 0.47945C20.5105 0.16118 19.7288 -0.00317383 18.9385 -0.00317383C18.1481 -0.00317383 17.3664 0.16118 16.643 0.47945C15.9196 0.79772 15.2703 1.26295 14.7363 1.84559C13.6149 3.04972 12.9942 4.63584 13.0006 6.28131" fill="white"/></g><defs><clipPath id="clip0_2_41"><rect width="60" height="60" fill="white"/></clipPath></defs></svg>`
          , 
          `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_41)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0006 6.28131C12.9872 7.93046 13.5999 9.5233 14.7149 10.7385L32.9378 29.9985L14.7363 49.2585C13.6198 50.47 13 52.0573 13 53.7049C13 55.3525 13.6198 56.9397 14.7363 58.1513C15.2703 58.734 15.9196 59.1992 16.643 59.5175C17.3664 59.8357 18.1481 60.0001 18.9385 60.0001C19.7288 60.0001 20.5105 59.8357 21.2339 59.5175C21.9573 59.1992 22.6066 58.734 23.1406 58.1513L45.542 34.4427C46.6632 33.2361 47.2864 31.6499 47.2864 30.0027C47.2864 28.3556 46.6632 26.7694 45.542 25.5627L23.1406 1.84559C22.6066 1.26295 21.9573 0.79772 21.2339 0.47945C20.5105 0.16118 19.7288 -0.00317383 18.9385 -0.00317383C18.1481 -0.00317383 17.3664 0.16118 16.643 0.47945C15.9196 0.79772 15.2703 1.26295 14.7363 1.84559C13.6149 3.04972 12.9942 4.63584 13.0006 6.28131" fill="white"/></g><defs><clipPath id="clip0_2_41"><rect width="60" height="60" fill="white"/></clipPath></defs></svg>`
        ],
        lazyLoad: true,
      });

      $("#owl-gallery").on('translate.owl.carousel', function(event) {
        GLOB.activeGallery();
        $('.gallery-item').removeClass('fadeUpImg');
      });

      $("#owl-gallery").on('translated.owl.carousel', function(event) {
        const currentIndex = event.item.index;
        const item = $(event.target).find(".owl-item").eq(currentIndex);
        
        item.find('.gallery-item').addClass('fadeUpImg');
      });
    };

  /*--------------------
    * AOS Initialization
    ----------------------*/
  GLOB.AOS = function () {
    AOS.init();
  };

  /*--------------------
    * Active Owl Gallery
    ----------------------*/
  GLOB.activeGallery = function () {
    $('.owl-gallery .gallery-item').removeClass('active');
    $('.owl-gallery .active .gallery-item').addClass('active');
  };

  /*--------------------
    * Magnific Popup
    ----------------------*/
  GLOB.magnificPopup = function () {
    $('.gallery-grid').each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [1,1],
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          tPrev: 'Previous (Left arrow key)',
          tNext: 'Next (Right arrow key)',
          tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
      });
    })
  };



  /*--------------------
    * Owl Corousel
  ----------------------*/
  GLOB.Owl = function () {
    $("#team-slider").owlCarousel({
      items: 4,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  };

  // Window on Load
  $(window).on("load", function () {
    // GLOB.PreLoad();
  });

  // Document on Ready
  $(document).ready(function () {
    GLOB.Owl();
    GLOB.OwlGallery();
    GLOB.magnificPopup();
    GLOB.AOS();
    GLOB.activeGallery();
  });

  // Document on Scrool
  $(window).scroll(function () {
  });

  // Window on Resize
  $(window).resize(function () {});
})(jQuery);
$('#gallery').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  arrows: false,
  infinite: true,
  centerMode: true,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      cssEase: 'linear',

    }
  },  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      autoplay: true,
    }
  }]
});

