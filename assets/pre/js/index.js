'use strict'

import 'jquery';
import 'materialize-css';
import * as LivePhotosKit from 'livephotoskit';

$( window ).resize(function() {
  $(".award .card-content").height('auto');
  $(".project .card-content").height('auto');
  rwd();

});

function rwd() {
  setHeight('.award .card-content');
  setHeight('.project .card-content');
  setHeight('.publication .card-content');

}

function setHeight(element) {
  var contentHeights = $(element).map(function() {
         return $(this).height();
     }).get(),
  contentMaxHeight = Math.max.apply(null, contentHeights);
 $(element).height(contentMaxHeight);
}

$(document).ready(function(){
  rwd();

  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();
  $('.modal').modal();

  $('.scrollspy').scrollSpy();



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
