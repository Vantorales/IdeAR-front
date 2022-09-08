jQuery('document').ready(function($){
    var menuBtn = $('nav span.menuIcon');
    menu = $('nav ol.navOptions');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
            menu.addClass('show');    
        }
    })

});