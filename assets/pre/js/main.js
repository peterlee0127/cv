let menu_link_active_elm;

function activeMenuColor(linkName){
  menu_link_active_elm = $(`a[href='${linkName}']`);
  menu_link_active_elm.each(function(i){
    $(this).addClass('active');
  });
}
function removeMenuColor(){
  menu_link_active_elm.each(function(i){
    $(this).removeClass('active');
  });   
}

$(document).ready(function(){
  const activeKey = $(location).attr('hash') || '#about';
  activeMenuColor(activeKey);

  $('.sidenav').sidenav();
  $(".menu-link").click(function(e) {

    removeMenuColor();
    let aid = $(this).attr("href");
    if(aid.includes("#")){
      e.preventDefault();
      activeMenuColor(aid);
      $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    }
  });
});

 document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.parallax');
     var instances = M.Parallax.init(elems, 400);
   });
