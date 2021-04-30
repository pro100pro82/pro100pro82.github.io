document.addEventListener("DOMContentLoaded", function(){
  var body = document.querySelector("body");

  body.classList.add("is-load");
})
$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger,.nav').toggleClass('active');
  })
})
