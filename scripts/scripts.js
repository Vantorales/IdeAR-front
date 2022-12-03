jQuery('document').ready(function($){
    var menuBtn = $('nav span.menuIcon');
    menu = $('nav ol.navOptions');
    menuUser = $('nav ol.userOptions');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');    
        }

        if(menuUser.hasClass('show')){
            menuUser.removeClass('show');
        }
        else{
            menuUser.addClass('show');
        }
    })

});
