'use strict'

import 'jquery';
import 'materialize-css';
import * as sidenav from './sidenav';

$(document).ready(function(){
  $('.materialboxed').materialbox();

  sidenav.setMenuLinkClick();  
  sidenav.setScrollspy();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 400);
});