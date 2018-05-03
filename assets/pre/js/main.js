$(document).ready(function(){
  $('.sidenav').sidenav();
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {
    getActiveElement:function(id){
      return 'a[href="#' + id + '"]';
    }
  });
});

 document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.parallax');
     var instances = M.Parallax.init(elems, 400);
   });
