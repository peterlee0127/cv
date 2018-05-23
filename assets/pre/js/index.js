'use strict'

import 'jquery';
import 'materialize-css';
import Typed from 'typed.js';
// import * as LivePhotosKit from 'livephotoskit';

const rwdClass = [".award .card-content",".project .card-content",".publication .card-content"];

$( window ).resize(function() {
  rwdClass.forEach(item => {
      $(item).height('auto');
  });
  rwd();
});

function rwd() {
  rwdClass.forEach(item => {
      setHeight(item);
  });
}



function setHeight(element) {
  var contentHeights = $(element).map(function() {
         return $(this).height();
     }).get(),
  contentMaxHeight = Math.max.apply(null, contentHeights);
  if(element=='.publication .card-content'){
    $(element).height(contentMaxHeight);
  }else {
    $(element).height(contentMaxHeight);
  }
}
$(document).ready(function(){
  rwd();

  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();
  $('.modal').modal();
  // fadeCard();

  $('.scrollspy').scrollSpy();
   $('.collapsible').collapsible();

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
// Capture scroll events
checkAnimation();
  $(window).scroll(function(){
    checkAnimation();
  });
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


function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + window.innerHeight;

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('#PETERLEE_SVG');

  // If the animation has already been started

  if (isElementInViewport($elem)) {
      // Start the animation
      if ($elem.hasClass('start')) return;
      $elem.addClass('start');
  }else{
    if ($elem.hasClass('start'))
      $elem.removeClass('start');
  }
}

