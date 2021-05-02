document.addEventListener("DOMContentLoaded", function(){
  var body = document.querySelector("body");

  body.classList.add("is-load");
})

document.addEventListener('DOMContentLoaded', function() {
  var open = document.querySelector(".js-menu-open");
  var close = document.querySelector(".js-menu-close");
  var menu = document.querySelector(".js-menu");


  open.addEventListener("click", function() {
    menu.classList.add("is-open");
  })
  close.addEventListener("click", function() {
    menu.classList.remove("is-open");
  })
});
