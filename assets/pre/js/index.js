'use strict'

import 'jquery';
import 'materialize-css';
import * as sidenav from './sidenav';

$(document).ready(function(){
  const activeKey = $(location).attr('hash') || '#about';
  sidenav.activeMenuColor(activeKey);
  sidenav.setMenuLinkClick();  
  sidenav.setScrollspy();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 400);
});