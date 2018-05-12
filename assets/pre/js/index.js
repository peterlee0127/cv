'use strict'

import 'jquery';
import 'materialize-css';

$( window ).resize(function() {
  $(".award .card-content").height('auto');
  // $(".project .card-content").heigt('auto');
  rwd();
});

function rwd() {
  var contentHeights = $(".award .card-content").map(function() {
         return $(this).height();
     }).get(),
  contentMaxHeight = Math.max.apply(null, contentHeights);
 $(".award .card-content").height(contentMaxHeight);
 
 var contentHeightsx = $(".project .card-content").map(function() {
        return $(this).height();
    }).get(),
 contentMaxHeightx = Math.max.apply(null, contentHeightsx);
$(".project .card-content").height(contentMaxHeightx);
}
$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();
  $('.modal').modal();

  $('.scrollspy').scrollSpy();

  rwd();

  // sidenav.setMenuLinkClick();
  // sidenav.setScrollspy();
  // $("li a").click(function(e) {
  //   var anchor = $(this).attr("href");
  //   if(!anchor.includes("#")){
  //     return;
  //   }
  //   if($(this).attr("class").includes("menu-link")){
  //     console.log(anchor);
  //     e.preventDefault();
  //
  //    $('html,body').animate({scrollTop: $(anchor).offset().top},'slow');
  //   }
  //
  // });

});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 400);
});
