jQuery(function() {
    $('.menu__burger').on('click', function(event) {
        $('.menu__burger,.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});