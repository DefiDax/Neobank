$(function(){


    $('.form__tel').mask('+38(999) 999-99-99').on('click', function () {
        if ($(this).val() === '__ (___) ___-__-__') {
            $(this).get(2).setSelectionRange(0, 0);
        }
    });


    $('.btn-reg, .btn-link, .footer__logo').on('click', function (e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
      });

    $('.tabs__button_mobile').on('click', function(){
        $('.tabs__desctop').addClass('disabled');
        $('.tabs__mobile').removeClass('disabled');
    });
    $('.tabs__button_desctop').on('click', function(){
        $('.tabs__mobile').addClass('disabled');
        $('.tabs__desctop').removeClass('disabled');
    });

    $('.tabs__button_desctop').on('click', function(){
        $('.tabs__button_desctop').addClass('active_btn');
        $('.tabs__button_mobile').removeClass('active_btn');
    });
    $('.tabs__button_mobile').on('click', function(){
        $('.tabs__button_mobile').addClass('active_btn');
        $('.tabs__button_desctop').removeClass('active_btn');
    });

    $('.lang__select').on('click', function(){
        $(".lang__dropdown").toggleClass('disabled');
    });

});

