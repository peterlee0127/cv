// import ScrollSpy from './scrollspy.js';

let menu_link_active_elm;
export function activeMenuColor(linkName){
  menu_link_active_elm = $(`a[href='${linkName}']`);
  menu_link_active_elm.each(function(i){
    $(this).addClass('active');
  });
}

export function setMenuLinkClick(){
    $('.sidenav').sidenav();
    $(".menu-link").click(function(e) {
        e.preventDefault();
        removeMenuColor();
        const sidelink = $(this);
        // let aid = sidelink.attr("href");
        // if(aid.includes("#")){
        //     activeMenuColor(aid);
        //     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        // }

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
    $('.scrollspy').on('scrollSpy:enter', function() {
        activeMenuColor('#'+$(this).attr('id'));
    });
    $('.scrollspy').on('scrollSpy:exit', function() {
        $(this).removeClass('active');
    });
    $('.scrollspy').scrollSpy();

    // const activeKey = $(location).attr('hash') || '#about';
    // activeMenuColor(activeKey);
}
