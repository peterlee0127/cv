$(document).ready(function(){
  $('.sidenav').sidenav();
});


$(".menu-link").click(function(e) {
    let aid = $(this).attr("href");
    if(aid.includes("#")){
      e.preventDefault();
      $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    }
});

 // Or with jQuery

 // $(document).ready(function(){
 //   $('.scrollspy').scrollSpy();
 // });



 document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.parallax');
     var instances = M.Parallax.init(elems, 400);
   });
