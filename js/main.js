$(document).ready(function(){
    burger_click();
    window_resize();
    menuActive('.navigation-link');
    notScrollModal('#modalWindowApp');
    notScrollModal('#modalWindowCall');
    $('input[type=tel]').mask("+7 (999) 999-99-99");
    $('[name=subject').val('Обращение с сайта pravosvet.com');
    $('[name=activity]').change(function(){
        let activity = $('[name=activity] option:selected').text();
        subject = `${activity}. Обращение с сайта pravosvet.com`;
        $('[name=subject').val(subject);
    });
});

function burger_click() {
    $('.header-top-burger').click(function(){
        let menu = $('.header-scroll');
        let pos = menu.css('right');
        pos = pos.replace('px','');
        if (pos < 0) {
            menu.animate({
                right: 0
            }, 700);
            scrollLock.disablePageScroll();
        } else {
            menu.animate({
                right: -300
            }, 700);
            scrollLock.enablePageScroll();
        }
        $(this).toggleClass('close-burger');
    });
}

function window_resize() {
    $(window).resize(function () {
        let menu = $('.header-scroll');
        let pos = menu.css('right');
        pos = pos.replace('px','');
        if (pos == 0) {
            menu.animate({
                right: -300
            }, 700);
            scrollLock.enablePageScroll();
            $('.header-top-burger').toggleClass('close-burger');
        }
    });
}

function menuActive(link) {
    let url = window.location.pathname.slice(1);
    $(link).each(function(){
        let link = $(this).attr('href');
        if (url == link) {
            $(this).addClass('active');
        }
        if (url == "" ) {
            $('.navigation-link').first().addClass('active');
            $('.header-scroll .navigation-link').first().addClass('active');
        }
    });
}

function notScrollModal(modal) {
    $(modal).on('show.bs.modal', function () {
        scrollLock.disablePageScroll();
        $('[name=subject').val('Обращение с сайта pravosvet.com');
    });
    $(modal).on('hide.bs.modal', function () {
        scrollLock.enablePageScroll();
    });
}
