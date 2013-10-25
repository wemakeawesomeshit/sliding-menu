
$(document).ready(function() {

  $('.sliding-menu-button').on("click",function(e) {
    $("body").toggleClass("sliding-menu-active");
    e.preventDefault();
  });
});