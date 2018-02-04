
(function ($) {

  /*==============================================================
   Mobile Menu
   =============================================================*/

   $('#mobile-menu').click(function(){
    $('.navbar-links').toggle();
   });

   $(window).resize(function(){
     if ($(window).width() > 991){
       $('.navbar-links').css("display", "inline-block");
     }
     else{
       $('.navbar-links').css("display", "none")
     }
   });

    /*==============================================================
     Grid List View
     =============================================================*/

    if ($(window).width() < 992) {
     $('#gridlistview').addClass('grid-view');
     $('#gridview-icon').addClass('active');
    }
    else {
     $('#gridlistview').addClass('list-view');
     $('#listview-icon').addClass('active');
    }

    $(window).resize(function() {
      if ($(window).width() < 992) {
         $('#gridlistview').removeClass('list-view');
         $('#listview-icon').removeClass('active');
         $('#listview-icon').addClass('disabled');
         $('#gridlistview').addClass('grid-view');
         $('#gridview-icon').addClass('active');
      }
      else {
        $('#listview-icon').removeClass('disabled');
      }
    });

    $('#gridview-icon').click(function(){
      $('#gridlistview').removeClass('list-view');
      $('#gridlistview').addClass('grid-view');
      $('#listview-icon').removeClass('active');
      $('#gridview-icon').addClass('active');
    });

    $('#listview-icon').click(function(){
      $('#gridlistview').removeClass('grid-view');
      $('#gridlistview').addClass('list-view');
      $('#gridview-icon').removeClass('active');
      $('#listview-icon').addClass('active');
    });

    /*==============================================================
     Back To Top
     =============================================================*/


    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).on("scroll", function () {
        /*==============================================================
         Back To Top
         =============================================================*/
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }

        /*==============================================================
         Header Fixed Scroll
         =============================================================*/
        if ($(window).scrollTop() > 0) {
            $("#header-fix").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#header-fix").removeClass("active");
        }
    });

})(jQuery);