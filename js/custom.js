
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('#message').click(function(){
      window.location.href = "https://play.google.com/store/apps/details?id=com.messaging.textrasms.manager";
    });

    $('#flyer').click(function(){
      window.location.href = "https://play.google.com/store/apps/details?id=com.graphicdesign.postermaker.flyermaker";
    });
    $('#gallery').click(function(){
      window.location.href = "https://play.google.com/store/apps/details?id=com.photo.gallery.photo.albums";
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);

  //Social Links
  


