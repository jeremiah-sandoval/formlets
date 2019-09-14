/** Lazy Loading **/
(function() {
  var ll = new LazyLoad({
    elements_selector: ".lazy",
  });
})();

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

/* ==========================================
scrollTop() >= 200
Should be equal the the height of the header
========================================== */
$(window).scroll(function(){
  if ($(window).scrollTop() >= 200) {
      $('#home-page #header-2').addClass('fixed-header');
      $('#content.home-content').css("padding-top", "130px");
      $('#home-page #header').invisible();
      $('#home-page #header-2').show();
  }
  else {
      $('#home-page #header-2').removeClass('fixed-header');
      $('#content.home-content').css("padding-top", "0px");
      $('#home-page #header').visible();
      $('#home-page #header-2').hide();
  }
});
