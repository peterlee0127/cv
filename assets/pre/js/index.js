'use strict'

import 'jquery';
import 'materialize-css';
// import * as LivePhotosKit from 'livephotoskit';

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

import Typed from 'typed.js';



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
  // fadeCard();

  $('.scrollspy').scrollSpy();


var options = {
  strings: ["Data Engineer","DevOps Engineer"],
  typeSpeed: 60,
  loop:true,
  showCursor:false,
  fadeOut: true,
}
var typed = new Typed(".typed-about", options);

  Array.from(document.querySelectorAll('.skills .card p')).map(x=>{

    // var options = {
    //   strings: [x],
    //   typeSpeed: 40
    // }
    // var typed = new Typed(".element", options);
  });



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
/*
function fadeCard(){
  const cards = Array.from(document.querySelectorAll('.card')).map(x=>{
    return {
      el:x,
      faded: false
    }
  });
  checkFade(cards);
  $(window).scroll( function(){
    checkFade(cards);
  });
}

function checkFade(cards){
  var currentViewPosition = document.documentElement.scrollTop ? document.documentElement.scrollTop: document.body.scrollTop;
  let faded =[];
      for (var i in cards) {
          const element = cards[i].el;
          if(cards[i].faded) continue;

          var elementPosition = getPositionOfElement(element);
          if( currentViewPosition+window.innerHeight >= elementPosition){
            fadeIn(element);
            cards[i].faded = true;
          }
      }
}

function getPositionOfElement(domElement)
{
    var pos = 0;
    while (domElement != null)
    {
        pos += domElement.offsetTop;
        domElement = domElement.offsetParent;
    }
    return pos;
}

function fadeIn(el){
  el.style.opacity = 0;

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if(val < 1){
      val+=0.01;
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
*/
