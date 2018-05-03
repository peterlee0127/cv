$(document).ready(function(){
  $('.sidenav').sidenav();
  // $('.scrollspy').scrollSpy();

  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {
    getActiveElement:function(id){
      return 'a[href="#' + id + '"]';
    }
  });
});

// $(".menu-link").click(function(e) {
//     let aid = $(this).attr("href");
//     if(aid.includes("#")){
//       e.preventDefault();
//       $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
//     }
// });
