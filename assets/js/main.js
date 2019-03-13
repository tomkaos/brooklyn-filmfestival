(function($) {
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".navbar-nav .nav-link").each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $(".navbar-nav .nav-item").removeClass("active");
        currLink.parent(".nav-item").addClass("active");
      } else {
        currLink.parent(".nav-item").removeClass("active");
      }
    });
  }

  $(document).ready(function() {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on("click", function(e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".nav-item").each(function() {
        $(this).removeClass("active");
      });
      $(this)
        .parent(".nav-item")
        .addClass("active");

      var target = this.hash,
        menu = target;
      $target = $(target);
      //console.log($target.offset());
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top
          },
          1000,
          function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });

    $("#main-carousel")
      .owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6500,
        margin: 0,
        singleItem: true,
        stagePadding: 0,
        autoWidth: false,
        smartSpeed: 1050,
        dotsContainer: "#main-carousel-wrap .dots",
        items: 1
      })
      .trigger("refresh.owl.carousel");
  });

  $(window).on("load", function() {
    $(".body-wrapper").removeClass("lock");
    $("#main-carousel").trigger("refresh.owl.carousel");
    $(".initial-hidden").css("opacity", 1);
  });
})(jQuery);
