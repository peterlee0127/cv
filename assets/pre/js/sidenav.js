import ScrollSpy from './scrollspy.js';

let menu_link_active_elm;
export function activeMenuColor(linkName){
  menu_link_active_elm = $(`a[href='${linkName}']`);
  menu_link_active_elm.each(function(i){
    $(this).addClass('active');
  });
}

export function inactiveMenuColor(linkName){
    menu_link_active_elm = $(`a[href='${linkName}']`);
    menu_link_active_elm.each(function(i){
      $(this).removeClass('active');
    });
  }

export function setMenuLinkClick(){
    $('.sidenav').sidenav();
    $(".menu-link").click(function(e) {
        const sidelink = $(this);
        let aid = sidelink.attr("href");
        if(aid.includes("#")){
            e.preventDefault();
            removeMenuColor();
            
            activeMenuColor(aid);
            $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        }

        const mobileSidenav = sidelink.parents()[1];
        if(mobileSidenav.id == 'mobile-view'){
            M.Sidenav.getInstance(mobileSidenav).close();
        }
    });
}

function removeMenuColor(){
    $('.menu-link').each(function(i){
        $(this).removeClass('active');
    });
}

export function setScrollspy(){
    let scrollSpy = new ScrollSpy();
    scrollSpy.init();

    var el = document.querySelectorAll('.scrollspy');

    Array.from(el).forEach(e=>{
        scrollSpy.spyOn(e);
    });
    scrollSpy.handleScroll();
    document.addEventListener('ScrollSpyBackInSight', function (e) {
        activeMenuColor('#'+e.data.id);
    });
    document.addEventListener('ScrollSpyOutOfSight', function (e) {
        inactiveMenuColor('#'+e.data.id);
    });
}
