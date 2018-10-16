$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#initially-showing2").slideToggle();
    $("#initially-hidden2").slideToggle();
  });
});
