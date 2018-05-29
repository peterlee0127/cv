'use strict'

import './../css/index.scss';

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
  $(element).height(contentMaxHeight);
}



$(document).ready(function(){
  rwd();
  $('.materialboxed').materialbox();
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.modal').modal({
    dismissible: true,
    onCloseStart: function() {
       $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }
  });

  $('.modal-trigger').click(function(e){
    let trigger = $(this);
    let url =  $(this).attr("data-source");
    let id  = $(this).attr("id");
    id = id.replace("modal-","");
    url = url+" #"+id;
    if(!trigger.attr('loaded')){

      $("#"+id).delay( 300 ).load(url, ()=>{
        trigger.attr('loaded', true);
      }).fadeIn('slow');
    }
  });

var options = {
  strings: ["Data Engineer","DevOps Engineer"],
  typeSpeed: 60,
  loop:true,
  showCursor:false,
  fadeOut: true,
}
var typed = new Typed(".typed-about", options);

checkAnimation();
  $(window).scroll(function(){
    checkAnimation();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 400);
});

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  // var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var scrollElem = 'body';
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
