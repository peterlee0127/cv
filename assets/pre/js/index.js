'use strict'

import 'jquery';
import 'materialize-css';

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();
  // sidenav.setMenuLinkClick();
  // sidenav.setScrollspy();
  $("li a").click(function(e) {
    var anchor = $(this).attr("href");
    if(!anchor.includes("#")){
      return;
    }
    if($(this).attr("class").includes("menu-link")){
      console.log(anchor);
      e.preventDefault();

     $('html,body').animate({scrollTop: $(anchor).offset().top},'slow');
    }

  });

});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 400);
});
